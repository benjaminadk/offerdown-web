import React from 'react'
import styled from 'styled-components'

import priceTag from '../../../../styles/price-tag.png'
import { formatPrice } from '../../../../utils/textHelpers'

export const PriceTagWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  .price {
    display: flex;
    align-items: center;
    .front {
      width: 19px;
      height: 40px;
      background: url(${priceTag});
      background-size: 36px 160px;
      background-repeat: no-repeat;
      background-position: 0 -120px;
    }
    .middle {
      background-color: ${p => p.theme.primary};
      color: ${p => p.theme.white};
      line-height: 40px;
      font-size: 26px;
      font-weight: 700;
      padding: 0 8px;
    }
    .rear {
      width: 16px;
      height: 40px;
      background: url(${priceTag});
      background-size: 36px 160px;
      background-repeat: no-repeat;
      background-position: -19px -120px;
      overflow: hidden;
    }
  }
  .name {
    font-size: 24px;
    font-weight: 700;
    margin-left: 12px;
  }
`

const PriceTag = ({ name, price }) => {
  return (
    <PriceTagWrapper>
      <div className='price'>
        <div className='front' />
        <div className='middle'>{formatPrice(price)}</div>
        <div className='rear' />
      </div>
      <div className='name'>{name}</div>
    </PriceTagWrapper>
  )
}

export default PriceTag
