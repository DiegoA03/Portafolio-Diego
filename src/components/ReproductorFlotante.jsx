import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronUp, ListMusic, Minus, Pause, Play, SkipBack, SkipForward, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useMusica } from '../context/MusicaContext';
import PortadaCancion from './PortadaCancion';

// Cielo estrellado para el modo oscuro (mismo universo que el Home)
const estrellas = {
  backgroundImage: [
    'radial-gradient(1.4px 1.4px at 14% 20%, rgba(255,255,255,0.9) 96%, transparent)',
    'radial-gradient(1px 1px at 38% 74%, rgba(255,255,255,0.7) 96%, transparent)',
    'radial-gradient(1.6px 1.6px at 62% 28%, rgba(245,230,200,0.9) 96%, transparent)',
    'radial-gradient(1px 1px at 80% 80%, rgba(201,184,255,0.8) 96%, transparent)',
    'radial-gradient(1.3px 1.3px at 92% 16%, rgba(255,255,255,0.8) 96%, transparent)',
    'radial-gradient(1px 1px at 24% 90%, rgba(255,255,255,0.6) 96%, transparent)'
  ].join(', ')
};

const formatearTiempo = (segundos) => {
  if (!Number.isFinite(segundos) || segundos < 0) return '0:00';
  const m = Math.floor(segundos / 60);
  const s = Math.floor(segundos % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
};

const claseBotonIcono =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-900/5 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white';

const claseBotonPlay =
  'flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 text-white shadow-lg shadow-violet-500/30 transition hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300';

// Barras que se mueven cuando el tema está sonando
const Ecualizador = ({ activo }) => {
  const reducirMovimiento = useReducedMotion();
  return (
    <span className="flex h-4 items-end gap-[2px]" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-[3px] origin-bottom rounded-full bg-gradient-to-t from-blue-500 to-pink-500"
          style={{ height: '100%', scaleY: 0.35 }}
          animate={activo && !reducirMovimiento ? { scaleY: [0.3, 1, 0.5, 0.9, 0.3] } : { scaleY: 0.35 }}
          transition={activo ? { duration: 0.9 + i * 0.15, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.2 }}
        />
      ))}
    </span>
  );
};

