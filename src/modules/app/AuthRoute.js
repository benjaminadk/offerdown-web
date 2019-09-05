import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AppContext } from '../../App'

const AuthRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AppContext)

  function render(routeProps) {
    if (!user) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { next: routeProps.location.pathname }
          }}
        />
      )
    }

    return <Component {...routeProps} />
  }

  return <Route {...rest} render={render} />
}

export default AuthRoute
