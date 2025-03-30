import React from 'react';

const projects = [
    { title: "Proyecto 1", description: "Descripción del Proyecto 1" },
    { title: "Proyecto 2", description: "Descripción del Proyecto 2" }
];

const Projects = () => {
    return (
        <div className="projects">
        <h1>Mis Proyectos</h1>
        <ul>
            {projects.map((project, index) => (
            <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            </li>
        ))}
        </ul>
        </div>
    );
};

export default Projects;
