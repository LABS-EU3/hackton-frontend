import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  loginFail,
  loginSuccess,
  registerSuccess,
  registerFail,
  UserTypes
} from "./actions";

import axios from "axios";

axios.defaults.baseURL = "https://hackton-staging.herokuapp.com";

function* loginAsync({ payload }) {
  try {
    const { data } = yield axios.post("/api/auth/login", payload);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFail(error.message));
  }
}

function* registerAsync({ payload }) {
  try {
    const { data } = yield axios.post("/api/auth/register", payload);
    yield put(registerSuccess(data));
  } catch (error) {
    yield put(registerFail(error.message));
  }
}

function* watchLogin() {
  yield takeLatest(UserTypes.LOGIN, loginAsync);
}

function* watchRegister() {
  yield takeLatest(UserTypes.REGISTER, registerAsync);
}

export function* userSagas() {
  yield all([call(watchLogin), call(watchRegister)]);
}
