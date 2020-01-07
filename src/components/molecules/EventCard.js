import React from 'react';

import { Card } from '../atoms/Card';
import { H4 } from '../atoms/Heading';
import { LetterIcon } from '../atoms/Icon';
import { Paragraph } from '../atoms/Paragraph';
import CardFooter from './CardFooter';

const EventCard = ({
  title,
  description,
  startDate
}) => {
  const letter = title && title.charAt(0);
  const excerpt = description.substr(0, 100) + "...";
  
  // Date formatting
  const date = startDate.split("T")[0];
  const dateArr = date.split("-");
  const formattedDate = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];
  
  return (
    <Card>
      <LetterIcon>{letter}</LetterIcon>
      <H4>{title}</H4>
      <Paragraph>{excerpt}</Paragraph>
      <CardFooter startDate={formattedDate}/>
    </Card>
  );
};

export default EventCard;