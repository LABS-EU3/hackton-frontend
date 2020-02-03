import React from "react";
import styled from "styled-components";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Input from "../../atoms/Input";
import WideBody from "../../atoms/WideBody";
import BodyContainer from "../../atoms/BodyContainer";
import { H3 } from "../../atoms/Heading";
import { CardForm } from "../../atoms/Card";
import { RowHead } from "../../atoms/RowHead";
import { RowBody } from "../../atoms/RowBody";
import { Column } from "../../atoms/Column";
import { Footer } from "../../organisms/index";
import Button from "../../atoms/Button";
import { ErrorSpan } from "../../atoms/Span";
import { forgotPassword } from '../../../store/user/actions';
import Header from '../../organisms/Header';
import { useHistory } from "react-router-dom";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = values => {
    const { email } = values;
    dispatch(forgotPassword(email, history));
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Please use a valid email address.")
      .required("Email address is required.")
  });

  return (
    <div>
      <Header />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>Forgot Password</H3>
          </RowHead>

          <Column>
            <CardForm>
              <Formik
                initialValues={{ email: "" }}
                onSubmit={handleSubmit}
                validationSchema={schema}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Input
                      display="wide"
                      id="email"
                      type="email"
                      name="email"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <ErrorSpan>
                      <ErrorMessage name="email" />
                    </ErrorSpan>
                    <RowBody>
                      <Button type="submit" color="green">Submit</Button>
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
