import React from 'react'

import ViewItemContainer from '../ViewItemContainer'
import Images from '../Images'

const ViewItemConnector = props => {
  return (
    <ViewItemContainer itemId={props.match.params.itemId}>
      {({ loading, data }) => {
        if (loading) {
          return <div>Loading...</div>
        }
        const { name, images } = data.viewItem
        return (
          <>
            <Images name={name} images={images} />
          </>
        )
      }}
    </ViewItemContainer>
  )
}

export default ViewItemConnector
