import React from 'react'
import styled from 'styled-components'

import { formatCondition } from '../../../../utils/textHelpers'

export const ConditionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-weight: 700;
`

const Condition = ({ condition }) => {
  return <ConditionWrapper>{formatCondition(condition)}</ConditionWrapper>
}

export default Condition
