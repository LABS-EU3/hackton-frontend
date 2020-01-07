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
  width: 200px;
  margin: 0 20px 10px 0;

`;

const Select = ({ ...inputProps }) => {
  return <S {...inputProps}></S>;
};

export default Select;
