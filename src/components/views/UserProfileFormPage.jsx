import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProfileForm from "../templates/UserProfileForm";
import { fetchUserProfile } from "../../store/user/actions";
import UserProfile from "../../components/templates/UserProfile";

const UserProfileFormPage = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.currentUser);
  const userDetails = useSelector(state => state.currentUser);
  useEffect(() => {
    dispatch(fetchUserProfile(userId));
  }, [dispatch, userId]);

  console.log("user details", userDetails);
  return (
    <UserProfileForm initialState={userDetails} />
  );
};

export default UserProfileFormPage;
