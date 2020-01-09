import React from "react";
import { Link } from "react-router-dom";
import WideHeader from "../atoms/WideHeader";
import HeaderContainer from "../atoms/HeaderContainer";
import Logo from "../atoms/Logo";
import { ProfileImg } from "../atoms/ProfileImg";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

const UserHeader = () => {
  const { token } = useSelector(state => state.currentUser);
  const { email: user } = jwtDecode(token);

  const initial = user[0].toUpperCase();
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

export default UserHeader;
