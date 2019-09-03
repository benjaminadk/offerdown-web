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

const FindItemsContainer = props => {
  const items = useQuery(findItemsQuery)
  return props.children(items)
}

export default FindItemsContainer
