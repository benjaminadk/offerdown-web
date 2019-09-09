import React, { useState } from 'react'
import styled from 'styled-components'
import { LocationOn } from 'styled-icons/material/LocationOn'
import { Link } from 'react-router-dom'

import PriceTag from '../../../shared/PriceTag'
import { useDriveTime } from '../../../../utils/useDriveTime'
import { formatEnum, formatCreatedAt, formatCondition } from '../../../../utils/textHelpers'

export const RightColumnWrapper = styled.div`
  overflow-y: auto;
  height: ${p => `calc(100vh - ${p.theme.headerHeight} - 57px - 13px)`};
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

export const Location = styled.div`
  display: inline-block;
  margin-bottom: 8px;
  .location {
    margin-right: 12px;
    margin-bottom: 6px;
  }
  .distance {
    display: inline-block;
  }
  svg {
    fill: ${p => p.theme.primary};
  }
`

export const CreatedAt = styled.div`
  display: inline-block;
  span {
    display: inline-block;
  }
`

export const Hr = styled.hr`
  color: ${p => p.theme.grey[2]};
  border: 0;
  border-top: 1px solid;
  margin: 20px auto;
`

export const Condition = styled.div`
  font-weight: 700;
  margin-bottom: 20px;
`

export const Description = styled.div``

const RightColumn = ({ offer }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const { item, seller } = offer
  const driveTime = useDriveTime(seller.latitude, seller.longitude)

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
      <Location>
        <span className='location'>{seller.location}</span>
        <span className='distance'>
          <LocationOn size={18} />
          Local pickup ({driveTime} miles)
        </span>
      </Location>
      <CreatedAt>
        Posted {formatCreatedAt(item.createdAt)} in <span>{formatEnum(item.category)}</span>
      </CreatedAt>
      <Hr />
      <Condition>{formatCondition(item.condition)}</Condition>
      <Description>{item.description}</Description>
      <Hr />
    </RightColumnWrapper>
  )
}

export default RightColumn
