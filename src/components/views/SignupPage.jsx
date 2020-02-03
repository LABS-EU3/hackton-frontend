import React, { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import image from "../../assets/Signup.png";
import { UserOnboarding } from "../templates";
import { socialAuthLoad, verifyEmail } from "../../store/user/actions";

const SignupPage = () => {
  let { search } = useLocation();
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.currentUser);
  const { state } = useLocation();

  useEffect(() => {
    const { google, github, verified } = queryString.parse(search);
    if (google || github) {
      dispatch(socialAuthLoad());
    }
    if (verified) {
      dispatch(verifyEmail());
    }
  }, [search, dispatch]);

  if (token) {
    return <Redirect to={state?.from || '/dashboard'} />;
  }

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
