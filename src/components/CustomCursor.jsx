import React, { useState, useEffect } from 'react';

const esDispositivoTactil = () => {
  return (
    typeof window !== 'undefined' &&
    (window.matchMedia('(hover: none)').matches || 'ontouchstart' in window)
  );
};

const CustomCursor = () => {
  const [posicion, setPosicion] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [sobreEnlace, setSobreEnlace] = useState(false);
  const [esTactil, setEsTactil] = useState(false);

  useEffect(() => {
    setEsTactil(esDispositivoTactil());
  }, []);

  useEffect(() => {
    if (esTactil) return;

    const moverCursor = (e) => {
      setPosicion({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const elemento = document.elementFromPoint(e.clientX, e.clientY);
      const esInteractivo = elemento?.closest('a, button, [role="button"]');
      setSobreEnlace(!!esInteractivo);
    };

    window.addEventListener('mousemove', moverCursor);
    return () => window.removeEventListener('mousemove', moverCursor);
  }, [visible, esTactil]);

  if (esTactil || !visible) return null;

  const tamañoAnillo = sobreEnlace ? 44 : 24;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${posicion.x}px`,
        top: `${posicion.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div
        className="absolute rounded-full border-2 border-blue-500 transition-[width,height,background-color] duration-150 ease-out"
        style={{
          left: '50%',
          top: '50%',
          width: `${tamañoAnillo}px`,
          height: `${tamañoAnillo}px`,
          transform: 'translate(-50%, -50%)',
          backgroundColor: sobreEnlace ? 'rgba(59, 130, 246, 0.15)' : 'transparent'
        }}
      />
      <div
        className="absolute rounded-full bg-blue-500 transition-transform duration-150"
        style={{
          left: '50%',
          top: '50%',
          width: '8px',
          height: '8px',
          transform: `translate(-50%, -50%) scale(${sobreEnlace ? 0 : 1})`
        }}
      />
    </div>
  );
};

export default CustomCursor;