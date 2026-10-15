import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ modoOscuro, toggleModoOscuro }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [conScroll, setConScroll] = useState(false);
  const location = useLocation();
  const { idioma, toggleIdioma, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setConScroll(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  const links = [
    { nombre: t.nav.experiencia, ruta: '/experiencia' },
    { nombre: t.nav.educacion, ruta: '/educacion' },
    { nombre: t.nav.proyectos, ruta: '/proyectos' },
    { nombre: t.nav.habilidades, ruta: '/habilidades' },
    { nombre: t.nav.sobreMi, ruta: '/sobre-mi' },
    { nombre: t.nav.contacto, ruta: '/contacto' }
  ];

  const esActivo = (ruta) => location.pathname === ruta;

  const claseLink = (ruta, extra = '') =>
    `${extra} rounded-lg text-sm font-medium transition ${
      esActivo(ruta)
        ? 'bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white'
        : 'text-slate-700 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
    }`;

  return (
    <>
      {/* Navbar transparente: solo se desenfoca ligeramente al hacer scroll */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 h-20 border-b bg-transparent px-6 transition-all duration-300 ${
          conScroll
            ? 'border-slate-900/5 backdrop-blur-md dark:border-white/10'
            : 'border-transparent'
        }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between">
          <Link to="/" className="group flex h-full items-center gap-3 py-3">
            <img
              src="/logo.png"
              alt="DA Logo"
              className="h-full w-auto object-contain transition-transform group-hover:scale-110"
            />
            <span className="font-display hidden text-base font-semibold tracking-[0.2em] text-slate-900 min-[400px]:inline dark:text-white">
              DIEGO ÁLVAREZ
            </span>
          </Link>

          <div className="flex items-center gap-3 md:gap-4">
            <LanguageToggle idioma={idioma} toggleIdioma={toggleIdioma} />
            <ThemeToggle modoOscuro={modoOscuro} toggleModoOscuro={toggleModoOscuro} />

            <div className="hidden gap-1 md:flex">
              {links.map((link) => (
                <Link key={link.ruta} to={link.ruta} className={claseLink(link.ruta, 'px-4 py-2')}>
                  {link.nombre}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleMenu}
              className="text-slate-800 transition hover:text-slate-950 md:hidden dark:text-slate-200 dark:hover:text-white"
              aria-label="Menú"
            >
              {menuAbierto ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil: cristal translúcido para que se lea bien */}
      {menuAbierto && (
        <div className="fixed left-0 right-0 top-20 z-40 border-b border-slate-900/5 bg-white/80 shadow-xl backdrop-blur-xl transition-colors duration-300 md:hidden dark:border-white/10 dark:bg-slate-950/80">
          <div className="flex flex-col gap-2 p-4">
            {links.map((link) => (
              <Link
                key={link.ruta}
                to={link.ruta}
                onClick={cerrarMenu}
                className={claseLink(link.ruta, 'px-3 py-3')}
              >
                {link.nombre}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;