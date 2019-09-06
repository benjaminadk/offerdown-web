import React from 'react'
import styled from 'styled-components'

import SellingContainer from './SellingContainer'
import Navigation from './ui/Navigation'
import List from './ui/List'

export const SellingConnectorWrapper = styled.div`
  background-color: ${p => p.theme.grey[0]};
  .content {
    max-width: 960px;
    margin: 0 auto;
    background-color: ${p => p.theme.white};
    border: ${p => p.theme.borderLight};
    border-top: 0;
  }
`

const OfferConnector = () => {
  return (
    <SellingContainer>
      {({ loading, data }) => {
        if (loading) {
          return null
        }

        return (
          <SellingConnectorWrapper>
            <div className='content'>
              <Navigation />
              <List offers={data.findSellingOffers} />
            </div>
          </SellingConnectorWrapper>
        )
      }}
    </SellingContainer>
  )
}

export default OfferConnector
