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
  margin: 0 0 0 15px;
  border-radius: 6px;
  border: 0;
  background-image: ${(props) => props.color};
  background-color: #FFFFFF;

  ${({ wide }) => wide && `
    width: 100%;
  `};

  ${({ border }) => border && `
    border-color: ${border};
  `};

  ${({ color }) => !color && `
    color: #212121;
    border: 2px solid;
  `};

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, color, wide, border }) => (
  <BTN type="button" color={color} wide={wide} border={border}>{children}</BTN>
);

export default Button;
