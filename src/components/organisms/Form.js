import React, { useState } from "react";

import Container from "../atoms/Container";
import { H1 } from "../atoms/Heading";
import { Paragraph } from "../atoms/Paragraph";
import Input from "../atoms/Input";
import { ButtonGradientBlueWide } from "../atoms/Button";
import { useDispatch } from "react-redux";
import { register, login } from "../../store/user/actions";
import SocialMedia from "../molecules/SocialMedia";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";

const CustomForm = ({ ctaText, formHeader, formParagraph }) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { email, password } = values;
  const history = useHistory();

  const action = e => {
    e.preventDefault();

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

  const onInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return (
    <Container>
      <H1>{formHeader}</H1>

      <Paragraph>{formParagraph}</Paragraph>
      <Formik initialValues={{ email: "", password: "" }} onSubmit={action}>
        <Form>
          <Input
            wide
            type="text"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={onInputChange}
          />
          <Input
            wide
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onInputChange}
          />

          <ButtonGradientBlueWide onClick={action}>
            {ctaText}
          </ButtonGradientBlueWide>
        </Form>
      </Formik>

      <SocialMedia></SocialMedia>
    </Container>
  );
};

export default CustomForm;
