import React from 'react'
import styled from 'styled-components'
import NavLink from '../../shared/NavLink'

export const MessageWrapper = styled.div`
  width: 300px;
  color: ${p => p.theme.grey[6]};
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
`

const Message = () => {
  return (
    <MessageWrapper>
      By signing up or logging in, you agree to the OfferUp{' '}
      <NavLink to='/terms-of-service' text='Terms of Service' /> and{' '}
      <NavLink to='/privacy-policy' text='Privacy Policy' />.
    </MessageWrapper>
  )
}

export default Message
