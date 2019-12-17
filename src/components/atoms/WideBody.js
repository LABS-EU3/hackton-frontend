import React from "react";
import styled from "styled-components";

const C = styled.div`
  display: flex;
  justify-content: center;
`;

const WideBody = ({ children }) => (
  <C>{children}</C>
);

export default WideBody;
