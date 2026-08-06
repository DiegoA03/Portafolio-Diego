import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const proyectos = [
  {
    nombre: 'Mini E-Commerce MRM',
    url: 'mrm-ecommerce.site',
    descripcion: 'Sistema web completo para comercialización de repuestos de motocicletas con sistema de pagos QR, gestión de inventario y generación automática de facturas.',
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
    nombre: 'Sistema Administrativo MRM',
    url: 'admin-mrm.site',
    descripcion: 'Plataforma de gestión administrativa para taller de motos con control de inventario, citas y asignación inteligente de mecánicos.',
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
    nombre: 'Reconocimiento Facial IA',
    url: 'github.com/reconocimiento-ia',
    descripcion: 'Sistema de identificación facial usando redes neuronales convolucionales (CNN/MTCCN) con interfaz web moderna.',
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
    nombre: 'Menú Olivos Pizzi',
    url: 'olivos-pizzi-menu.vercel.app',
    descripcion: 'Sitio web para la visualización del menú de la pizzería Olivos Pizzi de la ciudad de Bogotá, con una interacción moderna para el cliente.',
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
  const proyecto = proyectos[activo];

  return (
    <section id="proyectos" className="py-20 transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-light mb-16 text-gray-300 dark:text-gray-700 select-none">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-5 gap-10 items-center">
          {/* Lista vertical de nombres */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {proyectos.map((p, idx) => (
              <button
                key={p.nombre}
                onClick={() => setActivo(idx)}
                className="text-left group"
              >
                <span
                  className={`text-2xl md:text-3xl font-semibold transition-all duration-300 ${
                    idx === activo
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-300 dark:text-gray-700 group-hover:text-gray-500 dark:group-hover:text-gray-500'
                  }`}
                >
                  {p.nombre}
                </span>
                <AnimatePresence>
                  {idx === activo && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '3rem' }}
                      exit={{ width: 0 }}
                      className="h-[3px] bg-blue-500 rounded-full mt-2"
                    />
                  )}
                </AnimatePresence>
              </button>
            ))}
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
                {/* Mockup de navegador */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                  {/* Barra superior del navegador */}
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

                  {/* Imagen del proyecto */}
                  <div className="relative">
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      className="w-full h-72 md:h-80 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-72 md:h-80 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"><span class="text-white text-4xl font-bold">${proyecto.nombre.substring(0, 2)}</span></div>`;
                      }}
                    />

                    {/* Botones flotantes tipo la referencia */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-900/90 hover:bg-gray-900 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                      >
                        <Github size={16} />
                        Código
                      </a>
                      <a
                        href={proyecto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                      >
                        <ExternalLink size={16} />
                        Ver
                      </a>
                    </div>
                  </div>
                </div>

                {/* Tecnologías */}
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

                {/* Descripción */}
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