import React, { useState, useEffect } from 'react';

const Home = () => {
  const [photo, setPhoto] = useState(null);

  // Cargar la imagen almacenada en localStorage al iniciar
  useEffect(() => {
    const storedPhoto = localStorage.getItem('profilePhoto');
    if (storedPhoto) {
      setPhoto(storedPhoto);
    }
  }, []);

  // Manejar la subida de la imagen
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        localStorage.setItem('profilePhoto', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="home">
      <div className="profile-container">
        {/* Imagen de perfil */}
        <div className="profile-photo-container">
          {photo ? (
            <img src={photo} alt="Perfil" className="profile-photo" />
          ) : (
            <p>No has subido una foto</p>
          )}
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        </div>

        {/* Información personal */}
        <div className="profile-info">
          <h1>¡Hola! Soy Emilino Rivera Facio</h1>
          <p>Soy ingeniero en sistemas actualmenete soy alumno de sexto semestre de la carrera
            del tecnologico de Estudios Superiores de Jilotepec.
          </p> 
          <p>  
            Me gusta aprender nuevas tecnologias y mejorar mis habilidades en programacion. 
            Actualmente estoy aprendiendo React y Node.js.
          </p>
          <p>
            Me gusta todo releacionado a la tecnologia, la programacion y el desarrollo web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
