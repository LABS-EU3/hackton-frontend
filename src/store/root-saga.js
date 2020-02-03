import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/sagas";
import { eventsSagas } from "./events/sagas";
import { eventParticipantsSagas } from "./eventParticipants/sagas";
import { projectSubmissionsSagas } from './projectSubmission/sagas';
import {participantTeamSagas} from "./participantTeams/sagas";


export function* rootSaga() {
  yield all([
    call(userSagas),
    call(eventsSagas),
    call(eventParticipantsSagas),
    call(projectSubmissionsSagas),
    call(participantTeamSagas)
  ]);
}
