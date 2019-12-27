import {takeLatest, put, all, call} from 'redux-saga/effects'
import UserActionTypes from './user.types'
import {
    changeUserNameSuccess, 
    changeUserNameFailure, 
    initializeUserIdSuccess, 
    initializeUserIdFailure,
    userListUpdateSuccess,
    userListUpdateFailure
} from './user.actions'

import {sendUserNameUpdate} from '../../socket-io/socket-io.utils'

export function* initializeUserId({payload}){
    const userId = payload
    try{        
        yield put(initializeUserIdSuccess(userId))
    }
    catch(error){
        yield put(initializeUserIdFailure(error))
    }
}

export function* changeUserName({payload}) {
    try{
        const {oldUserName, newUserName, userId} = payload;
        yield sendUserNameUpdate(oldUserName, newUserName, userId)
        yield put(changeUserNameSuccess(newUserName))
    }
    catch(error){
        yield put(changeUserNameFailure(error))
    }
}

export function* userListUpdate({payload}){
    const userList = payload
    try{
        yield put(userListUpdateSuccess(userList))
    }
    catch(error){
        yield put(userListUpdateFailure(error))
    }
}

export function* onUserListUpdate(){
    yield takeLatest(UserActionTypes.USERLIST_UPDATE_START, userListUpdate)
}

export function* onChangeUserNameStart(){
    yield takeLatest(UserActionTypes.CHANGE_USER_NAME_START, changeUserName)
}

export function* onInitializeUserId(){
    yield takeLatest(UserActionTypes.INITIALIZE_USER_ID_START, initializeUserId)
}

export function* userSagas(){
    yield all([
        call(onChangeUserNameStart),
        call(onInitializeUserId),
        call(onUserListUpdate),
    ])
}