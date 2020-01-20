import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { eventsReducer } from "./events/reducer";
import { eventParticipantsReducer } from "./eventParticipants/reducer";
import { userProfileReducer } from  "./userProfile/reducer";

export const rootReducer = combineReducers({
  currentUser: userReducer,
  events: eventsReducer,
  eventParticipants: eventParticipantsReducer,
  userProfile : userProfileReducer
});
