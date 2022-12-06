import React from 'react'
import FormInput from '../form-input/FormInput'
import './SignInForm.style.scss'
import Button from '../button/Button'
import { useState } from 'react'
import { signInWithGoogle, createUserDocumentFromAuth, signInWithMail } from '../../utils/Firebase'


const defaultFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [fields, setFields] = useState(defaultFields)
  const { email, password } = fields


  const changeHandler = event => {
    const { name, value } = event.target
    setFields({...fields, [name]: value})
  }

  const logInWithEmail = async (event) => {

    event.preventDefault()

    if(email === '' || password === ''){
      return null
    }
    try{
      const { user } = await signInWithMail(email, password)
      console.log(user)
    }catch(error){
      console.log('erreur : ', error)
    }
  }  

  const logInGooglePopup = async () => {
    await signInWithGoogle()
  }


  return (
    <div className='sign-in-container'>
        <h2>Already have an account ?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={logInWithEmail}>
          <FormInput required label='Email' value={email} type='email' name='email' onChange={changeHandler}/>
          <FormInput required label='Password' value={password} type='password' name='password' onChange={changeHandler}/>
          <div className="btn-container">
            <Button type='submit' onSubmit={logInWithEmail}>Sign in</Button>
            <Button type='button' button_type='google' onClick={logInGooglePopup}>Log by Google</Button>
          </div>
        </form>
    </div>
  )
}

export default SignInForm