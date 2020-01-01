import { UserTypes } from "./actions";

const initialState = {
  token: ""
};

export const userReducer = (user = initialState, action) => {
  switch (action.type) {
    case UserTypes.SOCIAL_AUTH_LOAD:
      return {
        ...user,
      }
    case UserTypes.SOCIAL_AUTH_SUCCESS:
      return action.payload;
    case UserTypes.LOGIN_SUCCESS:
    case UserTypes.REGISTER_SUCCESS:
      return action.payload;
    case UserTypes.LOGIN:
    case UserTypes.REGISTER:
    case UserTypes.LOGIN_FAIL:
    default:
      return user;
  }
};
