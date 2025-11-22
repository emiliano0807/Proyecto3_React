import React from "react";
import "../styles/About.css";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "SQL Server",
    "Python",
    "Git & GitHub",
    "CSS Modules",
    "API REST",
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container fade-in-up">
        
        {/* Columna Izquierda: Texto */}
        <div className="about-content">
          <h2>Sobre Mí</h2>
          <p className="about-lead">
            Más que código, creo soluciones. 
          </p>
          <p>
            Soy estudiante de <strong>Ingeniería en Sistemas</strong> (7° semestre) en el 
            Tecnológico de Estudios Superiores de Jilotepec. Mi viaje en la programación 
            comenzó con la curiosidad de entender cómo funcionan las cosas, y hoy se ha 
            convertido en mi pasión principal.
          </p>
          <p>
            Me especializo en el desarrollo <strong>Full Stack</strong>, disfrutando tanto 
            la lógica del backend con Node.js como la interactividad del frontend con React. 
            Cuando no estoy programando, me encontrarás investigando sobre nuevas arquitecturas 
            de software o optimizando algoritmos.
          </p>
          
          <div className="education-box">
            <span className="edu-icon">🎓</span>
            <div>
              <strong>Ingeniería en Sistemas Computacionales</strong>
              <p>Tecnológico de Estudios Superiores de Jilotepec | En curso</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Skills */}
        <div className="skills-section">
          <h3>Mis Habilidades Técnicas</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;