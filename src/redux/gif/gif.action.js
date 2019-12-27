import GifActionTypes from './gif.types'

export const getGifStart = (gifSearchTerm)=>({
    type:GifActionTypes.GET_GIF_START,
    payload: gifSearchTerm
})

export const getGifSuccess = (gifData)=>({
    type:GifActionTypes.GET_GIF_SUCCESS,
    payload: gifData
  })

export const getGifFailure = (error)=>({
    type:GifActionTypes.GET_GIF_FAILURE,
    payload: error
})

