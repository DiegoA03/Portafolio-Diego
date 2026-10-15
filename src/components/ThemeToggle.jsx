import React from 'react';

// Interruptor día/noche: el sol se transforma en luna mientras el cielo cambia
const ThemeToggle = ({ modoOscuro, toggleModoOscuro }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={modoOscuro}
      onClick={toggleModoOscuro}
      aria-label={modoOscuro ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={modoOscuro ? 'Modo oscuro · clic para claro' : 'Modo claro · clic para oscuro'}
      className="relative h-7 w-14 shrink-0 overflow-hidden rounded-full shadow-inner ring-1 ring-black/10 dark:ring-white/15"
    >
      {/* Cielo de día */}
      <span
        className={`absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-200 transition-opacity duration-500 ${
          modoOscuro ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {/* Cielo de noche */}
      <span
        className={`absolute inset-0 bg-gradient-to-b from-indigo-950 to-slate-900 transition-opacity duration-500 ${
          modoOscuro ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Nubes (solo de día) */}
      <span
        className={`absolute inset-0 transition-all duration-500 ${
          modoOscuro ? 'translate-y-3 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <span className="absolute bottom-1 right-2 h-2 w-5 rounded-full bg-white/90" />
        <span className="absolute bottom-2 right-4 h-2.5 w-2.5 rounded-full bg-white/90" />
        <span className="absolute bottom-3.5 right-1.5 h-1.5 w-3 rounded-full bg-white/70" />
      </span>

      {/* Estrellas (solo de noche) */}
      <span
        className={`absolute inset-0 transition-all duration-500 ${
          modoOscuro ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
        }`}
      >
        <span className="absolute left-2 top-1.5 h-[2px] w-[2px] animate-pulse rounded-full bg-white" />
        <span className="absolute left-4 top-3.5 h-[3px] w-[3px] rounded-full bg-white/90" />
        <span className="absolute left-6 top-1 h-[2px] w-[2px] animate-pulse rounded-full bg-violet-200" />
        <span className="absolute left-3 bottom-1 h-[2px] w-[2px] rounded-full bg-white/80" />
        <span className="absolute left-8 bottom-2 h-[2px] w-[2px] animate-pulse rounded-full bg-white" />
      </span>

      {/* Astro deslizante: sol ↔ luna */}
      <span
        className={`absolute left-1 top-1 h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(.68,-.35,.27,1.35)] ${
          modoOscuro ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {/* Sol */}
        <span
          className={`absolute inset-0 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-[0_0_10px_3px_rgba(251,191,36,0.7)] transition-all duration-500 ${
            modoOscuro ? 'scale-50 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
          }`}
        />
        {/* Luna con cráteres */}
        <span
          className={`absolute inset-0 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 shadow-[0_0_8px_2px_rgba(226,232,240,0.45)] transition-all duration-500 ${
            modoOscuro ? 'scale-100 rotate-0 opacity-100' : 'scale-50 rotate-90 opacity-0'
          }`}
        >
          <span className="absolute left-[3px] top-[4px] h-[5px] w-[5px] rounded-full bg-slate-400/60" />
          <span className="absolute bottom-[3px] right-[4px] h-[4px] w-[4px] rounded-full bg-slate-400/50" />
          <span className="absolute right-[3px] top-[3px] h-[2px] w-[2px] rounded-full bg-slate-400/60" />
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;