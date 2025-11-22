import React from "react";
import "../styles/Projects.css";

const sampleProjects = [
  {
    title: "Sistema de Punto de Venta",
    desc: "Gestión de inventario y ventas con roles. Implementado con Node.js y SQL Server.",
    tech: ["Node.js", "SQL", "Express"],
    repo: "https://github.com/emiliano0807/Proyecto_Final_Frontend.git",
    demo: null
  },
  {
    title: "API de Rutas (VRP)",
    desc: "Optimización de rutas logísticas usando algoritmos de búsqueda tabú y Google Maps.",
    tech: ["Python", "Flask", "Maps API"],
    repo: "https://github.com/emiliano0807/GPS_Manhatan.git",
    demo: "https://gpsmanhatan.facioriv.com"
  },
  {
    title: "Portafolio Personal",
    desc: "Este sitio web. Construido con React, Vite y diseño responsivo adaptativo.",
    tech: ["React", "Vite", "CSS Modules"],
    repo: "https://github.com/emiliano0807/Proyecto3_React.git",
    demo: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2 className="fade-in-up">Proyectos Destacados</h2>

      <div className="projects-grid">
        {sampleProjects.map((p, i) => (
          <article
            key={i}
            className="project-card card-lift fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            
            <div className="project-meta">
              {p.tech.map((t, idx) => (
                <span key={idx} className="pill">{t}</span>
              ))}
            </div>

            <div className="card-actions">
              <a href={p.repo} target="_blank" rel="noreferrer" className="btn-link">GitHub</a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn-link demo">Demo</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;