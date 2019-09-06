import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

const findItemsQuery = gql`
  query FindItemsQuery {
    findItems {
      id
      name
      price
      images
      location
    }
  }
`

const FindItemsContainer = ({ children }) => {
  const payload = useQuery(findItemsQuery)
  return children(payload)
}

export default FindItemsContainer
