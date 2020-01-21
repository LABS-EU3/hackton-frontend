import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { toast } from "react-toastify";
import { axiosWithAuth } from "../../utils/api";
import { ParticipantSubmissionTypes, fetchAllSubmissions, submissionsError } from "./actions";

const userToken = state => state.currentUser.token;

function* createParticipantSubmissionAsync({ payload, history }) {
    const { event_id: id, ...submissionData } = payload;
    try {
        const token = yield select(userToken);
        const { data } = yield axiosWithAuth(token).post(`/api/events/${id}/projects/submissions`, submissionData);
        console.log('DATA', data);
        if (data) {
            yield put(fetchAllSubmissions(payload.event_id));
            toast.success(`😀 ${data.message}`);
        }
    } catch (error) {
        yield put(submissionsError(error.message));
        toast.error(`⚠️ ${error.message}`);
        alert(error)
    }
}

function* watchCreateParticipantSubmission() {
    yield takeLatest(ParticipantSubmissionTypes.CREATE_SUBMISSION, createParticipantSubmissionAsync)
}

export function* ParticipantsSubmissionSagas() {
    yield all([
      call(watchCreateParticipantSubmission)
    ]);
}