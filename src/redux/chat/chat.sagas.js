import { takeLatest, put, all, call } from 'redux-saga/effects'
import ChatActionTypes from './chat.types'
import { sendChatAction } from '../../socket-io/socket-io.utils'

import { sendNewMessageSuccess, sendNewMessageFailure } from './chat.actions'

export function* sendNewMessage({ payload:{currentUser, userId, newMsg, url} }) {
    try {   
        yield sendChatAction(currentUser, userId, newMsg, url)
        yield put(sendNewMessageSuccess())
    }
    catch (error) {
        yield put(sendNewMessageFailure(error))
    }
}

export function* onSendNewMessage(){
    yield takeLatest(ChatActionTypes.SEND_MESSAGE_START, sendNewMessage)
}

export function* chatSagas(){
    yield all([
        call(onSendNewMessage),
    ])
}