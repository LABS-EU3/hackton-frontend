export const ParticiPantTeamTypes = {
  CREATE_TEAM: "CREATE_TEAM",
  ADD_PARTICIPANT_TEAM_MEMBER: "ADD_PARTICIPANT_TEAM_MEMBER",
  CREATE_TEAM_NAME: "CREATE_TEAM_NAME",
  FETCH_TEAMS: "FETCH_TEAMS",
  FETCH_TEAMMATES: "FETCH_TEAMMATES",
  SET_TEAMS: "SET_TEAMS",
  SET_TEAMMATES: "SET_TEAMMATES",
  SEND_PARTICIPANT_INVITE: "INVITE_PARTICIPANT"
};

export const setTeams = teams => {
  return {
    type: ParticiPantTeamTypes.SET_TEAMS,
    payload: teams
  };
};

export const setTeamMates = teamMates => {
    return {
      type: ParticiPantTeamTypes.SET_TEAMMATES,
      payload: teamMates
    };
  };

export const fetchTeamMates = (data) => {
  return {
    type: ParticiPantTeamTypes.FETCH_TEAMMATES,
    payload: data
  };
};

export const fetchTeams = (data, history) => {
  return {
    type: ParticiPantTeamTypes.FETCH_TEAMS,
    payload: data,
    history
  };
};

export const addParticipantTeamMember = (data, history) => {
  return {
    type: ParticiPantTeamTypes.ADD_PARTICIPANT_TEAM_MEMBER,
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

export const sendParticipantInvite = (data, history) => {
  return {
    type: ParticiPantTeamTypes.SEND_PARTICIPANT_INVITE,
    payload: data,
    history
  }
}
