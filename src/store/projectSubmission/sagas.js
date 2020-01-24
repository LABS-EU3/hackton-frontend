import { put, takeLatest, call, all, select } from "redux-saga/effects";
import {
  axiosWithAuth,
  selectToken,
  showError,
  showSuccess
} from "../../utils/api";
import {
  ProjectSubmissionTypes,
  fetchAllSubmissions,
  setSubmissions
} from "./actions";

function* submitProjectAsync({ payload, history }) {
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
  } catch ({ response }) {
    const { message, statusCode } = response.data;
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
      `/api/events/${payload}/projects`,
      payload
    );
    yield put(setSubmissions(body));
  } catch ({ response }) {
    const { message } = response.data;
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
    if (data) {
      history.push(` /dashboard/event/${id}/projects`);
    }
  } catch ({ response }) {
    const { message } = response.data;
    yield showError(`⚠️ ${message}`);
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
