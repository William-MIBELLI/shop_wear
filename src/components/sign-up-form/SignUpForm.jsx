import React from 'react'
import { useState } from 'react'
import { createUserWithEmail, auth, createUserDocumentFromAuth } from '../../utils/Firebase'
import FormInput from '../form-input/FormInput'
import './SignUpForm.style.scss'
import Button from '../button/Button'

const defaultFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [fields, setFields] = useState(defaultFields)
    const { displayName, email, password, confirmPassword } = fields

    const changeHandler = (event) => {
        const { name, value } = event.target
        setFields({...fields, [name]: value})
    }
    
    const submitHandler = async (event) => {

       event.preventDefault()

       if(displayName === '' || email === '' || password !== confirmPassword){

            console.log('Erreur de saisie dans le formulaire')
            return

        }
        try{

            const { user } = await createUserWithEmail(auth, email, password)
            await createUserDocumentFromAuth(user, { displayName })

        }catch(error){
            console.log('error : ',error)
        }
    }

  return (
    <div className='sign-up-container'>
        <h2>Don't have an account ?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={submitHandler}>
            <FormInput required label='DisplayName' type="text" name="displayName" onChange={changeHandler} value={displayName}/>
            <FormInput required label='Email' type="email" name="email" onChange={changeHandler} value={email}/>
            <FormInput required label='Password' type="password" name="password" onChange={changeHandler} value={password}/>
            <FormInput required label='Confirm password' type="password" name="confirmPassword" onChange={changeHandler} value={confirmPassword}/>
            <Button type="submit">Sign up</Button>
        </form>
    </div>
  )
}

export default SignUpForm