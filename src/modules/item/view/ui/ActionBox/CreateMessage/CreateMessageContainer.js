import { useMutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'

const createMessage = gql`
  mutation CreateMessage($message: MessageInput!) {
    createMessage(message: $message)
  }
`

const CreateMessageContainer = ({ history, children }) => {
  const [mutate] = useMutation(createMessage)

  async function submit(message) {
    const { data } = await mutate({
      variables: { message }
    })
    console.log(data)
    return data
  }

  function onFinish() {
    history.push('/')
  }

  return children({ submit, onFinish })
}

export default withRouter(CreateMessageContainer)
