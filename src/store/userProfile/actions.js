export const UserProfileTypes = {
    FETCH_USER_PROFILE: "FETCH_USER_PROFILE",
    CREATE_PROFILE: "CREATE_PROFILE",
    UPDATE_PROFILE: "UPDATE_PROFILE",
    SET_PROFILE: "SET_PROFILE",
    PROFILE_ERROR: "PROFILE_ERROR"
}
export const fetchUserProfile = () => {
    return {
      type: UserProfileTypes.FETCH_USER_PROFILE
    };
  };

export const createUserProfile = () => {
    return {
        type: UserProfileTypes.CREATE_PROFILE
    };
};

export const updateUserProfile = (updatedProfile, history) => {
    return {
        type: UserProfileTypes.UPDATE_PROFILE,
        payload: updatedProfile,
        history
    };
};

export const setProfile = profile => {
    return {
      type: UserProfileTypes.SET_PROFILE,
      payload: profile
    };
  };

  export const profileError = errorMessage => {
    return {
      type: UserProfileTypes.PROFILE_ERROR,
      errorMessage
    };
  };
  
  