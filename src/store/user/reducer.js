import { UserTypes } from "./actions";

const initialState = {
  token: null,
  userId: null,
  fullname: '',
  email: '',
  username: '',
  bio: '',
  image: '',
  image_url: {}
};

export const userReducer = (user = initialState, action) => {
  switch (action.type) {
    case UserTypes.SET_USER:
      return action.payload;
    case UserTypes.SET_USER_PROFILE:
      return { ...user, ...action.payload };
    case UserTypes.PURGE:
      return initialState;
    default:
      return user;
  }
};
