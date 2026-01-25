import React, { useState } from 'react';
import { Code2, ExternalLink, Github, Eye } from 'lucide-react';

const Proyectos = () => {
  const [proyectoHover, setProyectoHover] = useState(null);

  const proyectosDestacados = [
    {
      titulo: 'Menu pizzeria Olivos pizzi',
      descripcion: 'Sitio web para la visualizacion del menu de la pizzeria olivos pizzi de la ciudad de bogota',
      imagen: '/olivos-pizzi-menu.png', // Coloca tu imagen en public/
      demo: 'https://olivos-pizzi-menu.vercel.app',
      github: 'https://github.com/DiegoA03/olivos-pizzi-menu',
      tecnologias: [
        { nombre: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        //{ nombre: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { nombre: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', },
        { nombre: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
      ],
      caracteristicas: [
        'Sitio web para que los clientes de olivos pizzi puedan apreciar mejor los productos de la pizzeria.',
      ],
      estado: 'Completado',
      color: 'from-pink-500 to-purple-600' // Rosa a morado
    },
    {
      titulo: 'Mini E-Commerce MRM',
      descripcion: 'Sistema web completo para comercialización de repuestos de motocicletas con sistema de pagos QR, gestión de inventario y generación automática de facturas.',
      imagen: '/proyecto-ecommerce.jpg', // Coloca tu imagen en public/
      demo: 'https://tu-demo.com',
      github: 'https://github.com/DiegoA03/proyecto',
      tecnologias: [
        { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nombre: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { nombre: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { nombre: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { nombre: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ],
      caracteristicas: [
        'Sistema de pagos mediante código QR',
        'Validación de comprobantes por estados',
        'Generación automática de facturas',
        'Panel administrativo completo'
      ],
      estado: 'Completado',
      color: 'from-blue-500 to-purple-600'
    },
    {
      titulo: 'Sistema Administrativo MRM',
      descripcion: 'Plataforma de gestión administrativa para taller de motos con control de inventario, citas y asignación inteligente de mecánicos.',
      imagen: '/proyecto-admin.jpg',
      demo: 'https://tu-demo.com',
      github: 'https://github.com/tuusuario/proyecto',
      tecnologias: [
        { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nombre: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { nombre: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { nombre: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { nombre: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ],
      caracteristicas: [
        'Asignación automática de citas',
        'Control de inventario en tiempo real',
        'Gestión de pedidos y ventas',
        'Sistema de mecánicos y horarios'
      ],
      estado: 'En desarrollo',
      color: 'from-green-500 to-teal-600'
    },
    {
      titulo: 'Reconocimiento Facial con IA',
      descripcion: 'Sistema de identificación facial usando redes neuronales convolucionales (CNN/MTCCN) con interfaz web moderna.',
      imagen: '/proyecto-ia.jpg',
      demo: 'https://tu-demo.com',
      github: 'https://github.com/tuusuario/proyecto',
      tecnologias: [
        { nombre: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nombre: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { nombre: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
      ],
      caracteristicas: [
        'Detección facial en tiempo real',
        'Entrenamiento con modelos públicos',
        'Interfaz web responsiva',
        'Pruebas automatizadas'
      ],
      estado: 'Académico',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
          <Code2 className="text-blue-500" size={32} />
          Proyectos Destacados
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosDestacados.map((proyecto, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setProyectoHover(idx)}
              onMouseLeave={() => setProyectoHover(null)}
            >
              {/* Imagen de preview */}
              <div className="relative h-64 overflow-hidden">
                {/* Gradiente decorativo */}
                <div className={`absolute inset-0 bg-gradient-to-br ${proyecto.color} opacity-80 z-10`}></div>

                {/* Imagen del proyecto */}
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br ' + proyecto.color + '"><span class="text-white text-6xl font-bold">' + proyecto.titulo.substring(0, 2) + '</span></div>';
                  }}
                />

                {/* Badge de estado */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {proyecto.estado}
                  </span>
                </div>

                {/* Overlay con botones al hacer hover */}
                <div className={`absolute inset-0 z-20 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${proyectoHover === idx ? 'opacity-100' : 'opacity-0'}`}>
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 text-gray-900 p-3 rounded-full transition-all duration-300 hover:scale-110"
                    title="Ver demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 text-gray-900 p-3 rounded-full transition-all duration-300 hover:scale-110"
                    title="Ver código"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 bg-gray-900 dark:bg-gray-800">
                <h3 className="text-xl font-bold text-white mb-3">{proyecto.titulo}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{proyecto.descripcion}</p>

                {/* Tecnologías con logos */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition group/tech"
                      title={tech.nombre}
                    >
                      <img
                        src={tech.logo}
                        alt={tech.nombre}
                        className="w-4 h-4 object-contain"
                      />
                      <span className="text-xs text-gray-300 font-medium">{tech.nombre}</span>
                    </div>
                  ))}
                </div>

                {/* Link para ver más */}
                <a
                  href={proyecto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition group/link"
                >
                  Ver proyecto completo
                  <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-12 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 p-6 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-blue-600 dark:text-blue-400">Nota:</span> Todos los proyectos fueron desarrollados
            siguiendo metodologías de análisis de requerimientos, diseño con diagramas UML y documentación técnica completa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
