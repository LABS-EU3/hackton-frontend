import React from "react";
import PropTypes from "prop-types";
import { SocialMediaContainer } from "../atoms/SocialIcon";
import MediaIcons from "./MediaIcons";

const SocialMedia = ({ text }) => (
  <SocialMediaContainer>
    <div className="dividerContainer">
      <div className="divider">
        <hr />
      </div>
      <p>OR LOGIN WITH</p>
      <div className="divider">
        <hr />
      </div>
    </div>
    <MediaIcons />
  </SocialMediaContainer>
);

SocialMedia.propTypes = {
  text: PropTypes.string.isRequired
};

export default SocialMedia;
