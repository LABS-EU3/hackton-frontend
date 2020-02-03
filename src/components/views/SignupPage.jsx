import React from "react";

import image from "../../assets/Signup.png";
import { UserOnboarding } from "../templates";

const SignupPage = () => {
  return (
    <UserOnboarding
      ctaText="Sign Up"
      imageType={image}
      imageText="Sign Up now!!"
      formHeader="Create an account"
      formParagraph="Join hackathons or organise one yourself."
    />
  );
};

export default SignupPage;
