import React from 'react';

import image from '../../assets/Signup.png';

import WideBody from '../atoms/WideBody';
import BodyContainer from '../atoms/BodyContainer';
import HeroImage from '../atoms/HeroImage';
import Form from './Form';

const SignUp = () => (
  <WideBody>
    <BodyContainer>
      <HeroImage src={image} alt="Sign Up Now!" />
      <Form />
    </BodyContainer>
  </WideBody>
);

export default SignUp;
