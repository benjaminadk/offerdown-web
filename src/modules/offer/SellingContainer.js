import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

export const offersQuery = gql`
  query OffersQuery($type: OfferType!) {
    id
    item {
      id
      name
      images
    }
  }
`

const SellingContainer = ({ children, location }) => {
  const payload = useQuery(offersQuery, { variables: { type: location.pathname.toUpperCase() } })
  return children(payload)
}

export default withRouter(SellingContainer)
