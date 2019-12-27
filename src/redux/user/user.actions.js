import UserActionTypes from './user.types'

export const changeUserNameStart = (userInfo)=>({
    type:UserActionTypes.CHANGE_USER_NAME_START,
    payload: userInfo
})

export const changeUserNameSuccess = (userName)=>({
    type:UserActionTypes.CHANGE_USER_NAME_SUCCESS,
    payload: userName
  })

export const changeUserNameFailure = (error)=>({
    type:UserActionTypes.CHANGE_USER_NAME_FAILURE,
    payload: error
})

export const initializeUserIdStart = (userId)=>({
    type:UserActionTypes.INITIALIZE_USER_ID_START,
    payload:userId
})

export const initializeUserIdSuccess = (userId)=>({
    type:UserActionTypes.INITIALIZE_USER_ID_SUCCESS,
    payload: userId
})

export const initializeUserIdFailure = (error)=>({
    type:UserActionTypes.INITIALIZE_USER_ID_FAILURE,
    payload: error
})

export const userListUpdateStart = (userList)=>({
    type:UserActionTypes.USERLIST_UPDATE_START,
    payload:userList
})

export const userListUpdateSuccess = (userList)=>({
    type:UserActionTypes.USERLIST_UPDATE_SUCCESS,
    payload: userList
})

export const userListUpdateFailure = (error)=>({
    type:UserActionTypes.USERLIST_UPDATE_FAILURE,
    payload: error
})