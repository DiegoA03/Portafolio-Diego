import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { CANCIONES } from '../data/canciones';

const MusicaContext = createContext(null);

// El <audio> vive aquí, por encima de las rutas, así que sigue sonando aunque cambies
// de sección. Los temas suenan en orden: al terminar uno empieza el siguiente, y al
// terminar el último la música se detiene.
export const MusicaProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [indice, setIndice] = useState(0);
  const [sonando, setSonando] = useState(false);
  // 'oculta' (no se muestra), 'completa' o 'minimizada'
  const [ventana, setVentana] = useState('oculta');

  const total = CANCIONES.length;
  const cancion = CANCIONES[indice];

  // Referencias para que las funciones no queden con valores viejos
  const indiceRef = useRef(0);
  const quiereSonar = useRef(false); // el usuario quiere que suene (también al cambiar de tema)
  const erroresSeguidos = useRef(0);

  useEffect(() => {
    indiceRef.current = indice;
  }, [indice]);

  // Cuando cambia el tema y el usuario quería música, se reproduce el nuevo
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !quiereSonar.current) return;
    audio.play().catch(() => setSonando(false));
  }, [indice]);

  const reproducir = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    quiereSonar.current = true;
    try {
      await audio.play();
    } catch (error) {
      console.warn('No se pudo reproducir la canción:', error);
      setSonando(false);
    }
  }, []);

  const pausar = useCallback(() => {
    quiereSonar.current = false;
    audioRef.current?.pause();
  }, []);

  const alternar = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) reproducir();
    else pausar();
  }, [reproducir, pausar]);

  // Ir a un tema concreto (da la vuelta en los extremos) y reproducirlo
  const irA = useCallback(
    (destino) => {
      const audio = audioRef.current;
      if (!audio || total === 0) return;
      const nuevo = ((destino % total) + total) % total;
      quiereSonar.current = true;
      if (nuevo === indiceRef.current) {
        audio.currentTime = 0;
        audio.play().catch(() => setSonando(false));
      } else {
        setIndice(nuevo);
      }
    },
    [total]
  );

  const siguiente = useCallback(() => {
    erroresSeguidos.current = 0;
    irA(indiceRef.current + 1);
  }, [irA]);

  // Si el tema lleva más de 3 s, "anterior" lo reinicia; si no, va al tema previo
  const anterior = useCallback(() => {
    const audio = audioRef.current;
    erroresSeguidos.current = 0;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      quiereSonar.current = true;
      audio.play().catch(() => setSonando(false));
    } else {
      irA(indiceRef.current - 1);
    }
  }, [irA]);

  const alTerminar = useCallback(() => {
    erroresSeguidos.current = 0;
    if (indiceRef.current < total - 1) {
      irA(indiceRef.current + 1);
    } else {
      // Terminó el último tema: se detiene y vuelve al primero, listo para empezar
      quiereSonar.current = false;
      setSonando(false);
      setIndice(0);
    }
  }, [irA, total]);

  // Si un archivo no carga, se salta al siguiente (sin entrar en bucle si fallan todos)
  const alFallar = useCallback(() => {
    if (!quiereSonar.current) return;
    erroresSeguidos.current += 1;
    if (erroresSeguidos.current >= total) {
      erroresSeguidos.current = 0;
      pausar();
      return;
    }
    irA(indiceRef.current + 1);
  }, [irA, pausar, total]);

  const abrir = useCallback(() => {
    setVentana('completa');
    reproducir();
  }, [reproducir]);

  const cerrar = useCallback(() => {
    pausar();
    setVentana('oculta');
  }, [pausar]);

  const minimizar = useCallback(() => setVentana('minimizada'), []);
  const expandir = useCallback(() => setVentana('completa'), []);

  // Controles en la pantalla de bloqueo y en las teclas multimedia
  useEffect(() => {
    if (!('mediaSession' in navigator) || !cancion) return undefined;

    if (typeof MediaMetadata !== 'undefined') {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: cancion.nombre,
        artist: cancion.artista,
        artwork: cancion.portada ? [{ src: cancion.portada }] : []
      });
    }
    navigator.mediaSession.playbackState = sonando ? 'playing' : 'paused';

    const acciones = {
      play: reproducir,
      pause: pausar,
      previoustrack: anterior,
      nexttrack: siguiente
    };
    Object.entries(acciones).forEach(([accion, funcion]) => {
      try {
        navigator.mediaSession.setActionHandler(accion, funcion);
      } catch {
        // Algunos navegadores no admiten todas las acciones
      }
    });

    return () => {
      Object.keys(acciones).forEach((accion) => {
        try {
          navigator.mediaSession.setActionHandler(accion, null);
        } catch {
          // nada que limpiar
        }
      });
    };
  }, [cancion, sonando, reproducir, pausar, anterior, siguiente]);

  const valor = useMemo(
    () => ({
      canciones: CANCIONES,
      indice,
      cancion,
      sonando,
      ventana,
      audioRef,
      alternar,
      siguiente,
      anterior,
      irA,
      abrir,
      cerrar,
      minimizar,
      expandir
    }),
    [indice, cancion, sonando, ventana, alternar, siguiente, anterior, irA, abrir, cerrar, minimizar, expandir]
  );

  return (
    <MusicaContext.Provider value={valor}>
      {children}
      {cancion && (
        <audio
          ref={audioRef}
          src={cancion.audio}
          preload="none"
          onPlay={() => setSonando(true)}
          onPause={() => setSonando(false)}
          onEnded={alTerminar}
          onError={alFallar}
        />
      )}
    </MusicaContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMusica = () => {
  const contexto = useContext(MusicaContext);
  if (!contexto) throw new Error('useMusica debe usarse dentro de <MusicaProvider>');
  return contexto;
};