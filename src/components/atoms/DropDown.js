import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetUser } from "../../store/user/actions";
import { Spacing } from "../index";
import { Solid } from "../index";

export const UL = styled.ul`
  margin: 0px;
  margin-top: 40px;
  padding: 0px;
  list-style: none;
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  :after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -8px;
    width: 0; height: 0;
    border-bottom: 8px solid ${Solid.BLACK};
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
}
  li {
    float: right;
    width: 100px;
    height: 25px;
    cursor: pointer;
    background-color: #76b852;
    opacity: 0.8;
    line-height: 10px;
    text-align: center;
    font-size: 12px;
    padding: 6px ${Spacing.small_space};
    a {
      text-decoration: none;
      color: ${Solid.WHITE};
      display: block;
    }
    &:hover {
      background-color: #FFA500;
    }
  }
`;

export const Dropdown = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(resetUser());
  };
  return (
    <UL>
      <li>
        <Link to="/dashboard/profile/edit">Profile</Link>
      </li>
      <li onClick={handleLogOut}>LogOut</li>
    </UL>
  );
};
