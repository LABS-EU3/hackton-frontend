import { all, call, takeLatest, put } from "redux-saga/effects";
import { UserTypes, setUser, userError, resetUser } from "./actions";

import { axios } from "../../utils/api";
import { toast } from "react-toastify";

function* loginAsync({ payload, history }) {
  try {
    const {
      data: { body }
    } = yield axios.post("/api/auth/login", payload);
    yield put(setUser(body.token));
    yield history.push("/dashboard");
    yield toast.success(`😎 Welcome`);
  } catch (error) {
    yield put(userError(error));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* watchLogin() {
  yield takeLatest(UserTypes.LOGIN, loginAsync);
}

function* registerAsync({ payload, history }) {
  try {
    const {
      data: { body }
    } = yield axios.post("/api/auth/register", payload);
    yield put(setUser(body.token));
    toast.success(`😎 Welcome`);
    yield history.push("/dashboard");
  } catch (error) {
    yield put(userError(error));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* watchRegister() {
  yield takeLatest(UserTypes.REGISTER, registerAsync);
}

function* socialAuthAsync() {
  try {
    const {
      data: { body }
    } = yield axios.get("/api/auth/token");
    yield put(setUser(body.token));
  } catch (error) {
    yield put(userError(error));
  }
}

function* watchSocialAuth() {
  yield takeLatest(UserTypes.SOCIAL_AUTH, socialAuthAsync);
}

function* logout() {
  yield put(resetUser());
}

function* watchLogout() {
  yield takeLatest(UserTypes.RESET_USER, logout);
}

export function* userSagas() {
  yield all([
    call(watchLogin),
    call(watchRegister),
    call(watchSocialAuth),
    call(watchLogout)
  ]);
}
