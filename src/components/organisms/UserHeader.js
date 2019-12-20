import React from 'react';

import WideHeader from '../atoms/WideHeader';
import HeaderContainer from '../atoms/HeaderContainer';
import Logo from '../atoms/Logo';
import Profile from '../molecules/Profile';


const Header = ({
  user
}) => (
  <WideHeader>
    <HeaderContainer>
      <Logo />
      <Profile user={user}/>
    </HeaderContainer>
  </WideHeader>
);

export default Header;
