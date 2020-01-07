import React from "react";
import { SocialMediaContainer } from "../atoms/SocialIcon";
import MediaIcons from "./MediaIcons";
import { StrikedSpan } from "../atoms/Span";

const SocialMedia = () => (
  <SocialMediaContainer>
    <StrikedSpan>OR LOGIN WITH</StrikedSpan>
    <MediaIcons />
  </SocialMediaContainer>
);

export default SocialMedia;
