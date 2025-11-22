import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || "light"; } catch { return "light"; }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar fade-in-up">
      <div className="nav-left">
        <h1 className="logo">Emiliano <span className="logo-dot">.</span></h1>
      </div>

      <button 
        className={`hamburger ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Inicio</a></li>
        {/* NUEVO ENLACE AGREGADO AQUÍ */}
        <li><a href="#about" onClick={closeMenu}>Sobre Mí</a></li>
        <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
        
        <li className="mobile-theme-li">
           <button className="theme-toggle-text" onClick={toggleTheme}>
             {theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
           </button>
        </li>
      </ul>

      <div className="desktop-theme-action">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? (
            <>☀️ <span>Modo Claro</span></>
          ) : (
            <>🌙 <span>Modo Oscuro</span></>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;