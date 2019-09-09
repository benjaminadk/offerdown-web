import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { AppContext } from '../../App'
import SellingDiscussionContainer from './SellingDiscussionContainer'
import Header from './ui/Header'
import LeftColumn from './ui/LeftColumn'
import MiddleColumn from './ui/MiddleColumn'
import RightColumn from './ui/RightColumn'

export const SellingDiscussionConnectorWrapper = styled.div`
  background-color: ${p => p.theme.grey[0]};
  .content {
    max-width: calc(100vw - 96px);
    margin: 0 auto;
    background-color: ${p => p.theme.white};
    border: ${p => p.theme.borderLight};
    border-top: 0;
    .main {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
    }
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
              <Header />
              <div className='main'>
                <LeftColumn offers={offers} item={offer.item} />
                <MiddleColumn otherUser={offer.buyer} />
                <RightColumn offer={offer} />
              </div>
            </div>
          </SellingDiscussionConnectorWrapper>
        )
      }}
    </SellingDiscussionContainer>
  )
}

export default withRouter(SellingChatConnector)
