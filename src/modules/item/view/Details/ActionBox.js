import React, { useContext } from 'react'
import styled from 'styled-components'

import { AppContext } from '../../../../App'
import FiveStar from '../../../shared/FiveStar'
import Button from '../../../shared/Button'

export const ActionBoxWrapper = styled.div`
  position: absolute;
  top: -68px;
  right: 20px;
  z-index: 4;
  width: 300px;
  .main {
    display: flex;
    flex-direction: column;
    background-color: ${p => p.theme.white};
    border: 1px solid ${p => p.theme.grey[4]};
    border-radius: 5px;
    padding: 16px;
    .seller {
      display: flex;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 15px;
      }
      .seller-info {
        display: flex;
        flex-direction: column;
        .seller-name {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
        }
      }
    }
  }
`

const ActionBox = ({ seller }) => {
  const { user } = useContext(AppContext)

  const isSeller = user && seller.id === user.id

  return (
    <ActionBoxWrapper>
      <div className='main'>
        <div className='seller'>
          <img src={seller.image} alt={seller.name} />
          <div className='seller-info'>
            <div className='seller-name'>{seller.name}</div>
            <FiveStar />
          </div>
        </div>
        <Button type='solid' text={isSeller ? 'Sell faster' : 'Make offer'} />
        <Button type='outline' text={isSeller ? 'Mark sold' : 'Ask'} />
      </div>
    </ActionBoxWrapper>
  )
}

export default ActionBox
