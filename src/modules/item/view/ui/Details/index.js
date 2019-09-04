import React from 'react'
import styled from 'styled-components'

import PriceTag from './PriceTag'
import Category from './Category'
import Condition from './Condition'
import Description from './Description'
import Location from './Location'
import HereMap from './HereMap'
import ActionBox from '../ActionBox'

export const DetailsWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 48px;
  margin-top: 16px;
`

export const Container = styled.div`
  width: calc(100% - 300px);
`

export const Hr = styled.hr`
  color: ${p => p.theme.grey[2]};
  border: 0;
  border-top: 1px solid;
  margin: 20px auto;
`

const Details = ({ item }) => {
  const {
    createdAt,
    name,
    description,
    price,
    category,
    condition,
    location,
    latitude,
    longitude,
    seller
  } = item

  return (
    <DetailsWrapper>
      <Container>
        <PriceTag name={name} price={price} />
        <Location location={location} latitude={latitude} longitude={longitude} />
        <Category category={category} createdAt={createdAt} />
        <Hr />
        <Condition condition={condition} />
        <Description description={description} />
        <HereMap location={location} latitude={latitude} longitude={longitude} />
        <Hr />
      </Container>
      <ActionBox seller={seller} />
    </DetailsWrapper>
  )
}

export default Details
