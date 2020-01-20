export const ProjectSubmissionTypes = {
    CREATE_SUBMISSION: "CREATE_SUBMISSION",
    FETCH_ALL_SUBMISSIONS: "FETCH_ALL_SUBMISSIONS",
    SUBMISSIONS_ERROR: "SUBMISSIONS_ERROR"
}

export const createSubmission = (submissionData, history) => {
    return {
        type: ProjectSubmissionTypes.CREATE_SUBMISSION,
        payload: submissionData,
        history
    };
}

export const fetchAllSubmissions = ( id ) => {
    return {
        type: ProjectSubmissionTypes.FETCH_ALL_SUBMISSIONS,
        payload: id
    }
}

export const submissionsError = (errorMessage) => {
    return {
        type: ProjectSubmissionTypes.SUBMISSIONS_ERROR,
        errorMessage
    }
}