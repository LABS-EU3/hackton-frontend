import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  & div > [type=date], div > select {
    min-width: 250px;
  }
`;