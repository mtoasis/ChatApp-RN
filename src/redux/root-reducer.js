import {combineReducers} from 'redux'

import userReducer from './user/user.reducer'
import gifReducer from './gif/gif.reducer'
import chatReducer from './chat/chat.reducer'

const rootReducer = combineReducers({
    user: userReducer,
    gif: gifReducer,
    chat:chatReducer,
})

export default rootReducer