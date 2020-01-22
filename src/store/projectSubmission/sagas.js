import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { toast } from "react-toastify";
import { axiosWithAuth } from "../../utils/api";
import {
  ParticipantSubmissionTypes,
  fetchAllSubmissions,
  submissionsError,
  setSubmissions
} from "./actions";

const userToken = state => state.currentUser.token;

function* createParticipantSubmissionAsync({ payload, history }) {
  try {
    const token = yield select(userToken);
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/${payload.event_id}/projects`,
      payload
    );
    console.log("DATA", data);
    if (data) {
      yield put(fetchAllSubmissions(payload.event_id));
      toast.success(`😀 ${data.message}`);
    }
    yield history.push("/dashboard");
  } catch (error) {
    yield put(submissionsError(error.message));
    if (error.message === "Request failed with status code 404") {
      history.push("/not-found");
    }
    toast.error(`⚠️ ${error.message}`);
    alert(error);
  }
}

function* watchCreateParticipantSubmission() {
  yield takeLatest(
    ParticipantSubmissionTypes.CREATE_SUBMISSION,
    createParticipantSubmissionAsync
  );
}

function* fetchAllSubmissionsAsync({ payload }) {
  try {
    const token = yield select(userToken);
    const { data: { body } } = yield axiosWithAuth(token).get(
      `/api/events/${payload.event_id}/projects/submissions`,
      payload
    );
    yield put(setSubmissions(body));
  } catch (error) {
    yield put(submissionsError(error.message));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* watchFetchAllSubmissionsAsync() {
  yield takeLatest(
    ParticipantSubmissionTypes.FETCH_ALL_SUBMISSIONS,
    fetchAllSubmissionsAsync
  );
}

export function* ParticipantsSubmissionSagas() {
  yield all([
    call(watchCreateParticipantSubmission),
    call(watchFetchAllSubmissionsAsync)
  ]);
}
