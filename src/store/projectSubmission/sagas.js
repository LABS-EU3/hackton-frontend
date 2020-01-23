import { put, takeLatest, call, all, select } from "redux-saga/effects";
import {
  axiosWithAuth,
  selectToken,
  showError,
  showSuccess
} from "../../utils/api";
import {
  ParticipantSubmissionTypes,
  fetchAllSubmissions,
  setSubmissions
} from "./actions";

function* createParticipantSubmissionAsync({ payload, history }) {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/${payload.event_id}/projects`,
      payload
    );

    if (data) {
      yield put(fetchAllSubmissions(payload.event_id));
      yield showSuccess(`😀 ${data.message}`);
    }
    yield history.push("/dashboard");
  } catch ({ response: { message, statusCode } }) {
    if (statusCode === 404) {
      history.push("/not-found");
    }
    yield showError(`⚠️ ${message}`);
  }
}

function* watchSubmitProject() {
  yield takeLatest(ProjectSubmissionTypes.SUBMIT_PROJECT, submitProjectAsync);
}

function* fetchAllSubmissionsAsync({ payload }) {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get(
      `/api/events/${payload.event_id}/projects/submissions`,
      payload
    );
    yield put(setSubmissions(body));
  } catch ({ response: { message } }) {
    yield showError(`⚠️ ${message}`);
  }
}

function* watchFetchAllSubmissionsAsync() {
  yield takeLatest(
    ProjectSubmissionTypes.FETCH_ALL_SUBMISSIONS,
    fetchAllSubmissionsAsync
  );
}

function* gradeSubmissionAsync({ id, payload, history }) {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/projects/${id}/grading`,
      payload
    );
    yield console.log("RESPONSE", data);
    yield history.push(`/dashboard/event/${payload.project_event_id}/projects`);
  } catch (error) {
    yield toast.error(`⚠️ ${error.message}`);
    yield put(submissionsError(error.message));
  }
}

function* watchGradeSubmission() {
  yield takeLatest(
    ProjectSubmissionTypes.GRADE_SUBMISSION,
    gradeSubmissionAsync
  );
}

export function* projectSubmissionsSagas() {
  yield all([
    call(watchSubmitProject),
    call(watchFetchAllSubmissionsAsync),
    call(watchGradeSubmission)
  ]);
}
