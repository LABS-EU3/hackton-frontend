import React from "react";
import BodyContainer from "../../atoms/BodyContainer";
import HeroImage from "../../atoms/HeroImage";
import Container from "../../atoms/Container";
import { H1 } from "../../atoms/Heading";
import { Paragraph } from "../../atoms/Paragraph";
import { RowBody } from "../../atoms/RowBody";
import WideBody from "../../atoms/WideBody";
import { Header, Footer } from "../../organisms/index";
import Button from "../../atoms/Button";
import image from "../../../assets/Password-sent.png";

function ResetPasswordConfirmation() {
  return (
    <div>
      <Header />
      <WideBody>
        <BodyContainer justify="center">
          <HeroImage src={image} alt="Password Sent" />
          <Container>
            <H1>Check your inbox</H1>
            <Paragraph>
              Please check your email inbox for directions on how to reset your
              password.
            </Paragraph>
            <RowBody>
              <Button anchor size="wide" to="/login">
                Return to Login page
              </Button>
            </RowBody>
          </Container>
        </BodyContainer>
      </WideBody>
      <Footer />
    </div>
  );
}

export default ResetPasswordConfirmation;
