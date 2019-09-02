import React from 'react'
import styled from 'styled-components'

const Text = styled.h2`
  text-align: center;
`

const TextPage = props => {
  const { state } = props.location

  return <Text>{state && state.message ? state.message : 'OfferDown'}</Text>
}

export default TextPage
