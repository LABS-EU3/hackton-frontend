import styled from "styled-components";
import { media } from "../index";
import image from "./../../assets/Hackton-logo.png";

const Logo = styled.img.attrs({
  alt: "Hackton - Organise hackathons",
  src: image
})`
  height: 43px;

  @media ${media.tablet} {
    height: 35px;
  }

  @media ${media.mobile} {
    height: 30px;
  }
`;

export default Logo;
