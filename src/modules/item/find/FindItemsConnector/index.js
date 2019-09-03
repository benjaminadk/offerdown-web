import React from 'react'
import { ChevronDown } from 'styled-icons/boxicons-regular/ChevronDown'
// import { ChevronUp } from 'styled-icons/boxicons-regular/ChevronUp'
import styled from 'styled-components'

import { itemCardWidth, itemCardMargin } from '../../shared/constants'
import { useColumnCount } from '../../../../utils/useColumnCount'
import FindItemsContainer from '../FindItemsContainer'
import FindItemsGrid from '../FindItemsGrid'

export const FindItemCategories = styled.div`
  position: relative;
  width: 100%;
  height: 66px;
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${p => p.theme.headerBackground};
  .bar {
    width: 650px;
    display: flex;
    color: ${p => p.theme.white};
    font-size: 16px;
    & > * {
      padding: 4px 12px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .more {
      display: flex;
      align-items: center;
    }
  }
`

const categories = ['Cars & Trucks', 'Furniture', 'Appliances', 'Baby & Kids', 'Clothing & Shoes']
const totalCardWidth = itemCardWidth + itemCardMargin * 2

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
            <FindItemCategories>
              <div className='bar'>
                {categories.map(category => (
                  <div className='category' key={category}>
                    {category}
                  </div>
                ))}
                <div className='more'>
                  <span>More</span>
                  <ChevronDown size={20} />
                </div>
              </div>
            </FindItemCategories>
            <FindItemsGrid items={data.findItems} columnCount={columnCount} />
          </>
        )
      }}
    </FindItemsContainer>
  )
}

export default FindItemsConnector
