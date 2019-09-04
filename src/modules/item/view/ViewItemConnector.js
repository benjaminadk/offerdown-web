import React from 'react'

import ViewItemContainer from './ViewItemContainer'
import Images from './ui/Images'
import Details from './ui/Details'

const ViewItemConnector = ({ match }) => {
  return (
    <ViewItemContainer itemId={match.params.itemId}>
      {({ loading, data }) => {
        if (loading) {
          return null
        }

        const { name, images } = data.viewItem
        return (
          <>
            <Images name={name} images={images} />
            <Details item={data.viewItem} />
          </>
        )
      }}
    </ViewItemContainer>
  )
}

export default ViewItemConnector
