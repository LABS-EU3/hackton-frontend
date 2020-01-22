import { all, call, takeLatest, put, select } from "redux-saga/effects";
import { UserTypes, setUser, userError, resetUser, setUserProfile } from "./actions";

import { axios, axiosWithAuth, selectToken } from "../../utils/api";
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
    if(error.message === "Request failed with status code 404" ) {
      history.push("/not-found");
    }
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
    if(error.message === "Request failed with status code 404" ) {
      history.push("/not-found");
    }
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

function* fetchUserProfileAsync({payload}) {
  try {
    const token = yield select(selectToken);
    const {
      data: { body:{user} }
    } = yield axiosWithAuth(token).get(`/api/users/${payload}`);
    yield console.log('USER', user);
    yield put(setUserProfile(user));
  } catch (error) {
    yield put(userError(error.message));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* watchFetchUserProfile() {
  yield takeLatest(UserTypes.FETCH_USER_PROFILE, fetchUserProfileAsync);
}

function* updateUserProfileAsync({ payload, history }) {
  try {
    const token = yield select(selectToken);
    const { data: {message, body: { userUpdates }} } = yield axiosWithAuth(token).put(
      "/api/users/profile",
      payload
    );
      yield put(setUserProfile(userUpdates))
      yield toast.success(`🎉 ${message}`);
      yield history.push("/dashboard");
  } catch (error) {
    yield put(userError(error.message));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* watchUpdateUserProfile() {
  yield takeLatest(UserTypes.UPDATE_USER_PROFILE, updateUserProfileAsync);
}

export function* userSagas() {
  yield all([
    call(watchLogin),
    call(watchRegister),
    call(watchSocialAuth),
    call(watchLogout),
    call(watchFetchUserProfile),
    call(watchUpdateUserProfile)
  ]);
}
