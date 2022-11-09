import React from 'react'
import styled from 'styled-components'
import Feature from './Feature'

function FeaturesSection() {
  return (
    <FeatureSection>
      <FeatureHiddenTitle>Features</FeatureHiddenTitle>
      <Feature
        type="chat"
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      ></Feature>
      <Feature
        type="money"
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      ></Feature>
      <Feature
        type="security"
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money is always safe."
      ></Feature>
    </FeatureSection>
  )
}

export default FeaturesSection

const FeatureSection = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`

const FeatureHiddenTitle = styled.h2`
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
