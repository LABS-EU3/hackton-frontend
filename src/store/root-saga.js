import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/sagas";
import { eventsSagas } from "./events/sagas";

export function* rootSaga() {
  yield all([call(userSagas), call(eventsSagas)]);
}
