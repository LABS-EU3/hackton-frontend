import React from "react";
import UserHeader from '../organisms/UserHeader';
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";

const Onboarding = ({
  user
}) => {
  return (
    <div>
      <UserHeader user={user} />
        <WideBody>
          <BodyContainer>
            
            <h3>Hello</h3>

          </BodyContainer>
        </WideBody>
      <Footer />
    </div>
  );
};

export default Onboarding;
