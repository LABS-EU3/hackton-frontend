import React from 'react';
import styled from 'styled-components';
import { type, Solid } from '../index';

const P = styled.p`
  font-family: ${type.ROBOTO};
  color: ${Solid.BLACK};
  font-size: 15px;
  font-weight: 400;
  margin: 0 0 10px 0;
  padding: 0;
`;

const Paragraph = ({ children }) => {
  return <P>{children}</P>;
};

export default Paragraph;
