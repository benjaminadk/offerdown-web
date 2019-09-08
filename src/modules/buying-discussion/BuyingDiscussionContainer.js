import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

export const findBuyingOffersByItemId = gql`
  query FindBuyingOffersByItemId($itemId: ID!) {
    findBuyingOffersByItemId(itemId: $itemId) {
      id
      item {
        id
        name
        images
        price
      }
      messages {
        id
        createdAt
        text
        user {
          id
          name
          image
        }
      }
      buyer {
        id
        name
        image
      }
      seller {
        id
        name
        image
      }
    }
  }
`

const BuyingDiscussionContainer = ({ children, match }) => {
  const payload = useQuery(findBuyingOffersByItemId, {
    variables: { itemId: match.params.itemId }
  })
  return children(payload)
}

export default withRouter(BuyingDiscussionContainer)
