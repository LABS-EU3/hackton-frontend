export const EventParticipantTypes = {
  FETCH_ALL_PARTICIPANTS: "FETCH_ALL_PARTICIPANTS",
  REGISTER_EVENT: "REGISTER_EVENT",
  UNREGISTER_EVENT: "UNREGISTER_EVENT",
  SET_EVENT_PARTICIPANTS: "SET_EVENT_PARTICIPANTS",
  GET_USER_REGISTERED_EVENTS: "GET_USER_REGISTERED_EVENTS"
};

export const fetchAllParticipants = id => {
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

export const registerEvent = (eventId, history) => {
  return {
    type: EventParticipantTypes.REGISTER_EVENT,
    payload: eventId,
    history
  };
};

export const unregisterEvent = (eventId, history) => {
  return {
    type: EventParticipantTypes.UNREGISTER_EVENT,
    payload: eventId,
    history
  };
};

export const getUserRegisteredEvent = () => {
  return {
    type: EventParticipantTypes.GET_USER_REGISTERED_EVENTS,
  };
};
