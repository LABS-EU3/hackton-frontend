import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UserProfile from "../../components/templates/UserProfile";

const UserProfilePage = () => {
  const userDetails = useSelector(state => state.currentUser);
  
  return (
    <>
      <UserProfile initialState={userDetails}/>
    </>
  );
};

export default UserProfilePage;
