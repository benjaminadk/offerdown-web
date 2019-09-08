import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

export const createMessage = gql`
  mutation CreateMessage($text: String!, $offerId: ID!) {
    createMessage(text: $text, offerId: $offerId)
  }
`

const CreateMessageContainer = ({ match, children }) => {
  const [mutate] = useMutation(createMessage)

  async function submit(text) {
    const { data } = await mutate({
      variables: {
        text,
        offerId: match.params.offerId
      }
    })
    if (data) {
      return data.createMessage
    }
    return null
  }

  return children({ submit })
}

export default withRouter(CreateMessageContainer)
