import { UserProfileTypes } from "./actions";

const initialState = {
  data: [],
  isLoading: false
};

export const userProfileReducer = (userProfile = initialState, action) => {
  switch (action.type) {
    case UserProfileTypes.FETCH_USER_PROFILE:
        return {
          ...userProfile,
          isLoading: true
        };
    case UserProfileTypes.SET_PROFILE:
      return {
        ...userProfile,
        data: action.payload,
        isLoading: false
      };
    default:
      return userProfile;
  }
};
