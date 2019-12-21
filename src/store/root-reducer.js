import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { eventsReducer } from "./events/reducer";

export const rootReducer = combineReducers({
  currentUser: userReducer,
  events: eventsReducer
});
