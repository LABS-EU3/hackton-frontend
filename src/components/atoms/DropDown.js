import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetUser } from "../../store/user/actions";
import { Solid, type, Gradient } from "../index";

export const UL = styled.ul`
  position: relative;
  top: 40px;
  right: -25px;
  padding: 5px;
  list-style: none;
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border-radius: 6px;
  transition: 0.3s;
  li {
    text-align: center;
    font-size: 12px;
    a, span {
      font-weight: bold;
      font-size: 15px;
      font-family: ${type.ROBOTO};
      padding: 15px 20px;
      text-decoration: none;
      color: ${Solid.DARK_GREY};
      display: block;
      
      &:hover {
        background: ${Gradient.BLUE};
        color: ${Solid.WHITE};
        transition: all 0.3s;
      }
    }
  }
`;

export const Dropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogOut = () => {
    dispatch(resetUser(history));
  };
  return (
    <UL>
      <li>
        <Link to="/dashboard/profile/edit">Settings</Link>
      </li>
      <li>
        <span onClick={handleLogOut}>LogOut</span>
      </li>
    </UL>
  );
};
