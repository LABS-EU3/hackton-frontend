import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { toast } from "react-toastify";
import { axiosWithAuth } from "../../utils/api";
import { ProjectSubmissionTypes, createSubmission } from "./actions";

const userToken = state => state.currentUser.token;

function createEventAsync({ payload, history }) {
    try {
        const token = yield select(userToken);
        const { data } = yield axiosWithAuth(token).post(`/api/events/${id}/projects/submissions`, payload);
        if (data) {
            yield 
        }
    }
}