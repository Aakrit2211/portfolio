import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A NoteKeeper built with React",
      link: "https://notes-keeper-rouge.vercel.app/",
    },
    {
      title: "Project 2",
      description: "Classic Simon Game",
      link: "https://aakrit2211.github.io/simon-game/",
    },
    {
      title: "Project 3",
      description: "A portfolio website",
      link: "https://portfolio-omega-coral-67.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} alt={project.title}>Link</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
