import styled from "styled-components";
import { media, Solid } from '../index';

const WideFooter = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${Solid.BORDER_GREY};
  background-color: ${Solid.GREY};

  @media ${media.mobile} {
    min-width: 335px;
  }
`;

export default WideFooter;
