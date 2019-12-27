import UserActionTypes from './user.types'
import { userIdVerification } from './user.utils'

const INITIAL_STATE = {
    currentUser: null,
    userId: null,
    userList: [],
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.CHANGE_USER_NAME_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.USERLIST_UPDATE_SUCCESS:
            return {
                ...state,
                userList: action.payload,
                error: null
            }
        case UserActionTypes.INITIALIZE_USER_ID_SUCCESS:
            return {
                ...state,
                userId: userIdVerification(action.payload, state.userId),
                error: null
            }
        case UserActionTypes.INITIALIZE_USER_ID_FAILURE:
        case UserActionTypes.CHANGE_USER_NAME_FAILURE:
        case UserActionTypes.USERLIST_UPDATE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer