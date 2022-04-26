import {UserActionType} from './user.actionType'
export const setCurrentUser = user => ({
    type: UserActionType.SET_CURRENT_USER,
    payload:user 
})