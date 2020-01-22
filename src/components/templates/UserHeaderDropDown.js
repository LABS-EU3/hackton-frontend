import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const options = [
  { key: 1, text: "Edit Profile", value: 1, icon: "edit", as: Link, to: '/dashboard/profile/edit' },
  { key: 2, text: "Logout", value: 2, icon: "logout", as: Link, to: '/dashboard' }
];

export const UserHeaderDropDown = () => (
  <Menu compact>
    <Dropdown text="Settings" options={options} simple item style={{ padding: '10px 20px'}} />
  </Menu>
);
