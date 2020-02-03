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
import StyledImage from '../atoms/StyledImage';
import { media } from "../index";
import ProfileImage from '../molecules/ProfileImage';
import Button from "../atoms/Button";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
`;

export const ProfileCardWide = styled(CardWide)`
  max-width: 80%;
  min-width: 60%;

  @media ${media.tablet} {
    max-width: 100%;
  }
`;

export const ImageProfile = styled.img`
	display: flex;
    width: 30%;
    border-radius: 50%;
`

export const ProfileHead = styled.div`
	display: flex;
  justify-content: space-between;
`

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
            <ProfileCardWide>
                <ProfileHead>
                    <ImageProfile src={JSON.parse(initialState.image_url? initialState.image_url[0] : null)?.avatar || profileImg} />
                    <Button color="green" anchor to='/dashboard/profile/edit' type="submit">
                        Edit profile
                    </Button>
                </ProfileHead>

                <div>
                  <H3>{initialState.fullname}</H3>
                  <P>@{initialState.username}</P>
                </div>

              {/* <Paragraph>
                <BoldSpan>Description:</BoldSpan>
                {description}
              </Paragraph>

              <Separator />

              <Details>
                <div>
                  <Paragraph>
                    <BoldSpan>Event starts:</BoldSpan>
                    {formattedStartDate}
                  </Paragraph>
                </div>

                <div>
                  <Paragraph>
                    <BoldSpan>Event ends:</BoldSpan>
                    {formattedEndDate}
                  </Paragraph>
                </div>
              </Details>

              <Separator />

              <Details>
                <div>
                  <Paragraph>
                    <BoldSpan>Location:</BoldSpan>
                    {location}
                  </Paragraph>
                </div>
              </Details>

              <Separator />

              <Paragraph>
                <BoldSpan>Guidelines:</BoldSpan>
                {guidelines}
              </Paragraph>
              <Separator />
              <Paragraph>
                <BoldSpan>Rubrics:</BoldSpan>
                {guidelines}
              </Paragraph>
              <Separator />
               */}
              
            </ProfileCardWide>
            
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>

    );
}