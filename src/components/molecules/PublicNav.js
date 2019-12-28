import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TopNavAnchor } from '../atoms/Anchor';
import { Button, BlueLinkButton, LinkButton } from '../atoms/Button';

const LoginBTN = styled(LinkButton)`
 margin: 0 10px 0 10px;
`;

const PublicNav = () => (
  <div>
    <TopNavAnchor href="#">Home</TopNavAnchor>
    <TopNavAnchor href="#">Features</TopNavAnchor>
    <TopNavAnchor href="#">About Us</TopNavAnchor>
    {/* <Link to="/login"><Btn>Log In</Btn></Link> */}
    <LoginBTN to="/login">Log In</LoginBTN>
    <BlueLinkButton to="/register">Sign Up</BlueLinkButton>
  </div>
);

export default PublicNav;
