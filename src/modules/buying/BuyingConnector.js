import React from 'react'
import styled from 'styled-components'

import BuyingContainer from './BuyingContainer'
import OfferTabs from '../shared/OfferTabs'
import List from './ui/List'

export const BuyingConnectorWrapper = styled.div`
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
    <BuyingContainer>
      {({ loading, data }) => {
        if (loading) {
          return null
        }
        return (
          <BuyingConnectorWrapper>
            <div className='content'>
              <OfferTabs />
              <List offers={data.findBuyingOffers} />
            </div>
          </BuyingConnectorWrapper>
        )
      }}
    </BuyingContainer>
  )
}

export default OfferConnector
