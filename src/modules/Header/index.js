import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LocationOn } from 'styled-icons/material/LocationOn'

import { AppContext } from '../../App'
import Navigation from './Navigation'

const getGridTemplate = screen => {
  switch (screen) {
    case 'fullscreen':
      return '1fr 2fr 2fr 400px'
    default:
      return '1fr 2fr 2fr 400px'
  }
}

const getPadding = screen => {
  if (screen === 'fullscreen') {
    return '0 50px'
  } else {
    return '0'
  }
}

export const HeaderWrapper = styled.div`
  height: ${p => p.theme.headerHeight};
  display: grid;
  grid-template-columns: ${p => getGridTemplate(p.screen)};
  align-items: center;
  background: ${p => p.theme.headerBackground};
  color: ${p => p.theme.white};
  padding: ${p => getPadding(p.screen)};
`

export const Brand = styled(Link)`
  color: ${p => p.theme.white};
  font-size: 25px;
  font-weight: 900;
`

const Header = () => {
  const { user, screen } = useContext(AppContext)

  return (
    <HeaderWrapper screen={screen}>
      <Brand to='/'>OfferDown</Brand>
      <input />
      <HeaderInput>
        <LocationOn />
        <input placeholder='My Location' />
      </HeaderInput>
      <Navigation user={user} />
    </HeaderWrapper>
  )
}

export default Header

export const HeaderInput = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.17);
  color: ${p => p.theme.white};
  svg {
    justify-self: center;
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
  input {
    background: transparent;
    color: currentColor;
    border: 0;
    padding: 12px 16px 12px 0;
    &::placeholder {
      color: currentColor;
    }
  }
`
