import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Eye, Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ modoOscuro, toggleModoOscuro }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-black min-h-screen flex items-center transition-colors duration-300">
      <div className="container mx-auto px-4 py-20">
        <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 px-6 py-4 transition-colors duration-300">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Diego Álvarez</h1>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleModoOscuro}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                aria-label="Cambiar tema"
              >
                {modoOscuro ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </button>

              <div className="hidden md:flex gap-6">
                <a href="#experiencia" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Experiencia</a>
                <a href="#educacion" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Educación</a>
                <a href="#proyectos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Proyectos</a>
                <a href="#habilidades" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Habilidades</a>
                <a href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Sobre Mí</a>
                <a href="#contacto" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contacto</a>
              </div>

              <button
                onClick={toggleMenu}
                className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label="Menú"
              >
                {menuAbierto ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {menuAbierto && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col gap-4 pt-4">
                <a href="#experiencia" onClick={cerrarMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded">Experiencia</a>
                <a href="#educacion" onClick={cerrarMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded">Educación</a>
                <a href="#proyectos" onClick={cerrarMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded">Proyectos</a>
                <a href="#habilidades" onClick={cerrarMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded">Habilidades</a>
                <a href="#sobre" onClick={cerrarMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded">Sobre Mí</a>
                <a href="#contacto" onClick={cerrarMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded">Contacto</a>
              </div>
            </div>
          )}
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></span>
              Disponible para trabajar
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Hola, soy <span className="text-blue-600 dark:text-blue-400">Diego Álvarez</span>
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Estudiante de Ingeniería de Sistemas.</span>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Desarrollador Full Stack con orientación Frontend | Especialista en documentación técnica y análisis de sistemas
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/hoja-de-vida.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition flex items-center gap-2"
              >
                <Eye size={20} />
                Ver CV
              </a>

              <a
                href="/hoja-de-vida.pdf"
                download="CV-Diego-Alvarez.pdf"
                className="bg-white dark:bg-transparent text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-400/10 transition flex items-center gap-2"
              >
                <Download size={20} />
                Descargar
              </a>

              <div className="flex gap-3">
                <a
                  href="mailto:diegoandresalli@ufps.edu.co"
                  className="w-12 h-12 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://github.com/DiegoA03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/diego-andres-alvarez-lizarazo-6a40113a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/header.jpeg"
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