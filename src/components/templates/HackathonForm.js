import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";

import { CardWide } from "../atoms/Card";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";

import { ButtonGradientGrey, ButtonGradientGreen } from "../atoms/Button";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: space-around;
`;

const Onboarding = ({ user }) => {
  return (
    <div>
      <UserHeader user={user} />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>Create New Hackathon</H3>
          </RowHead>

          <RowBody>
            <CardWide>
              <form>
                <RowBody>
                  <Input type="text" name="Title" placeholder="Title" />
                  <Input
                    type="text"
                    name="EventStart"
                    placeholder="Event starts"
                  />
                  <Input type="text" name="EventEnd" placeholder="Event ends" />
                </RowBody>
                <RowBody>
                  <TextArea
                    wide
                    type="text"
                    name="Description"
                    placeholder="Description"
                  />
                </RowBody>
                <RowBody>
                  <Input type="text" name="Address" placeholder="Address" />
                </RowBody>
                <RowBody>
                  <TextArea
                    wide
                    type="text"
                    name="Guidelines"
                    placeholder="Guidelines"
                  />
                </RowBody>
                <RowBody>
                  <Link to="/dashboard"><ButtonGradientGrey>Cancel</ButtonGradientGrey></Link>
                  <ButtonGradientGreen type="submit">Submit</ButtonGradientGreen>
                </RowBody>
              </form>
            </CardWide>
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default Onboarding;
