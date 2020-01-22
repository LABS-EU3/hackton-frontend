import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import WideHeader from "../atoms/WideHeader";
import HeaderContainer from "../atoms/HeaderContainer";
import Logo from "../atoms/Logo";
import { ProfileImg } from "../atoms/ProfileImg";
import { UserHeaderDropDown } from "../templates/UserHeaderDropDown";

const UserHeader = () => {
  const { email: user } = useSelector(state => state.currentUser);
  const initial = user[0].toUpperCase();

  return (
    <WideHeader>
      <HeaderContainer>
        <Link to="/dashboard">
          <Logo />
        </Link>
        <ProfileImg>{initial}</ProfileImg>
        <UserHeaderDropDown />
      </HeaderContainer>
    </WideHeader>
  );
};

export default UserHeader;
