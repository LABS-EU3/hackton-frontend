import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  currentUser: userReducer
});
