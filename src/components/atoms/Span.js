import styled from "styled-components";
import { type, Solid, media } from "../index";

export const Span = styled.span`
  font-family: ${type.ROBOTO};
  font-size: 12px;
  font-weight: bold;
  color: ${Solid.DARK_GREY};
`;

export const BoldSpan = styled(Span)`
  font-size: 15px;
  color: ${Solid.BLACK};
  margin: 0 5px 0 0;
`;

export const StrikedSpan = styled(Span)`
  &::before {
    content: "";
    display: block;
    width: 100%;
    border-bottom: 1px solid ${Solid.DARK_GREY};
    position: relative;
    top: 9px;
    left: -120%;

    @media ${media.tablet} {
      width: 70%;
      left: -90%;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    border-bottom: 1px solid ${Solid.DARK_GREY};
    position: relative;
    top: -9px;
    left: 120%;

    @media ${media.tablet} {
      width: 70%;
      right: 90%;
    }
  }
`;

export const ErrorSpan = styled(Span)`
  color: #DB2824;
  margin: 0 0 10px 0;
  display: inline-block;
`;