import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { eventsReducer } from "./events/reducer";
import { eventParticipantsReducer } from "./eventParticipants/reducer";
import { projectSubmissionsReducer } from './projectSubmission/reducer';

export const rootReducer = combineReducers({
  currentUser: userReducer,
  events: eventsReducer,
  participants: eventParticipantsReducer,
  submissions: projectSubmissionsReducer
});
