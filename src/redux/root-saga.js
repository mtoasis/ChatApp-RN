import { all, call } from 'redux-saga/effects';
import { userSagas } from '../redux/user/user.sagas'
import { gifSagas } from '../redux/gif/gif.sagas'
import { chatSagas } from '../redux/chat/chat.sagas'

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(gifSagas),
        call(chatSagas),
    ]);
}