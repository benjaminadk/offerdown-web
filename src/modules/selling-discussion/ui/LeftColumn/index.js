import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { formatPrice, formatCreatedAt } from '../../../../utils/textHelpers'

export const LeftColumnWrapper = styled.div`
  border-right: ${p => p.theme.borderLight};
`

export const Item = styled(Link)`
  display: grid;
  grid-template-columns: 75px 1fr;
  grid-gap: 10px;
  border-bottom: ${p => p.theme.borderLight};
  padding: 20px 16px;
  .info {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 700;
      margin-bottom: 8px;
    }
  }
`

export const ItemImage = styled.div.attrs(p => ({
  style: {
    backgroundImage: `url(${p.image})`
  }
}))`
  width: 75px;
  height: 75px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 5px;
`

export const UserList = styled.div`
  max-height: ${p => `calc(100vh - ${p.theme.headerHeight} - 58px - 116px)`};
  overflow-y: auto;
  .buyers {
    background-color: ${p => p.theme.white};
    border-bottom: ${p => p.theme.borderLight};
    padding: 12px 0 12px 16px;
  }
`

export const ListItem = styled(NavLink).attrs(p => ({
  activeStyle: {
    backgroundColor: p.theme.hoverPrimaryLight
  }
}))`
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-gap: 10px;
  align-items: center;
  background-color: ${p => p.theme.grey[0]};
  border-bottom: ${p => p.theme.borderLight};
  padding: 12px 16px;
  &:hover {
    background-color: ${p => p.theme.hoverPrimaryLight};
  }
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .message {
    display: flex;
    flex-direction: column;
    .name {
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
    }
    .text {
      overflow: hidden;
      max-height: 43px;
      font-size: 14px;
      line-height: 20px;
      text-overflow: hidden;
    }
    .time {
      color: ${p => p.theme.detail};
      font-size: 12px;
      line-height: 16px;
    }
  }
`

const LeftColumn = ({ offers, item }) => {
  return (
    <LeftColumnWrapper>
      <Item to={`/item/${item.id}`}>
        <ItemImage image={item.images[0]}></ItemImage>
        <div className='info'>
          <div className='name'>{item.name}</div>
          <div className='price'>{formatPrice(item.price)}</div>
        </div>
      </Item>
      <UserList>
        <div className='buyers'>{offers.length} buyers</div>
        {offers.map(offer => {
          const lastMessage =
            offer.messages[
              offer.messages.length -
                offer.messages
                  .slice()
                  .reverse()
                  .findIndex(message => message.user.id === offer.buyer.id) -
                1
            ]
          return (
            <ListItem key={offer.id} to={`/selling/${item.id}/discussion/${offer.id}`}>
              <img src={offer.buyer.image} alt={offer.buyer.name} />
              <div className='message'>
                <div className='name'>{offer.buyer.name}</div>
                <div className='text'>{lastMessage.text}</div>
                <div className='time'>{formatCreatedAt(lastMessage.createdAt)}</div>
              </div>
            </ListItem>
          )
        })}
      </UserList>
    </LeftColumnWrapper>
  )
}

export default LeftColumn
