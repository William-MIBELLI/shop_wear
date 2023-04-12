import React, { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import { SignUpContainer } from './SignUpForm.style'
import Button from '../button/Button'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../store/user/user.action'

const defaultFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [fields, setFields] = useState(defaultFields)
    const { displayName, email, password, confirmPassword } = fields
    const dispatch = useDispatch()

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFields({...fields, [name]: value})
    }
    
    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {

       event.preventDefault()

       if(displayName === '' || email === '' || password !== confirmPassword){

            console.log('Erreur de saisie dans le formulaire')
            return

        }
        dispatch(signUpStart(email, password, displayName))
    }

  return (
    <SignUpContainer>
        <h2>Don't have an account ?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={submitHandler}>
            <FormInput required label='DisplayName' type="text" name="displayName" onChange={changeHandler} value={displayName}/>
            <FormInput required label='Email' type="email" name="email" onChange={changeHandler} value={email}/>
            <FormInput required label='Password' type="password" name="password" onChange={changeHandler} value={password}/>
            <FormInput required label='Confirm password' type="password" name="confirmPassword" onChange={changeHandler} value={confirmPassword}/>
            <Button type="submit">Sign up</Button>
        </form>
    </SignUpContainer>
  )
}

export default SignUpForm