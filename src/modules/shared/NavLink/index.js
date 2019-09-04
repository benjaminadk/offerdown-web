import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavLinkWrapper = styled(Link)`
  color: ${p => p.theme.primary};
  text-decoration: none;
`

const NavLink = ({ to, text }) => {
  return <NavLinkWrapper to={to}>{text}</NavLinkWrapper>
}

export default NavLink
