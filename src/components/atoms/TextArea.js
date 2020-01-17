import React from "react";
import styled from "styled-components";
import { Field } from "formik";

import * as Fonts from "../variables/fonts";
import * as Colors from "../variables/colors";

const I = styled.div`
display: flex;
justify-content: center;
align-items: center;
${({ wide }) =>
    wide &&
    `
    width: 100%;
  `};
textarea{
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
