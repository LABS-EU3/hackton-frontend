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
import { Header, Footer } from "../../organisms/index";
import Button from "../../atoms/Button";
import { ErrorSpan } from "../../atoms/Span";
import { resetPassword } from '../../../store/user/actions';

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;

const ResetPassword = () => {
    const dispatch = useDispatch();

  const handleSubmit = values => {
    const { newPassword, newPasswordConfirm } = values;
    if (newPassword === newPasswordConfirm) {
        dispatch(resetPassword(newPassword));
    } 
  };

    const schema = Yup.object().shape({
        newPassword: Yup.string()
          .required("Password is required.")
          .min(8, "Password must be at least 8 characters long."),
        newPasswordConfirm: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], "Passwords must match")
        .required('Password confirm is required')
      });

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
              <Formik
               initialValues={{ newPassword: "", newPasswordConfirm: "" }}
                onSubmit={handleSubmit}
                validationSchema={schema}
                >
                {({ errors, touched }) => (
                  <Form>
                    <Input
                      display="wide"
                      id="newPassword"
                      type="password"
                      name="newPassword"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <ErrorSpan>
                      <ErrorMessage name="newPassword" />
                    </ErrorSpan>
                    <Input
                      display="wide"
                      id="newPasswordConfirm"
                      type="password"
                      name="newPasswordConfirm"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <ErrorSpan>
                      <ErrorMessage name="newPasswordConfirm" />
                    </ErrorSpan>
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
