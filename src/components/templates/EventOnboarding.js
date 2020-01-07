import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import EventCard from "../molecules/EventCard";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { ButtonGradientGreen } from "../atoms/Button";
import { useSelector } from "react-redux";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  align-items: start;
`;

const EventOnboarding = ({ user }) => {
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const userEvents = events.filter(event => event.creator_id === userId);
  const globalEvents = events.filter(event => event.creator_id !== userId);
  return (
    <div>
      <UserHeader user={user} />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>My hackathons</H3>
            <Link to="/dashboard/new">
              <ButtonGradientGreen>Create New</ButtonGradientGreen>
            </Link>
          </RowHead>

          <RowBody>
            {/* <EventCard
              title="Hackton Games"
              description="Excerpt of the hackathon description, not ment to be very long..."
              startDate="16, Aug, 2020"
            /> */}
            {userEvents
              .map(event => (
                <EventCard
                  {...{
                    title: event.event_title,
                    description: event.event_description,
                    startDate: event.start_date
                  }}
                />
              ))
              .filter((card, idx) => idx <= 2)}
          </RowBody>

          <RowHead>
            <H3>Global hackathons</H3>
          </RowHead>

          <RowBody>
            {globalEvents
              .map(event => (
                <EventCard
                  {...{
                    title: event.event_title,
                    description: event.event_description,
                    startDate: event.start_date
                  }}
                />
              ))
              .filter((card, idx) => idx <= 2)}
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default EventOnboarding;
