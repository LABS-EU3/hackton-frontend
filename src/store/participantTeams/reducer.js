import { ParticiPantTeamTypes } from "./actions";

const initialState = {
  team: {},
  teamMate: {},
  isLoading: false
};

export const participantTeamsReducer = (teams = initialState, action) => {
  switch (action.type) {
    case ParticiPantTeamTypes.CREATE_TEAM:
      return {
        ...teams,
        isLoading: false
      };
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
    default:
      return teams;
  }
};
