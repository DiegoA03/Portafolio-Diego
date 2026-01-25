import React from 'react';
import { Code2 } from 'lucide-react';

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

  const habilidadesBlandas = [
    { nombre: 'Trabajo en Equipo', icon: '👥' },
    { nombre: 'Responsabilidad', icon: '✅' },
    { nombre: 'Autodisciplina', icon: '💪' },
    { nombre: 'Aprendizaje Rápido', icon: '🚀' },
    { nombre: 'Organización', icon: '📋' },
    { nombre: 'Documentación Técnica', icon: '📝' }
  ];

  const competencias = [
    { area: 'Desarrollo Frontend', nivel: 85 },
    { area: 'Desarrollo Backend', nivel: 75 },
    { area: 'Bases de Datos', nivel: 80 },
    { area: 'Análisis de Sistemas', nivel: 85 },
    { area: 'Documentación Técnica', nivel: 90 },
    { area: 'Gestión de Proyectos', nivel: 80 },
    { area: 'Inteligencia Artificial', nivel: 70 }
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
            <Code2 className="text-white" size={24} />
          </div>
          Habilidades
        </h2>

        {/* Habilidades Técnicas con Animación Horizontal */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-500 mb-6">Tecnologías y Herramientas</h3>
          
          {/* Contenedor con overflow hidden */}
          <div className="relative overflow-hidden py-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            {/* Gradientes en los bordes */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Animación infinita */}
            <div className="flex gap-6 animate-scroll-infinite">
              {habilidadesDobles.map((skill, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-32 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src={skill.logo} 
                      alt={skill.nombre}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center font-semibold text-gray-800 dark:text-gray-200 text-sm">{skill.nombre}</p>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            ✨ Pasa el cursor sobre las habilidades para pausar la animación
          </p>
        </div>

        {/* Competencias con barras de progreso */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-500 mb-6">Competencias</h3>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              {competencias.map((comp) => (
                <div key={comp.area}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{comp.area}</span>
                    <span className="text-blue-500 font-bold">{comp.nivel}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${comp.nivel}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Habilidades Blandas */}
        <div>
          <h3 className="text-2xl font-bold text-blue-500 mb-6">Habilidades Profesionales</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {habilidadesBlandas.map((skill) => (
              <div 
                key={skill.nombre}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.nombre}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Especialidades */}
        <div className="mt-12 bg-blue-600 dark:bg-blue-500 text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Áreas de Especialización</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2 text-lg">🎯 Desarrollo Full Stack</h4>
              <p className="text-blue-100 text-sm">Con mayor orientación al desarrollo frontend y conocimientos sólidos en arquitectura MVC</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">📊 Análisis de Sistemas</h4>
              <p className="text-blue-100 text-sm">Levantamiento de requerimientos, diseño con UML y documentación técnica estructurada</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">🤖 Inteligencia Artificial</h4>
              <p className="text-blue-100 text-sm">Experiencia en redes neuronales convolucionales aplicadas a reconocimiento facial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;