import React, { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useLocation } from './utils/useLocation'
import { useMedia } from './utils/useMedia'
import { useHere } from './utils/useHere'
import Header from './modules/Header'
import Routes from './routes'
import Footer from './modules/Footer'

export const AppContext = createContext({
  screen: '',
  platform: null
})

const App = () => {
  const screen = useMedia()
  const platform = useHere()
  useLocation()

  return (
    <AppContext.Provider value={{ screen, platform }}>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
