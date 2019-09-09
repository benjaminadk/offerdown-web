import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

const findItems = gql`
  query FindItems {
    findItems {
      id
      name
      price
      images
      seller {
        location
      }
    }
  }
`

const FindItemsContainer = ({ children }) => {
  const payload = useQuery(findItems)
  return children(payload)
}

export default FindItemsContainer
