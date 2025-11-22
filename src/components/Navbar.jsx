import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  // 1. Inicialización: Intenta localStorage, luego sistema, luego 'light'
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
      
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return "dark";
      }
      return "light";
    } catch {
      return "light";
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  // 2. Efecto para aplicar la clase al HTML y guardar en LocalStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. NUEVO: Efecto para detectar cambios del sistema en TIEMPO REAL
  useEffect(() => {
    // Definimos la consulta de medios
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Esta función se ejecuta cuando el sistema cambia
    const handleSystemChange = (e) => {
      // e.matches será true si el sistema cambió a oscuro, false si cambió a claro
      // NOTA: Esto sobrescribirá la elección manual si el usuario cambia su sistema operativo mientras ve la página.
      setTheme(e.matches ? "dark" : "light");
    };

    // Agregamos el "escuchador"
    mediaQuery.addEventListener("change", handleSystemChange);

    // Limpieza: Quitamos el escuchador cuando el componente se desmonta
    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, []);

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