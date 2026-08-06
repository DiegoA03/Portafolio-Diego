import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ExperienciaPage from './pages/ExperienciaPage';
import EducacionPage from './pages/EducacionPage';
import ProyectosPage from './pages/ProyectosPage';
import HabilidadesPage from './pages/HabilidadesPage';
import SobreMiPage from './pages/SobreMiPage';
import ContactoPage from './pages/ContactoPage';

// Fondo tipo galaxia/vía láctea - solo para el Home
const particlesGalaxia = {
  fullScreen: { enable: true, zIndex: 0 },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: 'bubble' }, resize: true },
    modes: { bubble: { distance: 120, size: 4, duration: 2, opacity: 1 } }
  },
  particles: {
    color: { value: ['#ffffff', '#93C5FD', '#C4B5FD'] },
    links: { enable: false },
    move: {
      enable: true,
      speed: 0.3,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' }
    },
    number: { density: { enable: true, area: 800 }, value: 180 },
    opacity: { value: 0.7, random: { enable: true, minimumValue: 0.2 } },
    shape: { type: 'circle' },
    size: { value: { min: 0.5, max: 2.2 } },
    twinkle: {
      particles: { enable: true, color: '#ffffff', frequency: 0.05, opacity: 1 }
    }
  },
  detectRetina: true
};

// Fondo tipo red de conexiones - para el resto de páginas
const particlesRed = {
  fullScreen: { enable: true, zIndex: 0 },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: 'grab' }, resize: true },
    modes: { grab: { distance: 150, links: { opacity: 0.5 } } }
  },
  particles: {
    color: { value: '#3B82F6' },
    links: { color: '#3B82F6', distance: 150, enable: true, opacity: 0.3, width: 1 },
    move: { enable: true, speed: 1, direction: 'none', random: false, straight: false, outModes: { default: 'bounce' } },
    number: { density: { enable: true, area: 800 }, value: 60 },
    opacity: { value: 0.4 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 3 } }
  },
  detectRetina: true
};

const variantesTransicion = {
  inicial: { opacity: 0, y: 20 },
  animar: { opacity: 1, y: 0 },
  salir: { opacity: 0, y: -20 }
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial="inicial" animate="animar" exit="salir" variants={variantesTransicion} transition={{ duration: 0.4 }}><Home /></motion.div>} />
        <Route path="/experiencia" element={<motion.div initial="inicial" animate="animar" exit="salir" variants={variantesTransicion} transition={{ duration: 0.4 }}><ExperienciaPage /></motion.div>} />
        <Route path="/educacion" element={<motion.div initial="inicial" animate="animar" exit="salir" variants={variantesTransicion} transition={{ duration: 0.4 }}><EducacionPage /></motion.div>} />
        <Route path="/proyectos" element={<motion.div initial="inicial" animate="animar" exit="salir" variants={variantesTransicion} transition={{ duration: 0.4 }}><ProyectosPage /></motion.div>} />
        <Route path="/habilidades" element={<motion.div initial="inicial" animate="animar" exit="salir" variants={variantesTransicion} transition={{ duration: 0.4 }}><HabilidadesPage /></motion.div>} />
        <Route path="/sobre-mi" element={<motion.div initial="inicial" animate="animar" exit="salir" variants={variantesTransicion} transition={{ duration: 0.4 }}><SobreMiPage /></motion.div>} />
        <Route path="/contacto" element={<motion.div initial="inicial" animate="animar" exit="salir" variants={variantesTransicion} transition={{ duration: 0.4 }}><ContactoPage /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

function FondoParticulas() {
  const location = useLocation();
  const esHome = location.pathname === '/';

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      key={esHome ? 'galaxia' : 'red'}
      id="tsparticles"
      init={particlesInit}
      options={esHome ? particlesGalaxia : particlesRed}
    />
  );
}

function App() {
  const [modoOscuro, setModoOscuro] = useState(true);

  useEffect(() => {
    if (modoOscuro) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [modoOscuro]);

  const toggleModoOscuro = () => setModoOscuro(!modoOscuro);

  return (
<div className="relative min-h-screen transition-colors duration-300">  
      <FondoParticulas />

      <div className="relative z-10">
        <CustomCursor />
        <Navbar modoOscuro={modoOscuro} toggleModoOscuro={toggleModoOscuro} />
        <AnimatedRoutes />
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default App;