import { EventsTypes } from "./actions";

const initialState = {
  data: [],
  isLoading: false
};

export const eventsReducer = (events = initialState, action) => {
  switch (action.type) {
    case EventsTypes.FETCH_ALL_EVENTS:
      return {
        ...events,
        isLoading: true
      };
    case EventsTypes.FETCH_ALL_EVENTS_SUCCESS:
      return {
        data: action.payload,
        isLoading: false
      };
    default:
      return events;
  }
};
