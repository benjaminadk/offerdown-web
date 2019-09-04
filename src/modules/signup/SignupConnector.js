import React from 'react'

import SignupContainer from './SignupContainer'
import Title from './ui/Title'
import SignupForm from './ui/SignupForm'
import Switch from './ui/Switch'
import Message from './ui/Message'

const SignupConnector = () => (
  <SignupContainer>
    {({ submit, onFinish }) => (
      <>
        <Title title='Sign up' />
        <SignupForm submit={submit} onFinish={onFinish} />
        <Switch to='/login' text='Log in' />
        <Message />
      </>
    )}
  </SignupContainer>
)

export default SignupConnector
