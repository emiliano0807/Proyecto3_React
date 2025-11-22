import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"; // <--- 1. Importar
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/vars.css";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main className="main-content">
        <Home />
        <About /> {/* <--- 2. Agregar aquí */}
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;