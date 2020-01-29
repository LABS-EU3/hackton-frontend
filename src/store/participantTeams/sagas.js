import {
  put,
  takeLatest,
  takeLeading,
  call,
  all,
  select
} from "redux-saga/effects";
import {
  axiosWithAuth,
  selectToken,
  showSuccess,
  handleError
} from "../../utils/api";
import { ParticiPantTeamTypes } from "./actions";

export function* participantTeamSagas() {
  yield all([
    call(watchCreateTeam),
    call(watchCreateTeamName),
    call(watchAddParticipantTeamMember)
  ]);
}

//   function* fetchAllEventsAsync() {
//     try {
//       const token = yield select(selectToken);
//       const {
//         data: { body }
//       } = yield axiosWithAuth(token).get("/api/events");
//       yield put(setEvents(body));
//     } catch (error) {
//       handleError(error, put);
//     }
//   }

//   function* watchFetchAllEvents() {
//     yield takeLeading(EventsTypes.FETCH_ALL_EVENTS, fetchAllEventsAsync);
//   }

function* createTeamAsync({ payload, history }) {
  try {
    history.push(`/dashboard/event/${payload}/participant-teams`);
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

// function* deleteEventAsync({ payload }) {
//   try {
//     const token = yield select(selectToken);
//     const { data } = yield axiosWithAuth(token).post("/api/events/" + payload);
//     yield put(fetchAllEvents());
//     yield showSuccess(`😲 ${data.message}`);
//   } catch (error) {
//     handleError(error, put);
//   }
// }

// function* watchDeleteEvent() {
//   yield takeLatest(EventsTypes.DELETE_EVENT, deleteEventAsync);
// }

// function* updateEventAsync({ payload, history }) {
//   try {
//     const { id, ...eventInfo } = payload;
//     const token = yield select(selectToken);
//     const { data } = yield axiosWithAuth(token).put(
//       "/api/events/" + id,
//       eventInfo
//     );
//     if (data) {
//       yield put(fetchAllEvents());
//       yield showSuccess(`🎉 ${data.message}`);
//       yield history.push("/dashboard");
//     }
//   } catch (error) {
//     handleError(error, put, history);
//   }
// }

// function* watchUpdateEvent() {
//   yield takeLatest(EventsTypes.UPDATE_EVENT, updateEventAsync);
// }

// function* fetchEventCategoriesAsync() {
//   try {
//     const token = yield select(selectToken);
//     const {
//       data: { body }
//     } = yield axiosWithAuth(token).get("/api/event-category");
//     yield put(setEventCategories(body));
//   } catch (error) {
//     handleError(error, put);
//   }
// }

// function* watchFetchEventCategories() {
//   yield takeLatest(
//     EventsTypes.FETCH_EVENT_CATEGORIES,
//     fetchEventCategoriesAsync
//   );
// }

function* addParticipantTeamMemberAsync({ payload, history }) {
  try {
    const { teamId, team_member, eventId } = payload;
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/participant-teams/${teamId}`,
      {
        team_member
      }
    );
    if (data) {
      yield showSuccess(`Added successfully`);
    }
    history.push(`/dashboard/event/${eventId}`);
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

// function* fetchEventSubmissionsAsync({ payload, history }) {
//   try {
//     const token = yield select(selectToken);
//     const { data } = yield axiosWithAuth(token).get(
//       `/api/events/${payload}/projects`
//     );
//     if (data) {
//       history.push(`/dashboard/events/${payload}`);
//     }
//   } catch (error) {
//     handleError(error, put, history);
//   }
// }

// function* watchFetchEventSubmissions() {
//   yield takeLatest(
//     EventsTypes.FETCH_EVENT_SUBMISSIONS,
//     fetchEventSubmissionsAsync
//   );
// }
