import React from 'react'
import styled from 'styled-components'

import FiveStar from '../../../shared/FiveStar'
import Messages from './Messages'
import CreateMessage from './CreateMessage'

export const MiddleColumnWrapper = styled.div`
  width: 100%;
  .buyer {
    display: grid;
    grid-template-columns: 64px 1fr;
    grid-gap: 10px;
    align-items: center;
    border-right: ${p => p.theme.borderLight};
    border-bottom: ${p => p.theme.borderLight};
    padding: 12px;
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    .name {
      font-size: 18px;
      font-weight: 700px;
    }
    .location {
      color: ${p => p.theme.detail};
      font-size: 14px;
    }
  }
`

const MiddleColumn = ({ otherUser }) => {
  return (
    <MiddleColumnWrapper>
      <div className='buyer'>
        <img src={otherUser.image} alt={otherUser.name} />
        <div className='properties'>
          <div className='name'>{otherUser.name}</div>
          <div className='location'>Somewhere,CA</div>
          <FiveStar />
        </div>
      </div>
      <Messages />
      <CreateMessage />
    </MiddleColumnWrapper>
  )
}

export default MiddleColumn
