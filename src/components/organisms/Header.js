import React from "react";

import WideHeader from "../atoms/WideHeader";
import HeaderContainer from "../atoms/HeaderContainer";
import Logo from "../atoms/Logo";
import PublicNav from "../molecules/PublicNav";


const Header = () => (
  <WideHeader>
    <HeaderContainer>
      <Logo />
      <PublicNav />
    </HeaderContainer>
  </WideHeader>
);

export default Header;
