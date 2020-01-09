import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { toast } from "react-toastify";

import { axiosWithAuth } from "../../utils/api";
import { EventsTypes, eventsError, fetchAllEvents, setEvents } from "./actions";

const selectToken = state => state.currentUser.token;

function* fetchAllEventsAsync() {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get("/api/events");
    yield put(setEvents(body));
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

export function* eventsSagas() {
  yield all([
    call(watchFetchAllEvents),
    call(watchCreateEvent),
    call(watchDeleteEvent),
    call(watchUpdateEvent),
    call(watchFetchEventCategories)
  ]);
}
