import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../atoms/Button";

const StyledPublicNav = styled.div`
  & a:first-child {
    margin: 0 10px 0 0;
  }
`;

const PublicNav = () => {
  const { state } = useLocation();

  return (
    <StyledPublicNav>
      <Button anchor to={state?.from ? `/login?ref=${state?.from}` : `/login`}>Log In</Button>
      <Button anchor color="blue" to={state?.from ? `/register?ref=${state?.from}` : `/register`}>Sign Up</Button>
    </StyledPublicNav>
  );
}

export default PublicNav;
