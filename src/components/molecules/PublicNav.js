import React from "react";
import styled from "styled-components";
import { TopNavAnchor } from "../atoms/Anchor";
import { BlueLinkButton, LinkButton } from "../atoms/Button";

const LoginBTN = styled(LinkButton)`
  margin: 0 10px 0 10px;
`;

const PublicNav = () => (
  <div>
    {/* Commented out because we don't have any content for those pages yet. */}
    {/* <TopNavAnchor href="#">Home</TopNavAnchor>
    <TopNavAnchor href="#">Features</TopNavAnchor>
    <TopNavAnchor href="#">About Us</TopNavAnchor> */}
    <LoginBTN to="/login">Log In</LoginBTN>
    <BlueLinkButton to="/register">Sign Up</BlueLinkButton>
  </div>
);

export default PublicNav;
