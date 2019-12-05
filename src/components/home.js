import React from 'react'
import logo from '../images/gslogo.svg'

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="hero-body is-mobile">
        <img className="gslogo" src={logo} alt="gs logo" />
        <div className="center container">
          <h1 className="light home-text">
            Hello,
          </h1>
          <h2 className="light home-text">
            I am <span className="name">Gerardo</span>, a full-stack developer.
          </h2>
        </div>
      </div>
      <a href="#about">
        <div id="arrow-down">
          <i>⌄</i>
        </div>
      </a>
    </section>
  )
}

export default Home