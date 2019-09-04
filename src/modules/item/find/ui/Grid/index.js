import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Card from '../../../shared/Card'

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 48px;
`

const Grid = ({ items, columnCount }) => {
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
    <GridWrapper>
      {grid.map((column, i) => (
        <div key={i}>
          {column.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      ))}
    </GridWrapper>
  )
}

export default Grid
