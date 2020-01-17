import styled from 'styled-components';
import {media} from "../index";

export const ColumnBody = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* flex-wrap: wrap; */
  margin: 40px 0;

  @media ${media.tablet} {
    flex-direction: column;
  }

  @media ${media.mobile} {
    flex-direction: column;
  }
`;