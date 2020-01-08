import styled from "styled-components";
import { media } from '../index';

const HeaderContainer = styled.div`
  width: 1152px;
  max-width: 1152px;
  height: 90px;
  padding: 0 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${media.tablet} {
    padding: 0 20px;
    height: 80px;
    max-width: 768px;
  }

  @media ${media.mobile} {
    padding: 0 15px;
    height: 60px;
    width: 335px;
  }
`;

export default HeaderContainer;
