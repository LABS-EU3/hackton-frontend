import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Solid, media, Gradient } from "../index";
import { ReactComponent as DashboardIcon } from "./../../assets/link-dashboard-icon.svg";
import { ReactComponent as EventsIcon } from "./../../assets/link-events-icon.svg";
import { ReactComponent as ProfileIcon } from "./../../assets/link-profile-icon.svg";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    svg: DashboardIcon
  },
  {
    title: "My hackathons",
    url: "/dashboard/myhackathons",
    svg: EventsIcon
  },
  {
    title: "Profile",
    url: "/dashboard/profile/edit",
    svg: ProfileIcon
  }
];

const VerticalNav = () => {
  return (
    <StyledVerticalNav>
      {items.map(({ title, url, svg: SvgIcon }, i) => {
        return (
          <StyledLink to={url} key={title} activeClassName="current">
            <SvgIcon />
            {title}
          </StyledLink>
        );
      })}
    </StyledVerticalNav>
  );
};

export default VerticalNav;

const StyledVerticalNav = styled.div`
  border-right: 1px solid #dadada;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 350px;
  transition: all 0.3s;

  @media ${media.tablet} {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  background-size: 20px;
  color: ${Solid.DARK_GREY};
  font-weight: 500;
  text-decoration: none;
  padding: 15px 20px;
  transition: all 0.3s;
  margin: 0 0 10px 0;
  white-space: nowrap;

  svg {
    margin: 0 15px 0 0;
    width: 20px;
  }

  svg path {
    fill: #9d9d9d;
  }

  &:hover,
  &.current {
    background-color: #efefef;
    border-radius: 6px;
    color: #484848;

    svg path {
      fill: #868686;
    }
  }
`;
