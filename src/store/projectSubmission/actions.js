export const ProjectSubmissionTypes = {
  FETCH_ALL_SUBMISSIONS: "FETCH_ALL_SUBMISSIONS",
  SET_SUBMISSIONS: "SET_SUBMISSIONS",
  SUBMIT_PROJECT: "SUBMIT_PROJECT",
  GRADE_SUBMISSION: "GRADE_SUBMISSION"
};

export const fetchAllSubmissions = eventId => {
  return {
    type: ProjectSubmissionTypes.FETCH_ALL_SUBMISSIONS,
    payload: eventId
  };
};

export const setSubmissions = submissions => {
  return {
    type: ProjectSubmissionTypes.SET_SUBMISSIONS,
    payload: submissions
  };
};

export const gradeSubmission = (id, grade, history) => {
  return {
    type: ProjectSubmissionTypes.GRADE_SUBMISSION,
    payload: grade,
    id,
    history
  };
};

export const submitProject = (projectData, history) => {
  return {
    type: ProjectSubmissionTypes.SUBMIT_PROJECT,
    payload: projectData,
    history
  };
};
