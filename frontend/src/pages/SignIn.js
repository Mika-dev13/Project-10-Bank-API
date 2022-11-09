import React from 'react'
import styled from 'styled-components'
import SignInForm from '../components/SignInForm'

function SignIn() {
  return (
    <SignInMain>
      <SignInForm />
    </SignInMain>
  )
}

export default SignIn

const SignInMain = styled.main`
  background-color: #12002b;
  flex: 1;
`
