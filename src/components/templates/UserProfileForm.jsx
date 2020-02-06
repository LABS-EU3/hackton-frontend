import React, {useState} from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import Nav from "../molecules/Nav";
import BodyContainer from "../atoms/BodyContainer";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import profileImg from "../../assets/profile-image.png";
import ProfileImage from '../molecules/ProfileImage';
import { media } from '../variables/media';

import {
  updateUserProfile
} from "../../store/user/actions";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
`;
const NewLabel = styled(Label)`
  padding-left: 3px;
  @media ${media.tablet} {
    display: none;
  }
  @media ${media.mobile} {
    display: none;
  }
`;
const CardWider = styled(CardWide)`
  margin-left: 150px;
  @media ${media.tablet} {
    margin-left: 0px;
  }
  @media ${media.mobile} {
    margin-left: 0px;
  }
`;
const ButtonRowBody = styled(RowBody)`
@media ${media.tablet} {
  justify-content: space-around;
}
`
const NewButton = styled(Button)`
@media ${media.tablet} {
  width: 25%;
}
@media ${media.mobile} {
  width: 50%
}
`

const UserProfileForm = ({initialState}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState(initialState?.image_url);

  const handleSubmit = (values, a) => {
    const formData = new FormData();
    formData.append('image_url', selectedImage);
    formData.append('bio', values.bio);
    formData.append('fullname', values.fullname);
    formData.append('email', values.email);
    formData.append('username', values.username);
      dispatch(updateUserProfile(formData, history));
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
        <Nav />
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
                      <NewLabel htmlFor="image">Profile picture</NewLabel>
                      <ProfileImage
                      image={JSON.parse(initialState.image_url? initialState.image_url[0] : null)?.avatar || profileImg}
                      name={initialState?.username}
                      />

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
                      <Label htmlFor="image">Profile Image</Label>
                      <Input
                        type="file"
                        name="image_url"
                        display="wide"
                        placeholder="Profile picture"
                        accept="image/*"
                        onChange={(e) => setSelectedImage(e.target.files[0])}
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
                    <ButtonRowBody>
                      <Link to="/dashboard">
                        <Button to="/dashboard" color="grey">
                          Cancel
                        </Button>
                      </Link>
                      <NewButton color="green" type="submit">
                        Save Changes
                      </NewButton>
                    </ButtonRowBody>
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
