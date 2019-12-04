import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <div className="title-back">
        <h2 className="title">Contact</h2>
        <hr/>
      </div>
      <div className="contacts">
        <div className="contact">
          <a className="contact-image" href=" mailto:gsiebels@gmail.com">✉️</a>
          <a href="https://www.linkedin.com/in/gerardosiebels/"><img className="contact-image" src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" /></a>
          <a href="https://www.linkedin.com/in/gerardosiebels/"><img className="contact-image" src="https://konpa.github.io/devicon/devicon.git/icons/github/github-original.svg" /></a>
        </div>
      </div>
    </section>
  )
}

export default Contact