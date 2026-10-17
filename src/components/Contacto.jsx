import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SectionTitle from './SectionTitle';

const EMAIL = 'ingdaalvarez@gmail.com';
const TELEFONO_VISIBLE = '+57 310 789 7525';
const TELEFONO_LINK = 'tel:3107897525';
const NUMERO_WHATSAPP = '573107897525';
const MENSAJE_WHATSAPP = 'Hola Diego, vi tu portafolio y me gustaría contactarte.';

// Logo de WhatsApp (el mismo del botón flotante)
const IconoWhatsApp = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const aparecer = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' }
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
      clave: 'linkedin',
      Icono: Linkedin,
      titulo: 'LinkedIn',
      detalle: 'Diego Andrés Álvarez Lizarazo',
      descripcion: d.linkedin,
      href: 'https://www.linkedin.com/in/diego-andres-alvarez-lizarazo-6a40113a6/',
      externo: true,
      foto: '/redes/linkedin.png',
      color: 'from-sky-600 to-blue-700'
    },
    {
      clave: 'instagram',
      Icono: Instagram,
      titulo: 'Instagram',
      detalle: '@dk_alvarez08',
      descripcion: d.instagram,
      href: 'https://www.instagram.com/dk_alvarez08/',
      externo: true,
      foto: '/redes/instagram.png',
      color: 'from-pink-500 via-fuchsia-500 to-amber-400'
    },
    {
      clave: 'facebook',
      Icono: Facebook,
      titulo: 'Facebook',
      detalle: 'Diego Lizarazo', // ← cámbialo por tu nombre tal como aparece en Facebook
      descripcion: d.facebook,
      href: 'https://www.facebook.com/diego.lizarazo.562',
      externo: true,
      foto: '/redes/facebook.png',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      clave: 'github',
      Icono: Github,
      titulo: 'GitHub',
      detalle: '@DiegoA03',
      descripcion: d.github,
      href: 'https://github.com/DiegoA03',
      externo: true,
      color: 'from-slate-600 to-slate-900'
    },
    {
      clave: 'email',
      Icono: Mail,
      titulo: t.contacto.email,
      detalle: EMAIL,
      descripcion: d.email,
      href: `mailto:${EMAIL}`,
      copiable: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      clave: 'telefono',
      Icono: Phone,
      titulo: t.contacto.telefono,
      detalle: TELEFONO_VISIBLE,
      descripcion: d.telefono,
      href: TELEFONO_LINK,
      copiable: true,
      color: 'from-violet-500 to-fuchsia-500'
    },
    {
      clave: 'ubicacion',
      Icono: MapPin,
      titulo: t.contacto.ubicacion,
      detalle: t.contacto.direccion1,
      detalle2: t.contacto.direccion2,
      descripcion: d.ubicacion,
      ancha: true,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(MENSAJE_WHATSAPP)}`;

  return (
    <section id="contacto" className="py-12 transition-colors duration-300 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionTitle titulo={t.contacto.titulo} subtitulo={t.contacto.subtitulo} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tarjetas.map(
            (
              { clave, Icono, titulo, detalle, detalle2, descripcion, href, externo, foto, copiable, ancha, color },
              idx
            ) => (
              <motion.article
                key={clave}
                {...aparecer}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/70 p-7 shadow-xl backdrop-blur-xl transition-shadow hover:shadow-2xl dark:border-white/10 dark:bg-gray-900/60 ${
                  ancha ? 'sm:col-span-2 lg:col-span-3' : ''
                }`}
              >
                {/* Toda la tarjeta es un enlace */}
                {href && (
                  <a
                    href={href}
                    {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={`${titulo}: ${detalle}`}
                    className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  />
                )}

                {/* Línea de color que aparece arriba */}
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${color}`} />

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
                        title={copiado === clave ? t.contacto.copiado : t.contacto.copiar}
                        className="flex h-10 items-center justify-center gap-2 rounded-full border border-gray-300/70 bg-white/60 px-3 text-sm font-medium text-gray-700 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                      >
                        {copiado === clave ? (
                          <>
                            <Check size={16} className="text-green-500" />
                            <span className="text-green-600 dark:text-green-400">{t.contacto.copiado}</span>
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
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{titulo}</h3>
                  <p className="mt-1 break-words font-medium text-blue-600 dark:text-blue-400">{detalle}</p>
                  {detalle2 && <p className="break-words font-medium text-blue-600 dark:text-blue-400">{detalle2}</p>}
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{descripcion}</p>
                </div>
              </motion.article>
            )
          )}
        </div>

        {/* Botones principales */}
        <motion.div
          {...aparecer}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={`mailto:${EMAIL}?subject=${t.contacto.asuntoCorreo}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Send size={20} />
            {t.contacto.botonEnviar}
          </a>

          <a
            href={urlWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl"
          >
            <IconoWhatsApp size={20} />
            {t.contacto.escribirWhatsapp}
          </a>
        </motion.div>

        {/* Pie */}
        <footer className="mt-14 border-t border-gray-300/60 pt-8 text-center dark:border-white/10">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Diego Andrés Álvarez Lizarazo. {t.contacto.derechos}
          </p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">{t.contacto.footerRol}</p>
        </footer>
      </div>
    </section>
  );
};

export default Contacto;