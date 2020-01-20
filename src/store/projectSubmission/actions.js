export const ProjectSubmissionTypes = {
    CREATE_EVENT: "CREATE_EVENT",
    FETCH_ALL_SUBMISSIONS: "FETCH_ALL_SUBMISSIONS"
}

export const createEvent = (eventData, history) => {
    return {
        type: ProjectSubmissionTypes.CREATE_EVENT,
        payload: eventData,
        history
    };
}

export const fetchAllSubmissions = ( id ) => {
    return {
        type: ProjectSubmissionTypes.FETCH_ALL_SUBMISSIONS,
        payload: id
    }
}