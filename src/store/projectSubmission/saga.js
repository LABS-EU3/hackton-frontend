import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { toast } from "react-toastify";
import { axiosWithAuth } from "../../utils/api";
import { ProjectSubmissionTypes, createSubmission, fetchAllSubmissions, submissionsError } from "./actions";

const userToken = state => state.currentUser.token;

function* createProjectSubmissionAsync({ payload, history }) {
    try {
        const token = yield select(userToken);
        const { data } = yield axiosWithAuth(token).post(`/api/events/${payload.event_id}/projects/submissions`, payload);
        if (data) {
            yield put(fetchAllSubmissions(payload.event_id));
            toast.success(`😀 ${data.message}`);
        }
    } catch (error) {
        yield put(submissionsError(error.message));
        toast.error(`⚠️ ${error.message}`);
    }
}

function* watchCreateProjectSubmission() {
    yield takeLatest(ProjectSubmissionTypes.CREATE_SUBMISSION, createProjectSubmissionAsync)
}