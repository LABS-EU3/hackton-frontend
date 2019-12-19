import React from "react";
import styled from 'styled-components';
import UserHeader from '../organisms/UserHeader';
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import EventCard from '../molecules/EventCard';
import { H3 } from '../atoms/Heading';
import { RowHead } from '../atoms/RowHead';
import { RowBody } from '../atoms/RowBody';
import { ButtonGradientGreen } from '../atoms/Button';

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: space-around;
`;

const Onboarding = ({
  user
}) => {
  return (
    <div>
      <UserHeader user={user} />
        <WideBody>
          <BodyContainerColumn>
            
            <RowHead>
              <H3>My hackathons</H3>
              <ButtonGradientGreen>Create New</ButtonGradientGreen>
            </RowHead>

            <RowBody>
              <EventCard 
                title="Hackton Games" 
                description="Excerpt of the hackathon description, not ment to be very long..." 
                startDate="16, Aug, 2020"
              />
            </RowBody>
            
            <RowHead>
              <H3>Global hackathons</H3>
            </RowHead>

            <RowBody>

            </RowBody>

          </BodyContainerColumn>
        </WideBody>
      <Footer />
    </div>
  );
};

export default Onboarding;
