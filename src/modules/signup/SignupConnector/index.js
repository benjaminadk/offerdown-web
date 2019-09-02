import React from 'react'

import SignupContainer from '../SignupContainer'
import SignupForm from '../SignupForm'
import { SignupConnectorWrapper, NavLink } from './styles'

const SignupConnector = () => (
  <SignupContainer>
    {({ submit, onFinish }) => (
      <SignupConnectorWrapper>
        <header>
          <h3>Sign up</h3>
        </header>
        <main>
          <SignupForm submit={submit} onFinish={onFinish} />
        </main>
        <div className='switch'>
          Already have an account? <NavLink to='/login'>Login</NavLink>
        </div>
        <div className='message'>
          By signing up or logging in, you agree to the OfferUp{' '}
          <NavLink to='/terms-of-service'>Terms of Service</NavLink> and{' '}
          <NavLink to='/privacy-policy'>Privacy Policy</NavLink>.
        </div>
      </SignupConnectorWrapper>
    )}
  </SignupContainer>
)

export default SignupConnector
