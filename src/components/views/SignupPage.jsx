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

  useEffect(() => {
    const parsed = queryString.parse(search);
    if (parsed.google || parsed.github) {
      dispatch(socialAuthLoad());
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
