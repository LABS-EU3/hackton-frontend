import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  loginFail,
  loginSuccess,
  registerSuccess,
  registerFail,
  socialAuthSuccess,
  UserTypes
} from "./actions";

import { axios } from "../../utils/api";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";


function* loginAsync({ payload, history }) {
  try {
    const { data } = yield axios.post("/api/auth/login", payload);
    yield put(loginSuccess(data));
   const {email } = jwtDecode(data.token);
    toast.success(`😎 Welcome ${email}`);
    yield history.push("/dashboard");
  } catch (error) {
    yield put(loginFail(error.message));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* registerAsync({ payload, history }) {
  try {
    const { data } = yield axios.post("/api/auth/register", payload);
    yield put(registerSuccess(data));
    const {email } = jwtDecode(data.token);
    toast.success(`😎 Welcome ${email}`);
    yield history.push("/dashboard");
  } catch (error) {
    yield put(registerFail(error.message));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* socialAuthAsync() {
  try {
    const { data } = yield axios.get("/api/auth/token");
    yield put(socialAuthSuccess(data));
  } catch (error) {
    yield put(registerFail(error.message));
  }
}

function* watchSocialAuth() {
  yield takeLatest(UserTypes.SOCIAL_AUTH_LOAD, socialAuthAsync);
}

function* watchLogin() {
  yield takeLatest(UserTypes.LOGIN, loginAsync);
}

function* watchRegister() {
  yield takeLatest(UserTypes.REGISTER, registerAsync);
}

export function* userSagas() {
  yield all([call(watchLogin), call(watchRegister), call(watchSocialAuth)]);
}
