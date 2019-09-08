import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { AppContext } from '../../App'
import BuyingDiscussionContainer from './BuyingDiscussionContainer'
import Header from '../selling-discussion/ui/Header'
import MiddleColumn from '../selling-discussion/ui/MiddleColumn'

export const BuyingDiscussionConnectorWrapper = styled.div`
  background-color: ${p => p.theme.grey[0]};
  .content {
    max-width: calc(100vw - 96px);
    margin: 0 auto;
    background-color: ${p => p.theme.white};
    border: ${p => p.theme.borderLight};
    border-top: 0;
    .main {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
  }
`

const BuyingDiscussionConnector = ({ match, history }) => {
  const { user } = useContext(AppContext)

  return (
    <BuyingDiscussionContainer>
      {({ loading, data }) => {
        if (loading) {
          return null
        }

        const offers = data.findBuyingOffersByItemId

        if (!offers) {
          return history.push('/error/404')
        }
        if (offers[0].buyer.id !== user.id) {
          return history.push('/error/401')
        }

        const offer = offers.find(offer => offer.id === match.params.offerId)

        return (
          <BuyingDiscussionConnectorWrapper>
            <div className='content'>
              <Header />
              <div className='main'>
                <MiddleColumn otherUser={offer.seller} />
                <div>col 2</div>
              </div>
            </div>
          </BuyingDiscussionConnectorWrapper>
        )
      }}
    </BuyingDiscussionContainer>
  )
}

export default withRouter(BuyingDiscussionConnector)
