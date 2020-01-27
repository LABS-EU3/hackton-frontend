import styled from "styled-components";
import { Solid } from "../index";

export const RowHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Solid.BORDER_GREY};
  padding: 0 0 10px 0;
  margin: 0 0 40px 0;
  width: 100%;
`;
