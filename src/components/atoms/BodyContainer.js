import styled from "styled-components";
import { media } from "../index";

const BodyContainer = styled.div`
  width: 1062px;
  max-width: 1062px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 45px;

  @media ${media.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    img {
      display: none;
    }
  }

  @media ${media.mobile} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

export default BodyContainer;
