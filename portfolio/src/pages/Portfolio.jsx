import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    id: 1,
    image: 'path_to_image1.jpg',
    title: 'Candidate Search',
    deployedLink: 'https://candidate-search-qt46.onrender.com/',
    githubLink: 'https://github.com/tmchoe124/candidate-search'
  },
  {
    id: 2,
    image: 'path_to_image2.jpg',
    title: 'WeatherAPI',
    deployedLink: 'https://weatherapi-637q.onrender.com/',
    githubLink: 'https://github.com/tmchoe124/WeatherAPI'
  },
  {
    id: 3,
    image: 'path_to_image3.jpg',
    title: 'Kanban',
    deployedLink: 'https://kanban-pqud.onrender.com/',
    githubLink: 'https://github.com/tmchoe124/Kanban'
  },
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map(project => (
          <Project
            key={project.id}
            image={project.image}
            title={project.title}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
