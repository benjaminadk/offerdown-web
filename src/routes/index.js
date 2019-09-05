import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import SignupConnector from '../modules/signup/SignupConnector'
import LoginConnector from '../modules/login/LoginConnector'
import FindItemsConnector from '../modules/item/find/FindItemsConnector'
import ViewItemConnector from '../modules/item/view/ViewItemConnector'
import TextPage from '../modules/app/TextPage'

export const Main = styled.main`
  min-height: calc(100vh - ${p => p.theme.headerHeight});
`

const Routes = () => {
  return (
    <Main>
      <Switch>
        <Route exact path='/' component={FindItemsConnector} />
        <Route exact path='/signup' component={SignupConnector} />
        <Route exact path='/login' component={LoginConnector} />
        <Route exact path='/item/:itemId' component={ViewItemConnector} />
        <Route path='/m' component={TextPage} />
      </Switch>
    </Main>
  )
}

export default Routes
