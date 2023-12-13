import * as actionTypes from '../actions/action-types';


const initialState = {
    allUsers: [],
    userProfile: null
}

const allUsersReducer = (state=initialState, action) => {
    switch(action.type) {
        case(actionTypes.FETCH_USERS):
            return {
                ...state,
                allUsers: state.allUsers.concat(action.payload)
            }
        case(actionTypes.POST_USER_PROFILE):
            return {
                ...state,
                userProfile: state.userProfile = action.userProfile
            }
        default:
            return state;
    }
}

export default allUsersReducer;