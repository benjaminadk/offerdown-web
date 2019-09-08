import React, { useContext } from 'react'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import { ChevronLeft } from 'styled-icons/fa-solid/ChevronLeft'

import { AppContext } from '../../App'
import SellingDiscussionContainer from './SellingDiscussionContainer'
import LeftColumn from './ui/LeftColumn'
import MiddleColumn from './ui/MiddleColumn'

export const SellingDiscussionConnectorWrapper = styled.div`
  background-color: ${p => p.theme.grey[0]};
  .content {
    max-width: calc(100vw - 96px);
    margin: 0 auto;
    background-color: ${p => p.theme.white};
    border: ${p => p.theme.borderLight};
    border-top: 0;
    .header {
      border-bottom: ${p => p.theme.borderLight};
      padding: 16px;
    }
    .main {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
    }
  }
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${p => p.theme.primary};
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
  svg {
    fill: currentColor;
    margin-right: 10px;
  }
`

const SellingChatConnector = ({ match, history }) => {
  const { user } = useContext(AppContext)

  return (
    <SellingDiscussionContainer>
      {({ loading, data }) => {
        if (loading) {
          return null
        }

        const offers = data.findSellingOffersByItemId

        if (!offers) {
          return history.push('/error/404')
        }
        if (offers[0].seller.id !== user.id) {
          return history.push('/error/401')
        }

        const offer = offers.find(offer => offer.id === match.params.offerId)

        return (
          <SellingDiscussionConnectorWrapper>
            <div className='content'>
              <div className='header'>
                <NavLink to='/selling'>
                  <ChevronLeft size={16} />
                  My offers
                </NavLink>
              </div>
              <div className='main'>
                <LeftColumn offers={offers} item={offer.item} />
                <MiddleColumn buyer={offer.buyer} />
                <div>col 3</div>
              </div>
            </div>
          </SellingDiscussionConnectorWrapper>
        )
      }}
    </SellingDiscussionContainer>
  )
}

export default withRouter(SellingChatConnector)
