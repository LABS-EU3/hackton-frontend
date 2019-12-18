import styled from 'styled-components';
import { Solid } from '../index';

const Container = styled.div`
  max-width: 380px;
  padding: 60px 40px;
  border: 1px solid ${Solid.BORDER_GREY};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

export default Container;
