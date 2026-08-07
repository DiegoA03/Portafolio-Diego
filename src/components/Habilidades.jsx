import React from 'react';
import { Code2, ShoppingCart, Package, Calendar, UtensilsCrossed, Briefcase, CheckCircle, FileText, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Habilidades = () => {
  const habilidadesTecnicas = [
    { 
      nombre: 'HTML', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: 'from-orange-400 to-orange-600' 
    },
    { 
      nombre: 'CSS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: 'from-blue-400 to-blue-600' 
    },
    { 
      nombre: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'from-yellow-400 to-yellow-600' 
    },
    { 
      nombre: 'Bootstrap', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      color: 'from-purple-400 to-purple-600' 
    },
    { 
      nombre: 'Tailwind CSS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      color: 'from-teal-400 to-teal-600' 
    },
    { 
      nombre: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'from-cyan-400 to-cyan-600' 
    },
    { 
      nombre: 'PHP', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      color: 'from-indigo-400 to-indigo-600' 
    },
    { 
      nombre: 'Python', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'from-blue-500 to-blue-700' 
    },
    { 
      nombre: 'MySQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: 'from-blue-500 to-blue-700' 
    },
    { 
      nombre: 'Git', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: 'from-orange-500 to-orange-700' 
    },
    { 
      nombre: 'GitHub', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: 'from-gray-600 to-gray-800' 
    },
    { 
      nombre: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'from-green-500 to-green-700' 
    }
  ];

  // Duplicamos el array para crear un loop infinito
  const habilidadesDobles = [...habilidadesTecnicas, ...habilidadesTecnicas];

  const servicios = [
    { 
      nombre: 'E-commerce', 
      descripcion: 'Plataformas de venta online completas con carrito, pagos y gestión de inventario.',
      icon: ShoppingCart 
    },
    { 
      nombre: 'Gestión de Inventarios', 
      descripcion: 'Sistemas para control, seguimiento y administración de productos y almacenes.',
      icon: Package 
    },
    { 
      nombre: 'Gestión de Citas', 
      descripcion: 'Aplicaciones para reservas, calendarios y asignación automática de horarios.',
      icon: Calendar 
    },
    { 
      nombre: 'Menús Digitales', 
      descripcion: 'Catálogos interactivos para restaurantes, bares y establecimientos comerciales.',
      icon: UtensilsCrossed 
    },
    { 
      nombre: 'Portafolios Web', 
      descripcion: 'Sitios profesionales para mostrar proyectos, experiencia y servicios de manera impactante.',
      icon: Briefcase 
    }
  ];

  const roles = [
    { 
      nombre: 'Desarrollador Full Stack',
      descripcion: 'Construcción de aplicaciones web completas con énfasis en frontend y experiencia del usuario.',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      nombre: 'Analista de Sistemas',
      descripcion: 'Análisis de requerimientos, diseño UML y arquitectura de soluciones tecnológicas.',
      icon: Layers,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      nombre: 'Documentador Técnico',
      descripcion: 'Documentación estructurada de proyectos, procesos y guías técnicas de implementación.',
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    },
    { 
      nombre: 'Tester QA',
      descripcion: 'Control de calidad, pruebas funcionales y aseguramiento de la robustez del software.',
      icon: CheckCircle,
      color: 'from-green-500 to-teal-500'
    }
  ];


  return (
    <section id="habilidades" className="py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white select-none">
          Habilidades & Servicios
        </h2>

        {/* Sección de Presentación con Imagen + Roles */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Imagen/Muñeco Inspirador */}
          <div className="flex justify-center">
            <motion.img 
              src="/ilustracion.png" 
              alt="Developer" 
              className="w-full max-w-md h-auto rounded-2xl drop-shadow-lg" 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div class="text-center text-gray-500 dark:text-gray-400"><div class="text-6xl mb-4">👨‍💻</div><p class="text-sm">Ilustración</p></div>`;
              }}
            />
          </div>

          {/* Roles y Descripción */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
              Soy un desarrollador apasionado con múltiples roles en el ecosistema de desarrollo de software. Mi especialidad es crear soluciones web impactantes y funcionales, siempre manteniendo estándares de calidad y documentación técnica estructurada.
            </p>
            
            <div className="space-y-4">
              {roles.map((rol, idx) => {
                const IconComponent = rol.icon;
                return (
                  <motion.div
                    key={rol.nombre}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${rol.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white">{rol.nombre}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{rol.descripcion}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sección de Servicios */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Servicios que Ofrezco
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, idx) => {
              const IconComponent = servicio.icon;
              return (
                <motion.div
                  key={servicio.nombre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                  className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <IconComponent size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {servicio.nombre}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {servicio.descripcion}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tecnologías y Herramientas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Tecnologías y Herramientas
          </h3>
          
          {/* Contenedor con overflow hidden */}
          <div className="relative overflow-hidden py-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
            {/* Gradientes en los bordes */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Animación infinita */}
            <div className="flex gap-6 animate-scroll-infinite">
              {habilidadesDobles.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.1, y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex-shrink-0 w-32 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:drop-shadow-lg transition-all">
                    <img 
                      src={skill.logo} 
                      alt={skill.nombre}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center font-semibold text-gray-800 dark:text-gray-200 text-sm">{skill.nombre}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;