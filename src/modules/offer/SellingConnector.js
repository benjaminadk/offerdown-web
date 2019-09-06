import React from 'react'
import styled from 'styled-components'

import SellingContainer from './SellingContainer'

export const SellingConnectorWrapper = styled.div``

const SellingConnector = () => {
  return (
    <SellingContainer>
      {({ loading, data }) => {
        if (loading) {
          return null
        }
        return <SellingConnectorWrapper>{JSON.stringify(data)}</SellingConnectorWrapper>
      }}
    </SellingContainer>
  )
}

export default SellingConnector
