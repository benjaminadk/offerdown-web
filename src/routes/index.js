import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import AuthRoute from '../modules/app/AuthRoute'
import SignupConnector from '../modules/signup/SignupConnector'
import LoginConnector from '../modules/login/LoginConnector'
import FindItemsConnector from '../modules/item/find/FindItemsConnector'
import ViewItemConnector from '../modules/item/view/ViewItemConnector'
import SellingConnector from '../modules/selling/SellingConnector'
import SellingDiscussionConnector from '../modules/selling-discussion/SellingDiscussionConnector'
import BuyingConnector from '../modules/buying/BuyingConnector'
import BuyingDiscussionConnector from '../modules/buying-discussion/BuyingDiscussionConnector'
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
        <AuthRoute exact path='/selling' component={SellingConnector} />
        <AuthRoute
          exact
          path='/selling/:itemId/discussion/:offerId'
          component={SellingDiscussionConnector}
        />
        <AuthRoute exact path='/buying' component={BuyingConnector} />
        <AuthRoute
          exact
          path='/buying/:itemId/discussion/:offerId'
          component={BuyingDiscussionConnector}
        />
      </Switch>
    </Main>
  )
}

export default Routes
