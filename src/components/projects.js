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
  )
}

export default Projects