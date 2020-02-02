import { EventsTypes } from "./actions";

const initialState = {
  data: [],
  categories: [],
  isLoading: false,
  inviteSent: false
};

export const eventsReducer = (events = initialState, action) => {
  switch (action.type) {
    case EventsTypes.FETCH_ALL_EVENTS:
      return {
        ...events,
        isLoading: true
      };
    case EventsTypes.SET_EVENTS:
      return {
        ...events,
        data: action.payload,
        isLoading: false
      };
    case EventsTypes.SET_EVENT_CATEGORIES:
      return {
        ...events,
        categories: action.payload
      };
    case EventsTypes.SEND_EVENT_TEAM_INVITE:
        return {
          ...events,
          inviteSent: true
        }
    default:
      return events;
  }
};
