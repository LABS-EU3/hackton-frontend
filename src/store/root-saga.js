import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/sagas";
import { eventsSagas } from "./events/sagas";
import { eventParticipantsSagas } from "./eventParticipants/sagas";
import { ParticipantsSubmissionSagas } from './projectSubmission/sagas';

export function* rootSaga() {
  yield all([
    call(userSagas),
    call(eventsSagas),
<<<<<<< HEAD
    call(eventParticipantsSagas)
=======
    call(eventParticipantsSagas),
    call(ParticipantsSubmissionSagas)
>>>>>>> 223d240590f6e07bb90c59896a0f849e73647676
  ]);
}
