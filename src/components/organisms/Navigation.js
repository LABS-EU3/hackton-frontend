import React from "react";
import styled from "styled-components";

import * as Colors from "../variables/colors";

import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";
import Button from "../atoms/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${Colors.Solid.BORDER_GREY};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
`;

const N = styled.div`
  width: 1152px;
  max-width: 1152px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 45px;
`;

const Navigation = () => (
  <Container>
    <N>
      <Logo />
      <nav>
        <NavLink to="#">Home</NavLink>
        <NavLink to="#">Features</NavLink>
        <NavLink to="#">About Us</NavLink>
        <Button>Log In</Button>
        <Button color={Colors.Gradient.BLUE}>Sign Up</Button>
      </nav>
    </N>
  </Container>
);

export default Navigation;
