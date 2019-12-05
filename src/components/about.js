import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="title-back">
          <h2 className="title">About</h2>
          <hr/>
      </div>
      <div className="about">
        <div className="profile">
          <img className="pic" src="https://raw.githubusercontent.com/gsiebels/gs-portfolio/master/pict20191202_121715_0.jpeg" alt="gerardos profile picture"/>
          <div className="text-card">
            <h4 className="title">Personal Bio</h4>
            <p>
              Having enjoyed working in the tech industry for the past 5 years, I decided to make the leap into software development by enrolling in General Assembly’s Software Engineering Immersive course. I immediately felt well-suited to coding and the industry as I enjoy the problem-solving involved, the constant learning and the very helpful community. I am looking forward to what will come next.
            </p>
          </div>
        </div>
        <div className="lang">
          <h4 className="title is-4"></h4>
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/html5/html5-plain.svg" alt="html logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/css3/css3-plain.svg" alt="css logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/sass/sass-original.svg" alt="sass logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="javascript logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg" alt="react logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/python/python-original.svg" alt="python logo"/>
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/django/django-original.svg" alt="django logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/git/git-original-wordmark.svg" alt="git logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/github/github-original-wordmark.svg" alt="github logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/heroku/heroku-original-wordmark.svg" alt="heroku logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/express/express-original.svg" alt="express logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/mocha/mocha-plain.svg" alt="mocha logo" />
          <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/postgresql/postgresql-plain.svg" alt="sql logo" />
        </div>
      </div>
    </section>
  )
}

export default About