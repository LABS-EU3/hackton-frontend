import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import image from "../../assets/Signup.png";
import { UserOnboarding } from "../templates";
import { socialAuthLoad } from "../../store/user/actions";
import { isLoggedIn } from "../../utils/auth";
import queryString from 'query-string';

const SignupPage = (props) => {
  const isAuth = isLoggedIn();
  const dispatch = useDispatch()
  useEffect(()=>{
    const { location } = props;
    const { search } = location;
    const parsed = queryString.parse(search);
    console.log(props, '==check props===', parsed);
    if (parsed.google || parsed.github) {
      dispatch(socialAuthLoad());
    }
  }, []);

  if (isAuth){
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
