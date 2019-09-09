import { useMutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'

const signupMutation = gql`
  mutation Signup($input: SignupInput!) {
    signup(input: $input) {
      path
      message
    }
  }
`

const SignupContainer = ({ children, history }) => {
  const [mutate] = useMutation(signupMutation)

  async function submit(values) {
    const geolocation = JSON.parse(window.localStorage.getItem('od_location'))
    const input = { ...values, ...geolocation }

    const { data } = await mutate({
      variables: { input }
    })
    if (data) {
      return data.signup
    }
    return null
  }

  function onFinish() {
    history.push('/m/confirm-email', {
      message: 'check your email to confirm your account'
    })
  }

  return children({ submit, onFinish })
}

export default withRouter(SignupContainer)
