import React from 'react';
import styled from 'styled-components';

import { TopNavAnchor } from '../atoms/Anchor';
import { Button, ButtonGradientBlue } from '../atoms/Button';

const Btn = styled(Button)`
  margin: 0 10px 0 10px;
`;

const PublicNav = () => (
  <div>
    <TopNavAnchor href="#">Home</TopNavAnchor>
    <TopNavAnchor href="#">Features</TopNavAnchor>
    <TopNavAnchor href="#">About Us</TopNavAnchor>
    <Btn>Log In</Btn>
    <ButtonGradientBlue>Sign Up</ButtonGradientBlue>
  </div>
);

export default PublicNav;
