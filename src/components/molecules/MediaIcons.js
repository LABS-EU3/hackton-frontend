import React from "react";
import { Social } from "../atoms/SocialIcon";

const baseUrl = process.env.REACT_APP_API_URL;
const MediaIcons = () => {
  return (
    <Social>
      
      <a rel="me" href={`${baseUrl}/api/auth/github`} title="github">
        <i className="fab fa-github" />
      </a>
      <a rel="me" href={`${baseUrl}/api/auth/google`} title="google">
        <i className="fab fa-google" />
      </a>
      
    </Social>
  );
};

export default MediaIcons;
