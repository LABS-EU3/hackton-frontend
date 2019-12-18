import React from "react";
import image from "../../assets/Signup.png";
import { Unboarding } from "../templates";

const SingupPage = () => (
  <Unboarding
    catText="Sign Up"
    imageType={image}
    imageText="Sign Up now!!"
    formHeader=" Create an account"
    formParagraph="Join hackathons or organise one yourself."
  />
);

export default SingupPage;
