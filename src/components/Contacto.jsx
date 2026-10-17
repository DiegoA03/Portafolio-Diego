import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionTitle from "./SectionTitle";

const EMAIL = "ingdaalvarez@gmail.com";
const TELEFONO_VISIBLE = "+57 310 789 7525";
const TELEFONO_LINK = "tel:3107897525";

const aparecer = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

// Foto de perfil dentro de un círculo. Si la imagen no existe, muestra el logo de la red.
const Avatar = ({ foto, Icono, color }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span
        className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${color}`}
      >
        <Icono size={28} />
      </span>
    );
  }

  return (
    <span className="relative inline-flex">
      <span
        className={`rounded-full bg-gradient-to-br p-[3px] shadow-lg transition-transform duration-300 group-hover:scale-105 ${color}`}
      >
        <img
          src={foto}
          alt=""
          className="h-16 w-16 rounded-full bg-white object-cover"
          onError={() => setError(true)}
        />
      </span>
      <span
        className={`absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br text-white ring-2 ring-white dark:ring-gray-900 ${color}`}
      >
        <Icono size={14} />
      </span>
    </span>
  );
};

const Contacto = () => {
  const { t } = useLanguage();
  const [copiado, setCopiado] = useState(null);
  const d = t.contacto.descripciones;

  const copiar = async (clave, texto) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(clave);
      setTimeout(() => setCopiado(null), 1800);
    } catch {
      // Si el navegador bloquea el portapapeles no pasa nada: el enlace sigue funcionando.
    }
  };

  // Las fotos van en /public/redes/. Si falta alguna, se muestra el logo.
  const tarjetas = [
    {
      clave: "linkedin",
      Icono: Linkedin,
      titulo: "LinkedIn",
      detalle: "Diego Andrés Álvarez Lizarazo",
      descripcion: d.linkedin,
      href: "https://www.linkedin.com/in/diego-andres-alvarez-lizarazo-6a40113a6/",
      externo: true,
      foto: "/redes/linkedin.png",
      color: "from-sky-600 to-blue-700",
    },
    {
      clave: "instagram",
      Icono: Instagram,
      titulo: "Instagram",
      detalle: "@dk_alvarez08",
      descripcion: d.instagram,
      href: "https://www.instagram.com/dk_alvarez08/",
      externo: true,
      foto: "/redes/instagram.png",
      color: "from-pink-500 via-fuchsia-500 to-amber-400",
    },
    {
      clave: "facebook",
      Icono: Facebook,
      titulo: "Facebook",
      detalle: "Diego Alvarez", // ← cámbialo por tu nombre tal como aparece en Facebook
      descripcion: d.facebook,
      href: "https://www.facebook.com/diego.lizarazo.562",
      externo: true,
      foto: "/redes/facebook.png",
      color: "from-blue-500 to-indigo-600",
    },
    {
      clave: "github",
      Icono: Github,
      titulo: "GitHub",
      detalle: "@diegoalvarez-dev",
      descripcion: d.github,
      href: "https://github.com/diegoalvarez-dev",
      externo: true,
      color: "from-slate-600 to-slate-900",
    },
    {
      clave: "email",
      Icono: Mail,
      titulo: t.contacto.email,
      detalle: EMAIL,
      descripcion: d.email,
      href: `mailto:${EMAIL}`,
      copiable: true,
      color: "from-blue-500 to-cyan-500",
    },
    {
      clave: "telefono",
      Icono: Phone,
      titulo: t.contacto.telefono,
      detalle: TELEFONO_VISIBLE,
      descripcion: d.telefono,
      href: TELEFONO_LINK,
      copiable: true,
      color: "from-violet-500 to-fuchsia-500",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-12 transition-colors duration-300 md:py-16"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <SectionTitle
          titulo={t.contacto.titulo}
          subtitulo={t.contacto.subtitulo}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tarjetas.map(
            (
              {
                clave,
                Icono,
                titulo,
                detalle,
                detalle2,
                descripcion,
                href,
                externo,
                foto,
                copiable,
                ancha,
                color,
              },
              idx,
            ) => (
              <motion.article
                key={clave}
                {...aparecer}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/70 p-7 shadow-xl backdrop-blur-xl transition-shadow hover:shadow-2xl dark:border-white/10 dark:bg-gray-900/60 ${
                  ancha ? "sm:col-span-2 lg:col-span-3" : ""
                }`}
              >
                {/* Toda la tarjeta es un enlace */}
                {href && (
                  <a
                    href={href}
                    {...(externo
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={`${titulo}: ${detalle}`}
                    className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  />
                )}

                {/* Línea de color que aparece arriba */}
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${color}`}
                />

                {/* Icono grande abajo a la derecha */}
                <Icono
                  aria-hidden="true"
                  size={130}
                  strokeWidth={1}
                  className="pointer-events-none absolute -bottom-5 -right-5 text-gray-900/5 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 dark:text-white/5"
                />

                <div className="relative flex items-start justify-between gap-3">
                  {foto ? (
                    <Avatar foto={foto} Icono={Icono} color={color} />
                  ) : (
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${color}`}
                    >
                      <Icono size={28} />
                    </span>
                  )}

                  <div className="relative z-20 flex items-center gap-2">
                    {copiable && (
                      <button
                        type="button"
                        onClick={() => copiar(clave, detalle)}
                        aria-label={`${t.contacto.copiar}: ${detalle}`}
                        title={
                          copiado === clave
                            ? t.contacto.copiado
                            : t.contacto.copiar
                        }
                        className="flex h-10 items-center justify-center gap-2 rounded-full border border-gray-300/70 bg-white/60 px-3 text-sm font-medium text-gray-700 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                      >
                        {copiado === clave ? (
                          <>
                            <Check size={16} className="text-green-500" />
                            <span className="text-green-600 dark:text-green-400">
                              {t.contacto.copiado}
                            </span>
                          </>
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    )}
                    {href && (
                      <ArrowUpRight
                        size={22}
                        className="text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500"
                      />
                    )}
                  </div>
                </div>

                <div className="relative mt-5">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {titulo}
                  </h3>
                  <p className="mt-1 break-words font-medium text-blue-600 dark:text-blue-400">
                    {detalle}
                  </p>
                  {detalle2 && (
                    <p className="break-words font-medium text-blue-600 dark:text-blue-400">
                      {detalle2}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {descripcion}
                  </p>
                </div>
              </motion.article>
            ),
          )}
        </div>

        {/* Pie */}
        <footer className="mt-14 border-t border-gray-300/60 pt-8 text-center dark:border-white/10">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Diego Andrés Álvarez Lizarazo.
          </p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
            {t.contacto.footerRol}
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contacto;
