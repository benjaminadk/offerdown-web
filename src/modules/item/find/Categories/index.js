import React from 'react'
import { ChevronDown } from 'styled-icons/boxicons-regular/ChevronDown'
// import { ChevronUp } from 'styled-icons/boxicons-regular/ChevronUp'

import { categories } from '../../shared/constants'
import { CategoriesWrapper } from './styles'

const Categories = () => {
  return (
    <CategoriesWrapper>
      <div className='bar'>
        {categories.map(category => (
          <div className='category' key={category}>
            {category}
          </div>
        ))}
        <div className='more'>
          <span>More</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </CategoriesWrapper>
  )
}

export default Categories
