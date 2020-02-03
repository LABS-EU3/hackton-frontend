import styled from "styled-components";
import { media } from "../index";

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify ? justify : "start"};
  padding: 60px 45px;

  @media ${media.tablet} {
    flex-direction: column;
    padding: 60px 20px;
    & > img {
      display: none;
    }
  }

  @media ${media.mobile} {
    flex-direction: column;
    & > img {
      display: none;
    }
  }
`;

export default BodyContainer;
