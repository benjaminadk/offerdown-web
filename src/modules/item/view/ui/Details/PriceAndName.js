import React from 'react'
import styled from 'styled-components'

import PriceTag from '../../../../shared/PriceTag'

export const PriceAndNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  .name {
    font-size: 24px;
    font-weight: 700;
    margin-left: 12px;
  }
`

const PriceAndName = ({ name, price }) => {
  return (
    <PriceAndNameWrapper>
      <PriceTag price={price} />
      <div className='name'>{name}</div>
    </PriceAndNameWrapper>
  )
}

export default PriceAndName
