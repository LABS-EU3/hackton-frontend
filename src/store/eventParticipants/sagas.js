import { put, takeLatest, call, all, select } from "redux-saga/effects";
import {
  axiosWithAuth,
  selectToken,
  showError,
  showSuccess
} from "../../utils/api";
import {
  EventParticipantTypes,
  fetchAllParticipants,
  setEventParticipants
} from "./actions";

function* fetchAllParticipantsAsync({ payload }) {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get(`/api/events/${payload}/participants`);
    yield put(setEventParticipants(body));
  } catch ({ response }) {
    const { message } = response.data;
    yield showError(`⚠️ ${message}`);
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
  } catch ({ response }) {
    const { message, statusCode } = response.data;
    if (statusCode === 404) {
      history.push("/not-found");
    }
    yield showError(`⚠️ ${message}`);
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
  } catch ({ response }) {
    const { message, statusCode } = response.data;
    if (statusCode === 404) {
      history.push("/not-found");
    }
    yield showError(`⚠️ ${message}`);
  }
}

function* watchUnregisterEvent() {
  yield takeLatest(
    EventParticipantTypes.UNREGISTER_EVENT,
    unregisterEventAsync
  );
}

export function* eventParticipantsSagas() {
  yield all([
    call(watchFetchAllEventParticipants),
    call(WatchRegisterEvent),
    call(watchUnregisterEvent)
  ]);
}
