import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer fade-in-up">
      <div className="footer-inner">
        <div className="footer-left">
          <strong>Emiliano Rivera</strong>
          <p>Desarrollo web • APIs • Rutas y optimización</p>
        </div>
        <div className="footer-right">
          <p>© {year} Emiliano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
