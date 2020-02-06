import React from "react";
import styled from "styled-components";
import { Field } from "formik";
import { type, Solid } from "../index";

const I = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ wide }) =>
    wide &&
    `
    width: 100%;
  `};
  textarea {
    font-family: ${type.ROBOTO};
    font-size: 16px;
    font-weight: 500;
    color: ${Solid.BLACK};
    border: 1px solid ${Solid.BORDER_GREY};
    border-radius: 6px;
    padding: 10px;
    margin: 0 0 10px 0;
    min-height: 100px;

    &:focus {
      transition: all 0.5s;
      box-shadow: 0 0 3px #ddd;
      outline: 0;
    }

    ${({ wide }) =>
      wide &&
      `
    width: 100%;
  `};
  }
`;

const TextArea = ({ wide, ...inputProps }) => {
  return (
    <I wide>
      <Field {...inputProps} />
    </I>
  );
};

export default TextArea;
