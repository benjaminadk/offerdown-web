import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

const viewItemQuery = gql`
  query ViewItemQuery($id: ID!) {
    viewItem(id: $id) {
      createdAt
      name
      description
      price
      images
      condition
      category
      location
      latitude
      longitude
      seller {
        id
        name
        image
      }
    }
  }
`

const ViewItemContainer = props => {
  const item = useQuery(viewItemQuery, { variables: { id: props.itemId } })
  return props.children(item)
}

export default ViewItemContainer
