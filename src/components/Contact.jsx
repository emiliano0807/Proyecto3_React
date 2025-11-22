import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container fade-in-up">
        
        {/* COLUMNA IZQUIERDA: Información */}
        <div className="contact-info">
          <h2>Hablemos</h2>
          <p className="contact-desc">
            ¿Tienes un proyecto en mente o una propuesta laboral? 
            Estoy disponible para nuevos retos.
          </p>

          {/* ITEM 1: EMAIL (mailto) */}
          <a href="mailto:emilianorivfacio@gmail.com" className="info-item contact-link">
            <div className="icon-box">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <h3>Email</h3>
              <p>emilianorivfacio@gmail.com</p>
            </div>
          </a>

          {/* ITEM 2: LINKEDIN */}
          <a 
            href="https://www.linkedin.com/in/emiliano-rivera-facio-6307a32b4/" 
            target="_blank" 
            rel="noreferrer" 
            className="info-item contact-link"
          >
            <div className="icon-box">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/emiliano-rivera-facio</p>
            </div>
          </a>

          {/* ITEM 3: GITHUB */}
          <a 
            href="https://github.com/emiliano0807" 
            target="_blank" 
            rel="noreferrer" 
            className="info-item contact-link"
          >
            <div className="icon-box">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </div>
            <div>
              <h3>GitHub</h3>
              <p>github.com/emiliano</p>
            </div>
          </a>
        </div>

        {/* COLUMNA DERECHA: Formulario */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Tu nombre" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" placeholder="tucorreo@ejemplo.com" required />
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" rows="4" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
          </div>
          
          <button type="submit" className="submit-btn">
            Enviar Mensaje
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;