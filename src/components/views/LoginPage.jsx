import React from "react";
import image from "../../assets/Login.png";
import { UserOnboarding } from "../templates";

const LoginPage = () => {
  return (
    <UserOnboarding
      ctaText="Log In"
      imageType={image}
      imageText="Log In now!!"
      formHeader="Log into Portal"
      formParagraph="We missed you, you missed us now get back into action."
    />
  );
};

export default LoginPage;
