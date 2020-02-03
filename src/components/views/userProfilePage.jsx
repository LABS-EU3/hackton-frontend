import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../store/user/actions";
import UserProfile from "../../components/templates/UserProfile";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.currentUser);
  const userDetails = useSelector(state => state.currentUser);
  useEffect(() => {
    dispatch(fetchUserProfile(userId));
  }, [dispatch, userId]);

  console.log("user details", userDetails);
  return (
    <>
      <UserProfile initialState={userDetails}/>
    </>
  );
};

export default UserProfilePage;
