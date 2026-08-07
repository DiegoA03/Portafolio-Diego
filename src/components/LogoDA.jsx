import React, { useEffect, useRef } from 'react';

const LogoDA = ({ size = 40, animated = false }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const scale = size / 40; // Referencia a 40px
    
    const width = 100 * scale;
    const height = 80 * scale;
    
    canvas.width = width;
    canvas.height = height;

    // Limpiar canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, width, height);

    const centerY = height / 2;

    // Función para dibujar la D
    const drawD = (xOffset, opacity = 1) => {
      ctx.save();
      ctx.globalAlpha = opacity;

      // Glow azul
      const gradient = ctx.createRadialGradient(
        xOffset + 12 * scale, centerY, 0,
        xOffset + 12 * scale, centerY, 25 * scale
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(xOffset + 12 * scale, centerY, 25 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Línea vertical de D
      ctx.strokeStyle = `rgba(59, 130, 246, ${1 * opacity})`;
      ctx.lineWidth = 4 * scale;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(xOffset + 4 * scale, centerY - 20 * scale);
      ctx.lineTo(xOffset + 4 * scale, centerY + 20 * scale);
      ctx.stroke();

      // Curva de D
      ctx.beginPath();
      ctx.arc(xOffset + 16 * scale, centerY, 20 * scale, -Math.PI / 2, Math.PI / 2);
      ctx.stroke();

      ctx.restore();
    };

    // Función para dibujar la A
    const drawA = (xOffset, opacity = 1) => {
      ctx.save();
      ctx.globalAlpha = opacity;

      // Glow púrpura
      const gradient = ctx.createRadialGradient(
        xOffset + 12 * scale, centerY, 0,
        xOffset + 12 * scale, centerY, 25 * scale
      );
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.4)');
      gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(xOffset + 12 * scale, centerY, 25 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Lado izquierdo de A
      ctx.strokeStyle = `rgba(168, 85, 247, ${1 * opacity})`;
      ctx.lineWidth = 4 * scale;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(xOffset + 4 * scale, centerY + 20 * scale);
      ctx.lineTo(xOffset + 12 * scale, centerY - 20 * scale);
      ctx.stroke();

      // Lado derecho de A
      ctx.beginPath();
      ctx.moveTo(xOffset + 20 * scale, centerY + 20 * scale);
      ctx.lineTo(xOffset + 12 * scale, centerY - 20 * scale);
      ctx.stroke();

      // Barra horizontal de A
      ctx.beginPath();
      ctx.moveTo(xOffset + 6 * scale, centerY);
      ctx.lineTo(xOffset + 18 * scale, centerY);
      ctx.stroke();

      ctx.restore();
    };

    if (animated) {
      // Animación de partículas (para uso futuro)
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const dOpacity = Math.min(1, (elapsed / 400));
        const aOpacity = Math.max(0, Math.min(1, (elapsed - 600) / 400));

        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.fillRect(0, 0, width, height);

        drawD(8 * scale, dOpacity);
        drawA(50 * scale, aOpacity);

        if (elapsed < 2000) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    } else {
      // Dibujo estático
      drawD(8 * scale, 1);
      drawA(50 * scale, 1);
    }
  }, [size, animated]);

  return (
    <canvas
      ref={canvasRef}
      className="drop-shadow-lg"
      style={{
        width: size,
        height: size * 0.8,
        imageRendering: 'crisp-edges',
      }}
    />
  );
};

export default LogoDA;
