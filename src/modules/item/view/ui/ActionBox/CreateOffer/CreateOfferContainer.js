import { useMutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'

const createOffer = gql`
  mutation CreateOffer($offer: OfferInput!) {
    createOffer(offer: $offer) {
      path
      message
    }
  }
`

const CreateOfferContainer = ({ history, children }) => {
  const [mutate] = useMutation(createOffer)

  async function submit(offer) {
    const { data } = await mutate({
      variables: { offer }
    })
    if (data) {
      return data.createOffer
    }

    return null
  }

  function onFinish() {
    history.push('/')
  }

  return children({ submit, onFinish })
}

export default withRouter(CreateOfferContainer)
