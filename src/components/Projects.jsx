import React, { useState } from 'react';
import projectsData from './projectsData';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleBackgroundClick = (e) => {
    if (!e.target.closest('.project__card')) {
      setActiveCard(null);
    }
  };
  return (
    <div className='projects' id='projects'  onClick={handleBackgroundClick}>
      <h1>My projects</h1>
      <div className="projects__container">
        {projectsData.map((project, index) => (
          <div key={index} className={`project__card ${activeCard === index ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(index);
            }}>
            <img src={project.image} className="project__card__img" alt="" />
            <div className="project__card--blur">
            <h2 className="project__card__title">{project.title}</h2>
            <div className="project__card__technologies">
              {project.technologies.map((tech, techIndex) => (
                  <p key={techIndex} className="technology">{tech}</p>
                ))}
            </div>
            <div className="project__card__link" onClick={() => window.open(project.githubLink, '_blank')}>Github</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
