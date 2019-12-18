import { UserTypes } from "./actions";

export const userReducer = (user = {}, action) => {
  switch (action.type) {
    case UserTypes.LOGIN:
    case UserTypes.LOGIN_SUCCESS:
    case UserTypes.LOGIN_FAIL:
    default:
      return user;
  }
};
