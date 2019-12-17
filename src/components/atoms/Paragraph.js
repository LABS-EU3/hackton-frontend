import React from 'react';
import styled from 'styled-components';
import * as Fonts from '../variables/fonts';
import * as Colors from '../variables/colors';

const P = styled.p`
  ${Fonts.type.ROBOTO_MONO};
  color: ${Colors.Solid.BLACK};
  font-size: 15px;
  font-weight: 400;
  margin: 0 0 10px 0;
  padding: 0;
`;

const Paragraph = ({ children }) => {
  return <P>{children}</P>;
};

export default Paragraph;
