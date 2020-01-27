import styled from "styled-components";
import { media } from "../index";

export const RowBody = styled.div`
  width: 100%;
  display: flex;
  ${({ direction }) =>
    direction ? `flex-direction: ${direction};` : `flex-direction: row;`}
  ${({ spacing }) => 
    spacing ? `justify-content: ${spacing};` : `justify-content: space-between;`}
  flex-wrap: wrap;
  margin: 30px 0;

  @media ${media.tablet} {
    flex-direction: row;
    ${({ justify }) => 
      justify ? `justify-content: ${justify}l` : `justify-content: center;`}
  }

  @media ${media.mobile} {
    flex-direction: row;
    ${({ justify }) => 
      justify ? `justify-content: ${justify}l` : `justify-content: center;`}
  }
`;
