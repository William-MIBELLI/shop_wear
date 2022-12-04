import React from 'react'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import { signInWithGoogle, createUserDocumentFromAuth, createUserWithEmail } from '../../utils/Firebase'


const SignIn = () => {

  const logInPopup = async () => {
    const { user } = await signInWithGoogle()
    const userRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
        <h1>Sign-in page</h1>
        <button onClick={logInPopup}>Log by Google POPUP</button>
        <SignUpForm/>
    </div>
  )
}

export default SignIn