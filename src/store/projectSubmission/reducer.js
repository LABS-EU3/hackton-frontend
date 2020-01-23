import { ProjectSubmissionTypes } from "./actions";

export const projectSubmissionsReducer = (projectSubmissions = [], action) => {
    switch (action.type) { 
        case ProjectSubmissionTypes.SET_SUBMISSIONS:
            return action.payload;
        default:
            return projectSubmissions;
    }
}