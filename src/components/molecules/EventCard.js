import React from 'react';

import { Card } from '../atoms/Card';
import { H4 } from '../atoms/Heading';
import { LetterIcon } from '../atoms/Icon';
import Paragraph from '../atoms/Paragraph';
import CardFooter from './CardFooter';

const EventCard = ({
  title,
  description,
  startDate
}) => {
  const letter = title && title.charAt(0);

  return (
    <Card>
      <LetterIcon>{letter}</LetterIcon>
      <H4>{title}</H4>
      <Paragraph>{description}</Paragraph>
      <CardFooter startDate={startDate}/>
    </Card>
  );
};

export default EventCard;