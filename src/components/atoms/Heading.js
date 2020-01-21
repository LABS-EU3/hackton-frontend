import styled from 'styled-components';
import { type, Solid } from '../index';

export const H1 = styled.h1`
  font-family: ${type.ROBOTO};
  color: ${Solid.BLACK};
  font-size: 32px;
  font-weight: 700;
  white-space: nowrap;
  margin: 0 0 10px 0;
  padding: 0;
`;

export const H2 = styled.h2`
  font-family: ${type.ROBOTO};
  color: ${Solid.BLACK};
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 10px 0;
  padding: 0;
`;

export const H3 = styled.h3`
  font-family: ${type.ROBOTO};
  color: ${Solid.BLACK};
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 10px 0;
  padding: 0;
`;

export const H4 = styled.h4`
  font-family: ${type.ROBOTO};
  color: ${Solid.BLACK};
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
  padding: 0;
`;