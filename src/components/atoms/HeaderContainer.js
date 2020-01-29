import styled from "styled-components";
import { media } from '../index';

const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  padding: 0 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${media.tablet} {
    padding: 0 20px;
    height: 80px;
  }

  @media ${media.mobile} {
    padding: 0 15px;
    height: 60px;
  }
`;

export default HeaderContainer;
