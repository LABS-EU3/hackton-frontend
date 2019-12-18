import React from 'react';
import styled from 'styled-components';
import * as Fonts from '../variables/fonts';
import * as Colors from '../variables/colors';

const H = styled.h1`
  ${Fonts.type.ROBOTO};
  color: ${Colors.Solid.BLACK};
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 10px 0;
  padding: 0;
`;

const Heading = ({ children }) => {
  return <H>{children}</H>;
};

export default Heading;
