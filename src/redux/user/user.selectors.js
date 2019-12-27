import {createSelector} from 'reselect'

const selectUser = state => state.user;

export const selectCurrentuser = createSelector(
    [selectUser],
    (user)=>user.currentUser
)

export const selectUserId = createSelector(
    [selectUser],
    (user)=>user.userId
)

export const selectUserList = createSelector(
    [selectUser],
    (user)=>user.userList
)