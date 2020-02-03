import React from 'react';
import styled from "styled-components";
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import Nav from "../molecules/Nav";
import BodyContainer from "../atoms/BodyContainer";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import profileImg from "../../assets/profile-image.png";
import ProfileImage from '../molecules/ProfileImage';

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
`;

export default function UserProfile ({initialState}) {
    return (
        <div>
      <UserHeader />
      <WideBody>
        <Nav />
        <BodyContainerColumn>
          <RowHead>
            <H3>Your Profile</H3>
          </RowHead>

          <RowBody>
                        
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>

    );
}