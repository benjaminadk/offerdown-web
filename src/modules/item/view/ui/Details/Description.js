import React from 'react'
import styled from 'styled-components'

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

const Description = ({ description }) => {
  return <DescriptionWrapper>{description}</DescriptionWrapper>
}

export default Description
