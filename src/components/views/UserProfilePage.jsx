import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "../templates/UserProfile";

const UserProfilePage = () => {
  const userDetails = useSelector(state => state.currentUser);

  return (
    <>
      <UserProfile initialState={userDetails} />
    </>
  );
};

export default UserProfilePage;
