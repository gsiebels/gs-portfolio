import React from 'react'

import Home from '../components/home'
import Navbar from '../components/navbar'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

import '../styles/index.scss'

const App = () => {
  return (
    <main>
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
