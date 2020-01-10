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

        <div className="technologies">
        <h4 className="title">Technologies</h4>
          <div className="lang">
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/html5/html5-plain.svg" alt="html logo" />
              <p className="logos-name">HTML5</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/css3/css3-plain.svg" alt="css logo" />
              <p className="logos-name">CSS3</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/sass/sass-original.svg" alt="sass logo" />
              <p className="logos-name">SASS</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="javascript logo" />
              <p className="logos-name">JavaScript</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg" alt="react logo" />
              <p className="logos-name">ReactJS</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs logo" />
              <p className="logos-name">NodeJS</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb logo" />
              <p className="logos-name">MongoDB</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/python/python-original.svg" alt="python logo"/>
              <p className="logos-name">Python</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/django/django-original.svg" alt="django logo" />
              <p className="logos-name">Django</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/git/git-original-wordmark.svg" alt="git logo" />
              <p className="logos-name">Git</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/github/github-original-wordmark.svg" alt="github logo" />
              <p className="logos-name">GitHub</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/heroku/heroku-original-wordmark.svg" alt="heroku logo" />
              <p className="logos-name">Heroku</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/express/express-original.svg" alt="express logo" />
              <p className="logos-name">Express</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/mocha/mocha-plain.svg" alt="mocha logo" />
              <p className="logos-name">Mocha</p>
            </div>
            <div className="logo-and-name">
              <img className="logo" src="https://konpa.github.io/devicon/devicon.git/icons/postgresql/postgresql-plain.svg" alt="sql logo" />
              <p className="logos-name">PostgreSQL</p>
            </div>
          </div>
        </div>
        <div className="interests">
          <h4 className="title">Interests</h4>
          <p>
          I am interested in a healthy lifestyle, having a good diet and exercising witch involves swimming and going for long walks.<br/> 
          I am also a gamer 🎮. I like playing online competitive games like Call Of Duty, Apex Legends, Fortnite, Mario Kart, Super Smash Bros, as well as indie games like BroForce, My Friend Pedro and more. <br/>
          Wath ever I do, I always try to have fun.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About