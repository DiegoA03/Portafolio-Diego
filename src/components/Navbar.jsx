import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ modoOscuro, toggleModoOscuro }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();
  const { idioma, toggleIdioma } = useLanguage();

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  const links = [
    { nombre: idioma === 'es' ? 'Experiencia' : 'Experience', ruta: '/experiencia' },
    { nombre: idioma === 'es' ? 'Educación' : 'Education', ruta: '/educacion' },
    { nombre: idioma === 'es' ? 'Proyectos' : 'Projects', ruta: '/proyectos' },
    { nombre: idioma === 'es' ? 'Habilidades' : 'Skills', ruta: '/habilidades' },
    { nombre: idioma === 'es' ? 'Sobre Mí' : 'About Me', ruta: '/sobre-mi' },
    { nombre: idioma === 'es' ? 'Contacto' : 'Contact', ruta: '/contacto' }
  ];

  const esActivo = (ruta) => location.pathname === ruta;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg z-50 px-6 py-4 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/DA-logo.png"
            alt="DA Logo"
            className="w-14 h-14 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="text-lg font-bold text-blue-400 tracking-wider">DIEGO ÁLVAREZ</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Botón de idioma */}
          <button
            onClick={toggleIdioma}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-sm font-semibold text-gray-300"
            aria-label="Cambiar idioma"
          >
            <span className={idioma === 'es' ? 'text-blue-400' : 'text-gray-500'}>ES</span>
            <span className="text-gray-600">/</span>
            <span className={idioma === 'en' ? 'text-blue-400' : 'text-gray-500'}>EN</span>
          </button>

          <button
            onClick={toggleModoOscuro}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
            aria-label="Cambiar tema"
          >
            {modoOscuro ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-300" />}
          </button>

          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <Link
                key={link.ruta}
                to={link.ruta}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  esActivo(link.ruta)
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                }`}
              >
                {link.nombre}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-blue-400 transition"
            aria-label="Menú"
          >
            {menuAbierto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuAbierto && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
          <div className="flex flex-col gap-2 pt-4">
            {links.map((link) => (
              <Link
                key={link.ruta}
                to={link.ruta}
                onClick={cerrarMenu}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  esActivo(link.ruta)
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                }`}
              >
                {link.nombre}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;