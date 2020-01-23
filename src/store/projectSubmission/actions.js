export const ParticipantSubmissionTypes = {
  CREATE_SUBMISSION: "CREATE_SUBMISSION",
  FETCH_ALL_SUBMISSIONS: "FETCH_ALL_SUBMISSIONS",
  SET_SUBMISSIONS: "SET_SUBMISSIONS"
};

export const createSubmission = (submissionData, history) => {
  return {
    type: ParticipantSubmissionTypes.CREATE_SUBMISSION,
    payload: submissionData,
    history
  };
};

export const fetchAllSubmissions = eventId => {
  return {
    type: ParticipantSubmissionTypes.FETCH_ALL_SUBMISSIONS,
    payload: eventId
  };
};

export const setSubmissions = submission => {
  return {
    type: ParticipantSubmissionTypes.SET_SUBMISSIONS,
    payload: submission
  };
};
