import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  // LÓGICA DE INICIALIZACIÓN INTELIGENTE
  const [theme, setTheme] = useState(() => {
    try {
      // 1. ¿El usuario ya eligió manualmente antes?
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;

      // 2. Si no, ¿El sistema operativo está en modo oscuro?
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return "dark";
      }

      // 3. Si no, por defecto modo claro
      return "light";
    } catch {
      return "light";
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  // Efecto para aplicar la clase al HTML
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    
    // Guardamos la elección para la próxima visita
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Efecto EXTRA: Escuchar cambios en tiempo real del sistema
  // (Por si el usuario cambia su sistema de claro a oscuro mientras ve tu web)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Solo cambiamos si el usuario NO ha guardado una preferencia manual
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  
  // --- FUNCIÓN DE SCROLL SEGURA ---
  const handleNavClick = (e, targetId) => {
    const element = document.querySelector(targetId);
    
    if (element) {
      e.preventDefault();
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    } else if (targetId === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar fade-in-up">
      <div className="nav-left">
        <a href="#home" className="logo-link" onClick={(e) => handleNavClick(e, "#home")}>
          <h1 className="logo">Emiliano <span className="logo-dot">.</span></h1>
        </a>
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
        <li><a href="#home" onClick={(e) => handleNavClick(e, "#home")}>Inicio</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")}>Sobre Mí</a></li>
        <li><a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>Proyectos</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Contacto</a></li>
        
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