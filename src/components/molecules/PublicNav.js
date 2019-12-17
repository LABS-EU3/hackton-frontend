import React from 'react';
import styled from 'styled-components';

import * as Colors from '../variables/colors';

import NavLink from '../atoms/NavLink';
import Button from '../atoms/Button';

const PublicNav = () => (
  <div>
    <NavLink to="#">Home</NavLink>
    <NavLink to="#">Features</NavLink>
    <NavLink to="#">About Us</NavLink>
    <Button>Log In</Button>
    <Button color={Colors.Gradient.BLUE}>Sign Up</Button>
  </div>
);

export default PublicNav;
