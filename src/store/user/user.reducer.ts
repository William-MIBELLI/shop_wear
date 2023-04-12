import { UserState, USER_ACTION_TYPE } from "./user.types"
import { AnyAction } from "redux"
import { setCurrentUser, signInSuccess, checkUserSession, googleSignInStart, signInWithMailStart, signUpStart, signOutSuccess} from './user.action'

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction): UserState => {

    if(setCurrentUser.match(action) || signInSuccess.match(action)){
        return{
            ...state, currentUser: action.payload, isLoading: false
        }
    }

    if(checkUserSession.match(action) || googleSignInStart.match(action) || signInWithMailStart.match(action) || signUpStart.match(action)){
        return{
            ...state, isLoading: true
        }
    }

    if(signOutSuccess.match(action)){
        return{
            ...state, currentUser: null, isLoading: false
        }
    }

    return state

}