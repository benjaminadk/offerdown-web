import React from 'react'
import { Link } from 'react-router-dom'

import { formatName, formatPrice } from '../../../../utils/textHelpers'
import { CardWrapper } from './styles'

const Card = ({ item }) => {
  const { id, name, images, price, location } = item

  return (
    <Link to={`/item/${id}`}>
      <CardWrapper>
        <img src={images[0]} alt={name} />
        <div className='content'>
          <div className='name'>{formatName(name)}</div>
          <div className='price'>{formatPrice(price)}</div>
          <div className='location'>{location}</div>
        </div>
      </CardWrapper>
    </Link>
  )
}

export default Card
