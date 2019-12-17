import React from "react";
import styled from "styled-components";

const C = styled.div`
  width: 1152px;
  max-width: 1152px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: red;
  padding: 0 45px;
`;

const FooterContainer = ({ children }) => (
  <C>{children}</C>
);

export default FooterContainer;
