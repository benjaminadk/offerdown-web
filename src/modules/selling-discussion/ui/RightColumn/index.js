import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PriceTag from '../../../shared/PriceTag'

export const RightColumnWrapper = styled.div`
  padding: 0 12px;
  margin-top: 12px;
`

export const ItemImage = styled.div.attrs(p => ({
  style: {
    backgroundImage: `url(${p.image})`
  }
}))`
  position: relative;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  .priceTag {
    position: absolute;
    top: 250px;
  }
`

export const Thumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Thumbnail = styled.div.attrs(p => ({
  style: {
    backgroundImage: `url(${p.image})`,
    opacity: p.active ? '1' : '.5',
    boxShadow: p.active ? `inset 0 0 0 3px ${p.theme.primary}` : 'none'
  }
}))`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  margin: 6px;
  cursor: pointer;
`

export const Name = styled(Link)`
  font-size: 24px;
  line-height: 32px;
  margin-top: 12px;
  margin-bottom: 8px;
  &:hover {
    text-decoration: underline;
  }
`

const RightColumn = ({ item }) => {
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <RightColumnWrapper>
      <ItemImage image={item.images[imageIndex]}>
        <div className='priceTag'>
          <PriceTag price={item.price} />
        </div>
      </ItemImage>
      {item.images.length > 1 && (
        <Thumbnails>
          {item.images.map((image, i) => (
            <Thumbnail
              key={image}
              image={image}
              active={imageIndex === i}
              onClick={() => setImageIndex(i)}
            />
          ))}
        </Thumbnails>
      )}
      <Name to={`/item/${item.id}`}>{item.name}</Name>
    </RightColumnWrapper>
  )
}

export default RightColumn
