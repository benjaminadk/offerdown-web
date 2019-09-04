import React from 'react'
import styled from 'styled-components'
import NavLink from '../../shared/NavLink'

export const ForgotPasswordWrapper = styled.div`
  text-align: center;
  margin: 20px auto;
`

export const Hr = styled.hr`
  width: 300px;
  color: ${p => p.theme.grey[2]};
  border: 0;
  border-top: 1px solid;
  margin: 20px auto;
`

const ForgotPassword = () => {
  return (
    <>
      <ForgotPasswordWrapper>
        <NavLink to='/forgot-password' text='Forgot Password?' />
      </ForgotPasswordWrapper>
      <Hr />
    </>
  )
}

export default ForgotPassword
