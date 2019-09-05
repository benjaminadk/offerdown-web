import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ShareSquare as ShareIcon } from 'styled-icons/fa-solid/ShareSquare'
import { Heart as HeartOutlineIcon } from 'styled-icons/boxicons-regular/Heart'

import { AppContext } from '../../../../../App'
import FiveStar from '../../../../shared/FiveStar'
import Button from '../../../../shared/Button'
import CreateOffer from './CreateOffer'

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
  .footer {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    align-items: center;
    justify-items: center;
    margin-top: 12px;
    .action {
      display: flex;
      align-items: center;
      color: ${p => p.theme.primary};
      font-weight: 700;
      &:hover {
        text-decoration: underline;
      }
      svg {
        fill: currentColor;
        margin-right: 4px;
      }
    }
    .divider {
      width: 1px;
      height: 50%;
      background-color: ${p => p.theme.grey[5]};
    }
  }
`

const ActionBox = ({ seller, history }) => {
  const { user } = useContext(AppContext)

  const isSeller = user && seller.id === user.id

  function makeOffer() {
    isUserLoggedIn()
    // TODO
    // make offer modal
  }

  function promote() {
    // TODO
    // make promote item route
  }

  function markSold() {
    // TODO
    // make confirm sold modal
  }

  function isUserLoggedIn() {
    if (!user) {
      history.push('/login')
    }
  }

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
        {isSeller ? (
          <Button variant='solid' text='Sell faster' onClick={promote} />
        ) : (
          <Button variant='solid' text='Make offer' onClick={makeOffer} />
        )}
        {isSeller ? (
          <Button variant='outline' text='Mark sold' onClick={markSold} />
        ) : (
          <CreateOffer />
        )}
      </div>
      <div className='footer'>
        {isSeller ? (
          <div className='action'>Archive</div>
        ) : (
          <div className='action'>
            <HeartOutlineIcon size={16} /> Save
          </div>
        )}
        <div className='divider' />
        <div className='action'>
          <ShareIcon size={16} />
          Share
        </div>
      </div>
    </ActionBoxWrapper>
  )
}

export default withRouter(ActionBox)
