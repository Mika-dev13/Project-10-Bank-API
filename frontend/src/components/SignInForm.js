import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { UserIcon } from './icons'
import { userLogin } from '../features/user/userActions'

import { useNavigate } from 'react-router-dom'

function SignInForm() {
  const { success, error, loading } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (success) {
      navigate('/user/profile')
    }
  }, [success, navigate])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  return (
    <FormContent>
      {error && <Error>{error}</Error>}
      <SignInIcon>
        <UserIcon />
      </SignInIcon>
      <SignInTitle>Sign In</SignInTitle>
      <form onSubmit={handleSubmit(submitForm)}>
        <InputWrapper>
          <label htmlFor="username">Username</label>
          <input type="email" id="username" {...register('email')} required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            required
          />
        </InputWrapper>
        <InputRemember>
          <input type="checkbox" id="remember-me" {...register('checkbox')} />
          <label htmlFor="remember-me">Remember me</label>
        </InputRemember>
        <SignInButton disabled={loading}>Sign In</SignInButton>
      </form>
    </FormContent>
  )
}

export default SignInForm

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 10px;
  margin-bottom: 15px;
`

const SignInIcon = styled.div`
  width: 25px;
  margin: 0 auto;
`

const SignInTitle = styled.h1`
  margin: 20px 0;
`

const FormContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
  & input {
    padding: 5px;
    font-size: 1.2rem;
  }
  & label {
    font-weight: bold;
  }
`
const InputRemember = styled.div`
  display: flex;
  & label {
    margin-left: 0.25rem;
  }
`
const SignInButton = styled.button`
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: underline;
  margin-top: 1rem;
  border-color: #00bc77;
  border-style: none;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;
`
