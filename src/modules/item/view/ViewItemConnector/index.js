import React from 'react'
import styled from 'styled-components'

import { formatPrice } from '../../../../utils/textHelpers'
import priceTag from '../../../../styles/price-tag.png'
import ViewItemContainer from '../ViewItemContainer'
import Images from '../Images'

export const DetailsWrapper = styled.div`
  width: 100%;
  padding: 0 48px;
  margin-top: 16px;
  .details {
    width: calc(100% - 300px);
    .row {
      display: flex;
      align-items: center;
    }
  }
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

const ViewItemConnector = props => {
  return (
    <ViewItemContainer itemId={props.match.params.itemId}>
      {({ loading, data }) => {
        if (loading) {
          return <div>Loading...</div>
        }
        const { name, images, price } = data.viewItem
        return (
          <>
            <Images name={name} images={images} />
            <DetailsWrapper>
              <div className='details'>
                <div className='row'>
                  <div className='price'>
                    <div className='front' />
                    <div className='middle'>{formatPrice(price)}</div>
                    <div className='rear' />
                  </div>
                  <div className='name'>{name}</div>
                </div>
              </div>
            </DetailsWrapper>
          </>
        )
      }}
    </ViewItemContainer>
  )
}

export default ViewItemConnector
