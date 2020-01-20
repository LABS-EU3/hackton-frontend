import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
import Button from "../atoms/Button";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
`;

const defaultState = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  bio: "",
  id: 1
};

const UserProfileForm = ({ initialState = defaultState }) => {
  const schema = Yup.object().shape({
    first_name: Yup.string().required("first name is required"),
    last_name: Yup.string().required("last name is required"),
    email: Yup.string().required("email is required"),
    username: Yup.string().required("username is required"),
    bio: Yup.string()
  });

  return (
    <div>
      <UserHeader />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>{initialState.id ? `Edit Profile` : `Create Profile`}</H3>
          </RowHead>

          <RowBody>
            <CardWide>
              <Formik
                // onSubmit={handleSubmit}
                initialValues={initialState}
                validationSchema={schema}
                enableReinitialize
              >
                {({ errors, touched }) => (
                  <Form>
                    <RowBody>
                      <Column>
                        <Label htmlFor="first_name">First Name</Label>
                        <Input
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                        />
                      </Column>
                      <Column>
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                        />
                      </Column>
                    </RowBody>
                    <RowBody>
                      <Column>
                        <Label htmlFor="email">Email</Label>
                        <Input type="text" name="email" placeholder="Email" />
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                        <ErrorMessage name="email" />
                      </Column>
                      <Column>
                        <Label htmlFor="username">Username</Label>
                        <Input
                          type="text"
                          name="username"
                          placeholder="Username"
                        />
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                        <ErrorMessage name="username" />
                      </Column>
                    </RowBody>
                    <RowBody>
                      <Label htmlFor="bio">Bio</Label>
                      <TextArea
                        wide
                        as="textarea"
                        type="text"
                        name="bio"
                        placeholder="bio"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="bio" />
                    </RowBody>
                    <RowBody>
                      <Link to="/dashboard">
                        <Button to="/dashboard" color="grey">
                          Cancel
                        </Button>
                      </Link>
                      <Button color="green" type="submit">
                        Save Changes
                      </Button>
                    </RowBody>
                  </Form>
                )}
              </Formik>
            </CardWide>
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default UserProfileForm;
