import React from 'react';

const projects = [
    { title: "Proyecto Agua", description: "Proyecto en produccion para la administracion de usuarios del servicio del agua mi pueblo" },
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
