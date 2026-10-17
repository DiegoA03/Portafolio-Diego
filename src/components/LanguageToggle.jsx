import React from "react";

// Bandera de España (simplificada: franjas rojo-amarillo-rojo)
const BanderaEspana = ({ className = "" }) => (
  <svg
    viewBox="0 0 30 20"
    preserveAspectRatio="xMidYMid slice"
    className={className}
    aria-hidden="true"
  >
    <rect width="30" height="20" fill="#AA151B" />
    <rect y="5" width="30" height="10" fill="#F1BF00" />
  </svg>
);

// Bandera de Estados Unidos (simplificada: 13 franjas, cantón azul y estrellas)
const BanderaEEUU = ({ className = "" }) => {
  const alto = 20 / 13;
  const franjasBlancas = [1, 3, 5, 7, 9, 11];
  const estrellas = [];
  [1.8, 5.4, 9].forEach((y) => {
    [2.2, 5.6, 9, 12.4].forEach((x) => estrellas.push({ x, y }));
  });

  return (
    <svg
      viewBox="0 0 38 20"
      preserveAspectRatio="xMinYMid slice"
      className={className}
      aria-hidden="true"
    >
      <rect width="38" height="20" fill="#B22234" />
      {franjasBlancas.map((i) => (
        <rect key={i} y={i * alto} width="38" height={alto} fill="#FFFFFF" />
      ))}
      <rect width="15.2" height={alto * 7} fill="#3C3B6E" />
      {estrellas.map((e, i) => (
        <circle key={i} cx={e.x} cy={e.y} r="0.55" fill="#FFFFFF" />
      ))}
    </svg>
  );
};

const LanguageToggle = ({ idioma, toggleIdioma }) => {
  const esIngles = idioma === "en";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={esIngles}
      onClick={toggleIdioma}
      aria-label={esIngles ? "Cambiar a español" : "Switch to English"}
      title={
        esIngles ? "English · clic para español" : "Español · clic para inglés"
      }
      className="relative h-7 w-14 shrink-0 rounded-full border border-slate-900/10 bg-white/40 backdrop-blur-sm transition-colors hover:bg-white/60 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20"
    >
      {/* Etiquetas a los lados (la activa queda tapada por el círculo) */}
      <span className="pointer-events-none absolute inset-y-0 left-2 flex items-center text-[9px] font-bold tracking-wide text-slate-500 dark:text-slate-400">
        ES
      </span>
      <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-[9px] font-bold tracking-wide text-slate-500 dark:text-slate-400">
        EN
      </span>

      {/* Círculo deslizante con la bandera */}
      <span
        className={`absolute left-1 top-1 h-5 w-5 overflow-hidden rounded-full shadow-md ring-1 ring-black/10 transition-transform duration-300 ease-out ${
          esIngles ? "translate-x-[26px]" : "translate-x-0"
        }`}
      >
        <BanderaEspana
          className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
            esIngles ? "opacity-0" : "opacity-100"
          }`}
        />
        <BanderaEEUU
          className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
            esIngles ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>
    </button>
  );
};

export default LanguageToggle;
