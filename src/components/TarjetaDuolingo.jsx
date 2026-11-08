import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Zap, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BanderaEEUU } from './Banderas';

const PERFIL = 'https://www.duolingo.com/profile/ph.uhK3hY';
const CLAVE_CACHE = 'duolingo-ultimo-dato';
const CADA_MS = 10 * 60 * 1000;
const HITO = 1000; // la barra avanza hacia el siguiente múltiplo de 1000 XP

const leerCache = () => {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_CACHE));
  } catch {
    return null;
  }
};

const TarjetaDuolingo = () => {
  const { t, idioma } = useLanguage();
  const d = t.sobreMi.duolingo;
  const [datos, setDatos] = useState(leerCache);
  const [cargando, setCargando] = useState(!leerCache());
  const [fallo, setFallo] = useState(false);

  useEffect(() => {
    let activo = true;

    const cargar = async () => {
      try {
        const r = await fetch('/api/duolingo');
        if (!r.ok) throw new Error('sin datos');
        const json = await r.json();
        if (!activo) return;
        setDatos(json);
        setFallo(false);
        try {
          localStorage.setItem(CLAVE_CACHE, JSON.stringify(json));
        } catch {
          // sin almacenamiento: no pasa nada
        }
      } catch {
        if (activo) setFallo(true);
      } finally {
        if (activo) setCargando(false);
      }
    };

    cargar();
    const id = setInterval(cargar, CADA_MS);
    return () => {
      activo = false;
      clearInterval(id);
    };
  }, []);

  const formato = (n) => Number(n).toLocaleString(idioma === 'es' ? 'es-CO' : 'en-US');
  const xpCurso = datos?.cursoXp ?? datos?.xpTotal ?? 0;
  const siguiente = (Math.floor(xpCurso / HITO) + 1) * HITO;
  const porcentaje = Math.min(100, ((xpCurso % HITO) / HITO) * 100);

  return (
    <>
      <div className="mb-5 flex items-center justify-between gap-3">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{d.titulo}</h3>
        <a
          href={PERFIL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline dark:text-blue-300"
        >
          {d.verPerfil}
          <ExternalLink size={13} />
        </a>
      </div>

      {cargando && <div className="h-28 animate-pulse rounded-2xl bg-gray-300/50 dark:bg-white/10" />}

      {!cargando && !datos && <p className="text-sm text-gray-600 dark:text-gray-400">{d.error}</p>}

      {datos && (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-orange-500/10 p-4 ring-1 ring-orange-500/20">
              <Flame className="text-orange-500" size={26} fill="currentColor" />
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{formato(datos.racha)}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                {datos.racha === 1 ? d.dia : d.dias} · {d.racha}
              </p>
            </div>
            <div className="rounded-2xl bg-violet-500/10 p-4 ring-1 ring-violet-500/20">
              <Zap className="text-violet-500" size={26} fill="currentColor" />
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{formato(datos.xpTotal)}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                {d.xpTotal}
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="flex items-center gap-3 font-semibold text-gray-800 dark:text-gray-200">
                <BanderaEEUU className="h-6 w-auto rounded-[4px] shadow ring-1 ring-black/10" />
                {d.curso}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                {formato(xpCurso)} XP
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-300/70 dark:bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${porcentaje}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>
            <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
              {d.siguienteHito}: {formato(siguiente)} XP
              {fallo && ` · ${d.desactualizado}`}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default TarjetaDuolingo;