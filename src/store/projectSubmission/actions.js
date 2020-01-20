export const ParticipantSubmissionTypes = {
    CREATE_SUBMISSION: "CREATE_SUBMISSION",
    FETCH_ALL_SUBMISSIONS: "FETCH_ALL_SUBMISSIONS",
    SUBMISSIONS_ERROR: "SUBMISSIONS_ERROR"
}

export const createSubmission = (submissionData, history) => {
    return {
        type: ParticipantSubmissionTypes.CREATE_SUBMISSION,
        payload: submissionData,
        history
    };
}

export const fetchAllSubmissions = ( id ) => {
    return {
        type: ParticipantSubmissionTypes.FETCH_ALL_SUBMISSIONS,
        payload: id
    }
}

export const submissionsError = (errorMessage) => {
    return {
        type: ParticipantSubmissionTypes.SUBMISSIONS_ERROR,
        errorMessage
    }
}