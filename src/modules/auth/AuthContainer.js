import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

export const meQuery = gql`
  query Me {
    me {
      id
      email
      name
      image
    }
  }
`

const AuthContainer = props => {
  const payload = useQuery(meQuery)
  return props.children(payload)
}

export default AuthContainer
