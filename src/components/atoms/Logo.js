import React from "react";
import styled from "styled-components";
import image from "./../../assets/Hackton-logo.png";

const IMG = styled.img`
  height: 43px;
`;

const Logo = () => {
  return <IMG src={image} alt="Hackton - Organise hackathons" />;
};

export default Logo;
