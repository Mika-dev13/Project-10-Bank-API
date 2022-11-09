import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { getUserDetails } from '../features/user/userActions'
import { logout } from '../features/user/userSlice'
import argentBankLogo from '../img/argentBankLogo.png'
import { UserIcon } from './icons'

function Header() {
  const { userInfo, userToken } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails())
    }
  }, [userToken, dispatch])

  const signOut = () => {
    dispatch(logout())
  }

  return (
    <Nav>
      <Link to="/">
        <Logo src={argentBankLogo} alt="Argent bank logo" />
      </Link>
      <SignContent>
        <Icon>
          <UserIcon />
        </Icon>
        {userToken ? (
          <Logout>
            <UserName to="/user/login">{userInfo.firstName}</UserName>
            <Icon>
              <i className="fa-solid fa-right-from-bracket"></i>
            </Icon>
            <Link to="/">
              <LogoutButton onClick={signOut}>Sign Out</LogoutButton>
            </Link>
          </Logout>
        ) : (
          <SignLink to="/user/login">Sign In</SignLink>
        )}
      </SignContent>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`
const Logo = styled.img`
  width: 200px;
`
const SignContent = styled.div`
  display: flex;
  align-items: center;
`
const SignLink = styled(NavLink)`
  // display: flex;
  // align-items: center;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`
const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  margin-right: 0.2rem;
  margin-left: 0.5rem;
`
const UserName = styled.span`
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`
const Logout = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`
const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`