const ReproductorFlotante = () => {
  const { t } = useLanguage();
  const m = t.musica;
  const {
    canciones,
    indice,
    cancion,
    sonando,
    ventana,
    audioRef,
    alternar,
    siguiente,
    anterior,
    irA,
    cerrar,
    minimizar,
    expandir
  } = useMusica();

  const [progreso, setProgreso] = useState(0);
  const [duracion, setDuracion] = useState(0);
  // La lista empieza abierta en pantallas anchas y cerrada en móvil
  const [listaAbierta, setListaAbierta] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= 640
  );

  // El progreso se lee directamente del audio (así no se re-dibuja toda la página)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const actualizar = () => {
      setProgreso(audio.currentTime || 0);
      setDuracion(Number.isFinite(audio.duration) ? audio.duration : 0);
    };
    const reiniciar = () => {
      setProgreso(0);
      setDuracion(0);
    };

    actualizar();
    audio.addEventListener('timeupdate', actualizar);
    audio.addEventListener('loadedmetadata', actualizar);
    audio.addEventListener('durationchange', actualizar);
    audio.addEventListener('emptied', reiniciar);
    return () => {
      audio.removeEventListener('timeupdate', actualizar);
      audio.removeEventListener('loadedmetadata', actualizar);
      audio.removeEventListener('durationchange', actualizar);
      audio.removeEventListener('emptied', reiniciar);
    };
  }, [audioRef, cancion]);

  const buscar = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const valor = Number(e.target.value);
    audio.currentTime = valor;
    setProgreso(valor);
  };

  if (!cancion) return null;

  const porcentaje = duracion > 0 ? Math.min(100, (progreso / duracion) * 100) : 0;
  const etiquetaPlay = sonando ? m.pausar : m.reproducir;

  return (
    <AnimatePresence mode="wait">
      {ventana === 'completa' && (
        <motion.aside
          key="completa"
          role="region"
          aria-label={m.titulo}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 z-[60] w-[calc(100vw-7rem)] max-w-[22rem] overflow-hidden rounded-3xl border border-slate-900/10 bg-gradient-to-br from-white/90 via-blue-50/90 to-violet-100/90 p-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:from-slate-950/90 dark:via-slate-900/90 dark:to-indigo-950/90"
        >
          {/* Fondo: nebulosa y estrellas */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <span className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-400/30 blur-3xl dark:bg-violet-500/30" />
            <span className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-blue-400/25 blur-3xl dark:bg-blue-500/25" />
            <span className="absolute -bottom-10 right-4 h-28 w-28 rounded-full bg-pink-400/20 blur-3xl dark:bg-pink-500/20" />
            <span className="absolute inset-0 hidden opacity-70 dark:block" style={estrellas} />
          </div>

          <div className="relative">
            {/* Cabecera: portada redonda, nombre, artista y botones de ventana */}
            <div className="flex items-start gap-3">
              <span
                className="shrink-0 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 p-[2px] shadow-lg"
                aria-hidden="true"
              >
                <span
                  className="block h-14 w-14 overflow-hidden rounded-full motion-safe:animate-spin"
                  style={{ animationDuration: '10s', animationPlayState: sonando ? 'running' : 'paused' }}
                >
                  <PortadaCancion key={cancion.portada} src={cancion.portada} className="h-full w-full" />
                </span>
              </span>

              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">
                  {m.titulo} · {indice + 1}/{canciones.length}
                </p>
                <p className="mt-0.5 truncate font-display text-xl font-semibold leading-tight text-slate-900 dark:text-white">
                  {cancion.nombre}
                </p>
                <p className="truncate text-sm text-slate-600 dark:text-slate-300">{cancion.artista}</p>
              </div>

              <div className="-mr-1 -mt-1 flex shrink-0 items-center">
                <button type="button" onClick={minimizar} aria-label={m.minimizar} title={m.minimizar} className={claseBotonIcono}>
                  <Minus size={18} />
                </button>
                <button type="button" onClick={cerrar} aria-label={m.cerrar} title={m.cerrar} className={claseBotonIcono}>
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Barra de progreso */}
            <div className="mt-4">
              <input
                type="range"
                min={0}
                max={duracion || 0}
                step="any"
                value={Math.min(progreso, duracion || 0)}
                onChange={buscar}
                disabled={!duracion}
                aria-label={m.progreso}
                className="h-1 w-full cursor-pointer appearance-none rounded-full bg-slate-900/10 disabled:cursor-default dark:bg-white/15 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-violet-500"
                style={{
                  backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
                  backgroundSize: `${porcentaje}% 100%`,
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <div className="mt-1.5 flex justify-between text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
                <span>{formatearTiempo(progreso)}</span>
                <span>{formatearTiempo(duracion)}</span>
              </div>
            </div>

            {/* Controles */}
            <div className="mt-2 flex items-center justify-between">
              <span className="h-9 w-9" aria-hidden="true" />

              <div className="flex items-center gap-3">
                <button type="button" onClick={anterior} aria-label={m.anterior} title={m.anterior} className={claseBotonIcono}>
                  <SkipBack size={22} fill="currentColor" />
                </button>
                <button
                  type="button"
                  onClick={alternar}
                  aria-label={etiquetaPlay}
                  title={etiquetaPlay}
                  className={`${claseBotonPlay} h-12 w-12`}
                >
                  {sonando ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-0.5" />}
                </button>
                <button type="button" onClick={siguiente} aria-label={m.siguiente} title={m.siguiente} className={claseBotonIcono}>
                  <SkipForward size={22} fill="currentColor" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setListaAbierta((v) => !v)}
                aria-label={m.lista}
                title={m.lista}
                aria-expanded={listaAbierta}
                className={`${claseBotonIcono} ${listaAbierta ? 'bg-violet-500/15 !text-violet-600 dark:!text-violet-300' : ''}`}
              >
                <ListMusic size={19} />
              </button>
            </div>

            {/* Lista de canciones */}
            <AnimatePresence initial={false}>
              {listaAbierta && (
                <motion.ul
                  key="lista"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="mt-3 max-h-56 space-y-1 overflow-y-auto overscroll-contain border-t border-slate-900/10 pt-3 pr-1 dark:border-white/10"
                >
                  {canciones.map((tema, i) => {
                    const activa = i === indice;
                    return (
                      <li key={tema.audio}>
                        <button
                          type="button"
                          onClick={() => irA(i)}
                          aria-current={activa ? 'true' : undefined}
                          className={`group flex w-full items-center gap-3 rounded-2xl px-2 py-1.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                            activa
                              ? 'bg-violet-500/15 dark:bg-violet-400/15'
                              : 'hover:bg-slate-900/5 dark:hover:bg-white/10'
                          }`}
                        >
                          <span className="flex w-4 shrink-0 justify-center text-xs tabular-nums text-slate-500 dark:text-slate-400">
                            {activa ? <Ecualizador activo={sonando} /> : i + 1}
                          </span>
                          <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-900/10 dark:ring-white/15">
                            <PortadaCancion key={tema.portada} src={tema.portada} className="h-full w-full" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span
                              className={`block truncate text-sm font-semibold ${
                                activa ? 'text-violet-700 dark:text-violet-300' : 'text-slate-800 dark:text-slate-100'
                              }`}
                            >
                              {tema.nombre}
                            </span>
                            <span className="block truncate text-xs text-slate-500 dark:text-slate-400">{tema.artista}</span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </motion.aside>
      )}

      {ventana === 'minimizada' && (
        <motion.div
          key="minimizada"
          role="region"
          aria-label={m.titulo}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 z-[60] flex items-center gap-1 overflow-hidden rounded-full border border-slate-900/10 bg-gradient-to-r from-white/90 via-blue-50/90 to-violet-100/90 p-1.5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:from-slate-950/90 dark:via-slate-900/90 dark:to-indigo-950/90"
        >
          <button type="button" onClick={anterior} aria-label={m.anterior} title={m.anterior} className={claseBotonIcono}>
            <SkipBack size={19} fill="currentColor" />
          </button>
          <button
            type="button"
            onClick={alternar}
            aria-label={etiquetaPlay}
            title={etiquetaPlay}
            className={`${claseBotonPlay} h-10 w-10`}
          >
            {sonando ? <Pause size={19} fill="currentColor" /> : <Play size={19} fill="currentColor" className="ml-0.5" />}
          </button>
          <button type="button" onClick={siguiente} aria-label={m.siguiente} title={m.siguiente} className={claseBotonIcono}>
            <SkipForward size={19} fill="currentColor" />
          </button>
          <span className="mx-0.5 h-5 w-px bg-slate-900/10 dark:bg-white/15" aria-hidden="true" />
          <button type="button" onClick={expandir} aria-label={m.expandir} title={m.expandir} className={claseBotonIcono}>
            <ChevronUp size={19} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReproductorFlotante;