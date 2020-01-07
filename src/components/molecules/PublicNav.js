import React from "react";
import styled from "styled-components";
import { BlueLinkButton, LinkButton } from "../atoms/Button";

const LoginBTN = styled(LinkButton)`
  margin: 0 10px 0 10px;
`;

const PublicNav = () => (
  <div>
    <LoginBTN to="/login">Log In</LoginBTN>
    <BlueLinkButton to="/register">Sign Up</BlueLinkButton>
  </div>
);

export default PublicNav;
