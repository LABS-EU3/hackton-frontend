import { all, call, takeLatest, put, select } from "redux-saga/effects";
import { persistor } from "../../store";
import { UserTypes, setUser, setUserProfile } from "./actions";

import {
  axios,
  axiosWithAuth,
  selectToken,
  showSuccess,
  showError
} from "../../utils/api";

function* loginAsync({ payload, history }) {
  try {
    const {
      data: { body }
    } = yield axios.post("/api/auth/login", payload);
    yield put(setUser(body.token));
    yield history.push("/dashboard");
    yield showSuccess(`😎 Welcome`);
  } catch ({ response }) {
    const { message, statusCode } = response.data;
    if (statusCode === 404) {
      history.push("/not-found");
    }
    yield showError(`⚠️ ${message}`);
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
    showSuccess(`😎 Welcome`);
    yield history.push("/dashboard");
  } catch ({ response }) {
    const { message, statusCode } = response.data;
    if (statusCode === 404) {
      history.push("/not-found");
    }
    yield showError(`⚠️ ${message}`);
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
  } catch ({ response: { message } }) {
    yield showError(message);
  }
}

function* watchSocialAuth() {
  yield takeLatest(UserTypes.SOCIAL_AUTH, socialAuthAsync);
}

function* logout() {
  try {
    yield put(persistor.purge());
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
  } catch ({ response: { message } }) {
    yield showError(`⚠️ ${message}`);
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
  } catch ({ response: { message } }) {
    yield showError(`⚠️ ${message}`);
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
