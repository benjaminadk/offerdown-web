import { useMutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'

import { meQuery } from '../app/Authentication'

const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      path
      message
    }
  }
`

const LoginContainer = ({ children, match, history, location }) => {
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
    const { state } = location
    if (state && state.next) {
      history.push(state.next)
      return
    }

    history.push('/')
  }

  return children({ submit, onFinish })
}

export default withRouter(LoginContainer)
