import styled from "styled-components";
import { Solid, media } from "../index";

export const RowHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Solid.BORDER_GREY};
  padding: 0 0 10px 0;
  width: 100%;
`;
