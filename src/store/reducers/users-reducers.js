import * as actionTypes from '../actions/action-types';


const initialState = {
    allUsers: [],
    errors: null,
    userProfile: null,
    profileError: null,
    spinner: false
}

const allUsersReducer = (state=initialState, action) => {
    switch(action.type) {
        case(actionTypes.FETCH_USERS):
            return {
                ...state,
                allUsers: state.allUsers.concat(action.payload)
            }
        case(actionTypes.ERRORS):
            return {
                ...state,
                errors: state.errors = action.errors
            }
        case(actionTypes.POST_USER_PROFILE):
            return {
                ...state,
                userProfile: state.userProfile = action.userProfile
            }
        case(actionTypes.ERROR_UPLOADING_PROFILE):
            return {
                ...state,
                profileError: state.profileError = action.error
            }
        case(actionTypes.SPINNER_UPLOADING_PROFILE):
            return {
                ...state,
                spinner: state.spinner = action.spinner
            }
        default:
            return state;
    }
}

export default allUsersReducer;