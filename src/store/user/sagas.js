import { all, call, takeLatest, put, select } from "redux-saga/effects";
import { persistor } from "../../store";
import { UserTypes, setUser, setUserProfile } from "./actions";

import {
  axios,
  axiosWithAuth,
  selectToken,
  showSuccess,
  showError,
  handleError
} from "../../utils/api";

export function* userSagas() {
  yield all([
    call(watchLogin),
    call(watchRegister),
    call(watchSocialAuth),
    call(watchLogout),
    call(watchFetchUserProfile),
    call(watchUpdateUserProfile),
    call(watchForgotPassword),
    call(watchResetPassword)
  ]);
}

function* loginAsync({ payload }) {
  try {
    const {
      data: { body }
    } = yield axios.post("/api/auth/login", payload);
    yield put(setUser(body.token));
    yield showSuccess(`😎 Welcome`);
  } catch (error) {
    handleError(error, put);
  }
}

function* watchLogin() {
  yield takeLatest(UserTypes.LOGIN, loginAsync);
}

function* registerAsync({ payload }) {
  try {
    const {
      data: { body }
    } = yield axios.post("/api/auth/register", payload);
    yield put(setUser(body.token));
    showSuccess(`😎 Welcome`);
  } catch (error) {
    handleError(error, put);
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
    handleError(error, put);
  }
}

function* watchSocialAuth() {
  yield takeLatest(UserTypes.SOCIAL_AUTH, socialAuthAsync);
}

function* logout() {
  try {
    yield persistor.purge();
  } catch ({ message }) {
    yield showError(message);
  }
}

function* watchLogout() {
  yield takeLatest(UserTypes.PURGE, logout);
}

function* fetchUserProfileAsync({ payload }) {
  try {
    const token = yield select(selectToken);
    const {
      data: {
        body: { user }
      }
    } = yield axiosWithAuth(token).get(`/api/users/${payload}`);
    yield put(setUserProfile(user));
  } catch (error) {
    handleError(error, put);
  }
}

function* watchFetchUserProfile() {
  yield takeLatest(UserTypes.FETCH_USER_PROFILE, fetchUserProfileAsync);
}

function* updateUserProfileAsync({ payload, history }) {
  try {
    const token = yield select(selectToken);
    const {
      data: {
        message,
        body: { userUpdates }
      }
    } = yield axiosWithAuth(token).put("/api/users/profile", payload);
    yield put(setUserProfile(userUpdates));
    yield showSuccess(`🎉 ${message}`);
    yield history.push("/dashboard");
  } catch (error) {
    handleError(error, put);
  }
}

function* watchUpdateUserProfile() {
  yield takeLatest(UserTypes.UPDATE_USER_PROFILE, updateUserProfileAsync);
}

function* forgotPasswordAsync({ payload: email, history }) {
  try {
    const { data } = yield axios.post('/api/auth/forgotpassword', { email });
    if (data) {
      history.push('/resetPasswordConfirmation')
    }
  } catch (error) {
    handleError(error, put);
  }
}

function* watchForgotPassword() {
  yield takeLatest(UserTypes.FORGOT_PASSWORD, forgotPasswordAsync);
}

function* resetPasswordAsync({ payload: password }) {
  try {
    const { data } = yield axios.patch('/api/auth/resetpassword', { password });
    if (data) {
      history.push('/')
    }
  } catch (error) {
    handleError(error, put);
  }
}

function* watchResetPassword() {
  yield takeLatest(UserTypes.RESET_PASSWORD, resetPasswordAsync);
}
