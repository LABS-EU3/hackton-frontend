import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Container from "../atoms/Container";
import { H1 } from "../atoms/Heading";
import { Paragraph } from "../atoms/Paragraph";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { register, login } from "../../store/user/actions";
import SocialMedia from "../molecules/SocialMedia";

const CustomForm = ({ ctaText, formHeader, formParagraph }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = values => {
    const { email, password } = values;
    if (ctaText.toLowerCase() === "log in") {
      dispatch(login(email, password, history));
      toast.success("🦄 Logging you in!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      dispatch(register(email, password, history));
      toast.success(" 🚀 A moment while we record your details!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .required()
      .length(8)
  });

  return (
    <Container>
      <H1>{formHeader}</H1>

      <Paragraph>{formParagraph}</Paragraph>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <Input
            display="wide"
            type="text"
            name="email"
            placeholder="Email address"
          />
          <Input
            display="wide"
            type="password"
            name="password"
            placeholder="Password"
          />

          <Button type="submit" size="wide" color="blue">
            {ctaText}
          </Button>
        </Form>
      </Formik>

      <SocialMedia></SocialMedia>
    </Container>
  );
};

export default CustomForm;
