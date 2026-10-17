import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Tiempos de la animación (en segundos)
const PAUSA_INICIAL = 0.2; // antes de que aparezca la primera palabra
const ENTRE_LETRAS = 0.06; // aparición de la primera palabra
const PAUSA_ENTRE_FASES = 0.5; // respiro entre "Diego" y el efecto dominó
const ENTRE_FICHAS = 0.075; // cada letra cae sobre la siguiente con este retraso

// Primero aparece la primera palabra y luego el resto del nombre "se levanta"
// letra por letra, como una cadena de fichas de dominó. Al pasar el cursor
// por encima, la animación se repite cuando ya terminó.
const NombreDomino = ({ nombre }) => {
  const reducirMovimiento = useReducedMotion();
  const [ronda, setRonda] = useState(0);
  const [listo, setListo] = useState(false);

  if (reducirMovimiento) return <>{nombre}</>;

  const palabras = nombre.trim().split(' ');
  const totalFichas = palabras.slice(1).join('').length;
  const inicioDomino = PAUSA_INICIAL + palabras[0].length * ENTRE_LETRAS + 0.4 + PAUSA_ENTRE_FASES;

  const repetir = () => {
    if (!listo) return;
    setListo(false);
    setRonda((r) => r + 1);
  };

  let ficha = 0;

  return (
    <span key={ronda} onMouseEnter={repetir}>
      <span className="sr-only">{nombre}</span>

      {palabras.map((palabra, w) => (
        <React.Fragment key={w}>
          {w > 0 && ' '}
          <span className="inline-block whitespace-nowrap" aria-hidden="true">
            {Array.from(palabra).map((letra, i) => {
              // Primera palabra: aparece letra por letra, subiendo suavemente
              if (w === 0) {
                return (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: PAUSA_INICIAL + i * ENTRE_LETRAS, duration: 0.4, ease: 'easeOut' }}
                  >
                    {letra}
                  </motion.span>
                );
              }

              // Resto del nombre: cada letra gira desde su esquina inferior izquierda
              // hasta quedar de pie, con un pequeño rebote
              const numero = ficha++;
              const retraso = inicioDomino + numero * ENTRE_FICHAS;

              return (
                <motion.span
                  key={i}
                  className="inline-block"
                  style={{ transformOrigin: '0% 100%' }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: [-90, 9, -3, 0] }}
                  transition={{
                    delay: retraso,
                    duration: 0.55,
                    times: [0, 0.55, 0.8, 1],
                    ease: 'easeOut',
                    opacity: { delay: retraso, duration: 0.12 }
                  }}
                  onAnimationComplete={numero === totalFichas - 1 ? () => setListo(true) : undefined}
                >
                  {letra}
                </motion.span>
              );
            })}
          </span>
        </React.Fragment>
      ))}
    </span>
  );
};

export default NombreDomino;