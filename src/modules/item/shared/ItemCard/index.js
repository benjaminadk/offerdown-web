import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { itemCardWidth, itemCardMargin } from '../constants'
import { formatName, formatPrice } from '../../../../utils/textHelpers'

export const ItemCardWrapper = styled.div`
  width: ${itemCardWidth}px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${p => p.theme.grey[3]};
  border-radius: 5px;

  margin: ${itemCardMargin}px;
  cursor: pointer;
  &:hover .content {
    background-color: ${p => p.theme.grey[1]};
  }
  img {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .content {
    padding: 12px;
  }
  .name {
    font-size: 18px;
    font-weight: 700;
  }
  .price {
    font-size: 20px;
    font-weight: 900;
    margin: 5px 0;
  }
`

const ItemCard = ({ item }) => {
  const { id, name, images, price } = item

  return (
    <Link to={`/item/${id}`}>
      <ItemCardWrapper>
        <img src={images[0]} alt={name} />
        <div className='content'>
          <div className='name'>{formatName(name)}</div>
          <div className='price'>{formatPrice(price)}</div>
        </div>
      </ItemCardWrapper>
    </Link>
  )
}

export default ItemCard
