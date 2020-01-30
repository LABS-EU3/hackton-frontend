import { put, takeLatest, call, all, select } from "redux-saga/effects";
import {
  axiosWithAuth,
  selectToken,
  showSuccess,
  handleError
} from "../../utils/api";
import {
  ParticiPantTeamTypes,
  setTeams,
  setTeamMates,
  fetchTeams
} from "./actions";

export function* participantTeamSagas() {
  yield all([
    call(watchCreateTeam),
    call(watchCreateTeamName),
    call(watchAddParticipantTeamMember),
    call(watchFetchTeamAsync),
    call(watchFetchTeamMateAsync)
  ]);
}

function* createTeamAsync({ payload, history }) {
  try {
    yield history.push(`/dashboard/event/${payload}/participant-teams`);
  } catch (error) {
    handleError(error, put, history);
  }
}

function* watchCreateTeam() {
  yield takeLatest(ParticiPantTeamTypes.CREATE_TEAM, createTeamAsync);
}

function* createTeamNameAsync({ payload, history }) {
  try {
    const token = yield select(selectToken);
    const { eventId } = payload;
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/${eventId}/participant-teams`,
      payload
    );
    if (data) {
      yield showSuccess(`😀 ${data.message}`);
      yield put(fetchTeams(eventId));
    }
    const teamBody = data.body;
    let teamId;
    teamBody.map(team => {
      teamId = team.id;
      return teamId;
    });
    yield history.push(
      `/dashboard/event/participant-teams/${teamId}/add-members`
    );
  } catch (error) {
    handleError(error, put, history);
  }
}

function* watchCreateTeamName() {
  yield takeLatest(ParticiPantTeamTypes.CREATE_TEAM_NAME, createTeamNameAsync);
}

function* fetchTeamAsync({ payload }) {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get(
      `/api/events/${payload}/participant-teams`
    );
    yield put(setTeams(body));
  } catch (error) {
    handleError(error, put);
  }
}

function* watchFetchTeamAsync() {
  yield takeLatest(ParticiPantTeamTypes.FETCH_TEAMS, fetchTeamAsync);
}

function* fetchTeamMatesAsync({ payload, history }) {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get(
      `/api/events/participant-teams/${payload}/members`
    );
    yield put(setTeamMates(body));
  } catch (error) {
    handleError(error, put, history);
  }
}

function* watchFetchTeamMateAsync() {
  yield takeLatest(ParticiPantTeamTypes.FETCH_TEAMMATES, fetchTeamMatesAsync);
}

function* addParticipantTeamMemberAsync({ payload, history }) {
  try {
    const { team_id, team_member, eventId } = payload;
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/participant-teams/${team_id}`,
      {
        team_member
      }
    );
    if (data) {
      yield showSuccess(`Added successfully`);
    }
    history.push(`/dashboard/event/${eventId}/participant-teams`);
  } catch (error) {
    handleError(error, put, history);
  }
}

function* watchAddParticipantTeamMember() {
  yield takeLatest(
    ParticiPantTeamTypes.ADD_PARTICIPANT_TEAM_MEMBER,
    addParticipantTeamMemberAsync
  );
}
