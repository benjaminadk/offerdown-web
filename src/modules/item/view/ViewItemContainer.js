import PropTypes from 'prop-types'
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
      seller {
        id
        name
        image
        location
        latitude
        longitude
      }
    }
  }
`

const ViewItemContainer = ({ children, itemId }) => {
  const payload = useQuery(viewItemQuery, { variables: { id: itemId } })
  return children(payload)
}

ViewItemContainer.propTypes = {
  itemId: PropTypes.string.isRequired
}

export default ViewItemContainer
