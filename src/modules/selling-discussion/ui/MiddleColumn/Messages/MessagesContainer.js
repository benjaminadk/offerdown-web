import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

export const findMessages = gql`
  query FindMessages($offerId: ID!) {
    findMessages(offerId: $offerId) {
      id
      createdAt
      text
      user {
        id
        name
        image
      }
    }
  }
`

const MessagesContainer = ({ match, children }) => {
  const payload = useQuery(findMessages, { variables: { offerId: match.params.offerId } })
  return children(payload)
}

export default withRouter(MessagesContainer)
