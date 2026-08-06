import React from 'react';
import { Briefcase } from 'lucide-react';

const Experiencia = () => {
  const experienciaLaboral = [
  {
    cargo: 'Analista QA',
    empresa: 'Gnosoft LTDA',
    periodo: '2026 - Prácticas Empresariales',
    descripcion: 'Ejecución de pruebas funcionales sobre la plataforma Gnosoft Académico, validando requerimientos en entornos de prueba y producción.',
    actividades: [
      'Análisis de requerimientos, diseño de casos de prueba y registro estructurado de evidencias e incidencias',
      'Apoyo en la validación y despliegue de actualizaciones en entornos finales',
      'Garantía del cumplimiento de los estándares de calidad'
    ],
    logros: [
      'Gestión y cierre satisfactorio de 19 requerimientos funcionales durante el período de práctica',
      'Fortalecimiento de competencias en análisis crítico y comunicación asertiva',
      'Resolución de problemas en un entorno empresarial real'
    ]
  },
  {
    cargo: 'Asistente Administrativo',
    empresa: 'Facultad de Ciencias Agrarias - UFPS',
    periodo: 'Semestre II - 2024',
    descripcion: 'Gestión y organización del sistema de archivos digital (Datasoft) de la facultad.',
    actividades: [
      'Clasificación, digitalización y archivo de documentación administrativa y académica',
      'Atención y procesamiento eficiente de documentos oficiales'
    ],
    logros: [
      'Fortalecimiento de habilidades en gestión documental digital',
      'Mejora en la eficiencia del procesamiento de documentos oficiales'
    ]
  },
  {
    cargo: 'Asistente Administrativo',
    empresa: 'ISA Consultores',
    periodo: '2018 - 2019 - 100 horas de Prácticas Estudiantiles',
    descripcion: 'Apoyo en labores administrativas relacionadas con la gestión y organización documental de la empresa.',
    actividades: [
      'Clasificación, orden y archivo de comprobantes de pago y documentos contables',
      'Apoyo en la gestión de pagos y retiros bancarios',
      'Organización y verificación de documentación financiera'
    ],
    logros: [
      'Cumplimiento satisfactorio de las 100 horas de prácticas estudiantiles',
      'Fortalecimiento de habilidades en organización y responsabilidad',
      'Aporte al mejoramiento del orden documental de la empresa'
    ]
  }
];

  const proyectosAcademicos = [
    {
      titulo: 'Sitio Web JAC',
      periodo: 'Febrero 2023 - Junio 2023',
      asignatura: 'Programación Web',
      cliente: 'Ingeniero Freddy vera',
      descripcion: 'Desarrollo de sitio web informativo orientado a mantener comunicada a la comunidad del municipio de Patios.',
      tecnologias: [
        { nombre: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { nombre: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ],
      actividades: [
        'Implementación de funcionalidades para publicación de noticias y eventos',
        'Sistema de inscripciones con acceso administrativo',
        'Gestión de base de datos MySQL en entorno local',
        'Análisis de requerimientos y levantamiento de necesidades'
      ]
    },
    {
      titulo: 'Sistema de Reconocimiento Facial con IA',
      periodo: 'Febrero 2024 - Junio 2024',
      asignatura: 'Seminario Integrador',
      cliente: 'Ingenieria Gomez Llanez Claudia Yamile',
      descripcion: 'Aplicación de reconocimiento facial empleando redes neuronales convolucionales (CNN/MTCCN).',
      tecnologias: [
        { nombre: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nombre: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { nombre: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { nombre: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
      ],
      actividades: [
        'Investigación y análisis de redes neuronales convolucionales',
        'Desarrollo con librerías especializadas para visión por computador',
        'Implementación y pruebas de modelos públicos',
        'Automatización de pruebas con Selenium'
      ]
    },
    {
      titulo: 'Mini E-Commerce MRM',
      periodo: 'Febrero 2025 - Junio 2025',
      asignatura: 'Ingeniería de Software',
      cliente: 'Ingeniera Pilar Rodriguez',
      descripcion: 'Aplicativo web tipo mini e-commerce para comercialización de repuestos de motocicletas a nivel local.',
      tecnologias: [
        { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nombre: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { nombre: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { nombre: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { nombre: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ],
      actividades: [
        'Desarrollo bajo arquitectura MVC',
        'Sistema de pagos mediante código QR',
        'Generación automática de facturas',
        'Gestión de inventario, ventas y control administrativo',
        'Aplicación de procesos de reingeniería de software'
      ]
    },
    {
      titulo: 'Sistema Administrativo MRM',
      periodo: 'Febrero 2025 - Junio 2025',
      asignatura: 'Administración de Proyectos Informáticos',
      cliente: 'Leal Pabon Jessica Lorena',
      descripcion: 'Sistema web para gestión administrativa enfocado en control de inventario, pedidos, ventas y asignación de citas para mecánicos.',
      tecnologias: [
        { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nombre: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { nombre: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { nombre: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { nombre: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ],
      actividades: [
        'Creación de sistema de asignación de citas manual y automática',
        'Gestión de inventario y pedidos',
        'Análisis de requerimientos y diseño del sistema',
        'Documentación técnica del proyecto'
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
            <Briefcase className="text-white" size={24} />
          </div>
          Experiencia Laboral y Proyectos
        </h2>

        {/* Experiencia Laboral */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-500 mb-6">Experiencia Laboral</h3>
          <div className="relative border-l-2 border-blue-200 dark:border-blue-800 ml-6">
            {experienciaLaboral.map((exp, idx) => (
              <div key={idx} className="mb-10 ml-6">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] border-4 border-white dark:border-gray-900"></div>
                <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">{exp.cargo}</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1">{exp.empresa}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.periodo}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.descripcion}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Actividades:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {exp.actividades.map((act, i) => (
                          <li key={i}>{act}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Logros:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {exp.logros.map((logro, i) => (
                          <li key={i}>{logro}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proyectos Académicos */}
        <div>
          <h3 className="text-2xl font-bold text-blue-500 mb-6">Proyectos Académicos</h3>
          <div className="space-y-6">
            {proyectosAcademicos.map((proyecto, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">{proyecto.titulo}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{proyecto.asignatura}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">Cliente: {proyecto.cliente}</p>
                    </div>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{proyecto.periodo}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{proyecto.descripcion}</p>
                  
                  {/* Tecnologías con logos */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {proyecto.tecnologias.map((tech) => (
                      <div 
                        key={tech.nombre}
                        className="flex items-center gap-2 bg-white dark:bg-gray-700 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition"
                      >
                        <img 
                          src={tech.logo} 
                          alt={tech.nombre}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.nombre}</span>
                      </div>
                    ))}
                  </div>

                  <details className="cursor-pointer">
                    <summary className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">Ver actividades realizadas</summary>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 mt-3 ml-4">
                      {proyecto.actividades.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
