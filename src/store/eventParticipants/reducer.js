import { EventParticipantTypes } from "./actions";

const initialState = {
  participantsData: [],
  registerParticipant: {},
  unregisterParticipant: {},
  isLoading: false
};

export const eventParticipantsReducer = (
  eventParticipants = initialState,
  action
) => {
  switch (action.type) {
    case EventParticipantTypes.FETCH_ALL_PARTICIPANTS:
      return {
        ...eventParticipants,
        isLoading: true
      };
    case EventParticipantTypes.SET_EVENT_PARTICIPANTS:
      return {
        ...eventParticipants,
        participantsData: action.payload,
        isLoading: false
      };
    case EventParticipantTypes.REGISTER_EVENT:
      return {
        ...eventParticipants,
        registerParticipant: action.payload,
        isLoading: false
      };
    case EventParticipantTypes.UNREGISTER_EVENT:
      return {
        ...eventParticipants,
        unregisterParticipant: action.payload
      };
    default:
      return eventParticipants;
  }
};
