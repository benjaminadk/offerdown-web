import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

export const findSellingOffersByItemId = gql`
  query FindSellingOffersByItemId($itemId: ID!) {
    findSellingOffersByItemId(itemId: $itemId) {
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
      }
    }
  }
`

const SellingDiscussionContainer = ({ children, match }) => {
  const payload = useQuery(findSellingOffersByItemId, {
    variables: { itemId: match.params.itemId }
  })
  return children(payload)
}

export default withRouter(SellingDiscussionContainer)
