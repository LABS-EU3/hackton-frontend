import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import queryString from "query-string";

import Container from "../atoms/Container";
import { H1 } from "../atoms/Heading";
import { Paragraph } from "../atoms/Paragraph";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { ErrorSpan } from "../atoms/Span";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../../store/user/actions";
import SocialMedia from "../molecules/SocialMedia";
import { type, smallFontSize } from "../index";
import { socialAuthLoad, verifyEmail } from "../../store/user/actions";

const StyledAnchor = styled(Link)`
  display: block;
  margin: 20px 0 0 0;
  font-family: ${type.ROBOTO};
  font-size: ${smallFontSize};
  font-weight: 500;
  color: #245ea4;
  text-decoration: none;
  text-transform: none;
  text-align: center;
  &:hover {
    color: #1e77b4;
  }
`;

const CustomForm = ({ ctaText, formHeader, formParagraph }) => {
  const dispatch = useDispatch();
  const { search, state } = useLocation();
  const { team, role, google, github, verified, ref } = queryString.parse(search);
  const { token } = useSelector(state => state.currentUser);

  useEffect(() => {
    if (google || github) {
      dispatch(socialAuthLoad());
    }
    if (verified) {
      dispatch(verifyEmail());
    }
  }, [google, github, verified, dispatch]);

  const handleSubmit = values => {
    const { email, password } = values;
    if (ctaText.toLowerCase() === "log in") {
      dispatch(login(email, password));
      toast.success("🦄 Logging you in!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      dispatch(register(email, password, role, team));
      toast.success(" 🚀 A moment while we record your details!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Please use a valid email address.")
      .required("Email address is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters long.")
  });

  if (token) {
    return <Redirect to={state?.from || ref || '/dashboard'} />;
  }

  return (
    <Container>
      <H1>{formHeader}</H1>

      <Paragraph>{formParagraph}</Paragraph>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              display="wide"
              type="text"
              name="email"
              placeholder="Email address"
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <ErrorSpan>
              <ErrorMessage name="email" />
            </ErrorSpan>
            <Input
              display="wide"
              type="password"
              name="password"
              placeholder="Password"
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <ErrorSpan>
              <ErrorMessage name="password" />
            </ErrorSpan>

            <Button type="submit" size="wide" color="blue">
              {ctaText}
            </Button>
              {ctaText.toLowerCase() === "log in" && (
                <StyledAnchor to="/forgotpassword">
                  Forgot password?
                </StyledAnchor>
              )}
          </Form>
        )}
      </Formik>

      <SocialMedia></SocialMedia>
    </Container>
  );
};

export default CustomForm;
