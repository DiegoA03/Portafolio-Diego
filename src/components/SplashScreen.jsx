import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Se desvanece después de 5.5s
    const timer = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Canvas con Vía Láctea
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId;
    const galaxyStars = [];
    const nebulas = [];

    // Crear estrellas de la Vía Láctea
    for (let i = 0; i < 500; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * Math.max(canvas.width, canvas.height);
      const brightness = Math.random();
      
      galaxyStars.push({
        x: canvas.width / 2 + Math.cos(angle) * distance * (0.3 + brightness * 0.7),
        y: canvas.height / 2 + Math.sin(angle) * distance * (0.2 + brightness * 0.5),
        size: brightness * 2,
        brightness: brightness,
        twinkle: Math.random(),
        speed: Math.random() * 0.5 + 0.1
      });
    }

    // Crear nebulosas con degradados
    for (let i = 0; i < 5; i++) {
      nebulas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 300 + 200,
        color: ['blue', 'purple', 'pink', 'cyan'][Math.floor(Math.random() * 4)],
        opacity: Math.random() * 0.15 + 0.05,
        speed: Math.random() * 0.3 + 0.1
      });
    }

    const drawGalaxy = (time) => {
      // Fondo negro profundo
      ctx.fillStyle = '#000814';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dibujar nebulosas
      nebulas.forEach(nebula => {
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.size);
        const colorMap = {
          blue: ['rgba(59, 130, 246, 0)', 'rgba(59, 130, 246, 0.15)', 'rgba(59, 130, 246, 0)'],
          purple: ['rgba(168, 85, 247, 0)', 'rgba(168, 85, 247, 0.15)', 'rgba(168, 85, 247, 0)'],
          pink: ['rgba(236, 72, 153, 0)', 'rgba(236, 72, 153, 0.15)', 'rgba(236, 72, 153, 0)'],
          cyan: ['rgba(34, 211, 238, 0)', 'rgba(34, 211, 238, 0.15)', 'rgba(34, 211, 238, 0)']
        };
        
        const colors = colorMap[nebula.color];
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(0.5, colors[1]);
        gradient.addColorStop(1, colors[2]);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(nebula.x - nebula.size, nebula.y - nebula.size, nebula.size * 2, nebula.size * 2);
      });

      // Dibujar estrellas con parpadeo
      galaxyStars.forEach((star, idx) => {
        const twinkleAmount = Math.sin(time * 0.001 + star.twinkle) * 0.5 + 0.5;
        const finalBrightness = star.brightness * twinkleAmount;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${finalBrightness})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow sutil en estrellas brillantes
        if (finalBrightness > 0.6) {
          ctx.fillStyle = `rgba(255, 255, 255, ${finalBrightness * 0.3})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const animate = (time = 0) => {
      drawGalaxy(time);
      animationId = requestAnimationFrame(() => animate(time + 16));
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Canvas de Vía Láctea */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ background: '#000814' }}
      />

      {/* Efecto de profundidad - Vignette radial */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0, 8, 20, 0.7) 100%)',
        }}
      />

      {/* Efecto de luz central */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        }}
      />

      {/* Orbes cósmicos de fondo */}
      <motion.div
        className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ left: '10%', top: '20%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ right: '5%', bottom: '15%' }}
      />

      {/* Container del logo con círculo espacial */}
      <motion.div
        className="relative z-30 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Círculo exterior decorativo con gradiente animado */}
        <motion.div
          className="absolute rounded-full border-2"
          animate={{
            rotate: 360,
            boxShadow: [
              '0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(168, 85, 247, 0.2)',
              '0 0 50px rgba(59, 130, 246, 0.5), inset 0 0 30px rgba(168, 85, 247, 0.3)',
              '0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(168, 85, 247, 0.2)',
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{
            width: '450px',
            height: '450px',
            borderColor: 'rgba(59, 130, 246, 0.5)',
          }}
        />

        {/* Círculo interior decorativo */}
        <motion.div
          className="absolute rounded-full border"
          animate={{
            rotate: -360,
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          style={{
            width: '380px',
            height: '380px',
            borderColor: 'rgba(168, 85, 247, 0.4)',
          }}
        />

        {/* Puntos decorativos en el círculo */}
        <motion.div
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ top: '-220px', left: 'calc(50% - 4px)' }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ bottom: '-220px', right: 'calc(50% - 4px)' }}
        />

        {/* Logo imagen con animación blur */}
        <motion.img
          src="/DA-logo.png"
          alt="DA Logo"
          initial={{ filter: 'blur(30px)', opacity: 0 }}
          animate={{
            filter: 'blur(0px)',
            opacity: 1,
          }}
          transition={{
            duration: 2.5,
            ease: 'easeOut',
          }}
          className="w-[420px] h-[420px] object-contain drop-shadow-2xl relative z-10"
        />
      </motion.div>

      {/* Fade out al final */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-40 bg-black"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0, 0, 0.3, 1],
        }}
        transition={{
          times: [0, 0.5, 0.65, 0.85, 1],
          duration: 5.5,
          ease: 'easeIn'
        }}
      />
    </motion.div>
  );
};

export default SplashScreen;
