import { select } from "redux-saga";
import { put, takeLatest, call, all } from "redux-saga/effects";

import { axiosWithAuth } from "../../utils/api";
import {
  EventsTypes,
  createEventSuccess,
  eventsError,
  fetchAllEventsSuccess,
  updateEventSuccess
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

function* createEventAsync({ payload }) {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post("/api/events", payload);
    yield put(createEventSuccess(data));
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

function* updateEventAsync({ payload }) {
  try {
    const { id, ...eventInfo } = payload;
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post(
      "/api/events/" + id,
      eventInfo
    );
    yield put(updateEventSuccess(data));
  } catch (error) {
    yield put(eventsError(error.message));
  }
}

function* watchUpdateEvent() {
  yield takeLatest(EventsTypes.UPDATE_EVENT, updateEventAsync);
}

export function* eventsSagas() {
  yield all([
    call(watchFetchAllEvents),
    call(watchCreateEvent),
    call(watchDeleteEvent),
    call(watchUpdateEvent)
  ]);
}
