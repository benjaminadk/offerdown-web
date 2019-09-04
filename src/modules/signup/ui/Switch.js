import React from 'react'
import styled from 'styled-components'
import NavLink from '../../shared/NavLink'

export const SwitchWrapper = styled.div`
  font-size: 18px;
  text-align: center;
  margin: 20px auto;
`

const Switch = ({ to, text }) => {
  return (
    <SwitchWrapper>
      Already have an account? <NavLink to={to} text={text} />
    </SwitchWrapper>
  )
}

export default Switch
