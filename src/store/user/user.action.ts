import { UserData, USER_ACTION_TYPE } from "./user.types"
import { Action, ActionWithPayload, createAction } from '../../utils/helper'
import { withMatcher } from "../../utils/helper"
import { OptionnalParams } from "../../utils/Firebase"
import { User } from "firebase/auth"

export type SignInFailed = ActionWithPayload<USER_ACTION_TYPE.SIGN_IN_FAILED, Error>

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPE.SET_CURRENT_USER, UserData>

export type CheckUserSession = Action<USER_ACTION_TYPE.CHECK_USER_SESSION>

export type GoogleSignInStart = Action<USER_ACTION_TYPE.SIGN_IN_WITH_GOOGLE_START>

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPE.SIGN_IN_SUCCESS, UserData>

export type SignInWIthMailStart = ActionWithPayload<USER_ACTION_TYPE.SIGN_IN_WITH_MAIL_START, { email: string, password: string}>

export type SignUpStart = ActionWithPayload<USER_ACTION_TYPE.SIGN_UP_START, { email: string, password: string, displayName: string}>

export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user: User, additionalDetails: OptionnalParams}>

export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPE.SIGN_UP_FAILED, Error>

export type SignOutStart = Action<USER_ACTION_TYPE.SIGN_OUT_START>

export type SignOutSuccess = Action<USER_ACTION_TYPE.SIGN_OUT_SUCCESS>

export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPE.SIGN_OUT_FAILED, Error>

export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => {
    return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)
})

export const signInFailed = withMatcher((error: Error) : SignInFailed => {
    return createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error)
})

export const checkUserSession = withMatcher((): CheckUserSession => {
    return createAction(USER_ACTION_TYPE.CHECK_USER_SESSION)
})

export const googleSignInStart = withMatcher((): GoogleSignInStart => {
    return createAction(USER_ACTION_TYPE.SIGN_IN_WITH_GOOGLE_START)
})

export const signInSuccess = withMatcher((user: UserData & { id: string}): SignInSuccess => {
    return createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user)
})

export const signInWithMailStart = withMatcher((email: string, password: string): SignInWIthMailStart => {
    return createAction(USER_ACTION_TYPE.SIGN_IN_WITH_MAIL_START, {email, password})
})

export const signUpStart = withMatcher((email: string, password: string, displayName: string): SignUpStart => {
    return createAction(USER_ACTION_TYPE.SIGN_UP_START, {email, password, displayName})
})

export const signUpSuccess = withMatcher((user: User,  additionalDetails: OptionnalParams): SignUpSuccess => {
    return createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, {user, additionalDetails})
})

export const signUpFailed = withMatcher((error: Error): SignUpFailed => {
    return createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error)
})

export const signOutStart = withMatcher((): SignOutStart => {
    return createAction(USER_ACTION_TYPE.SIGN_OUT_START)
})

export const  signOutSuccess = withMatcher((): SignOutSuccess => {
    return createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS)
})

export const signOutFailed = withMatcher((error: Error): SignOutFailed => {
    return createAction(USER_ACTION_TYPE.SIGN_OUT_FAILED, error)
})