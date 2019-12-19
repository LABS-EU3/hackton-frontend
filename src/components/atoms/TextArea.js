import React from "react";
import styled from "styled-components";
import * as Fonts from "../variables/fonts";
import * as Colors from "../variables/colors";

const I = styled.textarea`
  ${Fonts.type.ROBOTO_MONO};
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.Solid.BLACK};
  border: 1px solid ${Colors.Solid.BORDER_GREY};
  border-radius: 6px;
  padding: 10px;
  margin: 0 0 10px 0;
  min-height: 150px;

  ${({ wide }) =>
    wide &&
    `
    width: 100%;
  `};
`;

const TextArea = ({ type, placeholder, wide, ...inputProps }) => {
  return (
    <I type={type} placeholder={placeholder} wide={wide} {...inputProps} />
  );
};

export default TextArea;
