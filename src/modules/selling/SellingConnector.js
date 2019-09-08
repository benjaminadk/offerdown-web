import React from 'react'
import styled from 'styled-components'

import SellingContainer from './SellingContainer'
import OfferTabs from '../shared/OfferTabs'
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
        if (loading || !data) {
          return null
        }
        return (
          <SellingConnectorWrapper>
            <div className='content'>
              <OfferTabs />
              <List offers={data.findSellingOffers} />
            </div>
          </SellingConnectorWrapper>
        )
      }}
    </SellingContainer>
  )
}

export default OfferConnector
