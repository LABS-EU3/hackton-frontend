export const EventsTypes = {
  FETCH_ALL_EVENTS: "FETCH_ALL_EVENTS",
  FETCH_ALL_EVENTS_SUCCESS: "FETCH_ALL_EVENTS_SUCCESS",
  CREATE_EVENT: "CREATE_EVENT",
  CREATE_EVENT_SUCCESS: "CREATE_EVENT_SUCCESS",
  UPDATE_EVENT: "UPDATE_EVENT",
  UPDATE_EVENT_SUCCESS: "UPDATE_EVENT_SUCCESS",
  DELETE_EVENT: "DELETE_EVENT",
  DELETE_EVENT_SUCCESS: "DELETE_EVENT_SUCCESS",
  EVENT_ERROR: "EVENT_ERROR"
};

export const fetchAllEvents = () => {
  return {
    type: EventsTypes.FETCH_ALL_EVENTS
  };
};

export const fetchAllEventsSuccess = events => {
  return {
    type: EventsTypes.FETCH_ALL_EVENTS_SUCCESS,
    payload: events
  };
};

export const createEvent = eventData => {
  return {
    type: EventsTypes.CREATE_EVENT,
    payload: eventData
  };
};

export const createEventSuccess = eventData => {
  return {
    type: EventsTypes.CREATE_EVENT_SUCCESS,
    payload: eventData
  };
};

export const updateEvent = eventData => {
  return {
    type: EventsTypes.UPDATE_EVENT,
    payload: eventData
  };
};

export const updateEventSuccess = eventData => {
  return {
    type: EventsTypes.UPDATE_EVENT_SUCCESS,
    payload: eventData
  };
};

export const deleteEvent = eventId => {
  return {
    type: EventsTypes.DELETE_EVENT,
    payload: eventId
  };
};

export const deleteEventSuccess = eventId => {
  return {
    type: EventsTypes.DELETE_EVENT_SUCCESS,
    payload: eventId
  };
};

export const eventsError = errorMessage => {
  return {
    type: EventsTypes.EVENT_ERROR,
    errorMessage
  };
};
