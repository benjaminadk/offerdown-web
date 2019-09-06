import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

import { meQuery } from '../app/Authentication'

export const signoutMutation = gql`
  mutation SignoutMutation {
    signout
  }
`

const SignoutContainer = ({ children, history }) => {
  const [mutate] = useMutation(signoutMutation, { refetchQueries: [{ query: meQuery }] })

  async function signout() {
    await mutate()
    history.push('/')
  }

  return children({ signout })
}

export default withRouter(SignoutContainer)
