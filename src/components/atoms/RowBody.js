import styled from 'styled-components';
import {media} from "../index";

export const RowBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 40px 0;

  @media ${media.tablet} {
    flex-direction: column;
  }

  @media ${media.mobile} {
    flex-direction: column;
  }
`;