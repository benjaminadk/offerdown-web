import React from 'react'

import { Header, HeaderLink, Tabs, TabLink } from './styles'

const OfferTabs = () => {
  return (
    <>
      <Header>
        <h4>My offers</h4>
        <HeaderLink to='/archive/selling'>View archive</HeaderLink>
      </Header>
      <Tabs>
        <TabLink to='/selling'>Selling</TabLink>
        <TabLink to='/buying'>Buying</TabLink>
      </Tabs>
    </>
  )
}

export default OfferTabs
