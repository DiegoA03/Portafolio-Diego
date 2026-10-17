import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useReducedMotion } from 'framer-motion';
import { Play, Pause, Music } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Datos de la canción. Los dos archivos van en la carpeta /public/musica/
const CANCION = {
  nombre: 'Por Si Mañana No Estoy',
  artista: 'Omar Courtz',
  audio: '/musica/psmne.mp3',
  portada: '/musica/psmne.png'
};

const RADIO_ANILLO = 72; // px: la mitad del contenedor (h-36 = 144px)

const ReproductorCancion = () => {
  const { t } = useLanguage();
  const audioRef = useRef(null);
  const [sonando, setSonando] = useState(false);
  const [portadaOk, setPortadaOk] = useState(true);
  const reducirMovimiento = useReducedMotion();
  const giro = useMotionValue(0);

  // El disco gira mientras suena y se queda quieto, en su ángulo, al pausar
  useEffect(() => {
    if (!sonando || reducirMovimiento) return undefined;
    const controles = animate(giro, giro.get() + 360, {
      duration: 8,
      ease: 'linear',
      repeat: Infinity
    });
    return () => controles.stop();
  }, [sonando, reducirMovimiento, giro]);

  // Si el usuario sale de la página, la música se detiene
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) audio.pause();
    };
  }, []);

  const alternar = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.warn('No se pudo reproducir la canción:', error);
      }
    } else {
      audio.pause();
    }
  };

  // Texto que da vueltas alrededor del círculo, letra por letra
  const base = `${t.sobreMi.escuchaAhora.toUpperCase()} • `;
  const letras = Array.from(base.repeat(Math.max(2, Math.round(30 / base.length))));

  return (
    <div className="pointer-events-none absolute bottom-3 right-3 h-36 w-36">
      <audio
        ref={audioRef}
        src={CANCION.audio}
        preload="none"
        onPlay={() => setSonando(true)}
        onPause={() => setSonando(false)}
        onEnded={() => setSonando(false)}
      />

      {/* Anillo de texto que gira */}
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
            {letra === ' ' ? '\u00A0' : letra}
          </span>
        ))}
      </motion.div>

      {/* Círculo con la portada */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-24 w-24">
          {sonando && <span className="absolute inset-0 animate-ping rounded-full ring-4 ring-white/40" />}

          <button
            type="button"
            onClick={alternar}
            aria-pressed={sonando}
            aria-label={`${sonando ? t.sobreMi.pausar : t.sobreMi.reproducir}: ${CANCION.nombre} - ${CANCION.artista}`}
            className="group pointer-events-auto relative h-full w-full overflow-hidden rounded-full shadow-2xl ring-2 ring-white/80 transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
          >
            {/* Portada: al pasar el cursor se difumina y se oscurece */}
            <span className="block h-full w-full overflow-hidden rounded-full transition-all duration-500 group-hover:scale-110 group-hover:blur-sm group-hover:brightness-50 group-focus-visible:blur-sm group-focus-visible:brightness-50">
              {portadaOk ? (
                <motion.img
                  src={CANCION.portada}
                  alt=""
                  style={{ rotate: giro }}
                  className="h-full w-full object-cover"
                  onError={() => setPortadaOk(false)}
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-violet-600 text-white">
                  <Music size={34} />
                </span>
              )}
            </span>

            {/* Nombre de la canción y del cantante */}
            <span className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-0.5 px-3 text-center text-white opacity-0 drop-shadow transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              {sonando ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
              <span className="text-[11px] font-bold leading-tight">{CANCION.nombre}</span>
              <span className="text-[9px] font-medium leading-tight text-white/80">{CANCION.artista}</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReproductorCancion;