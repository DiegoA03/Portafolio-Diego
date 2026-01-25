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

  const cursos = [
    { 
      nombre: 'Linux Essentials', 
      institucion: 'Cisco Networking Academy', 
      año: '2025', 
      horas: '70 horas' 
    },
    { 
      nombre: 'Operating Systems Basics', 
      institucion: 'Cisco Networking Academy', 
      año: '2025', 
      horas: '12 horas' 
    },
    { 
      nombre: 'IPv6 básico - 3ra edición 2025', 
      institucion: 'LACNIC', 
      año: '2025', 
      horas: '20 horas' 
    },
    { 
      nombre: 'Introducción a Cisco Packet Tracer', 
      institucion: 'Cisco Networking Academy', 
      año: '2025', 
      horas: '2 horas' 
    },
    { 
      nombre: 'Dispositivos de Red y Configuración Inicial', 
      institucion: 'Cisco Networking Academy', 
      año: '2025', 
      horas: '22 horas' 
    },
    { 
      nombre: 'Cómo resolver problemas y tomar decisiones con eficacia', 
      institucion: 'Coursera', 
      año: '2024', 
      horas: '' 
    }
  ];

  return (
    <section id="educacion" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
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

          {/* Cursos y Certificaciones */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
              <Award className="text-blue-500" size={32} />
              Cursos y Certificaciones
            </h2>
            <div className="space-y-4">
              {cursos.slice(0, mostrarMasCursos ? cursos.length : 4).map((curso, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition">
                  <h3 className="font-bold text-gray-800 dark:text-white">{curso.nombre}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    {curso.institucion}
                    <ExternalLink size={14} className="text-gray-400" />
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-500 dark:text-gray-500">{curso.año}</p>
                    {curso.horas && <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{curso.horas}</p>}
                  </div>
                </div>
              ))}
              
              {!mostrarMasCursos && cursos.length > 4 && (
                <button 
                  onClick={() => setMostrarMasCursos(true)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center gap-2 mt-4"
                >
                  + Ver más cursos
                </button>
              )}
              
              {mostrarMasCursos && (
                <button 
                  onClick={() => setMostrarMasCursos(false)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center gap-2 mt-4"
                >
                  - Ver menos
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educacion;