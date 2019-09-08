import React from 'react'

import { formatPrice } from '../../../utils/textHelpers'
import { PriceTagWrapper } from './styles'

const PriceTag = ({ price }) => {
  return (
    <PriceTagWrapper>
      <div className='front' />
      <div className='middle'>{formatPrice(price)}</div>
      <div className='rear' />
    </PriceTagWrapper>
  )
}

export default PriceTag
