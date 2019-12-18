import React from "react";
import styled from "styled-components";

const C = styled.div`
  width: 1062px;
  max-width: 1062px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 60px 45px;
`;

const BodyContainer = ({ children }) => (
  <C>{children}</C>
);

export default BodyContainer;
