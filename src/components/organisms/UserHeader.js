import React from "react";
import { Link } from "react-router-dom";
import WideHeader from "../atoms/WideHeader";
import HeaderContainer from "../atoms/HeaderContainer";
import Logo from "../atoms/Logo";
import { ProfileImg } from "../atoms/ProfileImg";

const Header = ({ user }) => {
  const initial = user.charAt(0).toUpperCase();
  return (
    <WideHeader>
      <HeaderContainer>
        <Link to="/dashboard">
          <Logo />
        </Link>
        <ProfileImg>{initial}</ProfileImg>
      </HeaderContainer>
    </WideHeader>
  );
};

export default Header;
