import styled from "styled-components";
import { Link } from "react-router-dom";
import { type, smallFontSize, Gradient, Solid, media } from "../index";

export const Button = styled.button`
  display: inline-block;
  padding: 12px 22px;
  margin: 0;
  border-radius: 6px;
  border: 0;
  font-family: ${type.ROBOTO_MONO};
  font-size: ${smallFontSize};
  font-weight: 500;
  color: ${Solid.BLACK};
  border: 2px solid ${Solid.BLACK};
  background: ${Solid.WHITE};

  &:hover {
    cursor: pointer;
  }

  @media ${media.tablet} {
    padding: 12px;
  }

  @media ${media.mobile} {
    padding: 10px;
  }
`;

export const ButtonGradientBlue = styled(Button)`
  background: ${Gradient.BLUE};
  color: ${Solid.WHITE};
  padding: 14px 22px;
  border: 0;
`;

export const ButtonGradientGreen = styled(ButtonGradientBlue)`
  background: ${Gradient.GREEN};

  @media ${media.tablet} {
    margin: 14px;
  }

  @media ${media.mobile} {
    margin: 14px;
  }
`;

export const ButtonGradientGrey = styled(ButtonGradientBlue)`
  background: ${Gradient.GREY};
`;

export const ButtonGradientBlueWide = styled(ButtonGradientBlue)`
  width: 100%;
`;

export const LinkButton = styled(Link)`
  display: inline-block;
  padding: 12px 22px;
  margin: 0;
  border-radius: 6px;
  border: 0;
  font-family: ${type.ROBOTO_MONO};
  font-size: ${smallFontSize};
  font-weight: 500;
  color: ${Solid.BLACK};
  border: 2px solid ${Solid.BLACK};
  background: ${Solid.WHITE};
  outline: none;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }

  @media ${media.tablet} {
    padding: 12px;
  }

  @media ${media.mobile} {
    padding: 10px;
  }
`;

export const BlueLinkButton = styled(LinkButton)`
  background: ${Gradient.BLUE};
  color: ${Solid.WHITE};
  padding: 14px 22px;
  border: 0;
`;
