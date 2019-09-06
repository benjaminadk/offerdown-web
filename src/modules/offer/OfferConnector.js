import React from 'react'
import styled from 'styled-components'

import OfferContainer from './OfferContainer'
import OfferList from './ui/OfferList'

export const OfferConnectorWrapper = styled.div`
  background-color: ${p => p.theme.grey[0]};
`

const OfferConnector = () => {
  return (
    <OfferContainer>
      {({ loading, data }) => {
        if (loading) {
          return null
        }
        return (
          <OfferConnectorWrapper>
            <OfferList offers={data.findOffers} />
          </OfferConnectorWrapper>
        )
      }}
    </OfferContainer>
  )
}

export default OfferConnector
