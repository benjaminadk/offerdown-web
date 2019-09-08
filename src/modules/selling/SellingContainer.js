import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

export const findSellingOffersQuery = gql`
  query FindSellingOffersQuery {
    findSellingOffers {
      id
      item {
        id
        name
        images
      }
      buyer {
        image
      }
    }
  }
`

const SellingContainer = ({ children }) => {
  const payload = useQuery(findSellingOffersQuery)
  return children(payload)
}

export default SellingContainer
