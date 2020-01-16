import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

import { axiosWithAuth } from "../../utils/api";
import {
  EventParticipantTypes,
  eventParticipantError,
  fetchAllParticipants,
  registerEvent,
  unregisterEvent,
  setEventParticipants
} from "./actions";

const selectToken = state => state.currentUser.token;
const { userId } = jwtDecode(selectToken);

function* fetchAllParticipantsAsync() {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get(`/api/events/${userId}/participants`);
    yield put(setEventParticipants(body));
  } catch (error) {
    yield put(eventParticipantError(error.message));
    toast.error(`⚠️ ${error.message}`);
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
      `/api/events/${userId}/participants`,
      payload
    );
    if (data) {
      yield put(fetchAllParticipants());
      toast.success(`😀 ${data.message}`);
    }
    yield history.push("/dashboard");
  } catch (error) {
    yield put(eventParticipantError(error.message));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* WatchRegisterEvent() {
  yield takeLatest(EventParticipantTypes.REGISTER_EVENT, registerEventAsync);
}

function* unregisterEventAsync({ payload }) {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).delete(
      `/api/events/${userId}/participants`
    );
    yield put(fetchAllParticipants());
    toast.success(`😲 ${data.message}`);
  } catch (error) {
    yield put(eventParticipantError(error.message));
    toast.error(`⚠️ ${error.message}`);
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
