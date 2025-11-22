import React from "react";
import "../styles/Home.css";
import profileImage from "../assets/ConnectTec.jpeg";



const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="profile-section card-lift fade-in-up">
        <img src={profileImage} alt="Foto de Emiliano Rivera" className="profile-img" />
        <div className="status-badge">🟢 Disponible</div>
      </div>

      <div className="info-section fade-in-up" style={{ animationDelay: "60ms" }}>
        <h1>Hola, soy <span className="name-highlight">Emiliano Rivera</span></h1>
        <p className="lead">
          Desarrollador Full Stack | React & Node.js
        </p>

        <div className="brief">
          <p>
            Estudiante de Ingeniería en Sistemas apasionado por crear soluciones web eficientes. 
            Transformo problemas complejos en código limpio y escalable.
          </p>
        </div>

        <div className="home-actions">
           <a href="#contact" className="btn-primary">Contáctame</a>
           <a href="#projects" className="btn-outline">Ver Proyectos</a>
        </div>
      </div>
    </section>
  );
};

export default Home;