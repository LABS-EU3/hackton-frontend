import React from 'react';

import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Input from '../atoms/Input';
import { ButtonGradientBlueWide } from '../atoms/Button';

const Form = ({ cta, formHeader, formParagraph }) => (
  <Container>
    <Heading>
      {formHeader}
    </Heading>

    <Paragraph>
      {formParagraph}
    </Paragraph>

    <Input wide type="text" placeholder="Email address" />
    <Input wide type="password" placeholder="Password" />

    <ButtonGradientBlueWide>{cta}</ButtonGradientBlueWide>
  </Container>
);

export default Form;
