import React from 'react';
import { Code2 } from 'lucide-react';

const Habilidades = () => {
  const habilidadesTecnicas = [
    { nombre: 'HTML', icon: '🌐', color: 'from-orange-400 to-orange-600' },
    { nombre: 'CSS', icon: '🎨', color: 'from-blue-400 to-blue-600' },
    { nombre: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
    { nombre: 'Bootstrap', icon: '🅱️', color: 'from-purple-400 to-purple-600' },
    { nombre: 'Tailwind CSS', icon: '🎯', color: 'from-teal-400 to-teal-600' },
    { nombre: 'React', icon: '⚛️', color: 'from-cyan-400 to-cyan-600' },
    { nombre: 'PHP', icon: '🐘', color: 'from-indigo-400 to-indigo-600' },
    { nombre: 'Python', icon: '🐍', color: 'from-blue-500 to-blue-700' },
    { nombre: 'MySQL', icon: '🐬', color: 'from-blue-500 to-blue-700' },
    { nombre: 'phpMyAdmin', icon: '💾', color: 'from-gray-500 to-gray-700' },
    { nombre: 'Git', icon: '📦', color: 'from-orange-500 to-orange-700' },
    { nombre: 'XAMPP', icon: '🔧', color: 'from-orange-400 to-orange-600' }
  ];

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
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Code2 className="text-white" size={24} />
          </div>
          Habilidades
        </h2>

        {/* Habilidades Técnicas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Tecnologías y Herramientas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {habilidadesTecnicas.map((skill) => (
              <div 
                key={skill.nombre}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center text-3xl shadow-lg`}>
                  {skill.icon}
                </div>
                <p className="text-center font-semibold text-gray-800 text-sm">{skill.nombre}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competencias con barras de progreso */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Competencias</h3>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              {competencias.map((comp) => (
                <div key={comp.area}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">{comp.area}</span>
                    <span className="text-blue-600 font-bold">{comp.nivel}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
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
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Habilidades Profesionales</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {habilidadesBlandas.map((skill) => (
              <div 
                key={skill.nombre}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="font-semibold text-gray-800">{skill.nombre}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Especialidades */}
        <div className="mt-12 bg-blue-600 text-white p-8 rounded-xl shadow-lg">
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