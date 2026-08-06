import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  const [posicionAnillo, setPosicionAnillo] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [sobreEnlace, setSobreEnlace] = useState(false);

  useEffect(() => {
    const moverCursor = (e) => {
      setPosicion({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const elemento = document.elementFromPoint(e.clientX, e.clientY);
      const esInteractivo = elemento?.closest('a, button, [role="button"]');
      setSobreEnlace(!!esInteractivo);
    };

    window.addEventListener('mousemove', moverCursor);
    return () => window.removeEventListener('mousemove', moverCursor);
  }, [visible]);

  // El anillo sigue con un pequeño retraso (efecto suave)
  useEffect(() => {
    const anim = requestAnimationFrame(() => {
      setPosicionAnillo((prev) => ({
        x: prev.x + (posicion.x - prev.x) * 0.15,
        y: prev.y + (posicion.y - prev.y) * 0.15
      }));
    });
    return () => cancelAnimationFrame(anim);
  }, [posicion]);

  if (!visible) return null;

  return (
    <>
      {/* Punto central */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-blue-500 transition-transform duration-150"
        style={{
          left: `${posicion.x}px`,
          top: `${posicion.y}px`,
          width: '8px',
          height: '8px',
          transform: `translate(-50%, -50%) scale(${sobreEnlace ? 0 : 1})`
        }}
      />
      {/* Anillo exterior */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full border-2 border-blue-500 transition-all duration-150"
        style={{
          left: `${posicionAnillo.x}px`,
          top: `${posicionAnillo.y}px`,
          width: sobreEnlace ? '48px' : '28px',
          height: sobreEnlace ? '48px' : '28px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: sobreEnlace ? 'rgba(59, 130, 246, 0.15)' : 'transparent'
        }}
      />
    </>
  );
};

export default CustomCursor;