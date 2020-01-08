import React, { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import image from "../../assets/Signup.png";
import { UserOnboarding } from "../templates";
import { socialAuthLoad } from "../../store/user/actions";
import queryString from "query-string";

const SignupPage = () => {
  const { token } = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  let url = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(url.search);
    if (parsed.google || parsed.github) {
      dispatch(socialAuthLoad());
    }
  }, []);

  if (token !== "") {
    return <Redirect to="/dashboard" />;
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
