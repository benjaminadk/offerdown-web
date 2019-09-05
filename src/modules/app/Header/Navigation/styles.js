import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

// helper functions
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

// navigation containers

export const NavAuth = styled.nav`
  ${baseNav()}
  grid-template-columns: 1fr 1fr 2fr;
`

export const NavNoAuth = styled.nav`
  ${baseNav()}
  grid-template-columns: repeat(4, 1fr);
`

// links
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

export const MessageLink = styled.div``

export const NavBurger = styled.div`
  display: none;
`

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

export const UserMenuWrapper = styled.div`
  position: fixed;
  top: ${p => p.theme.headerHeight};
  right: 48px;
  z-index: 5;
  width: 240px;
  display: ${p => (p.show ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${p => p.theme.white};
  border-radius: 5px;
  box-shadow: ${p => p.theme.modalShadow};
  .main {
    display: flex;
    flex-direction: column;
    padding: 12px 0;
  }
`

const baseUserMenuItem = () => css`
  display: block;
  color: ${p => p.theme.black};
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.hoverPrimaryLight};
  }
`

export const UserMenuItem = styled.div`
  ${baseUserMenuItem()}
`

export const UserMenuLink = styled(Link)`
  ${baseUserMenuItem()}
`
