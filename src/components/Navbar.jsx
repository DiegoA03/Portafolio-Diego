import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';

const Navbar = ({ modoOscuro, toggleModoOscuro }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  const links = [
    { nombre: 'Experiencia', ruta: '/experiencia' },
    { nombre: 'Educación', ruta: '/educacion' },
    { nombre: 'Proyectos', ruta: '/proyectos' },
    { nombre: 'Habilidades', ruta: '/habilidades' },
    { nombre: 'Sobre Mí', ruta: '/sobre-mi' },
    { nombre: 'Contacto', ruta: '/contacto' }
  ];

  const esActivo = (ruta) => location.pathname === ruta;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg z-50 px-6 py-4 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo con icono */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Terminal size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-blue-400">Diego Álvarez</span>
        </Link>

        <div className="flex items-center gap-6">
          {/* Botón modo oscuro */}
          <button
            onClick={toggleModoOscuro}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
            aria-label="Cambiar tema"
          >
            {modoOscuro ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-300" />}
          </button>

          {/* Menú Desktop */}
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

          {/* Botón hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-blue-400 transition"
            aria-label="Menú"
          >
            {menuAbierto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
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