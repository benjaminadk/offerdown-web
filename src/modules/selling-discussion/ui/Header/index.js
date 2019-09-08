import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ChevronLeft } from 'styled-icons/fa-solid/ChevronLeft'

export const HeaderWrapper = styled.div`
  border-bottom: ${p => p.theme.borderLight};
  padding: 16px;
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${p => p.theme.primary};
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
  svg {
    fill: currentColor;
    margin-right: 10px;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <NavLink to='/selling'>
        <ChevronLeft size={16} />
        My offers
      </NavLink>
    </HeaderWrapper>
  )
}

export default Header
