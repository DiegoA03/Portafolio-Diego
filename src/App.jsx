import React, { useState, useEffect } from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import Header from './components/Header';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';
import SobreMi from './components/SobreMi';
import Contacto from './components/Contacto';

function App() {
  const [modoOscuro, setModoOscuro] = useState(true); // Por defecto en modo oscuro

  useEffect(() => {
    // Aplicar o quitar clase 'dark' al html
    if (modoOscuro) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [modoOscuro]);

  const toggleModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header modoOscuro={modoOscuro} toggleModoOscuro={toggleModoOscuro} />
      <Experiencia />
      <Educacion />
      <Proyectos />
      <Habilidades />
      <SobreMi />
      <Contacto />
      <WhatsAppButton />
    </div>
  );
}

export default App;