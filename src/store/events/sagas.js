import { select } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";

import { axiosWithAuth } from "../../utils/api";
import { fetchAllEventsSuccess, eventsError, EventsTypes } from "./actions";

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

export function* eventsSagas() {
  yield all([call(watchFetchAllEvents)]);
}
