import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

export const findSellingOffersByItemId = gql`
  query FindSellingOffersByItemId($itemId: ID!) {
    findSellingOffersByItemId(itemId: $itemId) {
      id
      item {
        id
        createdAt
        name
        description
        images
        price
        category
        condition
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
        location
        latitude
        longitude
      }
      seller {
        id
        name
        image
        location
        latitude
        longitude
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
