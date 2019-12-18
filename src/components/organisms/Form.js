import React, { useState } from "react";

import Container from "../atoms/Container";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Input from "../atoms/Input";
import { ButtonGradientBlueWide } from "../atoms/Button";
import { useDispatch } from "react-redux";
import { register, login } from "../../store/user/actions";

const Form = ({ ctaText, formHeader, formParagraph }) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { email, password } = values;

  const action = e => {
    e.preventDefault();

    if (ctaText.toLowerCase() === "log in") {
      dispatch(login(email, password));
    } else {
      dispatch(register(email, password));
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
      <Heading>{formHeader}</Heading>

      <Paragraph>{formParagraph}</Paragraph>

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
    </Container>
  );
};

export default Form;
