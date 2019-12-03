import React from 'react'

import Footer from '../components/footer'
import '../styles/index.scss'

const App = () => {
  return (
    <>
      <section className="herohold top hero is-fullheight">
        <div className="hero-body">
          <div className="center container">
            <h1 className="light title is-1">
              Hello,
            </h1>
            <h2 className="light title is-2">
              I am <span className="name">Gerardo</span>, a full-stack developer.
            </h2>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="havhold tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li><a className="light">Home</a></li>
                <li><a className="light">About</a></li>
                <li><a className="light">Portfolio</a></li>
                <li><a className="light">Logos</a></li>
                <li><a className="light" href="https://www.linkedin.com/in/gerardosiebels/">Linkedin</a></li>
              </ul>
            </div>
          </nav>
        </div>  
      </section>

      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">
              Hello,
            </h1>
            <h2 className="title is-2">
              I am Gerardo, a full-stack developer.
            </h2>
          </div>
        </div>
      </section>

      
      
      <Footer />
    </>
  )
}

export default App
