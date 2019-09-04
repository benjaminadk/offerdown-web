import React from 'react'
import styled from 'styled-components'

import { formatCreatedAt, formatEnum } from '../../../../../utils/textHelpers'

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  .category {
    color: ${p => p.theme.primary};
    margin-left: 4px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Category = ({ category, createdAt }) => {
  return (
    <CategoryWrapper>
      Posted {formatCreatedAt(createdAt)} ago in{' '}
      <span className='category'>{formatEnum(category)}</span>
    </CategoryWrapper>
  )
}

export default Category
