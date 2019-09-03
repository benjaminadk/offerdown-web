import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

const viewItemQuery = gql`
  query ViewItemQuery($id: ID!) {
    viewItem(id: $id) {
      name
      description
      price
      images
      latitude
      longitude
    }
  }
`

const ViewItemContainer = props => {
  const item = useQuery(viewItemQuery, { variables: { id: props.itemId } })
  return props.children(item)
}

export default ViewItemContainer
