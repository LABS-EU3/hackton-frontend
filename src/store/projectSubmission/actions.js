export const ProjectSubmissionTypes = {
    CREATE_EVENT: "CREATE_EVENT"
}

export const createEvent = (eventData, history) => {
    return {
        type: ProjectSubmissionTypes.CREATE_EVENT,
        payload: eventData,
        history
    };
}