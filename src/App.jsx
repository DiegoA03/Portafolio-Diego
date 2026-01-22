import React from 'react';
import Header from './components/Header';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';
import SobreMi from './components/SobreMi';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Experiencia />
      <Educacion />
      <Proyectos />
      <Habilidades />
      <SobreMi />
      <Contacto />
    </div>
  );
}

export default App;