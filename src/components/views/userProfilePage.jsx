import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../store/user/actions";
import UserProfile from "../../components/templates/UserProfile";

const UserProfilePage = () => {
  const userDetails = useSelector(state => state.currentUser);
  
  console.log("user details", userDetails);
  return (
    <>
      <UserProfile initialState={userDetails}/>
    </>
  );
};

export default UserProfilePage;
