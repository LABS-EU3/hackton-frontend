import { EventsTypes } from "./actions";

export const userReducer = (user = {}, action) => {
  switch (action.type) {
    case EventsTypes.LOGIN_SUCCESS:
    case EventsTypes.REGISTER_SUCCESS:
      return action.payload;
    case EventsTypes.LOGIN:
    case EventsTypes.REGISTER:
    case EventsTypes.LOGIN_FAIL:
    default:
      return user;
  }
};
