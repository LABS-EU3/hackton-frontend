import styled from 'styled-components';
import { type, smallFontSize, Gradient, Solid } from '../index';

export const Button = styled.button`
  display: inline-block;
  padding: 12px 22px;
  margin: 0;
  border-radius: 6px;
  border: 0;
  font-family: ${type.ROBOTO_MONO};
  font-size: ${smallFontSize};
  font-weight: 500;
  color: ${Solid.BLACK};
  border: 2px solid ${Solid.BLACK};
  background: ${Solid.WHITE};

  &:hover {
   cursor: pointer; 
  }
`;

export const ButtonGradientBlue = styled(Button)`
  background: ${Gradient.BLUE};
  color: ${Solid.WHITE};
  padding: 14px 22px;
  border: 0;
`;

export const ButtonGradientBlueWide = styled(ButtonGradientBlue)`
  width: 100%;
`;
