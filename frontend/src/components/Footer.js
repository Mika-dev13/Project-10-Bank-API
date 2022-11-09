import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer>
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
`
