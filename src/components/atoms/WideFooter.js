import React from "react";
import styled from "styled-components";

import * as Colors from "../variables/colors";

const C = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${Colors.Solid.BORDER_GREY};
  background-color: ${Colors.Solid.GREY};
`;

const WideFooter = ({ children }) => (
  <C>{children}</C>
);

export default WideFooter;
