import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { toast } from "react-toastify";

import { axiosWithAuth } from "../../utils/api";
import {
    UserProfileTypes,
    // createUserProfile,
    setProfile,
    profileError,
    fetchUserProfile
} from "./actions";

const selectToken = state => state.currentUser.token;

function* fetchUserProfileAsync() {
    try {
      const token = yield select(selectToken);
      const {
        data: { body }
      } = yield axiosWithAuth(token).get("");
      yield put(setProfile(body));
    } catch (error) {
      yield put(profileError(error.message));
      toast.error(`⚠️ ${error.message}`);
    }
  }
  
  function* watchFetchUserProfile() {
    yield takeLatest(UserProfileTypes.FETCH_USER_PROFILE, fetchUserProfileAsync);
  }

function* updateProfileAsync({ payload, history }) {
  try {
    const { id, ...profileInfo } = payload;
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).put(
      "" + id,
      profileInfo
    );
    if (data) {
      yield put(fetchUserProfile());
      toast.success(`🎉 ${data.message}`);
      yield history.push("/dashboard/user/profile");
    }
  } catch (error) {
    yield put(profileError(error.message));
    toast.error(`⚠️ ${error.message}`);
  }
}

function* watchUpdateProfile() {
  yield takeLatest(UserProfileTypes.UPDATE_PROFILE, updateProfileAsync);
}


export function* userProfileSagas() {
  yield all([
    call(watchFetchUserProfile),
    call(watchUpdateProfile),
  ]);
}
