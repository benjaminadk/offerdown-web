import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, NavLink, withRouter } from 'react-router-dom'

import { AppContext } from '../../../../App'

export const ListWrapper = styled.div`
  min-height: ${p => `calc(100vh - ${p.theme.headerHeight} - 64px - 45px)`};
`

export const ListItem = styled(Link)`
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

  // function renderUsers(messages) {
  //   if (location.pathname === '/selling') {
  //     const set = new Set()
  //     for (let message of messages) {
  //       set.add(message.user.image)
  //     }
  //     set.delete(user.image)
  //     const images = Array.from(set)
  //     const extra = images.length - 5
  //     return (
  //       <>
  //         {images.map((image, i) => (
  //           <Avatar key={image} index={i} image={image} />
  //         ))}
  //         {extra > 0 && <div className='extra'>+ {extra}</div>}
  //       </>
  //     )
  //   } else {
  //     return (
  //       <>
  //         <Avatar />
  //         <div>Seller Name</div>
  //       </>
  //     )
  //   }
  // }

  return (
    <ListWrapper>
      {offers.map(offer => {
        const { id, item } = offer
        return (
          <ListItem key={id} to={`/item/${item.id}/discussion/${offer.id}`} image={item.images[0]}>
            <div className='image'></div>
            <div className='info'>
              <div className='name'>{item.name}</div>
              <div className='users'></div>
            </div>
            <div className='archive'>Archive</div>
          </ListItem>
        )
      })}
    </ListWrapper>
  )
}

export default withRouter(OfferList)
