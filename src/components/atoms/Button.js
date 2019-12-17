import React from 'react';
import styled from 'styled-components';
import * as Fonts from './../variables/fonts';

const BTN = styled.button`
  font-family: ${Fonts.type.ROBOTO_MONO};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: #FFFFFF;
  height: 43px;
  padding: 12px 22px;
  border-radius: 6px;
  border: 0;
  background-image: ${(props) => props.color};

  ${({ wide }) => wide && `
    width: 100%;
  `};

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, color, wide }) => (
  <BTN type="button" color={color} wide={wide}>{children}</BTN>
);

export default Button;
