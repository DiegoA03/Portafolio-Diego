import React from 'react';
import { motion } from 'framer-motion';

// Título de sección reutilizable: emoji con brillo, serif grande con la última
// palabra en cursiva de color, línea de acento y subtítulo opcional.
// tamano: 'lg' (título principal de la vista) o 'md' (título secundario).
const SectionTitle = ({ emoji, titulo, subtitulo, tamano = 'lg' }) => {
  const grande = tamano === 'lg';
  const palabras = titulo.trim().split(' ');
  const ultima = palabras.length > 1 ? palabras.pop() : null;
  const inicio = palabras.join(' ');

  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={grande ? 'mb-10 md:mb-14' : 'mb-8 md:mb-10'}
    >
      {emoji && (
        <div className="relative mb-5 inline-flex">
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 opacity-30 blur-lg"
          />
          <span
            aria-hidden="true"
            className={`relative flex items-center justify-center rounded-2xl bg-white/60 ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10 ${
              grande ? 'h-14 w-14 text-3xl' : 'h-12 w-12 text-2xl'
            }`}
          >
            {emoji}
          </span>
        </div>
      )}

      <h2
        className={`font-semibold leading-[1.05] tracking-tight text-gray-900 dark:text-white ${
          grande ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl'
        }`}
      >
        {ultima ? (
          <>
            {inicio}{' '}
            <span className="italic text-blue-600 dark:text-blue-400">{ultima}</span>
          </>
        ) : (
          <span className="italic text-blue-600 dark:text-blue-400">{inicio}</span>
        )}
      </h2>

      <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

      {subtitulo && (
        <p className="mt-5 max-w-2xl text-base text-gray-600 md:text-lg dark:text-gray-400">
          {subtitulo}
        </p>
      )}
    </motion.header>
  );
};

export default SectionTitle;