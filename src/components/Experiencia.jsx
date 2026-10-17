import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionTitle from "./SectionTitle";

const datosExperiencia = [
  {
    id: "gnosoft",
    logo: "/logo-gnosoft.png",
    inicial: "GN",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "ufps",
    logo: "/logo-ufps.png",
    inicial: "U",
    color: "from-red-500 to-orange-500",
  },
  {
    id: "isa",
    logo: "/logo-isa.png",
    inicial: "ISA",
    color: "from-purple-500 to-pink-500",
  },
];

// Logo circular con respaldo de iniciales si la imagen no carga
const Logo = ({ src, alt, inicial, ajuste, className = "" }) => {
  const [error, setError] = useState(false);

  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ${className}`}
    >
      {error ? (
        <span className="text-sm font-bold text-gray-700">{inicial}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`h-full w-full ${ajuste}`}
          onError={() => setError(true)}
        />
      )}
    </span>
  );
};

const Experiencia = () => {
  const { t, idioma } = useLanguage();
  const [activaId, setActivaId] = useState(datosExperiencia[0].id);

  const experiencias = datosExperiencia.map((exp) => ({
    ...exp,
    ...t.experiencia.items[exp.id],
  }));

  const indice = experiencias.findIndex((e) => e.id === activaId);
  const activa = experiencias[indice];
  const total = experiencias.length;

  const mover = (delta) => {
    setActivaId(experiencias[(indice + delta + total) % total].id);
  };

  const etiquetaAnterior =
    idioma === "es" ? "Experiencia anterior" : "Previous experience";
  const etiquetaSiguiente =
    idioma === "es" ? "Experiencia siguiente" : "Next experience";

  return (
    <section
      id="experiencia"
      className="py-12 transition-colors duration-300 md:py-16"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <SectionTitle
          titulo={t.experiencia.titulo}
          subtitulo={t.experiencia.subtitulo}
        />

        <div className="grid items-start gap-6 lg:grid-cols-[320px_1fr] lg:gap-10">
          {/* Línea de tiempo: elige la experiencia */}
          <ol className="relative space-y-2 lg:sticky lg:top-28">
            <span
              aria-hidden="true"
              className="absolute bottom-10 left-[41px] top-10 w-px bg-gradient-to-b from-blue-500/60 via-violet-500/40 to-transparent"
            />

            {experiencias.map((exp, i) => {
              const activo = exp.id === activaId;

              return (
                <li key={exp.id}>
                  <button
                    type="button"
                    onClick={() => setActivaId(exp.id)}
                    aria-current={activo ? "true" : undefined}
                    className="relative flex w-full items-center gap-4 rounded-2xl p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {activo && (
                      <motion.span
                        layoutId="experiencia-activa"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="absolute inset-0 rounded-2xl bg-white/70 shadow-lg ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10"
                      />
                    )}

                    <span
                      className={`relative z-10 shrink-0 rounded-full bg-gradient-to-br p-[3px] transition-all duration-300 ${exp.color} ${
                        activo
                          ? "scale-105 opacity-100"
                          : "opacity-60 saturate-50 hover:opacity-100"
                      }`}
                    >
                      <Logo
                        src={exp.logo}
                        alt={exp.empresa}
                        inicial={exp.inicial}
                        ajuste="object-cover"
                        className="h-[52px] w-[52px]"
                      />
                    </span>

                    <span className="relative z-10 min-w-0">
                      <span className="block text-[11px] font-semibold tracking-[0.25em] text-gray-500 dark:text-gray-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`block truncate text-base font-semibold transition-colors ${
                          activo
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {exp.empresa}
                      </span>
                      <span className="block truncate text-sm text-gray-500 dark:text-gray-500">
                        {exp.cargo}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Panel de detalle: ocupa el espacio, sin modal */}
          <AnimatePresence mode="wait">
            <motion.article
              key={activa.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl border border-gray-200/70 bg-white/70 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/60"
            >
              <div className={`h-1.5 bg-gradient-to-r ${activa.color}`} />

              <div className="p-6 md:p-10">
                <header className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <span
                    className={`shrink-0 self-start rounded-full bg-gradient-to-br p-1 shadow-lg sm:self-center ${activa.color}`}
                  >
                    <Logo
                      src={activa.logo}
                      alt={activa.empresa}
                      inicial={activa.inicial}
                      ajuste="object-contain p-2"
                      className="h-20 w-20 md:h-24 md:w-24"
                    />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-3xl font-semibold leading-tight text-gray-900 md:text-4xl dark:text-white">
                      {activa.cargo}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-blue-600 dark:text-blue-400">
                      {activa.empresa}
                    </p>
                  </div>
                </header>

                <div className="mt-5 flex flex-wrap gap-2">
                  {activa.periodo.split(" · ").map((dato, i) => (
                    <span
                      key={dato}
                      className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-400/10 dark:text-blue-300"
                    >
                      {i === 0 && <Calendar size={14} />}
                      {dato}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300">
                  {activa.descripcion}
                </p>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <section>
                    <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">
                      <Target size={16} className="text-blue-500" />
                      {t.experiencia.actividadesTitulo}
                    </h4>
                    <ul className="space-y-3">
                      {activa.actividades.map((act, i) => (
                        <motion.li
                          key={act}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.08 }}
                          className="flex items-start gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                        >
                          <span className="mt-0.5 text-blue-500">▸</span>
                          {act}
                        </motion.li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">
                      <CheckCircle2 size={16} className="text-green-500" />
                      {t.experiencia.logrosTitulo}
                    </h4>
                    <ul className="space-y-3">
                      {activa.logros.map((logro, i) => (
                        <motion.li
                          key={logro}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + i * 0.08 }}
                          className="flex items-start gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-green-500"
                          />
                          {logro}
                        </motion.li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              {/* Navegación entre experiencias */}
              <footer className="flex items-center justify-between border-t border-gray-200/70 px-6 py-4 md:px-10 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => mover(-1)}
                  aria-label={etiquetaAnterior}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-900/5 dark:text-gray-300 dark:hover:bg-white/10"
                >
                  <ChevronLeft size={20} />
                </button>

                <span className="text-sm font-semibold tracking-[0.25em] text-gray-500 dark:text-gray-400">
                  {String(indice + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={() => mover(1)}
                  aria-label={etiquetaSiguiente}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-900/5 dark:text-gray-300 dark:hover:bg-white/10"
                >
                  <ChevronRight size={20} />
                </button>
              </footer>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
