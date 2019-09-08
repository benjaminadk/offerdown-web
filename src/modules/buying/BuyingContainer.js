import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

export const findBuyingOffersQuery = gql`
  query FindBuyingOffersQuery {
    findBuyingOffers {
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

const BuyingContainer = ({ children }) => {
  const payload = useQuery(findBuyingOffersQuery)
  return children(payload)
}

export default BuyingContainer
