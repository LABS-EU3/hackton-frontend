import { all, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { loginFail, loginSuccess, UserTypes } from "./actions";

function* loginAsync({ payload }) {
  try {
    const { data } = yield axios.post("/login", payload);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFail(error.message));
  }
}

function* watchLogin() {
  yield takeLatest(UserTypes.LOGIN, loginAsync);
}

export function* userSagas() {
  yield all([call(watchLogin)]);
}
