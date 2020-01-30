import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, ErrorMessage } from "formik";
import Input from "../../atoms/Input";
import WideBody from "../../atoms/WideBody";
import BodyContainer from "../../atoms/BodyContainer";
import { H3 } from "../../atoms/Heading";
import { CardForm } from "../../atoms/Card";
import { RowHead } from "../../atoms/RowHead";
import { RowBody } from "../../atoms/RowBody";
import { Column } from "../../atoms/Column";
import { Header, Footer } from "../../organisms/index";
import Button from "../../atoms/Button";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [redirectReset, setRedirectReset] = useState(false);

  return (
    <div>
      <Header />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>Reset Password</H3>
          </RowHead>

          <Column>
            <CardForm>
              <Formik>
                {({ errors, touched }) => (
                  <Form>
                    <Input
                      display="wide"
                      id="email"
                      type="email"
                      name="email"
                    />
                    <RowBody>
                      <Button color="green">Reset Password</Button>
                    </RowBody>
                  </Form>
                )}
              </Formik>
              Please Input Your Email and we will help you recover your
              password.
            </CardForm>
          </Column>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default ResetPassword;
