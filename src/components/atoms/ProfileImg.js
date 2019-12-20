import styled from "styled-components";
import { Solid, Gradient } from '../index';

export const ProfileImg = styled.div`
  border-radius: 50px;
  background-image: ${Gradient.BLUE};
  width: 43px;
  height: 43px;
  border: 2px solid ${Solid.BORDER_GREY};
`;