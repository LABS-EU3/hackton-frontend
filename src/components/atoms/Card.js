import styled from "styled-components";
import { Solid, media } from '../index';

export const Card = styled.div`
  background-color: ${Solid.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 302px;
  height: 220px;
  border: 1px solid ${Solid.BORDER_GREY};
  border-radius: 6px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
`;

export const CardWide = styled(Card)`
  width: 650px;
  padding: 40px;
  height: auto;

  @media ${media.tablet} {
    width: 350px;
    padding: 20px;
  }

  @media ${media.mobile} {
    width: 250px;
  }
`;