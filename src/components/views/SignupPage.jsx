import React, { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import image from "../../assets/Signup.png";
import { UserOnboarding } from "../templates";
import { socialAuthLoad } from "../../store/user/actions";

const SignupPage = () => {
  let { search } = useLocation();
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.currentUser);
  const { state } = useLocation();
  const { google, github, team, role } = queryString.parse(search);

  useEffect(() => {
    if (google || github) {
      return dispatch(socialAuthLoad());
    }

  }, [google, github, dispatch]);

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
