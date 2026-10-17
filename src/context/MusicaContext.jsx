import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

// Datos de la canción. Los dos archivos van en la carpeta /public/musica/
export const CANCION = {
  nombre: "Por Si Mañana No Estoy",
  artista: "Omar Courtz",
  audio: "/musica/psmne.mp3",
  portada: "/musica/psmne.png",
};

const MusicaContext = createContext(null);

// El <audio> vive aquí, por encima de las rutas, así que sigue sonando aunque cambies
// de sección. Se detiene solo cuando termina la canción o cuando se pulsa pausa.
export const MusicaProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [sonando, setSonando] = useState(false);

  const alternar = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.warn("No se pudo reproducir la canción:", error);
      }
    } else {
      audio.pause();
    }
  }, []);

  const valor = useMemo(() => ({ sonando, alternar }), [sonando, alternar]);

  return (
    <MusicaContext.Provider value={valor}>
      {children}
      <audio
        ref={audioRef}
        src={CANCION.audio}
        preload="none"
        onPlay={() => setSonando(true)}
        onPause={() => setSonando(false)}
        onEnded={() => setSonando(false)}
      />
    </MusicaContext.Provider>
  );
};

export const useMusica = () => {
  const contexto = useContext(MusicaContext);
  if (!contexto)
    throw new Error("useMusica debe usarse dentro de <MusicaProvider>");
  return contexto;
};
