import React from "react";
import styled from "styled-components";
import jwtDecode from 'jwt-decode';
import { Link } from "react-router-dom";
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import EventCard from "../molecules/EventCard";
import { H3, H4 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { ButtonGradientGreen } from "../atoms/Button";
import { useSelector } from "react-redux";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  align-items: start;
`;

// @TODO styling events card
const EventOnboarding = ({ user }) => {
  const events = useSelector(state => state.events.data);
  const { token, userId } = useSelector(state => state.currentUser);
  const { subject } = jwtDecode(token);
  const userEvents = events.filter(event => event.creator_id === subject);
  const globalEvents = events.filter(event => event.creator_id !== subject);
  
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
            {userEvents
              .filter((_, idx) => idx <= 2)
              .map(event => (
                <EventCard
                  key={event.event_title}
                  {...{
                    title: event.event_title,
                    description: event.event_description,
                    startDate: event.start_date
                  }}
                />
              ))}
          </RowBody>

          <RowHead>
            <H3>Global hackathons</H3>
          </RowHead>

          <RowBody>
            {globalEvents
              .filter((_, idx) => idx <= 2)
              .map(event => (
                <EventCard
                  key={event.event_title}
                  {...{
                    title: event.event_title,
                    description: event.event_description,
                    startDate: event.start_date
                  }}
                />
              ))}
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default EventOnboarding;
