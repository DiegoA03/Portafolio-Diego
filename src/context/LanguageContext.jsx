import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const traducciones = {
  es: {
    nav: {
      experiencia: 'Experiencia',
      educacion: 'Educación',
      proyectos: 'Proyectos',
      habilidades: 'Habilidades',
      sobreMi: 'Sobre Mí',
      contacto: 'Contacto'
    },
    home: {
      disponible: 'Disponible para trabajar',
      hola: 'Hola, soy',
      roles: ['Desarrollador Frontend', 'Estudiante de Ingeniería de Sistemas', 'Full Stack Developer', 'Apasionado por la IA'],
      descripcion: 'Especialista en documentación técnica, análisis de sistemas y desarrollo de soluciones tecnológicas orientadas al frontend.',
      verCV: 'Ver CV',
      descargar: 'Descargar',
      verProyectos: 'Ver mis proyectos'
    },
    experiencia: {
      titulo: 'Experiencia Laboral',
      subtitulo: 'Pasa el cursor sobre cada logo y haz clic para descubrir más ✨',
      tooltip: '¿Te gustaría conocer un poco de mi experiencia?',
      actividadesTitulo: 'Actividades realizadas',
      logrosTitulo: 'Logros',
      items: {
        gnosoft: {
          cargo: 'Analista QA',
          empresa: 'Gnosoft LTDA',
          periodo: '2026 · Prácticas Empresariales',
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
        ufps: {
          cargo: 'Asistente Administrativo',
          empresa: 'Facultad de Ciencias Agrarias · UFPS',
          periodo: 'Semestre II · 2024 · Beca-Trabajo',
          descripcion: 'Gestión y organización del sistema de archivos digital (Datasoft) de la facultad, como parte del programa de beca-trabajo universitario.',
          actividades: [
            'Clasificación, digitalización y archivo de documentación administrativa y académica',
            'Atención y procesamiento eficiente de documentos oficiales'
          ],
          logros: [
            'Fortalecimiento de habilidades en gestión documental digital',
            'Mejora en la eficiencia del procesamiento de documentos oficiales'
          ]
        },
        isa: {
          cargo: 'Asistente Administrativo',
          empresa: 'ISA Consultores',
          periodo: '2018 - 2019 · 100 horas · Prácticas Estudiantiles',
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
      }
    },
    educacion: {
  tituloEducacion: 'Educación',
  tituloCertificaciones: 'Certificaciones',
  items: [
    {
      titulo: 'Ingeniería de Sistemas',
      institucion: 'Universidad Francisco de Paula Santander',
      estado: 'Semestre 11° - En curso',
      inicioLabel: 'Inicio',
      inicio: '2020 - Actualidad'
    },
    {
      titulo: 'Técnico Asistente Administrativo',
      institucion: 'Educación Media',
      año: '2007 - 2019'
    }
  ]
},
// Dentro de "es":
proyectos: {
  titulo: 'Proyectos',
  codigo: 'Código',
  ver: 'Ver',
  items: {
    ecommerce: {
      nombre: 'Mini E-Commerce MRM',
      descripcion: 'Sistema web completo para comercialización de repuestos de motocicletas con sistema de pagos QR, gestión de inventario y generación automática de facturas.'
    },
    admin: {
      nombre: 'Sistema Administrativo MRM',
      descripcion: 'Plataforma de gestión administrativa para taller de motos con control de inventario, citas y asignación inteligente de mecánicos.'
    },
    ia: {
      nombre: 'Reconocimiento Facial IA',
      descripcion: 'Sistema de identificación facial usando redes neuronales convolucionales (CNN/MTCCN) con interfaz web moderna.'
    },
    pizzi: {
      nombre: 'Menú Olivos Pizzi',
      descripcion: 'Sitio web para la visualización del menú de la pizzería Olivos Pizzi de la ciudad de Bogotá, con una interacción moderna para el cliente.'
    }
  }
},
habilidades: {
  titulo: 'Habilidades & Servicios',
  descripcionIntro: 'Soy un desarrollador apasionado con múltiples roles en el ecosistema de desarrollo de software. Mi especialidad es crear soluciones web impactantes y funcionales, siempre manteniendo estándares de calidad y documentación técnica estructurada.',
  tituloServicios: 'Servicios que Ofrezco',
  tituloTecnologias: 'Tecnologías y Herramientas',
  roles: [
    {
      nombre: 'Desarrollador Full Stack',
      descripcion: 'Construcción de aplicaciones web completas con énfasis en frontend y experiencia del usuario.'
    },
    {
      nombre: 'Analista de Sistemas',
      descripcion: 'Análisis de requerimientos, diseño UML y arquitectura de soluciones tecnológicas.'
    },
    {
      nombre: 'Documentador Técnico',
      descripcion: 'Documentación estructurada de proyectos, procesos y guías técnicas de implementación.'
    },
    {
      nombre: 'Tester QA',
      descripcion: 'Control de calidad, pruebas funcionales y aseguramiento de la robustez del software.'
    }
  ],
  servicios: [
    {
      nombre: 'E-commerce',
      descripcion: 'Plataformas de venta online completas con carrito, pagos y gestión de inventario.'
    },
    {
      nombre: 'Gestión de Inventarios',
      descripcion: 'Sistemas para control, seguimiento y administración de productos y almacenes.'
    },
    {
      nombre: 'Gestión de Citas',
      descripcion: 'Aplicaciones para reservas, calendarios y asignación automática de horarios.'
    },
    {
      nombre: 'Menús Digitales',
      descripcion: 'Catálogos interactivos para restaurantes, bares y establecimientos comerciales.'
    },
    {
      nombre: 'Portafolios Web',
      descripcion: 'Sitios profesionales para mostrar proyectos, experiencia y servicios de manera impactante.'
    }
  ]
},
sobreMi: {
  titulo: 'Sobre Mí',
  tituloPerfil: 'Perfil Profesional',
  parrafo1Parte1: 'Soy estudiante del programa de',
  parrafo1Destacado: 'Ingeniería de Sistemas de la Universidad Francisco de Paula Santander',
  parrafo1Parte2: ', con formación orientada al desarrollo de soluciones tecnológicas, el análisis de sistemas de información y la documentación técnica y de gestión de proyectos, con una proyección hacia el área de la inteligencia artificial.',
  parrafo2Parte1: 'Me caracterizo por asumir mis responsabilidades académicas con',
  parrafo2Destacado: 'compromiso, ética y una actitud proactiva',
  parrafo2Parte2: 'frente al aprendizaje continuo, buscando aportar valor en los entornos donde me desempeño.',
  tituloExpectativa: 'Expectativa Profesional',
  textoExpectativa: 'Aspiro a fortalecer mis competencias técnicas y personales, aportando de manera significativa a la organización donde realice esta etapa formativa, mientras continúo desarrollándome en el área de la inteligencia artificial y el desarrollo de software.',
  tituloFortalezas: 'Principales Fortalezas',
  fortalezas: [
    { nombre: 'Trabajo en equipo', emoji: '🤝' },
    { nombre: 'Responsabilidad', emoji: '🎯' },
    { nombre: 'Autodisciplina', emoji: '🏋️' },
    { nombre: 'Aprendizaje rápido', emoji: '📈' },
    { nombre: 'Orden y organización', emoji: '🗂️' },
    { nombre: 'Proactividad', emoji: '🔥' }
  ],
  tituloInfoPersonal: 'Información Personal',
  datosPersonales: [
    { label: 'Ubicación', valor: 'Cúcuta, Norte de Santander' },
    { label: 'Nacimiento', valor: '03 de Agosto, 2002' },
    { label: 'Estado Civil', valor: 'Soltero' }
  ],
  tituloIdiomas: 'Idiomas',
  espanol: 'Español',
  ingles: 'Inglés',
  nivelNativo: 'Nativo',
  nivelRegular: 'Regular'
},
contacto: {
  titulo: '¿Hablamos?',
  subtitulo: 'Estoy disponible para escucharte y llevar tu idea a la nube. No dudes en contactarme.',
  email: 'Email',
  telefono: 'Teléfono',
  ubicacion: 'Ubicación',
  direccion1: 'Av 5a #23-19 San Mateo',
  direccion2: 'Cúcuta, Norte de Santander',
  botonEnviar: 'Enviar Mensaje',
  asuntoCorreo: 'Oportunidad de Prácticas Profesionales',
  derechos: 'Todos los derechos reservados.',
  footerRol: 'Estudiante de Ingeniería de Sistemas - Universidad Francisco de Paula Santander'
},
    
  },
  en: {
    nav: {
      experiencia: 'Experience',
      educacion: 'Education',
      proyectos: 'Projects',
      habilidades: 'Skills',
      sobreMi: 'About Me',
      contacto: 'Contact'
    },
    home: {
      disponible: 'Available for work',
      hola: 'Hi, I\'m',
      roles: ['Frontend Developer', 'Systems Engineering Student', 'Full Stack Developer', 'Passionate about AI'],
      descripcion: 'Specialist in technical documentation, systems analysis and development of technology solutions oriented to frontend.',
      verCV: 'View CV',
      descargar: 'Download',
      verProyectos: 'View my projects'
    },
    experiencia: {
      titulo: 'Work Experience',
      subtitulo: 'Hover over each logo and click to discover more ✨',
      tooltip: 'Would you like to know a bit about my experience?',
      actividadesTitulo: 'Activities performed',
      logrosTitulo: 'Achievements',
      items: {
        gnosoft: {
          cargo: 'QA Analyst',
          empresa: 'Gnosoft LTDA',
          periodo: '2026 · Professional Internship',
          descripcion: 'Execution of functional tests on the Gnosoft Académico platform, validating requirements in testing and production environments.',
          actividades: [
            'Requirements analysis, test case design and structured recording of evidence and issues',
            'Support in the validation and deployment of updates in final environments',
            'Ensuring compliance with quality standards'
          ],
          logros: [
            'Successful management and closure of 19 functional requirements during the internship period',
            'Strengthened critical analysis and assertive communication skills',
            'Problem-solving in a real business environment'
          ]
        },
        ufps: {
          cargo: 'Administrative Assistant',
          empresa: 'Faculty of Agricultural Sciences · UFPS',
          periodo: 'Semester II · 2024 · Work-Study Program',
          descripcion: 'Management and organization of the digital filing system (Datasoft) of the faculty, as part of the university work-study program.',
          actividades: [
            'Classification, digitization and filing of administrative and academic documentation',
            'Efficient attention and processing of official documents'
          ],
          logros: [
            'Strengthened digital document management skills',
            'Improved efficiency in processing official documents'
          ]
        },
        isa: {
          cargo: 'Administrative Assistant',
          empresa: 'ISA Consultores',
          periodo: '2018 - 2019 · 100 hours · Student Internship',
          descripcion: 'Support in administrative tasks related to the management and documental organization of the company.',
          actividades: [
            'Classification, sorting and filing of payment vouchers and accounting documents',
            'Support in bank payment and withdrawal management',
            'Verification and organization of financial documents'
          ],
          logros: [
            'Successful completion of 100 hours of student internship',
            'Strengthened skills in organization and responsibility',
            'Contribution to improving the company\'s document order'
          ]
        }
      }
    },
    educacion: {
  tituloEducacion: 'Education',
  tituloCertificaciones: 'Certifications',
  items: [
    {
      titulo: 'Systems Engineering',
      institucion: 'Francisco de Paula Santander University',
      estado: '11th Semester - In progress',
      inicioLabel: 'Start',
      inicio: '2020 - Present'
    },
    {
      titulo: 'Administrative Assistant Technician',
      institucion: 'High School Education',
      año: '2007 - 2019'
    }
  ]
},
proyectos: {
  titulo: 'Projects',
  codigo: 'Code',
  ver: 'View',
  items: {
    ecommerce: {
      nombre: 'Mini E-Commerce MRM',
      descripcion: 'Complete web system for the commercialization of motorcycle parts, featuring QR payment system, inventory management and automatic invoice generation.'
    },
    admin: {
      nombre: 'MRM Administrative System',
      descripcion: 'Administrative management platform for a motorcycle repair shop with inventory control, appointments and intelligent mechanic assignment.'
    },
    ia: {
      nombre: 'AI Facial Recognition',
      descripcion: 'Facial identification system using convolutional neural networks (CNN/MTCCN) with a modern web interface.'
    },
    pizzi: {
      nombre: 'Olivos Pizzi Menu',
      descripcion: 'Website for viewing the menu of the Olivos Pizzi pizzeria in Bogotá, featuring a modern interactive experience for customers.'
    }
  }
},
habilidades: {
  titulo: 'Skills & Services',
  descripcionIntro: 'I am a passionate developer with multiple roles in the software development ecosystem. My specialty is creating impactful, functional web solutions, always maintaining quality standards and structured technical documentation.',
  tituloServicios: 'Services I Offer',
  tituloTecnologias: 'Technologies and Tools',
  roles: [
    {
      nombre: 'Full Stack Developer',
      descripcion: 'Building complete web applications with an emphasis on frontend and user experience.'
    },
    {
      nombre: 'Systems Analyst',
      descripcion: 'Requirements analysis, UML design and architecture of technology solutions.'
    },
    {
      nombre: 'Technical Writer',
      descripcion: 'Structured documentation of projects, processes and technical implementation guides.'
    },
    {
      nombre: 'QA Tester',
      descripcion: 'Quality control, functional testing and ensuring software robustness.'
    }
  ],
  servicios: [
    {
      nombre: 'E-commerce',
      descripcion: 'Complete online sales platforms with cart, payments and inventory management.'
    },
    {
      nombre: 'Inventory Management',
      descripcion: 'Systems for control, tracking and administration of products and warehouses.'
    },
    {
      nombre: 'Appointment Management',
      descripcion: 'Applications for bookings, calendars and automatic schedule assignment.'
    },
    {
      nombre: 'Digital Menus',
      descripcion: 'Interactive catalogs for restaurants, bars and commercial establishments.'
    },
    {
      nombre: 'Web Portfolios',
      descripcion: 'Professional sites to showcase projects, experience and services impactfully.'
    }
  ]
},
// Dentro de "en":
sobreMi: {
  titulo: 'About Me',
  tituloPerfil: 'Professional Profile',
  parrafo1Parte1: 'I am a student in the',
  parrafo1Destacado: 'Systems Engineering program at Francisco de Paula Santander University',
  parrafo1Parte2: ', with training oriented toward the development of technological solutions, information systems analysis, and technical and project management documentation, with a projection toward the field of artificial intelligence.',
  parrafo2Parte1: 'I am characterized by taking on my academic responsibilities with',
  parrafo2Destacado: 'commitment, ethics and a proactive attitude',
  parrafo2Parte2: 'toward continuous learning, seeking to add value in the environments where I work.',
  tituloExpectativa: 'Professional Expectations',
  textoExpectativa: 'I aspire to strengthen my technical and personal skills, contributing significantly to the organization where I complete this training stage, while continuing to develop in the field of artificial intelligence and software development.',
  tituloFortalezas: 'Key Strengths',
  fortalezas: [
    { nombre: 'Teamwork', emoji: '🤝' },
    { nombre: 'Responsibility', emoji: '🎯' },
    { nombre: 'Self-discipline', emoji: '🏋️' },
    { nombre: 'Fast learning', emoji: '📈' },
    { nombre: 'Order and organization', emoji: '🗂️' },
    { nombre: 'Proactivity', emoji: '🔥' }
  ],
  tituloInfoPersonal: 'Personal Information',
  datosPersonales: [
    { label: 'Location', valor: 'Cúcuta, Norte de Santander' },
    { label: 'Birth', valor: 'August 3rd, 2002' },
    { label: 'Marital Status', valor: 'Single' }
  ],
  tituloIdiomas: 'Languages',
  espanol: 'Spanish',
  ingles: 'English',
  nivelNativo: 'Native',
  nivelRegular: 'Intermediate'
},
// Dentro de "en":
contacto: {
  titulo: "Let's Talk?",
  subtitulo: "I'm available to hear you out and take your idea to the cloud. Don't hesitate to reach out.",
  email: 'Email',
  telefono: 'Phone',
  ubicacion: 'Location',
  direccion1: 'Av 5a #23-19 San Mateo',
  direccion2: 'Cúcuta, Norte de Santander, Colombia',
  botonEnviar: 'Send Message',
  asuntoCorreo: 'Professional Internship Opportunity',
  derechos: 'All rights reserved.',
  footerRol: 'Systems Engineering Student - Francisco de Paula Santander University'
},
  }
};

export const LanguageProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('es');

  const toggleIdioma = () => {
    setIdioma((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = traducciones[idioma];

  return (
    <LanguageContext.Provider value={{ idioma, toggleIdioma, t }}>
      {children}
    </LanguageContext.Provider>
  );
};