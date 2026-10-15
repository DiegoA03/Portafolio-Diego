import React from 'react';
import {
  Code2,
  ShoppingCart,
  Package,
  Calendar,
  UtensilsCrossed,
  Briefcase,
  CheckCircle,
  FileText,
  Layers
} from 'lucide-react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionTitle from './SectionTitle';

const habilidadesTecnicas = [
  { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { nombre: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { nombre: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { nombre: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { nombre: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { nombre: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { nombre: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { nombre: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { nombre: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { nombre: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { nombre: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
];

const habilidadesDobles = [...habilidadesTecnicas, ...habilidadesTecnicas];

const iconosServicios = [ShoppingCart, Package, Calendar, UtensilsCrossed, Briefcase];
const coloresServicios = [
  'from-blue-500 to-cyan-500',
  'from-violet-500 to-fuchsia-500',
  'from-amber-400 to-orange-500',
  'from-emerald-400 to-teal-500',
  'from-pink-500 to-rose-500'
];

const iconosRoles = [Code2, Layers, FileText, CheckCircle];
const coloresRoles = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-red-500',
  'from-green-500 to-teal-500'
];

const dosDigitos = (n) => String(n).padStart(2, '0');

// Reparte las tarjetas de servicios para que la última fila siempre quede llena
// (con 5 servicios: 3 arriba y 2 más anchas abajo)
const spanServicio = (idx, total) => {
  const resto = total % 3;
  const enUltimaFila = resto > 0 && idx >= total - resto;
  let lg = 'lg:col-span-2';
  if (enUltimaFila) lg = resto === 2 ? 'lg:col-span-3' : 'lg:col-span-6';
  const md = total % 2 === 1 && idx === total - 1 ? 'md:col-span-2' : '';
  return `${lg} ${md}`;
};

const aparecer = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 }
};

const Habilidades = () => {
  const { t } = useLanguage();
  const reducirMovimiento = useReducedMotion();

  // Efecto 3D: la ilustración se inclina siguiendo el cursor
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

  const roles = t.habilidades.roles.map((rol, idx) => ({
    ...rol,
    Icono: iconosRoles[idx],
    color: coloresRoles[idx]
  }));

  const servicios = t.habilidades.servicios.map((servicio, idx) => ({
    ...servicio,
    Icono: iconosServicios[idx],
    color: coloresServicios[idx % coloresServicios.length]
  }));

  return (
    <section id="habilidades" className="py-12 transition-colors duration-300 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionTitle titulo={t.habilidades.titulo} subtitulo={t.habilidades.subtitulo} />

        {/* Presentación: ilustración + roles */}
        <div className="mb-20 grid items-center gap-12 md:mb-24 lg:grid-cols-2">
          <motion.div
            animate={reducirMovimiento ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Resplandor de color detrás de la ilustración */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-6 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 opacity-30 blur-3xl"
            />

            <motion.div
              onMouseMove={alMoverMouse}
              onMouseLeave={alSalirMouse}
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
              className="relative"
            >
              <img
                src="/ilustracion.png"
                alt="Developer"
                className="h-auto w-full rounded-2xl drop-shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="text-center text-gray-500 dark:text-gray-400"><div class="text-6xl mb-4">👨‍💻</div><p class="text-sm">Ilustración</p></div>`;
                }}
              />
            </motion.div>
          </motion.div>

          <div>
            <motion.p
              {...aparecer}
              className="mb-8 text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300"
            >
              {t.habilidades.descripcionIntro}
            </motion.p>

            <div className="space-y-4">
              {roles.map(({ nombre, descripcion, Icono, color }, idx) => (
                <motion.div
                  key={nombre}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-gray-200/70 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-shadow hover:shadow-2xl dark:border-white/10 dark:bg-gray-900/60"
                >
                  <span className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${color}`} />
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${color}`}
                  >
                    <Icono size={22} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">{nombre}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{descripcion}</p>
                  </div>
                  <span className="text-xs font-semibold tracking-[0.25em] text-gray-400 dark:text-gray-500">
                    {dosDigitos(idx + 1)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Servicios */}
        <div className="mb-20 md:mb-24">
          <SectionTitle titulo={t.habilidades.tituloServicios} tamano="md" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {servicios.map(({ nombre, descripcion, Icono, color }, idx) => (
              <motion.div
                key={nombre}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/70 p-7 shadow-xl backdrop-blur-xl transition-shadow hover:shadow-2xl dark:border-white/10 dark:bg-gray-900/60 ${spanServicio(idx, servicios.length)}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${color}`} />

                {/* Icono decorativo de fondo */}
                <Icono
                  aria-hidden="true"
                  size={130}
                  strokeWidth={1}
                  className="pointer-events-none absolute -bottom-5 -right-5 text-gray-900/5 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 dark:text-white/5"
                />

                <span className="absolute right-6 top-6 text-xs font-semibold tracking-[0.25em] text-gray-400 dark:text-gray-500">
                  {dosDigitos(idx + 1)}
                </span>

                <div className="relative">
                  <span
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${color}`}
                  >
                    <Icono size={26} />
                  </span>
                  <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{nombre}</h4>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tecnologías y herramientas: carrusel igual al de certificaciones */}
        <div>
          <SectionTitle
            titulo={t.habilidades.tituloTecnologias}
            subtitulo={t.habilidades.subtituloTecnologias}
            tamano="md"
          />

          <div className="relative overflow-hidden rounded-xl border border-gray-200/50 bg-white/40 p-6 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/30">
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900"></div>
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900"></div>

            {/* 40s: mismo ritmo visual que el carrusel de certificaciones */}
            <div className="flex animate-scroll-infinite gap-6" style={{ animationDuration: '40s' }}>
              {habilidadesDobles.map((skill, index) => (
                <div
                  key={index}
                  className="group relative h-24 w-24 flex-shrink-0 cursor-pointer"
                  title={skill.nombre}
                >
                  <img
                    src={skill.logo}
                    alt={skill.nombre}
                    className="h-full w-full object-contain opacity-50 drop-shadow-lg grayscale transition-all duration-300 ease-out group-hover:scale-125 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;