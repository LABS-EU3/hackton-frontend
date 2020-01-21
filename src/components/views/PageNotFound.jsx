import React from "react";
import {NavLink} from "react-router-dom";

import { Header, Footer } from "../organisms/index";
import BodyContainer from "../atoms/BodyContainer";
import { H2, H3 } from "../atoms/Heading";
import styled from "styled-components";
import notFound_icon from "../../assets/notFound_icon.svg";

const PageNotFound = () => {
  const BodyColumn = styled(BodyContainer)`
    flex-direction: column;
    align-items: start;
    height: 100%;
    width: 50%;
    padding:0;
    img {
      width: 100%;
      height:100%;
    }
  `;
   const BodyRow = styled(BodyContainer)`
   flex-direction: row;
   justify-content: space-between;
   height: 100%;
   width: 100%;
   max-width: 100vw;
 `;

const Header2 = styled(H2)`
  font-size: 70px;
  `;

  return (
    <div>
      <Header />
      <BodyRow>
        <BodyColumn>
          <Header2>Ooops!</Header2>
          <H3>We can't seem to find the page  you are looking for</H3>
          <h3>Error code: 404</h3>

          <NavLink to="/dashboard" style={{textDecoration:"none", color:"lightcoral" , paddingTop:"10px"}}>Home</NavLink>
        </BodyColumn>
        <BodyColumn>
          <img src={notFound_icon} alt="404 icon" />
        </BodyColumn>
      </BodyRow>
      <Footer />
    </div>
  );
};

export default PageNotFound;
