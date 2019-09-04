import React, { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useLocation } from './utils/useLocation'
import { useMedia } from './utils/useMedia'
import { useHere } from './utils/useHere'
import Authentication from './modules/app/Authentication'
import Header from './modules/app/Header'
import Footer from './modules/app/Footer'
import Routes from './routes'

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
    <Authentication>
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
    </Authentication>
  )
}

export default App
