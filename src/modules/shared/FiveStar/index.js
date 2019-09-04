import React from 'react'
import { Star } from 'styled-icons/fa-solid/Star'
import styled from 'styled-components'

export const FiveStarWrapper = styled.div`
  display: flex;
  svg {
    fill: ${p => p.theme.grey[6]};
    margin-right: 4px;
  }
  span {
    color: ${p => p.theme.grey[6]};
  }
`

const FiveStar = () => {
  return (
    <FiveStarWrapper>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={20} />
      ))}
      <span>(0)</span>
    </FiveStarWrapper>
  )
}

export default FiveStar
