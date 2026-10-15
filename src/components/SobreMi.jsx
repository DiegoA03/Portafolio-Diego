import React from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from 'framer-motion';
import {
  MapPin,
  Calendar,
  User,
  Target,
  Users,
  Dumbbell,
  TrendingUp,
  FolderKanban,
  Flame
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SectionTitle from './SectionTitle';
import { BanderaEspana, BanderaEEUU } from './Banderas';

const iconosDatos = [MapPin, Calendar, User];

// Un icono y un color por fortaleza (mismo orden que en LanguageContext)
const iconosFortalezas = [Users, Target, Dumbbell, TrendingUp, FolderKanban, Flame];
const coloresFortalezas = [
  'from-blue-500 to-cyan-500',
  'from-violet-500 to-fuchsia-500',
  'from-amber-400 to-orange-500',
  'from-emerald-400 to-teal-500',
  'from-pink-500 to-rose-500',
  'from-indigo-500 to-blue-500'
];

const dosDigitos = (n) => String(n).padStart(2, '0');

const aparecer = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 }
};

const SobreMi = () => {
  const { t } = useLanguage();
  const reducirMovimiento = useReducedMotion();

  // Efecto 3D: la foto se inclina siguiendo el cursor (igual que en Proyectos)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 });

  const alMoverMouse = (e) => {
    if (reducirMovimiento) return;
    const caja = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - caja.left) / caja.width - 0.5);
    mouseY.set((e.clientY - caja.top) / caja.height - 0.5);
  };

  const alSalirMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const datosPersonales = t.sobreMi.datosPersonales.map((dato, idx) => ({
    ...dato,
    Icono: iconosDatos[idx]
  }));

  const idiomas = [
    { nombre: t.sobreMi.espanol, nivel: t.sobreMi.nivelNativo, porcentaje: '100%', Bandera: BanderaEspana },
    { nombre: t.sobreMi.ingles, nivel: t.sobreMi.nivelRegular, porcentaje: '40%', Bandera: BanderaEEUU }
  ];

  const tarjeta =
    'rounded-3xl border border-gray-200/70 bg-white/70 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/60';

  return (
    <section id="sobre" className="py-12 transition-colors duration-300 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionTitle titulo={t.sobreMi.titulo} subtitulo={t.sobreMi.subtitulo} />

        <div className="grid items-start gap-10 lg:grid-cols-[380px_1fr]">
          {/* Columna lateral: foto, datos personales e idiomas */}
          <div className="space-y-6">
            <motion.div {...aparecer} className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Resplandor de color detrás de la foto */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 opacity-25 blur-3xl dark:opacity-30"
              />

              <motion.div
                onMouseMove={alMoverMouse}
                onMouseLeave={alSalirMouse}
                style={{ rotateX, rotateY, transformPerspective: 1000 }}
                className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                  <img
                    src="/sobre-mi.png"
                    alt="Diego Álvarez"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-6xl font-bold">DA</div>';
                    }}
                  />
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5 pt-20">
                  <p className="font-display text-3xl font-semibold text-white">Diego Álvarez</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Datos personales */}
            <motion.div {...aparecer} className={`${tarjeta} p-6`}>
              <h3 className="mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                {t.sobreMi.tituloInfoPersonal}
              </h3>
              <ul className="space-y-4">
                {datosPersonales.map(({ label, valor, Icono }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-md">
                      <Icono size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                        {label}
                      </p>
                      <p className="font-medium text-gray-800 dark:text-gray-200">{valor}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Idiomas */}
            <motion.div {...aparecer} className={`${tarjeta} p-6`}>
              <h3 className="mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                {t.sobreMi.tituloIdiomas}
              </h3>
              <div className="space-y-5">
                {idiomas.map(({ nombre, nivel, porcentaje, Bandera }, idx) => (
                  <div key={nombre}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="flex items-center gap-3 font-semibold text-gray-800 dark:text-gray-200">
                        <Bandera className="h-6 w-auto rounded-[4px] shadow ring-1 ring-black/10" />
                        {nombre}
                      </span>
                      <span className="rounded-full bg-blue-500/10 px-3 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                        {nivel}
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-300/70 dark:bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: porcentaje }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 + idx * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Columna principal: perfil, expectativa y fortalezas */}
          <div className="space-y-6">
            <motion.div {...aparecer} className={`${tarjeta} relative overflow-hidden p-8 md:p-10`}>
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />
              <h3 className="mb-5 text-3xl font-semibold text-gray-900 md:text-4xl dark:text-white">
                {t.sobreMi.tituloPerfil}
              </h3>
              <p className="mb-4 text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300">
                {t.sobreMi.parrafo1Parte1}{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">{t.sobreMi.parrafo1Destacado}</span>
                {t.sobreMi.parrafo1Parte2}
              </p>
              <p className="text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300">
                {t.sobreMi.parrafo2Parte1}{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">{t.sobreMi.parrafo2Destacado}</span>{' '}
                {t.sobreMi.parrafo2Parte2}
              </p>
            </motion.div>

            <motion.div
              {...aparecer}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-violet-600 p-8 text-white shadow-xl md:p-10"
            >
              <Target
                aria-hidden="true"
                size={180}
                strokeWidth={1}
                className="pointer-events-none absolute -bottom-10 -right-10 text-white/10"
              />
              <div className="relative">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <Target size={24} />
                </span>
                <h3 className="mb-3 text-3xl font-semibold md:text-4xl">{t.sobreMi.tituloExpectativa}</h3>
                <p className="text-base leading-relaxed text-blue-50 md:text-lg">{t.sobreMi.textoExpectativa}</p>
              </div>
            </motion.div>

            {/* Fortalezas */}
            <div className="pt-6">
              <SectionTitle titulo={t.sobreMi.tituloFortalezas} tamano="md" />

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {t.sobreMi.fortalezas.map((fortaleza, idx) => {
                  const Icono = iconosFortalezas[idx % iconosFortalezas.length];
                  const color = coloresFortalezas[idx % coloresFortalezas.length];

                  return (
                    <motion.div
                      key={fortaleza.nombre}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      whileHover={{ y: -6 }}
                      className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-shadow hover:shadow-2xl dark:border-white/10 dark:bg-gray-900/60"
                    >
                      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${color}`} />
                      <span className="absolute right-4 top-4 text-xs font-semibold tracking-[0.25em] text-gray-400 dark:text-gray-500">
                        {dosDigitos(idx + 1)}
                      </span>
                      <span
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${color}`}
                      >
                        <Icono size={22} />
                      </span>
                      <p className="font-semibold leading-snug text-gray-800 dark:text-gray-200">
                        {fortaleza.nombre}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;