import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

export const findOffersQuery = gql`
  query FindOffersQuery($type: OfferType!) {
    findOffers(type: $type) {
      id
      item {
        id
        name
        images
      }
      messages {
        user {
          id
          image
        }
      }
    }
  }
`

const SellingContainer = ({ children, location }) => {
  const type = location.pathname.toUpperCase().slice(1)
  const payload = useQuery(findOffersQuery, { variables: { type } })
  return children(payload)
}

export default withRouter(SellingContainer)
