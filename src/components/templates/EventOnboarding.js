import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserHeader from "../organisms/UserHeader";
import Nav from "../molecules/Nav";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import EventCard from "../molecules/EventCard";
import { H3, H4 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import Button from "../atoms/Button";
import { useSelector } from "react-redux";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  align-items: start;
`;

const EventOnboarding = () => {
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const userEvents = events.filter(event => event.creator_id === userId);
  const globalEvents = events.filter(event => event.creator_id !== userId);

  return (
    <div>
      <UserHeader />
      <WideBody>
        <Nav />
        <BodyContainerColumn>
          <RowHead>
            <H3>My hackathons</H3>
            <Link to="/dashboard/new">
              <Button color="green">Create New</Button>
            </Link>
          </RowHead>

          <RowBody spacing="start">
            {userEvents.length !== 0 ? (
              userEvents.map(event => (
                <EventCard key={event.event_title} event={event} />
              ))
            ) : (
              <H4>You haven't created any events yet. Why wait?</H4>
            )}
          </RowBody>

          <RowHead>
            <H3>Global hackathons</H3>
          </RowHead>

          <RowBody spacing="start">
            {globalEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default EventOnboarding;
