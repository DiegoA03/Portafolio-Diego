import React from 'react';
import { Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const logosEducacion = ['/logo-ufps.png', '/logo-colegio.png'];

// Nombres de certificados (oficiales, no se traducen)
const certificados = [
  { nombre: 'Linux Essentials', imagen: '/certificados/cisco.png', link: 'https://www.credly.com/badges/tu-link-1' },
  { nombre: 'Networking Basics', imagen: '/certificados/cisco.png', link: 'https://www.credly.com/badges/tu-link-2' },
  { nombre: 'Network Support and Security', imagen: '/certificados/cisco.png', link: 'https://www.credly.com/badges/tu-link-3' },
  { nombre: 'Network Devices and Config', imagen: '/certificados/cisco.png', link: 'https://www.credly.com/badges/tu-link-4' },
  { nombre: 'IPv6 Básico', imagen: '/certificados/lacnic.png', link: 'https://www.credly.com/badges/tu-link-5' },
  { nombre: 'Endpoint Security', imagen: '/certificados/cisco.png', link: 'https://www.credly.com/badges/tu-link-6' },
  { nombre: 'Cloud Foundations', imagen: '/certificados/aws.png', link: 'https://www.credly.com/badges/tu-link-6' },
  { nombre: 'Full stack dev senior', imagen: '/certificados/senior.png', link: 'https://www.credly.com/badges/tu-link-6' }
];

const certificadosDobles = [...certificados, ...certificados];

const Educacion = () => {
  const { t } = useLanguage();

  const educacion = t.educacion.items.map((item, idx) => ({
    ...item,
    logo: logosEducacion[idx]
  }));

  return (
    <section id="educacion" className="py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          {/* Educación Formal con logos */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">{t.educacion.tituloEducacion}</h2>
            <div className="space-y-6">
              {educacion.map((edu, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition border border-gray-200 dark:border-gray-700">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center p-2">
                    <img
                      src={edu.logo}
                      alt={edu.institucion}
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{edu.titulo}</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">{edu.institucion}</p>
                    {edu.estado && <p className="text-sm text-gray-600 dark:text-gray-400">{edu.estado}</p>}
                    {edu.inicio && <p className="text-xs text-gray-500 dark:text-gray-500">{edu.inicioLabel}: {edu.inicio}</p>}
                    {edu.año && <p className="text-sm text-gray-500 dark:text-gray-400">{edu.año}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificados - carrusel infinito al lado de Educación */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
              <Award className="text-blue-500" size={32} />
              {t.educacion.tituloCertificaciones}
            </h2>

            <div className="relative overflow-hidden bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

              <div className="flex gap-6 animate-scroll-infinite">
                {certificadosDobles.map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-shrink-0 w-24 h-24 relative"
                    title={cert.nombre}
                  >
                    <img
                      src={cert.imagen}
                      alt={cert.nombre}
                      className="w-full h-full object-contain grayscale opacity-50 transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-125 drop-shadow-lg"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educacion;