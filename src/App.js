import React, { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'

import AuthContainer from './modules/auth/AuthContainer'
import { useLocation } from './utils/useLocation'
import { useMedia } from './utils/useMedia'
import { useHere } from './utils/useHere'
import Header from './modules/Header'
import Routes from './routes'
import Footer from './modules/Footer'

export const AppContext = createContext({
  user: null,
  screen: '',
  platform: null
})

const App = () => {
  const screen = useMedia()
  const platform = useHere()
  useLocation()

  return (
    <AuthContainer>
      {({ loading, data }) => {
        return (
          <AppContext.Provider value={{ user: data.me, screen, platform }}>
            <BrowserRouter>
              <Header />
              <Routes />
              <Footer />
            </BrowserRouter>
          </AppContext.Provider>
        )
      }}
    </AuthContainer>
  )
}

export default App
