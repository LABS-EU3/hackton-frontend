import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/sagas";

export function* rootSaga() {
  yield all([call(userSagas)]);
}
