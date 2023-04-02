import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Jumbo from './Components/Jumbo'
import Projects from './Components/Projects'
import ThemeContext from './Context/ThemeContext'

const App = () => {
  const ThemeHook = useState('light')
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={ThemeHook}>
        <Header />
        <HeroSection />
        <Jumbo />
        <About />
        <Projects />
        <Contact />
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}
export default App