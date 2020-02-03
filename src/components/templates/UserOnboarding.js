import React, { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { socialAuthLoad, verifyEmail } from "../../store/user/actions";
import { FormLayout, Header, Footer } from "../organisms/index";

const UserOnboarding = ({
  ctaText,
  imageType,
  imageText,
  formHeader,
  formParagraph
}) => {
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
    <div>
      <Header />
      <FormLayout
        ctaText={ctaText}
        imageType={imageType}
        imageText={imageText}
        formHeader={formHeader}
        formParagraph={formParagraph}
      />
      <Footer />
    </div>
  );
};

export default UserOnboarding;
