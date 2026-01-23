import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        {/* Navegación fija */}
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-6 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">Diego Álvarez</h1>
            <div className="hidden md:flex gap-6">
              <a href="#experiencia" className="text-gray-700 hover:text-blue-600 transition">Experiencia</a>
              <a href="#educacion" className="text-gray-700 hover:text-blue-600 transition">Educación</a>
              <a href="#proyectos" className="text-gray-700 hover:text-blue-600 transition">Proyectos</a>
              <a href="#habilidades" className="text-gray-700 hover:text-blue-600 transition">Habilidades</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition">Sobre Mí</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
            </div>
          </div>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div>
            {/* Badge de disponibilidad */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Disponible para Prácticas Profesionales
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hola, soy <span className="text-blue-600">Diego Álvarez</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-2">
              <span className="text-blue-600 font-semibold">Estudiante de Ingeniería de Sistemas.</span>
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Desarrollador Full Stack con orientación Frontend | Especialista en documentación técnica y análisis de sistemas
            </p>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/src/components/Documents/HOJA DE VIDA DIEGO ALVAREZ - 1152118.pdf" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                <Download size={20} />
                Descargar CV
              </a>
              <div className="flex gap-3">
                <a href="mailto:diegoandresalli@ufps.edu.co" className="w-12 h-12 border-2 border-blue-600 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-blue-600 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-blue-600 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Espacio para tu foto */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full overflow-hidden shadow-2xl">
              <img 
                src="/src/components/Documents/WhatsApp Image 2026-01-22 at 9.42.45 PM.jpeg" 
                alt="Diego Álvarez" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white text-6xl font-bold">DA</div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;