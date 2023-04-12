import { takeLatest, all, call, put } from "typed-redux-saga";
import { UserData, USER_ACTION_TYPE } from "./user.types";
import {
  getCurrentuser,
  createUserDocumentFromAuth,
  signInWithGoogle,
  signInWithMail,
  createUserWithEmail,
  signOutUser,
  OptionnalParams
} from "../../utils/Firebase";
import { User } from "firebase/auth";
import { signInFailed, signInSuccess, SignInWIthMailStart, signOutFailed, signOutSuccess, SignUpStart, SignUpSuccess, signUpSuccess } from "./user.action";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { AnyAction } from "redux";

export function* getSnapShotFromUserAuth(userAuth: User, additionalDetails?: OptionnalParams) {
  try {
    const resp = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);
    if(resp){
      const user = { id: resp.id, ...resp.data() };
      yield* put(signInSuccess(user));
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentuser);
    if (userAuth) {
      yield* call(getSnapShotFromUserAuth, userAuth);  
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogleStart() {
  try {

    const { user } = yield* call(signInWithGoogle);

    if(user){
      yield* call(getSnapShotFromUserAuth, user);

    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithMailStart(action: SignInWIthMailStart) {

  const { email, password } = action.payload;

  try {
    const userCredential = yield* call(signInWithMail, email, password);
    
    if(userCredential){
      const { user } = userCredential
      yield* call(getSnapShotFromUserAuth, user);
    }

  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignInWithGoogle() {
  yield* takeLatest(
    USER_ACTION_TYPE.SIGN_IN_WITH_GOOGLE_START,
    signInWithGoogleStart
  );
}

export function* onSignInWithMail() {
  yield* takeLatest(
    USER_ACTION_TYPE.SIGN_IN_WITH_MAIL_START,
    signInWithMailStart
  );
}

export function* signUpStart(action: SignUpStart) {

    const { email, password, displayName } = action.payload

    try{
        const userCredential = yield* call(createUserWithEmail, email, password)

        if(userCredential){
          const { user } = userCredential
          yield* put(signUpSuccess(user, { displayName }))
        }

    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signUpafterSignIn(action: SignUpSuccess) {
    const { user, additionalDetails } = action.payload
    yield* call (getSnapShotFromUserAuth, user, additionalDetails)
}

export function* signOut() {
  try{
    yield* call(signOutUser)
    yield* put(signOutSuccess())
  } catch (error) {
    yield* put(signOutFailed(error as Error))
  }
}

export function* onSignUp() {
    yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUpStart)
}

export function* onSignUpSuccess() {
    yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, signUpafterSignIn)
}

export function* onSignOut() {
  console.log('on rentre dans signout saga')
  yield* takeLatest(USER_ACTION_TYPE.SIGN_OUT_START, signOut)
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onSignInWithGoogle),
    call(onSignInWithMail),
    call(onSignUp),
    call(onSignUpSuccess),
    call(onSignOut)
  ]);
}
