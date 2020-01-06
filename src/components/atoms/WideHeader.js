import styled from "styled-components";
import { media, Solid } from '../index';

const WideHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${Solid.BORDER_GREY};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);

  @media ${media.mobile} {
    min-width: 335px;
  }
`;

export default WideHeader;
