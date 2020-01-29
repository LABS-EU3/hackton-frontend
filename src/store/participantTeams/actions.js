export const ParticiPantTeamTypes = {
  CREATE_TEAM: "CREATE_TEAM",
  ADD_PARTICIPANT_TEAM_MEMBER: "ADD_PARTICIPANT_TEAM_MEMBER",
  CREATE_TEAM_NAME: "CREATE_TEAM_NAME"
};

export const addParticipantTeamMember = (data, history) => {
  return {
    type: ParticiPantTeamTypes.ADD_PARTICIPANT_TEAM_MEMBER,
    payload: data,
    history
  };
};

export const createTeam = (data, history) => {
  return {
    type: ParticiPantTeamTypes.CREATE_TEAM,
    payload: data,
    history
  };
};

export const createTeamName = (data, history) => {
  return {
    type: ParticiPantTeamTypes.CREATE_TEAM_NAME,
    payload: data,
    history
  };
};
