import React, { ChangeEvent, FormEvent } from 'react'
import FormInput from '../form-input/FormInput'
import './SignInForm.style.tsx'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { googleSignInStart, signInWithMailStart } from '../../store/user/user.action'
import { BtnContainer } from './SignInForm.style'


const defaultFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [fields, setFields] = useState(defaultFields)
  const { email, password } = fields
  const dispatch = useDispatch()


  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFields({...fields, [name]: value})
  }

  const logInWithEmail = async (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault()
    dispatch(signInWithMailStart(email, password))
  }  

  const logInGooglePopup = async () => {
    //await signInWithGoogle()
    dispatch(googleSignInStart())
  }


  return (
    <div className='sign-in-container'>
        <h2>Already have an account ?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={logInWithEmail}>
          <FormInput required label='Email' value={email} type='email' name='email' onChange={changeHandler}/>
          <FormInput required label='Password' value={password} type='password' name='password' onChange={changeHandler}/>
          <BtnContainer>
            <Button type='submit'>Sign in</Button>
            <Button type='button' button_type={BUTTON_TYPE_CLASSES.google} onClick={logInGooglePopup}>Log by Google</Button>
          </BtnContainer>
        </form>
    </div>
  )
}

export default SignInForm