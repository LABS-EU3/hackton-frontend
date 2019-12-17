import React from "react";
import styled from "styled-components";

import * as Colors from "../variables/colors";

const C = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${Colors.Solid.BORDER_GREY};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
`;

const WideHeader = ({ children }) => (
  <C>{children}</C>
);

export default WideHeader;
