import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { updateUserName } from '../features/user/userActions'
import styled from 'styled-components'

function EditForm({ setDisplay, setMask }) {
  const { userInfo } = useSelector((state) => state.user)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const dispatch = useDispatch()

  const submitForm = (data) => {
    dispatch(updateUserName(data))
    setDisplay(false)
    setMask(false)
  }

  const reset = () => {
    setDisplay(false)
    setMask(false)
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(submitForm)}>
        <InputsWrapper>
          <InputWrapper>
            <Input
              placeholder={userInfo.firstName}
              {...register('firstName', { required: 'This is required.' })}
            />
            <ErrorMess>
              <ErrorMessage errors={errors} name="firstName" as="p" />
            </ErrorMess>
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder={userInfo.lastName}
              {...register('lastName', {
                required: 'This is required.',
              })}
            />
            <ErrorMess>
              <ErrorMessage errors={errors} name="lastName" as="p" />
            </ErrorMess>
          </InputWrapper>
        </InputsWrapper>
        <ButtonWrapper>
          <SaveButton type="submit">Save</SaveButton>
          <CancelButton type="button" onClick={reset}>
            Cancel
          </CancelButton>
        </ButtonWrapper>
      </Form>
    </FormWrapper>
  )
}

export default EditForm

const FormWrapper = styled.div`
  background-color: #2c3e50;
  margin: 0 auto;
  padding: 30px 0;
  width: 80%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 30px 0;
`
const InputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  padding: 10px;
  outline: none;
  font-weight: 700;
  &::placeholder {
    font-weight: 400;
  }
`
const ErrorMess = styled.div`
  color: red;
  margin-top: 8px;
  text-align: left;
`
const ButtonWrapper = styled(InputsWrapper)``

const SaveButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 7px;
  margin-top: 15px;
  width: 80px;
`
const CancelButton = styled(SaveButton)`
  background-color: red;
  border-color: red;
`
