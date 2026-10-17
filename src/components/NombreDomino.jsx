import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Tiempo (ms) que dura cada fase antes de pasar a la siguiente
const FASES = {
  solo: { espera: 2200, siguiente: "completo" }, // se ve únicamente "Diego"
  completo: { espera: 3400, siguiente: "fuera" }, // se ve "Diego Álvarez" + manita
  fuera: { espera: 1400, siguiente: "solo" }, // giran todos y salen; luego vuelve "Diego"
};

// Giro de cada letra (en segundos)
const DURACION_GIRO = 0.55;
const ENTRE_LETRAS = 0.07;

const ENTRA = { rotateY: [-90, 0], opacity: [0, 1] };
const SALE = { rotateY: [0, 90], opacity: [1, 0] };
const VISIBLE = { rotateY: 0, opacity: 1 };
const OCULTO = { rotateY: -90, opacity: 0 };

// Bucle infinito:
//  1. "Diego" entra girando
//  2. "Álvarez" y la manita (prop `extra`) entran girando
//  3. Todo gira y sale
//  4. Vuelve a entrar solo "Diego" ... y se repite
// El espacio del apellido y de la manita queda reservado para que el título no salte.
const NombreDomino = ({ nombre, extra = null }) => {
  const reducirMovimiento = useReducedMotion();
  const [fase, setFase] = useState("solo");

  useEffect(() => {
    if (reducirMovimiento) return undefined;
    const { espera, siguiente } = FASES[fase];
    const id = setTimeout(() => setFase(siguiente), espera);
    return () => clearTimeout(id);
  }, [fase, reducirMovimiento]);

  if (reducirMovimiento)
    return (
      <>
        {nombre}
        {extra && <> {extra}</>}
      </>
    );

  const [primera, ...resto] = nombre.trim().split(" ");
  const apellido = resto.join(" ");
  const largoPrimera = Array.from(primera).length;
  const largoApellido = Array.from(apellido).length;

  const animacionPrimera =
    fase === "solo" ? ENTRA : fase === "completo" ? VISIBLE : SALE;
  const animacionApellido =
    fase === "completo" ? ENTRA : fase === "fuera" ? SALE : OCULTO;

  // Animación de una pieza del apellido (cada letra y también el "extra", p. ej. la manita)
  const piezaApellido = (contenido, i, clave) => (
    <motion.span
      key={clave}
      className="inline-block"
      style={{ transformPerspective: 500 }}
      initial={OCULTO}
      animate={animacionApellido}
      transition={{
        // Al salir, el giro continúa de corrido desde "Diego" hasta el final
        delay: (fase === "fuera" ? largoPrimera + i : i) * ENTRE_LETRAS,
        duration: fase === "solo" ? 0 : DURACION_GIRO,
        ease: "easeInOut",
      }}
    >
      {contenido}
    </motion.span>
  );

  return (
    <span>
      <span className="sr-only">{nombre}</span>
      <span className="inline-block whitespace-nowrap" aria-hidden="true">
        {Array.from(primera).map((letra, i) => (
          <motion.span
            key={i}
            className="inline-block"
            style={{ transformPerspective: 500 }}
            initial={OCULTO}
            animate={animacionPrimera}
            transition={{
              delay: (fase === "solo" ? 0.1 : 0) + i * ENTRE_LETRAS,
              duration: DURACION_GIRO,
              ease: "easeInOut",
            }}
          >
            {letra}
          </motion.span>
        ))}
      </span>{" "}
      <span className="inline-block whitespace-nowrap" aria-hidden="true">
        {Array.from(apellido).map((letra, i) => piezaApellido(letra, i, i))}
        {extra && <> {piezaApellido(extra, largoApellido, "extra")}</>}
      </span>
    </span>
  );
};

export default NombreDomino;
