import React from 'react'
import styled from 'styled-components'

import ViewItemContainer from './ViewItemContainer'
import Images from './ui/Images'
import Details from './ui/Details'
import ActionBox from './ui/ActionBox'

export const ViewItemConnectorWrapper = styled.div`
  position: relative;
`

const ViewItemConnector = ({ match }) => {
  return (
    <ViewItemContainer itemId={match.params.itemId}>
      {({ loading, data }) => {
        if (loading) {
          return null
        }
        const { name, images } = data.viewItem
        return (
          <ViewItemConnectorWrapper>
            <Images name={name} images={images} />
            <Details item={data.viewItem} />
            <ActionBox seller={data.viewItem.seller} />
          </ViewItemConnectorWrapper>
        )
      }}
    </ViewItemContainer>
  )
}

export default ViewItemConnector
