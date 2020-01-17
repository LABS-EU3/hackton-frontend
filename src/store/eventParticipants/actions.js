export const EventParticipantTypes = {
  FETCH_ALL_PARTICIPANTS: "FETCH_ALL_PARTICIPANTS",
  REGISTER_EVENT: "REGISTER_EVENT",
  UNREGISTER_EVENT: "UNREGISTER_EVENT",
  EVENT_PARTICIPANT_ERROR: "EVENT_PARTICIPANT_ERROR",
  SET_EVENT_PARTICIPANTS: "SET_EVENT_PARTICIPANTS"
};

export const fetchAllParticipants = (id) => {
    console.log("actions id",id);
  return {
    type: EventParticipantTypes.FETCH_ALL_PARTICIPANTS,
    payload: id
  };
};
export const setEventParticipants = participants => {
  return {
    type: EventParticipantTypes.SET_EVENT_PARTICIPANTS,
    payload: participants
  };
};

export const registerEvent = (participantData, history) => {
  return {
    type: EventParticipantTypes.REGISTER_EVENT,
    payload: participantData,
    history
  };
};

export const unregisterEvent = (participantData, history) => {
  return {
    type: EventParticipantTypes.UNREGISTER_EVENT,
    payload: participantData,
    history
  };
};

export const eventParticipantError = errorMessage => {
  return {
    type: EventParticipantTypes.EVENT_PARTICIPANT_ERROR,
    errorMessage
  };
};
