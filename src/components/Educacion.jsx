import React, { useState } from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Educacion = () => {
  const [mostrarMasCursos, setMostrarMasCursos] = useState(false);

  const educacion = [
    {
      titulo: 'Ingeniería de Sistemas',
      institucion: 'Universidad Francisco de Paula Santander',
      estado: 'Semestre 11° - En curso',
      inicio: '2020-2',
      codigo: '1152118'
    },
    {
      titulo: 'Técnico Asistente Administrativo',
      institucion: 'Instituto Técnico Mercedes Abrego',
      año: '2019'
    }
  ];

  // Certificados con imagen de insignia y link de verificación
  const certificados = [
    {
      nombre: 'Linux Essentials',
      institucion: 'Cisco Networking Academy',
      año: '2025',
      imagen: 'cisco.png',
      link: 'https://www.credly.com/badges/'
    },
    {
      nombre: 'Operating Systems Basics',
      institucion: 'Cisco Networking Academy',
      año: '2025',
      imagen: 'cisco.png',
      link: 'https://www.credly.com/badges/'
    },
    {
      nombre: 'IPv6 básico - 3ra edición',
      institucion: 'LACNIC',
      año: '2025',
      imagen: 'cisco.png',
      link: 'https://www.credly.com/badges/'
    },
    {
      nombre: 'Introducción a Cisco Packet Tracer',
      institucion: 'Cisco Networking Academy',
      año: '2025',
      imagen: 'cisco.png',
      link: 'https://www.credly.com/badges/'
    },
    {
      nombre: 'Dispositivos de Red y Configuración Inicial',
      institucion: 'Cisco Networking Academy',
      año: '2025',
      imagen: 'cisco.png',
      link: 'https://www.credly.com/badges/'
    },
    {
      nombre: 'Cómo resolver problemas y tomar decisiones con eficacia',
      institucion: 'Coursera',
      año: '2024',
      imagen: 'cisco.png',
      link: 'https://www.credly.com/badges/'
    }
  ];

  return (
    <section id="educacion" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Educación Formal */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
              <GraduationCap className="text-blue-500" size={32} />
              Educación
            </h2>
            <div className="relative border-l-2 border-blue-200 dark:border-blue-800 ml-6">
              {educacion.map((edu, idx) => (
                <div key={idx} className="mb-8 ml-6">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] border-4 border-white dark:border-gray-800"></div>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-md transition border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{edu.titulo}</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold flex items-center gap-2">
                      {edu.institucion}
                      <ExternalLink size={14} className="text-gray-400" />
                    </p>
                    {edu.estado && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{edu.estado}</p>}
                    {edu.inicio && <p className="text-xs text-gray-500 dark:text-gray-500">Inicio: {edu.inicio} | Código: {edu.codigo}</p>}
                    {edu.año && <p className="text-sm text-gray-500 dark:text-gray-400">Graduado: {edu.año}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cursos y Certificaciones (lista textual) */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
              <Award className="text-blue-500" size={32} />
              Cursos y Certificaciones
            </h2>
            <div className="space-y-4">
              {certificados.slice(0, mostrarMasCursos ? certificados.length : 4).map((curso, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition">
                  <h3 className="font-bold text-gray-800 dark:text-white">{curso.nombre}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    {curso.institucion}
                    <ExternalLink size={14} className="text-gray-400" />
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{curso.año}</p>
                </div>
              ))}

              {!mostrarMasCursos && certificados.length > 4 && (
                <button onClick={() => setMostrarMasCursos(true)} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center gap-2 mt-4">
                  + Ver más cursos
                </button>
              )}

              {mostrarMasCursos && (
                <button onClick={() => setMostrarMasCursos(false)} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center gap-2 mt-4">
                  - Ver menos
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Galería de Insignias / Certificados con efecto hover */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Insignias de Certificación</h2>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {certificados.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-32 h-32 md:w-36 md:h-36"
                title={cert.nombre}
              >
                <img
                  src={cert.imagen}
                  alt={cert.nombre}
                  className="w-full h-full object-contain grayscale opacity-50 transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-125 drop-shadow-lg"
                />
              </a>
            ))}
          </div>
          <p className="text-center md:text-left text-sm text-gray-500 dark:text-gray-400 mt-6">
            ✨ Pasa el cursor sobre cada insignia para verla en color y verificarla
          </p>
        </div>
      </div>
    </section>
  );
};

export default Educacion;