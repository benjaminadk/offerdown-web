import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

export const findSellingOffers = gql`
  query FindSellingOffers {
    findSellingOffers {
      id
      item {
        id
        name
        images
      }
      buyer {
        id
        image
      }
    }
  }
`

const SellingContainer = ({ children }) => {
  const payload = useQuery(findSellingOffers)
  return children(payload)
}

export default SellingContainer
