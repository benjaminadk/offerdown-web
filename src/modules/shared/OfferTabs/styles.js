import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  h4 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
`
export const HeaderLink = styled(Link)`
  color: ${p => p.theme.primary};
  font-weight: 700;
`

export const Tabs = styled.div`
  display: flex;
  border-bottom: ${p => p.theme.borderLight};
`

export const TabLink = styled(NavLink).attrs(p => ({
  activeStyle: {
    borderBottom: `4px solid ${p.theme.primary}`
  }
}))`
  color: ${p => p.theme.primary};
  padding: 8px 16px;
`
