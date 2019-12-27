import ChatActionTypes from './chat.types'

export const sendNewMessageStart = (msgInfo) =>({
    type:ChatActionTypes.SEND_MESSAGE_START,
    payload:msgInfo
})

export const sendNewMessageSuccess = ()=>({
    type:ChatActionTypes.SEND_MESSAGE_SUCCESS
})

export const sendNewMessageFailure = (error) =>({
    type:ChatActionTypes.SEND_MESSAGE_FAILURE,
    payload:error
})