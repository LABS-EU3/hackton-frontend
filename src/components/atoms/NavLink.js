import React from 'react';
import styled from 'styled-components';
import * as Fonts from '../variables/fonts';
import * as Colors from '../variables/colors';

const Link = styled.a`
  ${Fonts.type.ROBOTO_MONO};
  color: ${Colors.Solid.BLACK};
  font-weight: 500;
  text-decoration: none;
  padding: 10px;
`;

const NavLink = ({ children, to }) => {
  return <Link href={to}>{children}</Link>;
};

export default NavLink;