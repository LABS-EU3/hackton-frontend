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
    call(watchResetPassword),
    call(watchVerifyEmail)
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
    yield handleError(error, put);
  }
}

function* watchLogin() {
  yield takeLatest(UserTypes.LOGIN, loginAsync);
}

function* registerAsync({ payload: { team, role, email, password } }) {
  const teamRegistration = () => axios.post(`/api/auth/register/${team}?role=${role}
`, { email, password });
  const participantRegistration = () => axios.post(`/api/auth/register/${team}`, { email, password });
  const regularRegistration = () => axios.post("/api/auth/register", { email, password });
  try {
    const {
      data: { body }
    } = yield (team && role ? teamRegistration() : team ? participantRegistration() : regularRegistration());

    yield put(setUser(body.token));
    showSuccess(`😎 Welcome`);
  } catch (error) {
    yield handleError(error, put);
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
    yield handleError(error, put);
  }
}

function* watchSocialAuth() {
  yield takeLatest(UserTypes.SOCIAL_AUTH, socialAuthAsync);
}

function* logout({ history }) {
  try {
    yield persistor.purge();
    yield history.push("/login");
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
    yield handleError(error, put);
  }
}

function* watchFetchUserProfile() {
  yield takeLatest(UserTypes.FETCH_USER_PROFILE, fetchUserProfileAsync);
}

function* updateUserProfileAsync({ payload, history }) {
  try {
    // console.log("in saga", payload)
    const token = yield select(selectToken);
    const {
      data: {
        message,
        body: { userUpdates }
      }
    } = yield axiosWithAuth(token).put("/api/users/profile", payload);
    yield put(setUserProfile(userUpdates));
    yield showSuccess(`🎉 ${message}`);
    yield history.push("/dashboard/profile");
  } catch (error) {
    yield handleError(error, put);
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
    yield handleError(error, put);
  }
}

function* watchForgotPassword() {
  yield takeLatest(UserTypes.FORGOT_PASSWORD, forgotPasswordAsync);
}

function* resetPasswordAsync({ payload: password, history }) {
  try {
    const { data } = yield axios.patch('/api/auth/resetpassword', { password });
    if (data) {
      return history.push('/login');
    }
  } catch (error) {
    yield handleError(error, put);
  }
}

function* watchResetPassword() {
  yield takeLatest(UserTypes.RESET_PASSWORD, resetPasswordAsync);
}

function* veryEmailAsync() {
  try {
    const { data } = axios.post('/api/auth/verify_email')
    if (data) {
      showSuccess(data.message)
    }
  } catch ({ response: { message } }) {
    yield showError(message);
  }
}

function* watchVerifyEmail() {
  yield takeLatest(UserTypes.VERIFY_EMAIL, veryEmailAsync);
}
