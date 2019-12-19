import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    <Link to="/login"><Btn>Log In</Btn></Link>
    <Link to="/register"><ButtonGradientBlue>Sign Up</ButtonGradientBlue></Link>
  </div>
);

export default PublicNav;
