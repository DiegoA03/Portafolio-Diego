import React from 'react';
import { MapPin, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const iconosDatos = [MapPin, Calendar, User];

const SobreMi = () => {
  const { t } = useLanguage();

  const datosPersonales = t.sobreMi.datosPersonales.map((dato, idx) => {
    const IconComponent = iconosDatos[idx];
    return { ...dato, icono: <IconComponent size={20} /> };
  });

  return (
    <section id="sobre" className="py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white select-none">
          {t.sobreMi.titulo}
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Columna de texto - 2/3 */}
          <div className="md:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl border border-blue-200 dark:border-blue-900/30 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">{t.sobreMi.tituloPerfil}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t.sobreMi.parrafo1Parte1}{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">{t.sobreMi.parrafo1Destacado}</span>
                {t.sobreMi.parrafo1Parte2}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.sobreMi.parrafo2Parte1}{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">{t.sobreMi.parrafo2Destacado}</span>{' '}
                {t.sobreMi.parrafo2Parte2}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 text-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                {t.sobreMi.tituloExpectativa}
              </h3>
              <p className="leading-relaxed text-blue-50">
                {t.sobreMi.textoExpectativa}
              </p>
            </motion.div>

            {/* Fortalezas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.sobreMi.tituloFortalezas}</h3>
              <div className="grid grid-cols-2 gap-4">
                {t.sobreMi.fortalezas.map((fortaleza) => (
                  <motion.div 
                    key={fortaleza.nombre}
                    whileHover={{ scale: 1.08, y: -6, rotateZ: 2 }}
                    className="flex items-center gap-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <motion.span 
                      className="text-3xl"
                      animate={{ y: [0, -8, 0], rotateZ: [-5, 5, -5] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 2, ease: 'easeInOut' }}
                    >
                      {fortaleza.emoji}
                    </motion.span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{fortaleza.nombre}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Columna lateral - 1/3 */}
          <div className="space-y-6">
            {/* Espacio para foto */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="aspect-[3/4] flex items-center justify-center">
                <img
                  src="/sobre-mi.png"
                  alt="Diego Álvarez"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-6xl font-bold">DA</div>';
                  }}
                />
              </div>
            </motion.div>

            {/* Datos personales */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-5 text-lg">{t.sobreMi.tituloInfoPersonal}</h3>
              <div className="space-y-4">
                {datosPersonales.map((dato, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">{dato.icono}</div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">{dato.label}</p>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{dato.valor}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Idiomas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-5 text-lg">{t.sobreMi.tituloIdiomas}</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-200">🇪🇸 {t.sobreMi.espanol}</span>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{t.sobreMi.nivelNativo}</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-200">🇺🇸 {t.sobreMi.ingles}</span>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{t.sobreMi.nivelRegular}</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '40%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;