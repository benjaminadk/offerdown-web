import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'styled-icons/boxicons-regular/ChevronDown'
import { ChevronUp } from 'styled-icons/boxicons-regular/ChevronUp'

import { UserLink, UserMenuWrapper, UserMenuItem, UserMenuLink } from './styles'

const mainMenuItems = [
  { text: 'My offers', to: '/selling' },
  { text: 'My boards', to: '/boards' },
  { text: 'My profile', to: '/profile' },
  { text: 'My account', to: '/acount' },
  { text: 'Log out', to: '/' }
]

const UserMenu = ({ user }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onClick = () => setShow(false)
    if (show) {
      window.addEventListener('click', onClick)
    } else {
      window.removeEventListener('click', onClick)
    }
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [show])

  return (
    <>
      <UserLink onClick={() => setShow(!show)}>
        <img src={user.image} alt={user.name} />
        <span className='name'>{user.name}</span>
        {show ? <ChevronUp size={25} /> : <ChevronDown size={25} />}
      </UserLink>
      <UserMenuWrapper show={show}>
        <div className='main'>
          {mainMenuItems.map(item => {
            if (item.text === 'Log out') {
              return (
                <UserMenuItem key={item.to} onClick={() => {}}>
                  {item.text}
                </UserMenuItem>
              )
            }
            return (
              <UserMenuLink key={item.to} to={item.to}>
                {item.text}
              </UserMenuLink>
            )
          })}
        </div>
      </UserMenuWrapper>
    </>
  )
}

export default UserMenu
