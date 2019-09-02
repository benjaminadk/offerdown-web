import React from 'react'
import styled from 'styled-components'

import footerBackground from '../../styles/footer-background.jpg'

export const FooterWrapper = styled.footer`
  height: 160px;
  background-image: url(${footerBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 20px auto;
`

const Footer = () => {
  return <FooterWrapper />
}

export default Footer
