import React, { useState, useEffect, useCallback, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import ExperienciaPage from "./pages/ExperienciaPage";
import EducacionPage from "./pages/EducacionPage";
import ProyectosPage from "./pages/ProyectosPage";
import HabilidadesPage from "./pages/HabilidadesPage";
import SobreMiPage from "./pages/SobreMiPage";
import ContactoPage from "./pages/ContactoPage";
import { useLanguage } from "./context/LanguageContext";
import TransicionCortina from "./components/TransicionCortina";
import { MusicaProvider } from "./context/MusicaContext";

// Fondo tipo galaxia/vía láctea - solo para el Home
const particlesGalaxia = {
  fullScreen: { enable: true, zIndex: 0 },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "attract" },
      resize: true,
    },
    modes: {
      attract: { distance: 180, duration: 0.4, factor: 3 },
    },
  },
  particles: {
    color: {
      value: ["#ffffff", "#f5e6c8", "#c9b8ff", "#e8d5ff", "#fff4d6"],
    },
    links: { enable: false },
    move: {
      enable: true,
      speed: 0.15,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
    number: {
      density: { enable: true, area: 700 },
      value: 350,
    },
    opacity: {
      value: { min: 0.15, max: 0.95 },
      animation: {
        enable: true,
        speed: 0.8,
        sync: false,
        startValue: "random",
      },
    },
    shape: { type: "circle" },
    size: {
      value: { min: 0.4, max: 2.5 },
      animation: { enable: false },
    },
    twinkle: {
      particles: {
        enable: true,
        color: "#ffffff",
        frequency: 0.08,
        opacity: 1,
      },
    },
  },
  detectRetina: true,
};

// Fondo tipo red de conexiones - para el resto de páginas
const particlesRed = {
  fullScreen: { enable: true, zIndex: 0 },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: "grab" }, resize: true },
    modes: { grab: { distance: 150, links: { opacity: 0.5 } } },
  },
  particles: {
    color: { value: "#3B82F6" },
    links: {
      color: "#3B82F6",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      outModes: { default: "bounce" },
    },
    number: { density: { enable: true, area: 800 }, value: 60 },
    opacity: { value: 0.4 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

// La página se desliza un poco hacia la izquierda al salir y entra desde la derecha
const variantesPagina = {
  inicial: { opacity: 0, x: 60 },
  animar: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: 0.3, ease: "easeOut" },
  },
  salir: { opacity: 0, x: -60, transition: { duration: 0.35, ease: "easeIn" } },
};

const Pagina = ({ children }) => (
  <motion.div
    initial="inicial"
    animate="animar"
    exit="salir"
    variants={variantesPagina}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();
  const { t } = useLanguage();
  const reducirMovimiento = useReducedMotion();
  const rutaAnterior = useRef(location.pathname);
  const [cortina, setCortina] = useState(null);

  // La cortina solo se dispara cuando la ruta cambia (no en la carga inicial)
  useEffect(() => {
    if (rutaAnterior.current === location.pathname) return;
    rutaAnterior.current = location.pathname;
    setCortina({ id: Date.now(), ruta: location.pathname });
  }, [location.pathname]);

  const etiquetas = {
    "/": t.nav.inicio ?? "Diego Álvarez",
    "/experiencia": t.nav.experiencia,
    "/educacion": t.nav.educacion,
    "/proyectos": t.nav.proyectos,
    "/habilidades": t.nav.habilidades,
    "/sobre-mi": t.nav.sobreMi,
    "/contacto": t.nav.contacto,
  };

  return (
    <>
      {cortina && !reducirMovimiento && (
        <TransicionCortina
          key={cortina.id}
          etiqueta={etiquetas[cortina.ruta] ?? ""}
        />
      )}

      {/* wait: la página anterior sale por completo antes de entrar la nueva */}
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Pagina>
                <Home />
              </Pagina>
            }
          />
          <Route
            path="/experiencia"
            element={
              <Pagina>
                <ExperienciaPage />
              </Pagina>
            }
          />
          <Route
            path="/educacion"
            element={
              <Pagina>
                <EducacionPage />
              </Pagina>
            }
          />
          <Route
            path="/proyectos"
            element={
              <Pagina>
                <ProyectosPage />
              </Pagina>
            }
          />
          <Route
            path="/habilidades"
            element={
              <Pagina>
                <HabilidadesPage />
              </Pagina>
            }
          />
          <Route
            path="/sobre-mi"
            element={
              <Pagina>
                <SobreMiPage />
              </Pagina>
            }
          />
          <Route
            path="/contacto"
            element={
              <Pagina>
                <ContactoPage />
              </Pagina>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function FondoParticulas({ modoOscuro }) {
  const location = useLocation();
  const esHome = location.pathname === "/";

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const galaxiaOptions = {
    ...particlesGalaxia,
    particles: {
      ...particlesGalaxia.particles,
      color: { value: ["#ffffff", "#f5e6c8", "#c9b8ff", "#e8d5ff", "#fff4d6"] },
      opacity: {
        value: { min: 0.15, max: 0.95 },
        animation: {
          enable: true,
          speed: 0.8,
          sync: false,
          startValue: "random",
        },
      },
      twinkle: {
        particles: {
          enable: true,
          color: "#ffffff",
          frequency: 0.08,
          opacity: 1,
        },
      },
    },
  };

  return (
    <Particles
      key={esHome ? "galaxia" : "red"}
      id="tsparticles"
      init={particlesInit}
      options={esHome ? galaxiaOptions : particlesRed}
    />
  );
}
function App() {
  const [modoOscuro, setModoOscuro] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (modoOscuro) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [modoOscuro]);

  const toggleModoOscuro = () => setModoOscuro(!modoOscuro);

  return (
    <MusicaProvider>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <div className="relative min-h-screen transition-colors duration-300">
          <FondoParticulas />

          <div className="relative z-10">
            <CustomCursor />
            <Navbar
              modoOscuro={modoOscuro}
              toggleModoOscuro={toggleModoOscuro}
            />
            <AnimatedRoutes />
            <WhatsAppButton />
          </div>
        </div>
      )}
    </MusicaProvider>
  );
}

export default App;
