import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navhold tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li><a className="navfont" href="#home">Home</a></li>
            <li><a className="navfont" href="#about">About</a></li>
            <li><a className="navfont" href="#projects">Projects</a></li>
            <li><a className="navfont" href="#contact">Contact</a></li>
            <li><a className="hide navfont" href="https://github.com/gsiebels">GitHub</a></li>
            <li><a className="hide navfont" href="https://www.linkedin.com/in/gerardosiebels/">Linkedin</a></li>
          </ul>
        </div>
      </nav>
      <div className="gap"></div>
    </>
  )
}

export default Navbar