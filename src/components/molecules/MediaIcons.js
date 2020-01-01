import React from "react";
import { Social } from "../atoms/SocialIcon";

const MediaIcons = () => {
  return (
    <Social>
      
      <a rel="me" href="https://hackton-staging.herokuapp.com/api/auth/github" title="github">
        <i className="fab fa-github" />
      </a>
      <a rel="me" href="https://hackton-staging.herokuapp.com/api/auth/google" title="google">
        <i className="fab fa-google" />
      </a>
      
    </Social>
  );
};

export default MediaIcons;
