export const ParticipantSubmissionTypes = {
    CREATE_SUBMISSION: "CREATE_SUBMISSION",
    FETCH_ALL_SUBMISSIONS: "FETCH_ALL_SUBMISSIONS",
    SUBMISSIONS_ERROR: "SUBMISSIONS_ERROR",
    EDIT_SUBMISSION: "EDIT_SUBMISSION"
}

export const createSubmission = (submissionData, history) => {
    return {
        type: ParticipantSubmissionTypes.CREATE_SUBMISSION,
        payload: submissionData,
        history
    };
}

export const fetchAllSubmissions = ( eventId ) => {
    return {
        type: ParticipantSubmissionTypes.FETCH_ALL_SUBMISSIONS,
        payload: eventId
    }
}

export const submissionsError = (errorMessage) => {
    return {
        type: ParticipantSubmissionTypes.SUBMISSIONS_ERROR,
        errorMessage
    }
}

export const editSubmission = (editSubmissionData, history) => {
    return {
        type: ParticipantSubmissionTypes.EDIT_SUBMISSION,
        payload: editSubmissionData,
        history
    }
}