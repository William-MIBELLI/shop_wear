
import { createContext, useEffect, useReducer } from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/Firebase'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

const ACTION_TYPE = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {

    const { type, payload } = action
    switch(type){
        case ACTION_TYPE.SET_CURRENT_USER:
        return{
            currentUser: payload
        }
        default:
            throw new Error(`action type ${type} non gérée`)
    }
}

export const UserProvider = ({ children }) => {

    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE)

    const setCurrentUser = (user) => {
        dispatch({type:ACTION_TYPE.SET_CURRENT_USER, payload:user})
    }
    
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log('user : ', user)
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })

        return unsubscribe
    },[])

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}