import React from 'react'
import { Messenger } from 'styled-icons/boxicons-logos/Messenger'
import { PhotoCamera } from 'styled-icons/material/PhotoCamera'

import { NavAuth, NavNoAuth, SellLink, MessageLink, AboutLink, NavLink } from './styles'
import UserMenu from './UserMenu'

const Navigation = ({ user }) => {
  if (user) {
    return (
      <>
        <NavAuth>
          <SellLink>
            <PhotoCamera size={25} />
            <span>Sell</span>
          </SellLink>
          <MessageLink>
            <Messenger size={30} />
          </MessageLink>
          <UserMenu user={user} />
        </NavAuth>
      </>
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
