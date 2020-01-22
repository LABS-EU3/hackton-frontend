import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { toast } from "react-toastify";
import { axiosWithAuth, selectToken } from "../../utils/api";
import { ProjectSubmissionTypes, submissionsError, setSubmissions } from "./actions";

function* submitProjectAsync({ payload, history }) {
  try {
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/${payload.event_id}/projects`,
      payload
    );
    if (data) {
      yield toast.success(`😀 ${data.message}`);
    }
    yield history.push("/dashboard");
  } catch (error) {
    yield put(submissionsError(error.message));
    if (error.message === "Request failed with status code 404") {
      yield history.push("/not-found");
    }
    yield toast.error(`⚠️ ${error.message}`);
    yield put(submissionsError(error.message));
  }
}

function* watchSubmitProject() {
  yield takeLatest(
    ProjectSubmissionTypes.SUBMIT_PROJECT,
    submitProjectAsync
  );
}

function* fetchAllSubmissionsAsync({ payload }) {
  try {
    const token = yield select(selectToken);
    const { data: { body } } = yield axiosWithAuth(token).get(`/api/events/${payload}/projects`);
    yield put(setSubmissions(body));
  } catch (error) {
    yield toast.error(`⚠️ ${error.message}`);
    yield put(submissionsError(error.message));
  }
}

function* watchFetchAllSubmissionsAsync() {
  yield takeLatest(
    ProjectSubmissionTypes.FETCH_ALL_SUBMISSIONS,
    fetchAllSubmissionsAsync
  );
}

export function* projectSubmissionsSagas() {
  yield all([
    call(watchSubmitProject),
    call(watchFetchAllSubmissionsAsync)
  ]);
}
