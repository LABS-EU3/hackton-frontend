import { EventParticipantTypes } from "./actions";

export const eventParticipantsReducer = (eventParticipants = [], action) => {
  switch (action.type) {
    case EventParticipantTypes.SET_EVENT_PARTICIPANTS:
      return action.payload;
    default:
      return eventParticipants;
  }
};
