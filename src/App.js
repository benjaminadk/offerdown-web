import React, { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useLocation } from './utils/useLocation'
import { useMedia } from './utils/useMedia'
import Header from './modules/Header'
import Routes from './routes'
import Footer from './modules/Footer'

export const AppContext = createContext({
  screen: ''
})

const App = () => {
  const screen = useMedia()
  useLocation()

  return (
    <AppContext.Provider value={{ screen }}>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
