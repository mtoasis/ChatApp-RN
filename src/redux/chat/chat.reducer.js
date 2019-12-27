// import ChatActionTypes from './chat.actions'

const INITIAL_STATE ={
    chatData : [],
    error: null
}

const chatReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default chatReducer