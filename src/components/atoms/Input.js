import React from "react";
import styled from "styled-components";
import { type, Solid, media } from "../index";
import { Field } from "formik";

const I = styled(Field)`
  font-family: ${type.ROBOTO};
  font-size: 16px;
  font-weight: 500;
  color: ${Solid.BLACK};
  border: 1px solid ${Solid.BORDER_GREY};
  border-radius: 6px;
  padding: 10px;
  width: 180px;
  margin: 0 20px 10px 0;

  &:focus {
    transition: all 0.5s;
    box-shadow: 0 0 3px #ddd;
  }

  ${({ display }) =>
    display === "wide" &&
    `
    width: 100%;
  `};

  @media ${media.tablet} {
    width: 100%;
    margin-right: 0;
  }
`;

const Input = ({ ...inputProps }) => {
  return <I {...inputProps} />;
};

export default Input;
