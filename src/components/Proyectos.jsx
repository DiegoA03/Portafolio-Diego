import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronUp,
  FileText,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionTitle from "./SectionTitle";

const datosProyectos = [
  {
    id: "depuradorfnc",
    url: "depuradorfnc.vercel.app",
    imagen: "/depuradorfnc.png",
    demo: "https://depuradorfnc.vercel.app/",
    github: "https://github.com/diegoalvarez-dev/microproyecto_web.git",
    documento: "/documentos/documentacion-fnc.pdf",
    tecnologias: [
      {
        nombre: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        nombre: "Tailwind",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        nombre: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        nombre: "Vite",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
    ],
  },
  {
    id: "conversorfng",
    url: "microproyecto-web-fng.vercel.app",
    imagen: "/conversorfng.png",
    demo: "https://microproyecto-web-fng.vercel.app/",
    github: "https://github.com/diegoalvarez-dev/MicroproyectoWeb_FNG.git",
    documento: "/documentos/documentacion-fng.pdf",
    tecnologias: [
      {
        nombre: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        nombre: "Tailwind",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        nombre: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        nombre: "Vite",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
    ],
  },
  {
    id: "pizzi",
    url: "olivos-pizzi-menu.vercel.app",
    imagen: "/olivos-pizzi-menu.png",
    demo: "https://olivos-pizzi-menu.vercel.app",
    github: "https://github.com/DiegoA03/olivos-pizzi-menu",
    tecnologias: [
      {
        nombre: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        nombre: "Tailwind",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        nombre: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        nombre: "Vite",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
    ],
  },
  {
    id: "ecommerce",
    url: "Proyecto por desplegar",
    imagen: "/proyecto-ecommerce.jpg",
    demo: "https://github.com/DiegoA03/mrm_ecommerce",
    github: "https://github.com/DiegoA03/mrm_ecommerce",
    tecnologias: [
      {
        nombre: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        nombre: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        nombre: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        nombre: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        nombre: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    id: "admin",
    url: "Proyecto por desplegar",
    imagen: "/proyecto-admin.jpg",
    demo: "https://github.com/DiegoA03",
    github: "https://github.com/DiegoA03",
    tecnologias: [
      {
        nombre: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        nombre: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        nombre: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        nombre: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        nombre: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    id: "ia",
    url: "Proyecto por desplegar",
    imagen: "/ia.png",
    demo: "https://github.com/BynelsonDa/Reconocimiento_emotion_2",
    github: "https://github.com/BynelsonDa/Reconocimiento_emotion_2",
    tecnologias: [
      {
        nombre: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        nombre: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        nombre: "Tailwind",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
];

// Color del resplandor detrás de la vista previa (cambia con cada proyecto)
const acentos = [
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-fuchsia-500",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-pink-500 to-rose-500",
  "from-indigo-500 to-blue-500",
];

const dosDigitos = (n) => String(n).padStart(2, "0");

const Proyectos = () => {
  const [activo, setActivo] = useState(0);
  const { t } = useLanguage();
  const reducirMovimiento = useReducedMotion();

  // Efecto 3D: la vista previa se inclina siguiendo el cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  });

  const alMoverMouse = (e) => {
    if (reducirMovimiento) return;
    const caja = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - caja.left) / caja.width - 0.5);
    mouseY.set((e.clientY - caja.top) / caja.height - 0.5);
  };

  const alSalirMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const proyectos = datosProyectos.map((p) => ({
    ...p,
    ...t.proyectos.items[p.id],
  }));

  const total = proyectos.length;
  const anteriorIndex = (activo - 1 + total) % total;
  const siguienteIndex = (activo + 1) % total;
  const proyecto = proyectos[activo];
  const acento = acentos[activo % acentos.length];

  return (
    <section
      id="proyectos"
      className="min-h-screen py-12 transition-colors duration-300 md:py-16"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <SectionTitle
          titulo={t.proyectos.titulo}
          subtitulo={t.proyectos.subtitulo}
        />

        <div className="grid items-center gap-10 md:grid-cols-5">
          {/* Selector tipo "caja fuerte" */}
          <div className="md:col-span-2">
            <div className="relative h-[220px] overflow-hidden md:h-[240px]">
              <motion.button
                key={`anterior-${anteriorIndex}`}
                type="button"
                onClick={() => setActivo(anteriorIndex)}
                initial={{
                  y: -20,
                  opacity: 0,
                  scale: 0.75,
                  filter: "blur(4px)",
                }}
                animate={{
                  y: -6,
                  opacity: 0.65,
                  scale: 0.8,
                  filter: "blur(2px)",
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                whileHover={{ opacity: 0.95, scale: 0.84, filter: "blur(0px)" }}
                className="absolute left-0 top-0 origin-left text-left text-xl font-semibold text-gray-500 md:text-2xl dark:text-gray-500"
              >
                <span className="mr-3 align-middle text-xs tracking-[0.2em]">
                  {dosDigitos(anteriorIndex + 1)}
                </span>
                {proyectos[anteriorIndex].nombre}
              </motion.button>

              <motion.div
                key={`actual-${activo}`}
                initial={{
                  y: 48,
                  opacity: 0,
                  scale: 0.85,
                  filter: "blur(6px)",
                }}
                animate={{ y: 40, opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute left-0 top-0 origin-left cursor-default text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
              >
                <span className="mb-1 block text-xs font-semibold tracking-[0.3em] text-blue-600 dark:text-blue-400">
                  {dosDigitos(activo + 1)}
                </span>
                {proyecto.nombre}
              </motion.div>

              <motion.button
                key={`siguiente-${siguienteIndex}`}
                type="button"
                onClick={() => setActivo(siguienteIndex)}
                initial={{
                  y: 110,
                  opacity: 0,
                  scale: 0.72,
                  filter: "blur(5px)",
                }}
                animate={{
                  y: 132,
                  opacity: 0.55,
                  scale: 0.78,
                  filter: "blur(2px)",
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                whileHover={{ opacity: 0.85, scale: 0.82, filter: "blur(0px)" }}
                className="absolute left-0 top-0 origin-left text-left text-xl font-semibold text-gray-500 md:text-2xl dark:text-gray-500"
              >
                <span className="mr-3 align-middle text-xs tracking-[0.2em]">
                  {dosDigitos(siguienteIndex + 1)}
                </span>
                {proyectos[siguienteIndex].nombre}
              </motion.button>
            </div>

            {/* Controles: flechas, contador y barra de progreso */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActivo(anteriorIndex)}
                  aria-label="Proyecto anterior"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300/70 bg-white/60 text-gray-700 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                >
                  <ChevronUp size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setActivo(siguienteIndex)}
                  aria-label="Proyecto siguiente"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300/70 bg-white/60 text-gray-700 backdrop-blur-md transition hover:translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                >
                  <ChevronDown size={18} />
                </button>
              </div>

              <span className="text-sm font-semibold tracking-[0.25em] text-gray-500 dark:text-gray-400">
                {dosDigitos(activo + 1)} / {dosDigitos(total)}
              </span>

              <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-300/60 dark:bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"
                  animate={{ width: `${((activo + 1) / total) * 100}%` }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>

          {/* Panel de detalle */}
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activo}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="relative"
              >
                {/* Resplandor de color detrás de la vista previa */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br opacity-25 blur-3xl dark:opacity-30 ${acento}`}
                />

                <motion.div
                  onMouseMove={alMoverMouse}
                  onMouseLeave={alSalirMouse}
                  style={{ rotateX, rotateY, transformPerspective: 1000 }}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-400"></span>
                      <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                      <span className="h-3 w-3 rounded-full bg-green-400"></span>
                    </div>
                    <div className="ml-3 flex flex-1 items-center gap-2 truncate rounded-md bg-white px-3 py-1 text-xs text-gray-500 dark:bg-gray-900 dark:text-gray-400">
                      🔒 {proyecto.url}
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      className="h-72 w-full object-cover transition-transform duration-500 ease-out hover:scale-110 md:h-80"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<div class="w-full h-72 md:h-80 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"><span class="text-white text-4xl font-bold">${proyecto.nombre.substring(0, 2)}</span></div>`;
                      }}
                    />

                    {/* Degradado inferior para que los botones se lean bien */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-end gap-2">
                      <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-gray-900/90 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-gray-900"
                      >
                        <Github size={16} />
                        {t.proyectos.codigo}
                      </a>

                      {proyecto.documento && (
                        <a
                          href={proyecto.documento}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-600"
                        >
                          <FileText size={16} />
                          {t.proyectos.documentacion}
                        </a>
                      )}

                      <a
                        href={proyecto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
                      >
                        <ExternalLink size={16} />
                        {t.proyectos.ver}
                      </a>
                    </div>
                  </div>
                </motion.div>

                <div className="relative mt-6 flex flex-wrap gap-3">
                  {proyecto.tecnologias.map((tech, i) => (
                    <motion.div
                      key={tech.nombre}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2 rounded-full border border-gray-200/70 bg-white/70 px-3 py-1.5 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                    >
                      <img
                        src={tech.logo}
                        alt={tech.nombre}
                        className="h-4 w-4 object-contain"
                      />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {tech.nombre}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <p className="relative mt-6 leading-relaxed text-gray-600 dark:text-gray-400">
                  {proyecto.descripcion}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
