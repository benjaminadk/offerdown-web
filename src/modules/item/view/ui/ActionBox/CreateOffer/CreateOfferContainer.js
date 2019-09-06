import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'

const createOffer = gql`
  mutation CreateOffer($input: OfferInput!) {
    createOffer(input: $input) {
      path
      message
    }
  }
`

const CreateOfferContainer = ({ children }) => {
  const [mutate] = useMutation(createOffer)

  async function submit(input) {
    const { data } = await mutate({
      variables: { input }
    })
    if (data) {
      return data.createOffer
    }

    return null
  }

  return children({ submit })
}

export default CreateOfferContainer
