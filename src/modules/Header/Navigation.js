import React from 'react'
import { Link } from 'react-router-dom'
import { Messenger } from 'styled-icons/boxicons-logos/Messenger'
import { PhotoCamera } from 'styled-icons/material/PhotoCamera'
import { ChevronDown } from 'styled-icons/boxicons-regular/ChevronDown'
// import { ChevronUp } from 'styled-icons/boxicons-regular/ChevronUp'
import styled, { css } from 'styled-components'

const baseLink = () => {
  return css`
    color: ${p => p.theme.white};
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  `
}

const baseNav = () => {
  return css`
    display: grid;
    align-items: center;
    justify-items: center;
  `
}

export const NavNoAuth = styled.nav`
  ${baseNav()}
  grid-template-columns: repeat(4, 1fr);
`

export const NavLink = styled(Link)`
  ${baseLink()}
`

export const SellLink = styled.div`
  ${baseLink()}
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`

export const AboutLink = styled.div`
  ${baseLink()}
`

export const NavAuth = styled.nav`
  ${baseNav()}
  grid-template-columns: 1fr 1fr 2fr;
`

export const MessageLink = styled.div``

export const UserLink = styled.div`
  ${baseLink()}
  display: flex;
  align-items: center;
  img {
    width: 23px;
    height: 23px;
    border-radius: 50%;
  }
  .name {
    margin: 0 10px;
  }
`

export const NavBurger = styled.div`
  display: none;
`

const Navigation = ({ user }) => {
  if (user) {
    return (
      <NavAuth>
        <SellLink>
          <PhotoCamera size={25} />
          <span>Sell</span>
        </SellLink>
        <MessageLink>
          <Messenger size={30} />
        </MessageLink>
        <UserLink>
          <img src={user.image} alt={user.name} />
          <span className='name'>{user.name}</span>
          <ChevronDown size={25} />
        </UserLink>
      </NavAuth>
    )
  } else {
    return (
      <NavNoAuth>
        <SellLink>
          <PhotoCamera size={25} />
          <span>Sell</span>
        </SellLink>
        <AboutLink>About</AboutLink>
        <NavLink to='/login'>Log in</NavLink>
        <NavLink to='/signup'>Sign up</NavLink>
      </NavNoAuth>
    )
  }
}

export default Navigation
