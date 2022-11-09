import React from 'react'
import styled from 'styled-components'

function UserAccount({ title, amount, description }) {
  // const { userToken } = useSelector((state) => state.user)
  // if (!userToken) {
  //   navigate('/login')
  // }

  // useEffect
  // Dispatch de userInfo (GET Info User)

  return (
    <UserAccountSection>
      <UserAccountWrapper>
        <UserAccountTitle>{title}</UserAccountTitle>
        <UserAccountAmount>{amount}</UserAccountAmount>
        <UserAccountAmountDescription>
          {description}
        </UserAccountAmountDescription>
      </UserAccountWrapper>
      <UserAccountButtonWrapper>
        <UserAccountButton>View transactions</UserAccountButton>
      </UserAccountButtonWrapper>
    </UserAccountSection>
  )
}

export default UserAccount
const UserAccountSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`
const UserAccountWrapper = styled.div`
  width: 100%;
  flex: 1;
`
const UserAccountTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
`
const UserAccountAmount = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
`
const UserAccountAmountDescription = styled.p``

const UserAccountButtonWrapper = styled.div`
  width: 100%;
  flex: 1;
  @media (min-width: 720px) {
    flex: 0;
  }
`
const UserAccountButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  @media (min-width: 720px) {
    width: 200px;
  }
`
