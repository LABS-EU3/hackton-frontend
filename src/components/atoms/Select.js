import React from "react";
import styled from "styled-components";
import * as Fonts from "../variables/fonts";
import * as Colors from "../variables/colors";
import { media } from "../index";

const S = styled.select`
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
`;

const Select = ({ type, placeholder, wide, ...inputProps }) => {
      return (
    <S type={type} placeholder={placeholder} wide={wide} {...inputProps} />
  );

};

export default Select;