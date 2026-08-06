import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moverCursor = (e) => {
      setPosicion({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    window.addEventListener('mousemove', moverCursor);
    return () => window.removeEventListener('mousemove', moverCursor);
  }, [visible]);

  return (
    <img
      src="/cursor-personalizado.png"
      alt=""
      className="fixed pointer-events-none z-[9999] transition-opacity duration-150"
      style={{
        left: `${posicion.x - 8}px`,
        top: `${posicion.y - 8}px`,
        width: '48px',
        height: '48px',
        opacity: visible ? 1 : 0,
        transform: 'rotate(-15deg)'
      }}
    />
  );
};

export default CustomCursor;