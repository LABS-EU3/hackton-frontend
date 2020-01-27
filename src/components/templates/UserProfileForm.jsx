import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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
// import { Row } from "../atoms/Row";
import { CardWide } from "../atoms/Card";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
// import profileImg from "../../assets/profile-image.png";

import {
  updateUserProfile
} from "../../store/user/actions";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
`;
// const NewLabel = styled(Label)`
//   padding-left: 3px;
// `;
const CardWider = styled(CardWide)`
  margin-left: 150px;
`;
// const ProfileRow = styled(Row)`
//   justify-content: space-around;
// `;

// var border = {
//   borderRadius: "50%",
//   width: "20%"
// };
// var pad = {
//   marginRight: "5px"
// };

const UserProfileForm = ({initialState}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = values => {
      dispatch(updateUserProfile(values, history));
  };

  const defaultState = {
    bio: initialState?.bio || "",
    fullname: initialState?.fullname || "",
    email: initialState?.email || "",
    username: initialState?.username || ""
  }

  const schema = Yup.object().shape({
    fullname: Yup.string().required("fullname is required"),
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
            <H3>Edit Profile</H3>
          </RowHead>

          <RowBody>
            <CardWider>
              <Formik
                onSubmit={handleSubmit}
                initialValues={defaultState}
                validationSchema={schema}
                enableReinitialize
              >
                {({ errors, touched }) => (
                  <Form>
                    {/* <Column>
                      <NewLabel htmlFor="image">Profile picture</NewLabel>
                      <ProfileRow>
                        <img
                          alt="profile thumbnail"
                          src={profileImg}
                          style={border}
                        />
                        <Row>
                          <div>
                            <Button to="/dashboard" color="blue" style={pad}>
                              Upload New Picture
                            </Button>
                            <Button to="/dashboard" color="grey" anchor>
                              Remove
                            </Button>
                          </div>
                        </Row>
                      </ProfileRow>
                    </Column> */}

                    <RowBody>
                      <Label htmlFor="fullname">Full Name</Label>
                      <Input
                        type="text"
                        name="fullname"
                        display="wide"
                        placeholder="Full Name"
                      />
                    </RowBody>
                    <RowBody>
                      <Column>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="text"
                          name="email"
                          placeholder="Email"
                          display="wide"
                        />
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
                          display="wide"
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
