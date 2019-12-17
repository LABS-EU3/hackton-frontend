import React from "react";
import styled from "styled-components";

const C = styled.div`
  width: 1152px;
  max-width: 1152px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 45px;
`;

const HeaderContainer = ({ children }) => (
  <C>{children}</C>
);

export default HeaderContainer;
