import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

const StyledPublicNav = styled.div`
  & a:first-child {
    margin: 0 10px 0 0;
  }
`;

const PublicNav = () => (
  <StyledPublicNav>
    <Button anchor to="/login">Log In</Button>
    <Button anchor color="blue" to="/register">Sign Up</Button>
  </StyledPublicNav>
);

export default PublicNav;
