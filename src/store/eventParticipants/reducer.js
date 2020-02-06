import { EventParticipantTypes } from "./actions";

export const eventParticipantsReducer = (eventParticipants = [], action) => {
  switch (action.type) {
    case EventParticipantTypes.FETCH_ALL_PARTICIPANTS:
      return {
        ...eventParticipants
      };
    case EventParticipantTypes.SET_EVENT_PARTICIPANTS:
      return action.payload;

    case EventParticipantTypes.GET_USER_REGISTERED_EVENTS:
      return {
        ...eventParticipants
      };
    default:
      return eventParticipants;
  }
};
