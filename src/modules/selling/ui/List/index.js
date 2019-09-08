import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import groupby from 'lodash.groupby'

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

const List = ({ offers }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(Object.values(groupby(offers, offer => offer.item.id)))
  }, [offers])

  return (
    <ListWrapper>
      {data.map(datum => {
        const { id, item } = datum[0]
        return (
          <ListItem key={id} to={`/selling/${item.id}/discussion/${id}`}>
            <ItemImage image={item.images[0]} />
            <div className='info'>
              <div className='name'>{item.name}</div>
              <div className='users'>
                {datum.map((offer, i) => (
                  <Avatar key={offer.buyer.image} index={i} image={offer.buyer.image} />
                ))}
              </div>
            </div>
            <div className='archive'>Archive</div>
          </ListItem>
        )
      })}
    </ListWrapper>
  )
}

export default withRouter(List)
