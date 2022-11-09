import React from 'react'
import styled from 'styled-components'
import FeaturesSection from '../components/FeaturesSection'
import Hero from '../components/Hero'

function Home() {
  return (
    <HomeMain>
      <Hero />
      <FeaturesSection />
    </HomeMain>
  )
}

export default Home

const HomeMain = styled.main`
  flex: 1;
`
