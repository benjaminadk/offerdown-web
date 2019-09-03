import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Heart as HeartOutline } from 'styled-icons/boxicons-regular/Heart'
import { Heart as HeartSolid } from 'styled-icons/boxicons-solid/Heart'

import ViewItemContainer from '../ViewItemContainer'

export const ItemImages = styled.div`
  position: relative;
  overflow: hidden;
  height: 385px;
  background-color: ${p => p.theme.black};
  .images {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    transform: translateX(0);
    img {
      width: auto;
      height: 385px;
      margin-right: 5px;
      cursor: pointer;
    }
  }
  .heart {
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 3;
    fill: ${p => p.theme.white};
    cursor: pointer;
  }
`

export const Backdrop = styled.div.attrs(p => ({
  style: {
    backgroundImage: `url(${p.image})`
  }
}))`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  filter: blur(15px);
`

const ViewItemConnector = props => {
  return (
    <ViewItemContainer itemId={props.match.params.itemId}>
      {({ loading, data }) => {
        if (loading) {
          return <div>Loading...</div>
        }
        const { name, description, images, price } = data.viewItem
        return (
          <>
            <ItemImages>
              <Backdrop image={images[0]} />
              <HeartOutline className='heart' size={25} />
              <div className='images'>
                {images.map(image => (
                  <img key={image} src={image} alt={name} />
                ))}
              </div>
            </ItemImages>
          </>
        )
      }}
    </ViewItemContainer>
  )
}

export default ViewItemConnector
