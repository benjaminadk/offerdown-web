import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'

const createOffer = gql`
  mutation CreateOffer($itemId: ID!, $sellerId: ID!, $text: String!) {
    createOffer(itemId: $itemId, sellerId: $sellerId, text: $text) {
      path
      message
    }
  }
`

const CreateOfferContainer = ({ children }) => {
  const [mutate] = useMutation(createOffer)

  async function submit(variables) {
    const { data } = await mutate({
      variables
    })
    if (data) {
      return data.createOffer
    }

    return null
  }

  return children({ submit })
}

export default CreateOfferContainer
