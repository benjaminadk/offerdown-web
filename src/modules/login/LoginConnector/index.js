import React from 'react'

import LoginContainer from '../LoginContainer'
import LoginForm from '../LoginForm'
import {
  SignupConnectorWrapper as LoginConnectorWrapper,
  NavLink
} from '../../signup/SignupConnector/styles'

const LoginConnector = () => (
  <LoginContainer>
    {({ submit, onFinish }) => (
      <LoginConnectorWrapper>
        <header>
          <h3>Log in</h3>
        </header>
        <main>
          <LoginForm submit={submit} onFinish={onFinish} />
        </main>
        <div className='forgot'>
          <NavLink to='/forgot-password'>Forgot Password?</NavLink>
        </div>
        <hr />
        <div className='switch'>
          Don't have an account? <NavLink to='/signup'>Signup</NavLink>
        </div>
        <div className='message'>
          By signing up or logging in, you agree to the OfferUp{' '}
          <NavLink to='/terms-of-service'>Terms of Service</NavLink> and{' '}
          <NavLink to='/privacy-policy'>Privacy Policy</NavLink>.
        </div>
      </LoginConnectorWrapper>
    )}
  </LoginContainer>
)

export default LoginConnector
