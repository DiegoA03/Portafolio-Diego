import React, { useEffect } from 'react';
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useMusica } from '../context/MusicaContext';
import PortadaCancion from './PortadaCancion';

const RADIO_ANILLO = 72; // px: la mitad del contenedor (h-36 = 144px)

const ReproductorCancion = () => {
  const { t } = useLanguage();
  const { cancion, sonando, ventana, abrir, alternar } = useMusica();
  const reducirMovimiento = useReducedMotion();
  const giro = useMotionValue(0);

  // El disco gira mientras suena y se queda quieto, en su ángulo, al pausar
  useEffect(() => {
    if (!sonando || reducirMovimiento) return undefined;
    const controles = animate(giro, giro.get() + 360, { duration: 8, ease: 'linear', repeat: Infinity });
    return () => controles.stop();
  }, [sonando, reducirMovimiento, giro]);

  // Si la ventana está oculta, el círculo la abre y empieza a sonar; si no, solo play/pausa
  const alPulsar = () => (ventana === 'oculta' ? abrir() : alternar());

  const base = `${t.sobreMi.escuchaAhora.toUpperCase()} • `;
  const letras = Array.from(base.repeat(Math.max(2, Math.round(30 / base.length))));

  return (
    <div className="pointer-events-none absolute bottom-3 right-3 h-36 w-36">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        animate={reducirMovimiento ? undefined : { rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      >
        {letras.map((letra, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-0 text-[11px] font-bold leading-none text-white"
            style={{
              height: RADIO_ANILLO,
              transformOrigin: `0 ${RADIO_ANILLO}px`,
              transform: `rotate(${(i * 360) / letras.length}deg)`,
              textShadow: '0 1px 3px rgba(0,0,0,0.75)'
            }}
          >
            {letra === ' ' ? ' ' : letra}
          </span>
        ))}
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-24 w-24">
          {sonando && <span className="absolute inset-0 animate-ping rounded-full ring-4 ring-white/40" />}

          <button
            type="button"
            onClick={alPulsar}
            aria-pressed={sonando}
            aria-label={`${sonando ? t.musica.pausar : t.musica.reproducir}: ${cancion.nombre} - ${cancion.artista}`}
            className="group pointer-events-auto relative h-full w-full overflow-hidden rounded-full shadow-2xl ring-2 ring-white/80 transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
          >
            <span className="block h-full w-full overflow-hidden rounded-full transition-all duration-500 group-hover:scale-110 group-hover:blur-sm group-hover:brightness-50 group-focus-visible:blur-sm group-focus-visible:brightness-50">
              <AnimatePresence initial={false}>
                <motion.span
                  key={cancion.portada}
                  className="absolute inset-0 block"
                  style={{ rotate: giro }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <PortadaCancion key={cancion.portada} src={cancion.portada} className="h-full w-full" />
                </motion.span>
              </AnimatePresence>
            </span>

            <span className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-0.5 px-3 text-center text-white opacity-0 drop-shadow transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              {sonando ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
              <span className="line-clamp-2 text-[11px] font-bold leading-tight">{cancion.nombre}</span>
              <span className="line-clamp-1 text-[9px] font-medium leading-tight text-white/80">{cancion.artista}</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReproductorCancion;