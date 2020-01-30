import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";

import image from "../../assets/Login.png";
import { UserOnboarding } from "../templates";

const LoginPage = () => {
  const { token } = useSelector(state => state.currentUser);
  const { state } = useLocation();

  if (token) {
    return <Redirect to={state?.from || '/dashboard'} />;
  }

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
