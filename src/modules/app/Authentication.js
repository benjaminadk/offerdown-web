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

const AuthContainer = ({ children }) => {
  const payload = useQuery(meQuery)
  return children(payload)
}

export default AuthContainer
