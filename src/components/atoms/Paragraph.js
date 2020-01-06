import styled from 'styled-components';
import { type, Solid } from '../index';

const Paragraph = styled.p`
  font-family: ${type.ROBOTO};
  color: ${Solid.BLACK};
  font-size: 15px;
  font-weight: 400;
  margin: 0 0 20px 0;
  padding: 0;
`;

export default Paragraph;
