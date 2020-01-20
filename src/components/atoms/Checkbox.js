import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const StyledCheckboxField = styled(Field)`
  width: 20px;
  height: 20px;
  margin: 0 20px 10px 0;
`;

function Checkbox(props) {
  return (
    <StyledCheckboxField type="checkbox" name={props.name} value={props.value} id={props.value}/>
  );
}

export default Checkbox;