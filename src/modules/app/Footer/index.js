import React from 'react'
import { withRouter, matchPath } from 'react-router-dom'

import { FooterWrapper } from './styles'

const Footer = ({ location }) => {
  const shouldHide = matchPath(location.pathname, {
    path: '/(selling|buying)/:itemId/discussion/:offerId'
  })
  if (shouldHide) {
    return null
  }
  return <FooterWrapper />
}

export default withRouter(Footer)
