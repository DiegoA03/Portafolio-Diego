import React from "react";
import { motion } from "framer-motion";

// Duración total (s). La página cambia justo cuando el panel la tapa por completo.
const DURACION = 2;
const TIEMPOS = [0, 0.42, 0.58, 1];

// Cielo estrellado estático para el panel (mismo universo que el Home)
const estrellas = {
  backgroundImage: [
    "radial-gradient(1.5px 1.5px at 12% 22%, rgba(255,255,255,0.9) 96%, transparent)",
    "radial-gradient(1px 1px at 34% 68%, rgba(255,255,255,0.7) 96%, transparent)",
    "radial-gradient(1.8px 1.8px at 58% 30%, rgba(245,230,200,0.9) 96%, transparent)",
    "radial-gradient(1px 1px at 76% 78%, rgba(201,184,255,0.8) 96%, transparent)",
    "radial-gradient(1.4px 1.4px at 90% 18%, rgba(255,255,255,0.8) 96%, transparent)",
    "radial-gradient(1px 1px at 22% 88%, rgba(255,255,255,0.6) 96%, transparent)",
    "radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.28), transparent 60%)",
    "radial-gradient(ellipse at 25% 40%, rgba(37,99,235,0.22), transparent 55%)",
  ].join(", "),
};

// Un panel inclinado barre la pantalla de izquierda a derecha, con un borde de luz
// azul → violeta → rosa a cada lado. Muestra el nombre de la sección en el centro.
const TransicionCortina = ({ etiqueta }) => (
  <div
    className="pointer-events-none fixed inset-0 z-[70] overflow-hidden"
    aria-hidden="true"
  >
    <motion.div
      className="absolute inset-y-0 -left-1/4 w-[150%] bg-slate-950"
      style={{ ...estrellas, skewX: -10 }}
      initial={{ x: "-150%" }}
      animate={{ x: ["-150%", "0%", "0%", "150%"] }}
      transition={{ duration: DURACION, times: TIEMPOS, ease: "easeInOut" }}
    >
      {/* Bordes de luz (delantero y trasero) */}
      <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500 shadow-[0_0_40px_8px_rgba(139,92,246,0.55)]" />
      <span className="absolute inset-y-0 right-0 w-1.5 bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500 shadow-[0_0_40px_8px_rgba(139,92,246,0.55)]" />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-4"
        style={{ transform: "skewX(10deg)" }}
      >
        <motion.span
          className="font-display text-4xl font-semibold italic tracking-tight text-white md:text-6xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: [0, 0, 1, 1, 0], y: [12, 12, 0, 0, -8] }}
          transition={{ duration: DURACION, times: [0, 0.4, 0.5, 0.58, 0.7] }}
        >
          {etiqueta}
        </motion.span>
        <motion.span
          className="h-0.5 w-24 origin-center rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 0, 1, 1, 0] }}
          transition={{ duration: DURACION, times: [0, 0.42, 0.52, 0.58, 0.7] }}
        />
      </div>
    </motion.div>
  </div>
);

export default TransicionCortina;
