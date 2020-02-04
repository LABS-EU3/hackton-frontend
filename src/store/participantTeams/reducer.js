import { ParticiPantTeamTypes } from "./actions";

const initialState = {
  team: {},
  teamMate: {},
  fetchTeamData: [],
  fetchTeamMateData: [],
  isLoading: false,
  inviteSent: false
};

export const participantTeamsReducer = (teams = initialState, action) => {
  switch (action.type) {
    case ParticiPantTeamTypes.ADD_PARTICIPANT_TEAM_MEMBER:
      return {
        ...teams,
        teamMate: action.payload,
        isLoading: false
      };
    case ParticiPantTeamTypes.CREATE_TEAM_NAME:
      return {
        ...teams,
        team: action.payload,
        isLoading: false
      };
    case ParticiPantTeamTypes.FETCH_TEAMS:
      return {
        ...teams,
        isLoading: true
      };
    case ParticiPantTeamTypes.FETCH_TEAMMATES:
      return {
        ...teams,
        isLoading: true
      };
    case ParticiPantTeamTypes.SET_TEAMMATES:
      return {
        ...teams,
        fetchTeamMateData: action.payload,
        isLoading: false
      };
    case ParticiPantTeamTypes.SET_TEAMS:
      return {
        ...teams,
        fetchTeamData: action.payload,
        isLoading: false
      };
    case ParticiPantTeamTypes.SEND_PARTICIPANT_INVITE:
      return {
        ...teams,
        inviteSent: true
      }
    default:
      return teams;
  }
};
