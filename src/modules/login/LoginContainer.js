import { useMutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'

import { meQuery } from '../auth/AuthContainer'

const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      path
      message
    }
  }
`

const LoginContainer = props => {
  const [mutate] = useMutation(loginMutation)

  async function submit(values) {
    const { data } = await mutate({
      variables: values,
      refetchQueries: [{ query: meQuery }]
    })
    if (data) {
      return data.signin
    }
    return null
  }

  function onFinish() {
    const {
      history,
      location: { state }
    } = props
    if (state && state.next) {
      return history.push(state.next)
    }
    history.push('/')
  }

  return props.children({ submit, onFinish })
}

export default withRouter(LoginContainer)
