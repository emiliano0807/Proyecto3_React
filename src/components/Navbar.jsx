import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
        <h2>Mi Portafolio</h2>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
        </ul>
        </nav>
    );
};

export default Navbar;
