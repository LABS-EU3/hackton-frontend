import styled from 'styled-components';
import {media} from "../index";

export const RowBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0;

  @media ${media.tablet} {
    flex-direction:column;
  }

  @media ${media.mobile} {
    flex-direction:column;
  }
`;