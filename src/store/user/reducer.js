import { UserTypes } from "./actions";

const initialState = {
  token: null,
  email: null,
  userId: null
};

export const userReducer = (user = initialState, action) => {
  switch (action.type) {
    case UserTypes.SET_USER:
      return action.payload;
    case UserTypes.RESET_USER:
      return initialState;
    default:
      return user;
  }
};
