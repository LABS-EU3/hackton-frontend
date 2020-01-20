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
import { Row } from "../atoms/Row";
import { CardWide } from "../atoms/Card";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import profileImg from "../../assets/profile-image.png";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
`;
const NewLabel = styled(Label)`
  padding-left: 3px;
`;
const CardWider = styled(CardWide)`
  margin-left: 150px;
`;
const ProfileRow = styled(Row)`
  justify-content: space-around;
`;

var border = {
  borderRadius: "50%",
  width: "20%"
};
var pad = {
    marginRight: "5px",
}

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
            <CardWider>
              <Formik
                initialValues={initialState}
                validationSchema={schema}
                enableReinitialize
              >
                {({ errors, touched }) => (
                  <Form>
                    <Column>
                      <NewLabel htmlFor="image">Profile picture</NewLabel>
                      <ProfileRow>
                        <img
                          alt="profile thumbnail"
                          src={profileImg}
                          style={border}
                        />
                        <Row>
                          <Link>
                            <Button to="/dashboard" color="blue" style={pad}>
                              Upload New Picture
                            </Button>
                            <Button to="/dashboard" color="grey" anchor>
                              Remove
                            </Button>
                          </Link>
                        </Row>
                      </ProfileRow>
                    </Column>

                    <RowBody>
                      <Column>
                        <NewLabel htmlFor="first_name">First Name</NewLabel>
                        <Input
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                        />
                      </Column>
                      <Column>
                        <NewLabel htmlFor="last_name">Last Name</NewLabel>
                        <Input
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                        />
                      </Column>
                    </RowBody>
                    <RowBody>
                      <Column>
                        <NewLabel htmlFor="email">Email</NewLabel>
                        <Input type="text" name="email" placeholder="Email" />
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                        <ErrorMessage name="email" />
                      </Column>
                      <Column>
                        <NewLabel htmlFor="username">Username</NewLabel>
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
                      <NewLabel htmlFor="bio">Bio</NewLabel>
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
            </CardWider>
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default UserProfileForm;
