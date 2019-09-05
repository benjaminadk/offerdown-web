import React from 'react'
import styled from 'styled-components'

export const TitleWrapper = styled.header`
  margin-top: 50px;
  h3 {
    font-size: 30px;
    font-weight: 900;
    text-align: center;
  }
`

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <h3>{title}</h3>
    </TitleWrapper>
  )
}

export default Title
