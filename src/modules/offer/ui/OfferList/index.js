import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, NavLink, withRouter } from 'react-router-dom'

import { AppContext } from '../../../../App'

export const OfferListWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background-color: ${p => p.theme.white};
  border: ${p => p.theme.borderLight};
  border-top: 0;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    h4 {
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
    }
  }
  .tabs {
    display: flex;
    border-bottom: ${p => p.theme.borderLight};
  }
  .main {
    min-height: ${p => `calc(100vh - ${p.theme.headerHeight} - 64px - 45px)`};
  }
`

export const HeaderLink = styled(Link)`
  color: ${p => p.theme.primary};
  font-weight: 700;
`

export const TabLink = styled(NavLink).attrs(p => ({
  activeStyle: {
    borderBottom: `4px solid ${p.theme.primary}`
  }
}))`
  color: ${p => p.theme.primary};
  padding: 8px 16px;
`

export const OfferItem = styled(Link)`
  display: grid;
  grid-template-columns: 75px 1fr 75px;
  grid-gap: 10px;
  border-bottom: ${p => p.theme.borderLight};
  padding: 16px;
  &:hover {
    background: ${p => p.theme.hoverPrimaryLight};
  }
  .image {
    width: 75px;
    height: 75px;
    background-image: ${p => `url(${p.image})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 5px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .name {
      font-size: 18px;
      &:hover {
        text-decoration: underline;
      }
    }
    .users {
      display: flex;
      .extra {
        color: ${p => p.theme.grey[5]};
        border: 1px solid currentColor;
        border-radius: 12px;
        font-size: 12px;
        padding: 3px 12px;
        margin-left: 10px;
      }
    }
  }
  .archive {
    color: ${p => p.theme.primary};
    font-weight: 700;
  }
`

export const Avatar = styled.div.attrs(p => ({
  style: {
    backgroundImage: `url(${p.image})`,
    marginLeft: p.index > 0 ? '-6px' : 0
  }
}))`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border: 2px solid ${p => p.theme.white};
  border-radius: 50%;
`

const OfferList = ({ offers, location }) => {
  const { user } = useContext(AppContext)

  function renderUsers(messages) {
    if (location.pathname === '/selling') {
      const set = new Set()
      for (let message of messages) {
        set.add(message.user.image)
      }
      // set.delete(user.image)
      const images = Array.from(set)
      const extra = images.length - 5
      return (
        <>
          {images.map((image, i) => (
            <Avatar key={image} index={i} image={image} />
          ))}
          {extra > 0 && <div className='extra'>+ {extra}</div>}
        </>
      )
    } else {
      return (
        <>
          <Avatar />
          <div>Seller Name</div>
        </>
      )
    }
  }

  return (
    <OfferListWrapper>
      <div className='header'>
        <h4>My offers</h4>
        <HeaderLink to='/archive/selling'>View archive</HeaderLink>
      </div>
      <div className='tabs'>
        <TabLink to='/selling'>Selling</TabLink>
        <TabLink to='/buying'>Buying</TabLink>
      </div>
      <div className='main'>
        {offers.map(offer => {
          const { id, item, messages } = offer
          return (
            <OfferItem
              key={id}
              to={`/item/${item.id}/discussion/${offer.id}`}
              image={item.images[0]}
            >
              <div className='image'></div>
              <div className='info'>
                <div className='name'>{item.name}</div>
                <div className='users'>{renderUsers(messages)}</div>
              </div>
              <div className='archive'>Archive</div>
            </OfferItem>
          )
        })}
      </div>
    </OfferListWrapper>
  )
}

export default withRouter(OfferList)
