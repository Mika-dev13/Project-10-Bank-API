import React from 'react'
import styled from 'styled-components'
import bankTree from '../img/bankTree.jpeg'

function Hero() {
  return (
    <HeroBackground>
      <HeroSection>
        <HeroHiddenTitle>Promoted Content</HeroHiddenTitle>
        <HeroSubtitle>No fees</HeroSubtitle>
        <HeroSubtitle>No minimum deposit</HeroSubtitle>
        <HeroSubtitle>High interest rates</HeroSubtitle>
        <HeroText>Open a savings account with Argent Bank today</HeroText>
      </HeroSection>
    </HeroBackground>
  )
}

export default Hero

const HeroBackground = styled.div`
  background-image: url(${bankTree});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`

const HeroSection = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;
  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`
const HeroHiddenTitle = styled.h2`
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
const HeroSubtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`
const HeroText = styled.p`
  font-size: 0.9rem;
  margin-top: 14px;
  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`
