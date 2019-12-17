import React from 'react';
import styled from 'styled-components';

import * as Colors from '../variables/colors';

import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Form = () => (
  <Container>
    <Heading>
      Create an account
    </Heading>

    <Paragraph>
      Join hackathons or organise one yourself.
    </Paragraph>

    <Input wide type="text" placeholder="Email address" />
    <Input wide type="password" placeholder="Password" />

    <Button wide color={Colors.Gradient.BLUE}>Sign Up</Button>
  </Container>
);

export default Form;
