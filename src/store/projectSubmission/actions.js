export const ProjectSubmissionTypes = {
    SUBMIT_PROJECT: "SUBMIT_PROJECT",
    FETCH_ALL_SUBMISSIONS: "FETCH_ALL_SUBMISSIONS",
    SUBMISSIONS_ERROR: "SUBMISSIONS_ERROR",
    SET_SUBMISSIONS:'SET_SUBMISSIONS',
    GRADE_SUBMISSION: 'GRADE_SUBMISSION'
}

export const submitProject = (submissionData, history) => {
    return {
        type: ProjectSubmissionTypes.SUBMIT_PROJECT,
        payload: submissionData,
        history
    };
}

export const fetchAllSubmissions = ( eventId ) => {
    return {
        type: ProjectSubmissionTypes.FETCH_ALL_SUBMISSIONS,
        payload: eventId
    }
}

export const submissionsError = (errorMessage) => {
    return {
        type: ProjectSubmissionTypes.SUBMISSIONS_ERROR,
        errorMessage
    }
}

export const gradeSubmission = ( grade, history ) => {
    return {
        type: ProjectSubmissionTypes.GRADE_SUBMISSION,
        payload: grade,
        history
    }
}

export const setSubmissions = submissions => {
    return {
        type: ProjectSubmissionTypes.SET_SUBMISSIONS,
        payload: submissions
    }
}
