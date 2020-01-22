import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { type, smallFontSize, Gradient, Solid, media } from "../index";

const options = [
  {
    key: 1,
    text: "Edit Profile",
    value: 1,
    icon: "edit",
    as: Link,
    to: "/dashboard/profile/edit"
  },
  {
    key: 2,
    text: "Logout",
    value: 2,
    icon: "logout",
    as: Link,
    to: "/dashboard"
  }
];

const StyledButton = styled.button`
 
  padding: 2px 5px;
  margin: 0;
  border-radius: 6px;
  font-family: ${type.ROBOTO_MONO};
  font-size: 15px;
  color: ${Solid.WHITE};
  background: ${Gradient.BLUE};
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }

  @media ${media.tablet} {
    padding: 12px;
  }

  @media ${media.mobile} {
    padding: 10px;
  }
`;

export const UserHeaderDropDown = () => (
//   <Menu compact>
    <StyledButton>
      <Dropdown
        text="Profile"
        options={options}
        simple
        item
        style={{ padding: "10px 20px" }}
      />
    </StyledButton>
   /* </Menu> */
);
