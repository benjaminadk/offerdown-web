import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import ItemCard from '../../shared/ItemCard'

export const FindItemsGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 48px;
`

const FindItemsGrid = ({ items, columnCount }) => {
  const [grid, setGrid] = useState([[]])

  useEffect(() => {
    const columns = []
    for (let i = 0; i < columnCount; i++) {
      let column = []
      for (let j = i; j < items.length; j += columnCount) {
        column.push(items[j])
      }
      columns.push(column)
    }
    setGrid(columns)
  }, [items, columnCount])

  return (
    <FindItemsGridWrapper>
      {grid.map((column, i) => (
        <div key={i}>
          {column.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ))}
    </FindItemsGridWrapper>
  )
}

export default FindItemsGrid
