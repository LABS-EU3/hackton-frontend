import React from "react";
import { Paragraph } from "../../atoms/Paragraph";
import { RowBody } from "../../atoms/RowBody";
import { Column } from "../../atoms/Column";
import WideBody from "../../atoms/WideBody";
import { Header, Footer } from "../../organisms/index";
import Button from "../../atoms/Button";
import { CardForm } from "../../atoms/Card";

function ResetPasswordConfirmation() {
  return (
    <div>
      <Header />
      <WideBody>
        <Column>
        <CardForm>
            <Paragraph>Password Reset Email sent</Paragraph>
            <Paragraph>
              Please check your email address for directions on how to reset
              your email
            </Paragraph>
            <RowBody>
              <Button anchor to="/login">
                Return to login page
              </Button>
            </RowBody>
        </CardForm>
        </Column>
      </WideBody>
      <Footer />
    </div>
  );
}

export default ResetPasswordConfirmation;
