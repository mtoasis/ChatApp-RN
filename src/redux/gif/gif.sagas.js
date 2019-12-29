import {takeLatest, put, all, call} from 'redux-saga/effects'
import GifActionTypes from './gif.types'
import { getGifFailure, getGifSuccess } from './gif.action'
import axios from 'axios'

export function* getGifData({payload}){
    const gifSearchTerm = payload
    // console.log(gifSearchTerm)
    try{
        const {data} = yield axios.get('http://api.giphy.com/v1/gifs/search?q=' + gifSearchTerm + '&api_key=dc6zaTOxFJmzC&limit=24')
        yield put(getGifSuccess(data.data))
    }
    catch(error){
        yield put(getGifFailure(error))
    }
}

export function* onGetGifData(){
    yield takeLatest(GifActionTypes.GET_GIF_START, getGifData)
}

export function* gifSagas(){
    yield all([
        call(onGetGifData),
    ])
}