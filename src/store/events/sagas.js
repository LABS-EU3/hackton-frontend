import { put, takeLatest, call, all, select } from "redux-saga/effects";

import { axiosWithAuth } from "../../utils/api";
import {
  EventsTypes,
  deleteEventSuccess,
  eventsError,
  fetchAllEventsSuccess,
  fetchAllEvents,
  fetchEventCategoriesSuccess
} from "./actions";

const selectToken = state => state.currentUser.token;

function* fetchAllEventsAsync() {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).get("/api/events");
    yield put(fetchAllEventsSuccess(data));
  } catch (error) {
    yield put(eventsError(error.message));
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
    }
    yield history.push("/dashboard");
  } catch (error) {
    yield put(eventsError(error.message));
  }
}

function* watchCreateEvent() {
  yield takeLatest(EventsTypes.CREATE_EVENT, createEventAsync);
}

function* deleteEventAsync({ payload }) {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post("/api/events/" + payload);
    yield put(deleteEventSuccess(data));
  } catch (error) {
    yield put(eventsError(error.message));
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
      yield history.push("/dashboard");
    }
  } catch (error) {
    yield put(eventsError(error.message));
  }
}

function* watchUpdateEvent() {
  yield takeLatest(EventsTypes.UPDATE_EVENT, updateEventAsync);
}

function* fetchEventCategoriesAsync() {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).get("/api/event-category");
    yield put(fetchEventCategoriesSuccess(data));
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

export function* eventsSagas() {
  yield all([
    call(watchFetchAllEvents),
    call(watchCreateEvent),
    call(watchDeleteEvent),
    call(watchUpdateEvent),
    call(watchFetchEventCategories)
  ]);
}
