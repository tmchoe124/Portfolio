import React from 'react';

function Project({ image, title, deployedLink, githubLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
      <div>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
        {' | '}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;
