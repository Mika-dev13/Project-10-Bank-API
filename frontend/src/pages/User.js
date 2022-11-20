import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import UserAccount from './UserAccount'
import EditForm from '../components/editForm'

function User() {
  const { userInfo } = useSelector((state) => state.user)

  const [display, setDisplay] = useState(false)
  const [mask, setMask] = useState(false)

  const displayEditForm = () => {
    setDisplay(true)
    setMask(true)
  }

  return (
    <UserMain>
      <UserHeader>
        <UserTitle>
          Welcome back
          <br />
          {!display && `${userInfo.firstName} ${userInfo.lastName} !`}
        </UserTitle>
        {display && <EditForm />}
        {!mask && (
          <UserHeaderButton onClick={displayEditForm}>
            Edit Name
          </UserHeaderButton>
        )}
      </UserHeader>
      <UserHiddenTitle>Accounts</UserHiddenTitle>
      <UserAccount
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <UserAccount
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <UserAccount
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </UserMain>
  )
}

export default User

const UserMain = styled.main`
  flex: 1;
  background-color: #12002b;
`

const UserHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`
const UserTitle = styled.h1`
  margin: 20px;
`
const UserHeaderButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`
const UserHiddenTitle = styled.h2`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`
