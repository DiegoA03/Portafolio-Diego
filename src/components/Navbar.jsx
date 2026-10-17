import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ modoOscuro, toggleModoOscuro }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [conScroll, setConScroll] = useState(false);
  const [rutaHover, setRutaHover] = useState(null);
  const location = useLocation();
  const { idioma, toggleIdioma, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setConScroll(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  const links = [
    { nombre: t.nav.experiencia, ruta: "/experiencia" },
    { nombre: t.nav.educacion, ruta: "/educacion" },
    { nombre: t.nav.proyectos, ruta: "/proyectos" },
    { nombre: t.nav.habilidades, ruta: "/habilidades" },
    { nombre: t.nav.sobreMi, ruta: "/sobre-mi" },
    { nombre: t.nav.contacto, ruta: "/contacto" },
  ];

  const esActivo = (ruta) => location.pathname === ruta;

  // Estilo de los enlaces del menú móvil
  const claseLink = (ruta, extra = "") =>
    `${extra} rounded-lg text-sm font-medium transition ${
      esActivo(ruta)
        ? "bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white"
        : "text-slate-700 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
    }`;

  return (
    <>
      {/* Navbar transparente: solo se desenfoca ligeramente al hacer scroll */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 h-20 border-b bg-transparent px-6 transition-all duration-300 ${
          conScroll
            ? "border-slate-900/5 backdrop-blur-md dark:border-white/10"
            : "border-transparent"
        }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between">
          <Link to="/" className="group flex h-full items-center gap-3 py-3">
            <img
              src="/logo.png"
              alt="DA Logo"
              className="h-full w-auto object-contain transition-transform group-hover:scale-110"
            />
            {/* Nombre con la Vía Láctea dentro de las letras (estilos en index.css) */}
            <span className="texto-galaxia font-marca hidden text-xl tracking-[0.14em] group-hover:[animation-duration:5s] min-[400px]:inline">
              DIEGO ÁLVAREZ
            </span>
          </Link>

          <div className="flex items-center gap-3 md:gap-4">
            <LanguageToggle idioma={idioma} toggleIdioma={toggleIdioma} />
            <ThemeToggle
              modoOscuro={modoOscuro}
              toggleModoOscuro={toggleModoOscuro}
            />

            {/* Enlaces: una pastilla de cristal se desliza hasta el enlace bajo el cursor
                y una línea con degradado se dibuja debajo */}
            <div
              className="hidden gap-1 md:flex"
              onMouseLeave={() => setRutaHover(null)}
            >
              {links.map((link) => {
                const activo = esActivo(link.ruta);

                return (
                  <Link
                    key={link.ruta}
                    to={link.ruta}
                    onMouseEnter={() => setRutaHover(link.ruta)}
                    onFocus={() => setRutaHover(link.ruta)}
                    onBlur={() => setRutaHover(null)}
                    className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      activo
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    }`}
                  >
                    {rutaHover === link.ruta && (
                      <motion.span
                        layoutId="nav-hover"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                        className="absolute inset-0 rounded-lg bg-slate-900/5 ring-1 ring-slate-900/5 backdrop-blur-sm dark:bg-white/10 dark:ring-white/10"
                      />
                    )}

                    <span className="relative z-10 inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                      {link.nombre}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 transition-transform duration-300 ease-out ${
                        activo
                          ? "origin-left scale-x-100"
                          : "origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
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
                className={claseLink(link.ruta, "px-4 py-3")}
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
