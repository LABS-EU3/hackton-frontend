import { put, takeLatest, call, all, select } from "redux-saga/effects";
import {
  axiosWithAuth,
  selectToken,
  showSuccess,
  handleError
} from "../../utils/api";
import {
  EventParticipantTypes,
  fetchAllParticipants,
  setEventParticipants
} from "./actions";

export function* eventParticipantsSagas() {
  yield all([
    call(watchFetchAllEventParticipants),
    call(WatchRegisterEvent),
    call(watchUnregisterEvent),
    call(watchGetUserRegisteredEvent)
  ]);
}

function* fetchAllParticipantsAsync({ payload }) {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get(`/api/events/${payload}/participants`);
    yield put(setEventParticipants(body));
  } catch (error) {
    yield handleError(error, put);
  }
}

function* watchFetchAllEventParticipants() {
  yield takeLatest(
    EventParticipantTypes.FETCH_ALL_PARTICIPANTS,
    fetchAllParticipantsAsync
  );
}

function* registerEventAsync({ payload, history }) {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/${payload}/participants`,
      payload
    );
    if (data) {
      yield put(fetchAllParticipants(payload));
      yield showSuccess(`😀 ${data.message}`);
    }
  } catch (error) {
    yield handleError(error, put, history);
  }
}

function* WatchRegisterEvent() {
  yield takeLatest(EventParticipantTypes.REGISTER_EVENT, registerEventAsync);
}

function* unregisterEventAsync({ payload, history }) {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).delete(
      `/api/events/${payload}/participants`
    );
    yield put(fetchAllParticipants(payload));
    yield showSuccess(`😲 ${data.message}`);
  } catch (error) {
    yield handleError(error, put, history);
  }
}

function* watchUnregisterEvent() {
  yield takeLatest(
    EventParticipantTypes.UNREGISTER_EVENT,
    unregisterEventAsync
  );
}

function* getUserRegisteredEventAsync() {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get('/api/events/participants/user/', {
      params: {
        perPage: 6,
        currentPage: 1
      }
    });
    yield put(setEventParticipants(body));
  } catch (error) {
    yield handleError(error, put);
  }
}

function* watchGetUserRegisteredEvent() {
  yield takeLatest(
    EventParticipantTypes.GET_USER_REGISTERED_EVENTS,
    getUserRegisteredEventAsync
  );
}