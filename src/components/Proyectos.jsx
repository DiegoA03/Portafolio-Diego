import React from 'react';
import { Code2, ExternalLink, Github } from 'lucide-react';

const Proyectos = () => {
  const proyectosDestacados = [
    {
      titulo: 'Mini E-Commerce MRM',
      descripcion: 'Sistema web completo para comercialización de repuestos de motocicletas con sistema de pagos QR, gestión de inventario y generación automática de facturas.',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL', 'Arquitectura MVC'],
      caracteristicas: [
        'Sistema de pagos mediante código QR',
        'Validación de comprobantes por estados',
        'Generación automática de facturas',
        'Panel administrativo completo'
      ],
      estado: 'Completado - 100% Funcional'
    },
    {
      titulo: 'Sistema Administrativo MRM',
      descripcion: 'Plataforma de gestión administrativa para taller de motos con control de inventario, citas y asignación inteligente de mecánicos.',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
      caracteristicas: [
        'Asignación automática de citas según disponibilidad',
        'Control de inventario en tiempo real',
        'Gestión de pedidos y ventas',
        'Sistema de mecánicos y horarios'
      ],
      estado: 'Listo para Despliegue'
    },
    {
      titulo: 'Aplicación de Reconocimiento Facial',
      descripcion: 'Sistema de identificación facial usando redes neuronales convolucionales (CNN/MTCCN) con interfaz web moderna.',
      tecnologias: ['Python', 'CNN', 'MTCCN', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Selenium'],
      caracteristicas: [
        'Detección facial en tiempo real',
        'Entrenamiento con modelos públicos',
        'Interfaz web responsiva',
        'Pruebas automatizadas con Selenium'
      ],
      estado: 'Proyecto Académico'
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <Code2 className="text-blue-600" size={32} />
          Proyectos Destacados
        </h2>

        <div className="space-y-8">
          {proyectosDestacados.map((proyecto, idx) => (
            <div key={idx} className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="p-8">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{proyecto.titulo}</h3>
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {proyecto.estado}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg">{proyecto.descripcion}</p>
                
                {/* Tecnologías */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Tecnologías utilizadas:</p>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias.map((tech) => (
                      <span key={tech} className="bg-white border border-blue-200 text-blue-700 px-3 py-1 rounded-lg text-sm hover:bg-blue-100 transition">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Características */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-600 mb-3">Características principales:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {proyecto.caracteristicas.map((car, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span className="text-gray-700 text-sm">{car}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex gap-4 mt-6">
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                    <Github size={18} />
                    Ver Código
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition flex items-center gap-2">
                    <ExternalLink size={18} />
                    Ver Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <p className="text-gray-700">
            <span className="font-semibold text-blue-700">Nota:</span> Todos los proyectos fueron desarrollados 
            siguiendo metodologías de análisis de requerimientos, diseño con diagramas UML, y documentación técnica completa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;