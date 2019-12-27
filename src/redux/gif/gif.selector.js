import {createSelector} from 'reselect'

const selectGif = state => state.gif;

export const selectCurrentGif = createSelector(
    [selectGif],
    (gif)=>gif.gifData
)