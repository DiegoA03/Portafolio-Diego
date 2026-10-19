import React, { useState } from 'react';
import { Music } from 'lucide-react';

// Portada de un tema. Si la imagen no existe o falla, muestra un círculo con degradado.
// Úsala con key={src} para que el aviso de error se reinicie al cambiar de tema.
const PortadaCancion = ({ src, className = '' }) => {
  const [fallo, setFallo] = useState(false);

  if (!src || fallo) {
    return (
      <span
        className={`flex items-center justify-center bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 text-white ${className}`}
      >
        <Music className="h-1/2 w-1/2" />
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      draggable="false"
      className={`object-cover ${className}`}
      onError={() => setFallo(true)}
    />
  );
};

export default PortadaCancion;