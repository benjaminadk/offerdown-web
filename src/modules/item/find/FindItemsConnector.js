import React from 'react'

import { cardWidth, cardMargin } from '../shared/constants'
import { useColumnCount } from '../../../utils/useColumnCount'
import FindItemsContainer from './FindItemsContainer'
import Grid from './ui/Grid'
import Categories from './ui/Categories'

const totalCardWidth = cardWidth + cardMargin * 2

const FindItemsConnector = () => {
  const columnCount = useColumnCount(totalCardWidth, 96)

  return (
    <FindItemsContainer>
      {({ loading, data }) => {
        if (loading) {
          return null
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
