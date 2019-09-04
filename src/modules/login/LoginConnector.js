import React from 'react'

import LoginContainer from './LoginContainer'
import Title from '../signup/ui/Title'
import LoginForm from './ui/LoginForm'
import Switch from '../signup/ui/Switch'
import Message from '../signup/ui/Message'
import ForgotPassword from './ui/ForgotPassword'

const LoginConnector = () => (
  <LoginContainer>
    {({ submit, onFinish }) => (
      <>
        <Title title='Log in' />
        <LoginForm submit={submit} onFinish={onFinish} />
        <ForgotPassword />
        <Switch to='/signup' text='Sign up' />
        <Message />
      </>
    )}
  </LoginContainer>
)

export default LoginConnector
