import { ParticipantSubmissionTypes } from "./actions";

const initialState = {
    participantSubmissionData = []
}

export const participantSubmissionReducer = ( participantSubmission = initialState, action ) => {
    switch (action.type) {
        case ParticipantSubmissionTypes.CREATE_SUBMISSION:
            return {
                ...participantSubmission,
                participantSubmissionData: action.payload
            }
        }
        console.log("submission data", participantSubmissionData)
}