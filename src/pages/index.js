import React from 'react'

import Footer from '../components/footer'
import '../styles/index.scss'

const App = () => {
  return (
    <>
      <section id="home" className="home herohold top hero is-fullheight">
        <div className="hero-body">
          <div className="center container">
            <h1 className="light home-text">
              Hello,
            </h1>
            <h2 className="light home-text">
              I am <span className="name">Gerardo</span>, a full-stack developer.
            </h2>
          </div>
        </div>
      </section>
        <nav className="navhold tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li><a className="navfont" href="#home">Home</a></li>
              <li><a className="navfont" href="#about">About</a></li>
              <li><a className="navfont" href="#projects">Projects</a></li>
              <li><a className="navfont" href="#contact">Contact</a></li>
              <li><a className="navfont" href="https://github.com/gsiebels">GitHub</a></li>
              <li><a className="navfont" href="https://www.linkedin.com/in/gerardosiebels/">Linkedin</a></li>
            </ul>
          </div>
        </nav>
        <div className="gap"></div>
      <section id="about">
        <div className="title-back">
            <h2 className="title">
              About
            </h2>
            <hr/>
        </div>

        <div className="about">
            <div className="profile">
              <img className="pic" src="https://raw.githubusercontent.com/gsiebels/gs-portfolio/master/pict20191202_121715_0.jpeg" alt="gerardos profile picture"/>
              <div className="text-card container columns">
                <h4 className="title">Persobal Bio</h4>
                <p>
                Having enjoyed working in the tech industry for the past 5 years, I decided to make the leap into software development by enrolling in General Assembly’s Software Engineering Immersive course. I immediately felt well-suited to coding and the industry as I enjoy the problem-solving involved, the constant learning and the very helpful community. I am looking forward to what will come next.
                </p>
              </div>
            </div>

            <div className="lang">
              <h4 className="title is-4">Technologies</h4>

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

        <section id="projects">
          <div className="title-back">
              <h2 className="title">
                Projects
              </h2>
              <hr/>
          </div>
          <div className="projects">
          <div className="project">
              <div className="project-info">
                <div>                  
                  <h2 className="title">HairHub</h2>
                  <p>This is HairHub, a mobile freelance hairdresser site where you can search for individual hairdressers and book them based on the prices, reviews and image gallery. </p>
                  <a className="button" href="https://mobile-hairhub.herokuapp.com/">Launch</a>
                  <a className="button" href="https://github.com/gsiebels/project-hair/blob/master/README.md"><img className="link" src="https://konpa.github.io/devicon/devicon.git/icons/github/github-original.svg" alt="github link" /></a>
                </div>
                <img className="project-image" src="https://raw.githubusercontent.com/gsiebels/project-hair/master/hairhub-homepage-img.png" alt="hairhub project image" />
              </div>
            </div>

          <div className="project">
              <div className="project-info">
                <div>                  
                  <h2 className="title">Find Your Local Unicor</h2>
                  <p>A group project where we created the database, the seeds and linked them to the front end. I was in charge of writing the tests, the error handling, creating seeds, the user “Travellers” frontend, and API requests. </p>
                  <a className="button" href="https://find-your-local-unicorn.herokuapp.com/">Launch</a>
                  <a className="button" href="https://github.com/gsiebels/sei-group-project/blob/master/README.md"><img className="link" src="https://konpa.github.io/devicon/devicon.git/icons/github/github-original.svg" alt="github link" /></a>
                </div>
                <img className="project-image" src="https://raw.githubusercontent.com/gsiebels/sei-group-project/master/fylu-cities.png" alt="find your local unicorn project image" />
              </div>
            </div>

            <div className="project">
              <div className="project-info">
                <div>                  
                  <h2 className="title">Rick and Morty API</h2>
                  <p>This page uses a Publick Rick and Morty API. It's divided into 3 sections. The main section on the right has a button that generates a random episode and displays the characters that were on the episode. The top left section allows you to search for a specific episode, finally the bottom left section takes you to a page where you can see the characters with more detail.</p>
                  <a className="button" href="https://rick-and-morty-fun-page.herokuapp.com/">Launch</a>
                  <a className="button" href="https://github.com/gsiebels/sei-project-2/blob/master/README.md"><img className="link" src="https://konpa.github.io/devicon/devicon.git/icons/github/github-original.svg" alt="github link" /></a>
                </div>
                <img className="project-image" src="https://raw.githubusercontent.com/gsiebels/sei-project-2/master/rick-and-morty-image.png" alt="rick and morty project image" />
              </div>
            </div>
         
            <div className="project">
              <div className="project-info">
                <div>                  
                  <h2 className="title">Yoshi Snake</h2>
                  <p>A Yoshi themed, snake clone game that was complited in 7 days. This was my very first vanilla HTML, CSS and JavaScript project.</p>
                  <a className="button" href="http://gsiebels.github.io/project-01/">Launch</a>
                  <a className="button" href="https://github.com/gsiebels/project-01/blob/master/README.md"><img className="link" src="https://konpa.github.io/devicon/devicon.git/icons/github/github-original.svg" alt="github link" /></a>
                </div>
                <img className="project-image" src="https://raw.githubusercontent.com/gsiebels/project-01/master/ezgif.com-video-to-gif.gif" alt="yoshi snake gif" />
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
        <div className="title-back">
              <h2 className="title">
                Contact
              </h2>
              <hr/>
          </div>
          <div className="contact">
            <a href=""></a>
          </div>
        </section>

      <Footer />
    </>
  )
}

export default App
