import React from "react";
import { Link } from "react-router-dom";
import WideHeader from "../atoms/WideHeader";
import HeaderContainer from "../atoms/HeaderContainer";
import Logo from "../atoms/Logo";
import Profile from "../molecules/Profile";

const Header = ({ user }) => (
  <WideHeader>
    <HeaderContainer>
      <Link to="/dashboard">
        <Logo />
      </Link>
      <Profile user={user} />
    </HeaderContainer>
  </WideHeader>
);

export default Header;
