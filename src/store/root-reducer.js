import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { eventsReducer } from "./events/reducer";
import { eventParticpantsReducer } from "./eventParticipants/reducer";

export const rootReducer = combineReducers({
  currentUser: userReducer,
  events: eventsReducer,
  eventParticpants: eventParticpantsReducer
});
