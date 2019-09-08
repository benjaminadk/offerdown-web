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

export const newMessageSubscription = gql`
  subscription NewMessageSubscription($offerId: ID!) {
    newMessage(offerId: $offerId) {
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
  const { offerId } = match.params
  const { loading, data, subscribeToMore } = useQuery(findMessages, { variables: { offerId } })
  return children({
    loading,
    data,
    subscribe: () =>
      subscribeToMore({
        document: newMessageSubscription,
        variables: { offerId },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData) {
            return prev
          }

          return {
            ...prev,
            findMessages: [...prev.findMessages, subscriptionData.data.newMessage]
          }
        }
      })
  })
}

export default withRouter(MessagesContainer)
