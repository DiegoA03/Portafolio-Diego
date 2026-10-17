import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionTitle from "./SectionTitle";

const logosEducacion = ["/logo-ufps.png", "/logo-colegio.png"];

// Color de acento de cada tarjeta de educación
const acentos = ["from-blue-500 to-cyan-500", "from-purple-500 to-pink-500"];

// Nombres de certificados (oficiales, no se traducen)
const certificados = [
  {
    nombre: "Linux Essentials",
    imagen: "/certificados/cisco.png",
    link: "https://www.credly.com/badges/45c3cc61-cbd1-4caf-8a1b-e0a1f1087f12",
  },
  {
    nombre: "Networking Basics",
    imagen: "/certificados/cisco.png",
    link: "https://www.credly.com/badges/b10629b4-263c-475b-ade2-a04ed0174aaf",
  },
  {
    nombre: "Network Support and Security",
    imagen: "/certificados/cisco.png",
    link: "https://www.netacad.com/certificates/?issuanceId=8cb114e3-f0c3-44b7-857c-6416031e9165",
  },
  {
    nombre: "Endpoint Security",
    imagen: "/certificados/cisco.png",
    link: "https://www.credly.com/badges/25e341ec-729e-469e-8a80-a9d31489b66c",
  },
  {
    nombre: "Network Devices and Config",
    imagen: "/certificados/cisco.png",
    link: "https://www.credly.com/badges/e9961f69-523b-4bf2-80d1-4a3872ae3164",
  },
  {
    nombre: "IPv6 Básico",
    imagen: "/certificados/lacnic.png",
    link: "/lacnic.pdf",
  },
  {
    nombre: "Cisco Packet Tracer",
    imagen: "/certificados/cisco.png",
    link: "https://www.netacad.com/certificates/?issuanceId=537c7a37-2217-49ce-a491-e372b100cad4",
  },
  {
    nombre: "Cloud Foundations",
    imagen: "/certificados/aws.png",
    link: "/aws.pdf",
  },
  {
    nombre: "Full stack dev senior",
    imagen: "/certificados/senior.png",
    link: "/senior.pdf",
  },
];

// Ahora el carrusel ocupa todo el ancho, así que se repite 4 veces (en vez de 2)
// para que nunca queden huecos. La animación sigue siendo la misma.
const certificadosRepetidos = [
  ...certificados,
  ...certificados,
  ...certificados,
  ...certificados,
];

const Educacion = () => {
  const { t } = useLanguage();

  const educacion = t.educacion.items.map((item, idx) => ({
    ...item,
    logo: logosEducacion[idx],
    acento: acentos[idx % acentos.length],
  }));

  return (
    <section
      id="educacion"
      className="py-12 transition-colors duration-300 md:py-16"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Educación formal */}
        <SectionTitle
          titulo={t.educacion.tituloEducacion}
          subtitulo={t.educacion.subtitulo}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {educacion.map((edu, idx) => {
            const enCurso = Boolean(edu.inicio);

            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.12, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/70 p-7 shadow-xl backdrop-blur-xl transition-shadow hover:shadow-2xl md:p-9 dark:border-white/10 dark:bg-gray-900/60"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${edu.acento}`}
                />

                {/* Logo de la institución como marca de agua en gris */}
                <img
                  src={edu.logo}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-4 -right-4 h-40 w-40 object-contain grayscale opacity-[0.15] mix-blend-multiply transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 dark:opacity-[0.12] dark:mix-blend-screen dark:invert"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                <div className="relative">
                  <div
                    className={`inline-flex rounded-2xl bg-gradient-to-br p-[3px] shadow-lg ${edu.acento}`}
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-[13px] bg-white p-2.5 md:h-24 md:w-24">
                      <img
                        src={edu.logo}
                        alt={edu.institucion}
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="mt-6 text-3xl font-semibold leading-tight text-gray-900 md:text-4xl dark:text-white">
                    {edu.titulo}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-blue-600 dark:text-blue-400">
                    {edu.institucion}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {edu.estado && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-400/10 dark:text-green-400">
                        {enCurso && (
                          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 dark:bg-green-400" />
                        )}
                        {edu.estado}
                      </span>
                    )}
                    {edu.inicio && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                        <Calendar size={14} />
                        {edu.inicioLabel}: {edu.inicio}
                      </span>
                    )}
                    {edu.año && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                        <Calendar size={14} />
                        {edu.año}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Certificaciones: carrusel infinito a todo el ancho */}
        <div className="mt-16 md:mt-20">
          <SectionTitle
            titulo={t.educacion.tituloCertificaciones}
            subtitulo={t.educacion.subtituloCertificaciones}
            tamano="md"
          />

          <div className="relative overflow-hidden rounded-xl border border-gray-200/50 bg-white/40 p-6 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/30">
            <div className="absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none dark:from-gray-900"></div>
            <div className="absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none dark:from-gray-900"></div>

            {/* 60s porque ahora hay el doble de elementos: la velocidad visual es la misma de antes (30s) */}
            <div
              className="flex gap-6 animate-scroll-infinite"
              style={{ animationDuration: "60s" }}
            >
              {certificadosRepetidos.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-24 w-24 flex-shrink-0"
                  title={cert.nombre}
                >
                  <img
                    src={cert.imagen}
                    alt={cert.nombre}
                    className="h-full w-full object-contain opacity-50 drop-shadow-lg grayscale transition-all duration-300 ease-out group-hover:scale-125 group-hover:opacity-100 group-hover:grayscale-0"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educacion;
