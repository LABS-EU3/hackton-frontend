import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "../templates/UserProfile";
import { fetchUserProfile } from "../../store/user/actions";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.currentUser);
  const userDetails = useSelector(state => state.currentUser);
  useEffect(() => {
    dispatch(fetchUserProfile(userId));
  }, [dispatch, userId]);

  return (
    <>
      <UserProfile initialState={userDetails} />
    </>
  );
};

export default UserProfilePage;
