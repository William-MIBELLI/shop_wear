
export enum USER_ACTION_TYPE  {
    SET_CURRENT_USER = 'SET_CURRENT_USER',
    CHECK_USER_SESSION = 'CHECK_USER_SESSION',
    SIGN_IN_WITH_MAIL_START = 'SIGN_IN_WITH_MAIL_START',
    SIGN_IN_WITH_GOOGLE_START = 'SIGN_IN_WITH_GOOGLE_START',
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
    SIGN_IN_FAILED = 'SIGN_IN_FAILED',
    SIGN_UP_START = 'SIGN_UP_START',
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILED = 'SIGN_UP_FAILED',
    SIGN_OUT_START = 'SIGN_OUT_START',
    SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCESS',
    SIGN_OUT_FAILED = 'SIGN_OUT_FAILED'
}

export type UserData = {
    displayName: string,
    email: string,
    createdAt: Date
}

export type UserState = {
   readonly currentUser: UserData | null,
   readonly isLoading: boolean,
   readonly error: Error | null
}