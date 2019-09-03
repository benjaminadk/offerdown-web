import React from 'react'

import { cardWidth, cardMargin } from '../../shared/constants'
import { useColumnCount } from '../../../../utils/useColumnCount'
import FindItemsContainer from '../FindItemsContainer'
import Grid from '../Grid'
import Categories from '../Categories'

const totalCardWidth = cardWidth + cardMargin * 2

const FindItemsConnector = () => {
  const columnCount = useColumnCount(totalCardWidth, 96)

  return (
    <FindItemsContainer>
      {({ loading, data }) => {
        if (loading) {
          return <div>Loading...</div>
        }
        return (
          <>
            <Categories />
            <Grid items={data.findItems} columnCount={columnCount} />
          </>
        )
      }}
    </FindItemsContainer>
  )
}

export default FindItemsConnector
