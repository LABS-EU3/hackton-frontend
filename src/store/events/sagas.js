import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { toast } from "react-toastify";

import { axiosWithAuth } from "../../utils/api";
import {
  EventsTypes,
  eventsError,
  fetchAllEvents,
  setEvents,
  setEventCategories
} from "./actions";

const selectToken = state => state.currentUser.token;

function* fetchAllEventsAsync() {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get("/api/events");
    yield put(setEvents(body));
    console.log(body)
  } catch (error) {
    yield put(eventsError(error.message));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* watchFetchAllEvents() {
  yield takeLatest(EventsTypes.FETCH_ALL_EVENTS, fetchAllEventsAsync);
}

function* createEventAsync({ payload, history }) {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post("/api/events", payload);
    if (data) {
      yield put(fetchAllEvents());
      toast.success(`😀 ${data.message}`);
    }
    yield history.push("/dashboard");
  } catch (error) {
    yield put(eventsError(error.message));
    if (error.message === "Request failed with status code 404") {
      history.push("/not-found");
    }
    toast.error(`⚠️ ${error.message}`);
  }
}

function* watchCreateEvent() {
  yield takeLatest(EventsTypes.CREATE_EVENT, createEventAsync);
}

function* deleteEventAsync({ payload }) {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post("/api/events/" + payload);
    yield put(fetchAllEvents());
    toast.success(`😲 ${data.message}`);
  } catch (error) {
    yield put(eventsError(error.message));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* watchDeleteEvent() {
  yield takeLatest(EventsTypes.DELETE_EVENT, deleteEventAsync);
}

function* updateEventAsync({ payload, history }) {
  try {
    const { id, ...eventInfo } = payload;
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).put(
      "/api/events/" + id,
      eventInfo
    );
    if (data) {
      yield put(fetchAllEvents());
      toast.success(`🎉 ${data.message}`);
      yield history.push("/dashboard");
    }
  } catch (error) {
    yield put(eventsError(error.message));
    if (error.message === "Request failed with status code 404") {
      history.push("/not-found");
    }
    toast.error(`⚠️ ${error.message}`);
  }
}

function* watchUpdateEvent() {
  yield takeLatest(EventsTypes.UPDATE_EVENT, updateEventAsync);
}

function* fetchEventCategoriesAsync() {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get("/api/event-category");
    yield put(setEventCategories(body));
  } catch (error) {
    yield put(eventsError(error.message));
  }
}

function* watchFetchEventCategories() {
  yield takeLatest(
    EventsTypes.FETCH_EVENT_CATEGORIES,
    fetchEventCategoriesAsync
  );
}

function* addTeamMemberAsync({ payload, history }) {
  try {
    const { eventId, email, role } = payload;
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/${eventId}/team`,
      {
        email,
        role_type: role
      }
    );
    if (data) {
      yield toast.success(`Added successfully`);
    }
    history.push(`/dashboard/event/${eventId}`);
  } catch (error) {
    yield put(eventsError(error.message));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* watchAddTeamMember() {
  yield takeLatest(EventsTypes.ADD_TEAM_MEMBER, addTeamMemberAsync);
}

export function* eventsSagas() {
  yield all([
    call(watchFetchAllEvents),
    call(watchCreateEvent),
    call(watchDeleteEvent),
    call(watchUpdateEvent),
    call(watchFetchEventCategories),
    call(watchAddTeamMember)
  ]);
}
