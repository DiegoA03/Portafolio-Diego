import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const datosProyectos = [
  {
    id: 'ecommerce',
    url: 'mrm-ecommerce.site',
    imagen: '/proyecto-ecommerce.jpg',
    demo: 'https://tu-demo.com',
    github: 'https://github.com/DiegoA03/mrm_ecommerce',
    tecnologias: [
      { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { nombre: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { nombre: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { nombre: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
    ]
  },
  {
    id: 'admin',
    url: 'admin-mrm.site',
    imagen: '/proyecto-admin.jpg',
    demo: 'https://tu-demo.com',
    github: 'https://github.com/DiegoA03',
    tecnologias: [
      { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { nombre: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { nombre: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { nombre: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
    ]
  },
  {
    id: 'ia',
    url: 'github.com/reconocimiento-ia',
    imagen: '/ia.png',
    demo: 'https://tu-demo.com',
    github: 'https://github.com/BynelsonDa/Reconocimiento_emotion_2',
    tecnologias: [
      { nombre: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { nombre: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
    ]
  },
  {
    id: 'pizzi',
    url: 'olivos-pizzi-menu.vercel.app',
    imagen: '/olivos-pizzi-menu.png',
    demo: 'https://olivos-pizzi-menu.vercel.app',
    github: 'https://github.com/DiegoA03/olivos-pizzi-menu',
    tecnologias: [
      { nombre: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { nombre: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { nombre: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ]
  }
];

const Proyectos = () => {
  const [activo, setActivo] = useState(0);
  const { t } = useLanguage();

  const proyectos = datosProyectos.map((p) => ({
    ...p,
    ...t.proyectos.items[p.id]
  }));

  const total = proyectos.length;
  const anteriorIndex = (activo - 1 + total) % total;
  const siguienteIndex = (activo + 1) % total;
  const proyecto = proyectos[activo];

  return (
    <section id="proyectos" className="py-20 transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-light mb-16 text-gray-900 dark:text-white select-none">
          {t.proyectos.titulo}
        </h2>

        <div className="grid md:grid-cols-5 gap-10 items-center">
          {/* Selector tipo "caja fuerte" */}
          <div className="md:col-span-2">
            <div className="relative h-[220px] md:h-[240px] overflow-hidden">
              <motion.button
                key={`anterior-${anteriorIndex}`}
                type="button"
                onClick={() => setActivo(anteriorIndex)}
                initial={{ y: -20, opacity: 0, scale: 0.75, filter: 'blur(4px)' }}
                animate={{ y: -6, opacity: 0.65, scale: 0.8, filter: 'blur(2px)' }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                whileHover={{ opacity: 0.95, scale: 0.84, filter: 'blur(0px)' }}
                className="absolute left-0 top-0 text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-500 text-left origin-left"
              >
                {proyectos[anteriorIndex].nombre}
              </motion.button>

              <motion.div
                key={`actual-${activo}`}
                initial={{ y: 48, opacity: 0, scale: 0.85, filter: 'blur(6px)' }}
                animate={{ y: 40, opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="absolute left-0 top-0 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white cursor-default origin-left"
              >
                {proyecto.nombre}
              </motion.div>

              <motion.button
                key={`siguiente-${siguienteIndex}`}
                type="button"
                onClick={() => setActivo(siguienteIndex)}
                initial={{ y: 110, opacity: 0, scale: 0.72, filter: 'blur(5px)' }}
                animate={{ y: 112, opacity: 0.55, scale: 0.78, filter: 'blur(2px)' }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                whileHover={{ opacity: 0.85, scale: 0.82, filter: 'blur(0px)' }}
                className="absolute left-0 top-0 text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-500 text-left origin-left"
              >
                {proyectos[siguienteIndex].nombre}
              </motion.button>
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
                transition={{ duration: 0.45, ease: 'easeInOut' }}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span className="w-3 h-3 rounded-full bg-green-400"></span>
                    </div>
                    <div className="flex-1 flex items-center gap-2 bg-white dark:bg-gray-900 rounded-md px-3 py-1 ml-3 text-xs text-gray-500 dark:text-gray-400">
                      🔒 {proyecto.url}
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      className="w-full h-72 md:h-80 object-cover transition-transform duration-500 ease-out hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-72 md:h-80 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"><span class="text-white text-4xl font-bold">${proyecto.nombre.substring(0, 2)}</span></div>`;
                      }}
                    />

                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-900/90 hover:bg-gray-900 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                      >
                        <Github size={16} />
                        {t.proyectos.codigo}
                      </a>
                      <a
                        href={proyecto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                      >
                        <ExternalLink size={16} />
                        {t.proyectos.ver}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {proyecto.tecnologias.map((tech) => (
                    <div
                      key={tech.nombre}
                      className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full"
                    >
                      <img src={tech.logo} alt={tech.nombre} className="w-4 h-4 object-contain" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.nombre}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
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