import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const OfferListWrapper = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    h4 {
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
    }
  }
  .tabs {
    display: flex;
    border-bottom: ${p => p.theme.lightBorder};
  }
  .main {
    min-height: ${p => `calc(100vh - ${p.theme.headerHeight} - 64px - 45px)`};
  }
`

export const HeaderLink = styled(Link)`
  color: ${p => p.theme.primary};
  font-weight: 700;
`

export const TabLink = styled(NavLink).attrs(p => ({
  activeStyle: {
    borderBottom: `4px solid ${p.theme.primary}`
  }
}))`
  color: ${p => p.theme.primary};
  padding: 8px 16px;
`

const OfferList = () => {
  return (
    <OfferListWrapper>
      <div className='header'>
        <h4>My offers</h4>
        <HeaderLink to='/archive/selling'>View archive</HeaderLink>
      </div>
      <div className='tabs'>
        <TabLink to='/selling'>Selling</TabLink>
        <TabLink to='/buying'>Buying</TabLink>
      </div>
      <div className='main'></div>
    </OfferListWrapper>
  )
}

export default OfferList
