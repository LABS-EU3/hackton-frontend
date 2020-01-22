import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { toast } from "react-toastify";

import { axiosWithAuth, selectToken } from "../../utils/api";
import {
  EventParticipantTypes,
  eventParticipantError,
  fetchAllParticipants,
  setEventParticipants
} from "./actions";

function* fetchAllParticipantsAsync({ payload }) {
    // console.log("sagas id", payload);
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get(
      `/api/events/${payload}/participants`
    );
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
    // console.log("register id", payload);
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/${payload.event_id}/participants`,
      payload
    );
    if (data) {
      yield put(fetchAllParticipants(payload.event_id));
      toast.success(`😀 ${data.message}`);
    }
  } catch (error) {
    yield put(eventParticipantError(error.message));
    if(error.message === "Request failed with status code 404" ) {
      history.push("/not-found");
    }
    toast.error(`⚠️ ${error.message}`);
  }
}

function* WatchRegisterEvent() {
  yield takeLatest(EventParticipantTypes.REGISTER_EVENT, registerEventAsync);
}

function* unregisterEventAsync({ payload, history }) {
    // console.log("unregister id", payload);
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).delete(
      `/api/events/${payload.event_id}/participants`
    );
    yield put(fetchAllParticipants(payload.event_id));
    toast.success(`😲 ${data.message}`);
  } catch (error) {
    yield put(eventParticipantError(error.message));
    if(error.message === "Request failed with status code 404" ) {
      history.push("/not-found");
    }
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
