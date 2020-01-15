export const EventsTypes = {
  FETCH_ALL_EVENTS: "FETCH_ALL_EVENTS",
  CREATE_EVENT: "CREATE_EVENT",
  UPDATE_EVENT: "UPDATE_EVENT",
  DELETE_EVENT: "DELETE_EVENT",
  FETCH_EVENT_CATEGORIES: "FETCH_EVENT_CATEGORIES",
  SET_EVENTS: "SET_EVENTS",
  SET_EVENT_CATEGORIES: "SET_EVENT_CATEGORIES",
  EVENT_ERROR: "EVENT_ERROR",
  ADD_TEAM_MEMBER: "ADD_TEAM_MEMBER"
};

export const fetchAllEvents = () => {
  return {
    type: EventsTypes.FETCH_ALL_EVENTS
  };
};

export const createEvent = (eventData, history) => {
  return {
    type: EventsTypes.CREATE_EVENT,
    payload: eventData,
    history
  };
};

export const updateEvent = (eventData, history) => {
  return {
    type: EventsTypes.UPDATE_EVENT,
    payload: eventData,
    history
  };
};

export const deleteEvent = eventId => {
  return {
    type: EventsTypes.DELETE_EVENT,
    payload: eventId
  };
};

export const fetchEventCategories = () => {
  return {
    type: EventsTypes.FETCH_EVENT_CATEGORIES
  };
};

export const setEvents = events => {
  return {
    type: EventsTypes.SET_EVENTS,
    payload: events
  };
};

export const setEventCategories = categories => {
  return {
    type: EventsTypes.SET_EVENT_CATEGORIES,
    payload: categories
  };
};

export const eventsError = errorMessage => {
  return {
    type: EventsTypes.EVENT_ERROR,
    errorMessage
  };
};

export const addTeamMember = (userId, eventId, role) => {
  return {
    type: EventsTypes.ADD_TEAM_MEMBER,
    payload: { userId, eventId, role }
  };
};
