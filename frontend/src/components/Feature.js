import React from 'react'
import styled from 'styled-components'
import iconChat from '../img/iconChat.png'
import iconMoney from '../img/iconMoney.png'
import iconSecurity from '../img/iconSecurity.png'

const ICONS = {
  chat: iconChat,
  money: iconMoney,
  security: iconSecurity,
}

function Feature({ type, title, text }) {
  return (
    <FeatureContainer>
      <FeatureIcon src={ICONS[type]}></FeatureIcon>
      <FeatureItemTitle>{title}</FeatureItemTitle>
      <p>{text}</p>
    </FeatureContainer>
  )
}

export default Feature

const FeatureContainer = styled.div`
  flex: 1;
  padding: 2.5rem;
`

const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`
const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: 20px;
`
