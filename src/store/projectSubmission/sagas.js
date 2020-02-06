import { put, takeLatest, call, all, select } from "redux-saga/effects";
import {
  axiosWithAuth,
  selectToken,
  showSuccess,
  handleError
} from "../../utils/api";
import {
  ProjectSubmissionTypes,
  fetchAllSubmissions,
  setSubmissions
} from "./actions";

export function* projectSubmissionsSagas() {
  yield all([
    call(watchSubmitProject),
    call(watchFetchAllSubmissionsAsync),
    call(watchGradeSubmission)
  ]);
}

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
  } catch (error) {
    yield handleError(error, put, history);
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
  } catch (error) {
    yield handleError(error, put);
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
      history.push(`/dashboard/event/${payload.project_event_id}/projects`);
    }
  } catch (error) {
    yield handleError(error, put, history);
  }
}

function* watchGradeSubmission() {
  yield takeLatest(
    ProjectSubmissionTypes.GRADE_SUBMISSION,
    gradeSubmissionAsync
  );
}
