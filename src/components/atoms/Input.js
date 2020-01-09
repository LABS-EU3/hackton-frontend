import React from "react";
import styled from "styled-components";
import * as Fonts from "../variables/fonts";
import * as Colors from "../variables/colors";
import { media } from "../index";
import { Field } from "formik";

const I = styled(Field)`
  ${Fonts.type.ROBOTO_MONO};
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.Solid.BLACK};
  border: 1px solid ${Colors.Solid.BORDER_GREY};
  border-radius: 6px;
  padding: 10px;
  width: 180px;
  margin: 0 20px 10px 0;

  ${({ wide }) =>
    wide &&
    `
    width: 100%;
  `};

  @media ${media.tablet} {
    width: 100%;
    margin-right: 0;
  }
`;

const Input = ({ type, placeholder, wide, ...inputProps }) => {
  return (
    <I type={type} placeholder={placeholder} wide={wide} {...inputProps} />
  );
};

export default Input;
