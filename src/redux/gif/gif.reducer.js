import GifActionTypes from './gif.types'

const INITIAL_STATE = {
    gifData: [],
    error: null
}

const gifReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GifActionTypes.GET_GIF_SUCCESS:
            return {
                ...state,
                gifData: action.payload,
                error: null
            }
        case GifActionTypes.GET_GIF_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default gifReducer