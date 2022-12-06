import React from 'react'
import './Authentication.style.scss'
import SignInForm from '../../components/sign-in-form/SignInForm'
import SignUpForm from '../../components/sign-up-form/SignUpForm'


const Authentication = () => {

  return (
    <div>
        <div className="forms-container">
          <SignInForm/>
          <SignUpForm/>
        </div>
    </div>
  )
}

export default Authentication