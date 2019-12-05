import React from 'react'

const Projects = () => {
  return (
    <section id="projects">
      <div className="title-back">
        <h2 className="title">Projects</h2>
        <hr/>
      </div>
      <div className="projects">
        <div className="project">
          <div className="project-info">
            <div>                  
              <h2 className="title">HairHub</h2>
              <p>A one-week, solo project where I used Python, Django, React, Axios, Git, Github, SCSS, CLI, and Bulma. The idea of the application is to find mobile hairdressers and book appointments to get your hair done at home. I stored the hairdresser’s information in the backend using Django and I built a stylish and responsive frontend using React and Axios to link the database with the frontend.</p>
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
              <p>A ten-day, group project where we used JavaScript, NodeJS, React, MongoDB, Express, Mongoose, Axios, CLI, SCSS, and Spectre framework. We created the database, the seeds and linked them to the front end. I was in charge of writing the tests, the error handling, creating seeds, the user “Travellers” frontend, and API requests. </p>
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
              <p>A two-day, pair programming project where we used JavaScript, CSS, Axios, and a public API. We used one computer and took turns to code. We created an API request using Axios and built a frontend using React to create the logic of the page and display the requested data.</p>
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
              <p>A one-week, solo project where I used HTML, CSS, and JavaScript to recreate a snake game clone with a Yoshi theme. This project helped me to solidify all that I learned in the first module of the course.</p>
              <a className="button" href="http://gsiebels.github.io/project-01/">Launch</a>
              <a className="button" href="https://github.com/gsiebels/project-01/blob/master/README.md"><img className="link" src="https://konpa.github.io/devicon/devicon.git/icons/github/github-original.svg" alt="github link" /></a>
            </div>
            <img className="project-image" src="https://raw.githubusercontent.com/gsiebels/project-01/master/ezgif.com-video-to-gif.gif" alt="yoshi snake gif" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects