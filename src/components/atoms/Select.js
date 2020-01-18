import React from "react";
import styled from "styled-components";
import { Field } from "formik";
import { media } from "../index";

import * as Fonts from "../variables/fonts";
import * as Colors from "../variables/colors";

const S = styled(Field)`
  ${Fonts.type.ROBOTO_MONO};
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.Solid.BLACK};
  border: 1px solid ${Colors.Solid.BORDER_GREY};
  border-radius: 6px;
  padding: 10px;
  width: 200px;
  margin: 0 20px 10px 0;

  @media ${media.mobile} {
    width: 80%;
    align-self: center;
  }
`;


const Select = ({ as = "select", ...inputProps }) => {
  return <S as={as} {...inputProps}></S>;
};

export default Select;
