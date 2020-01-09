import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "../atoms/Card";
import { H4 } from "../atoms/Heading";
import { LetterIcon } from "../atoms/Icon";
import { Paragraph } from "../atoms/Paragraph";
import CardFooter from "./CardFooter";

const StyledCardLink = styled(Link)`
  text-decoration: none;
  transition: all 0.5s;

  &:hover > div {
    transition: all 0.5s;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
  }
`;

const EventCard = ({
  events: { id, event_title, event_description, start_date }
}) => {
  const letter = event_title && event_title[0];
  const excerpt = event_description.substr(0, 100) + "...";

  // Date formatting
  const date = start_date.split("T")[0];
  const dateArr = date.split("-");
  const formattedDate = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];

  return (
    <StyledCardLink to={`/dashboard/event/${id}`}>
      <Card>
        <LetterIcon>{letter}</LetterIcon>
        <H4>{event_title}</H4>
        <Paragraph>{excerpt}</Paragraph>
        <CardFooter start_date={formattedDate} />
      </Card>
    </StyledCardLink>
  );
};

export default EventCard;
