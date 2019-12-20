import styled from "styled-components";
import { Solid } from '../index';

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
`;

export const CardWide = styled(Card)`
  width: 100%;
  padding: 40px;
  height: auto;

  & div {
    margin: 20px;
  }
`;