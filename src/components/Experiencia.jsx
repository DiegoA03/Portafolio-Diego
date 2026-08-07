import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, X, Calendar, CheckCircle2, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const datosExperiencia = [
  { id: 'gnosoft', logo: '/logo-gnosoft.png', inicial: 'GN', color: 'from-blue-500 to-cyan-500' },
  { id: 'ufps', logo: '/logo-ufps.png', inicial: 'U', color: 'from-red-500 to-orange-500' },
  { id: 'isa', logo: '/logo-isa.png', inicial: 'ISA', color: 'from-purple-500 to-pink-500' }
];

const Experiencia = () => {
  const [seleccionada, setSeleccionada] = useState(null);
  const { t } = useLanguage();

  const experiencias = datosExperiencia.map((exp) => ({
    ...exp,
    ...t.experiencia.items[exp.id]
  }));

  return (
    <section id="experiencia" className="py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
            <Briefcase className="text-white" size={24} />
          </div>
          {t.experiencia.titulo}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          {t.experiencia.subtitulo}
        </p>

        <div className="flex flex-wrap justify-center items-start gap-16 md:gap-24 py-8">
          {experiencias.map((exp) => (
            <div key={exp.id} className="group relative flex flex-col items-center">
              <div className="absolute -top-16 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none z-20">
                <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs md:text-sm px-4 py-2 rounded-xl shadow-xl whitespace-nowrap relative">
                  {t.experiencia.tooltip}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                </div>
              </div>

              <motion.button
                layoutId={`card-${exp.id}`}
                onClick={() => setSeleccionada(exp)}
                whileHover={{ scale: 1.15, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br ${exp.color} p-[4px] shadow-lg cursor-pointer`}
              >
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.empresa}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="font-bold text-2xl text-gray-700 dark:text-gray-300">${exp.inicial}</span>`;
                    }}
                  />
                </div>
                <span className="absolute inset-0 rounded-full animate-ping bg-blue-400/30 group-hover:opacity-0"></span>
              </motion.button>

              <p className="mt-5 text-base font-semibold text-gray-800 dark:text-gray-200 text-center max-w-[160px]">
                {exp.empresa}
              </p>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {seleccionada && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSeleccionada(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            <motion.div
              layoutId={`card-${seleccionada.id}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <motion.div
                className="pointer-events-auto relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
                initial={{ borderRadius: 24 }}
              >
                <div className={`relative bg-gradient-to-br ${seleccionada.color} p-8 rounded-t-3xl`}>
                  <button
                    onClick={() => setSeleccionada(null)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition"
                  >
                    <X size={20} />
                  </button>

                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0">
                      <img
                        src={seleccionada.logo}
                        alt={seleccionada.empresa}
                        className="w-3/4 h-3/4 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span class="font-bold text-xl text-gray-700">${seleccionada.inicial}</span>`;
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{seleccionada.cargo}</h3>
                      <p className="text-white/90 font-medium">{seleccionada.empresa}</p>
                      <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
                        <Calendar size={14} />
                        {seleccionada.periodo}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {seleccionada.descripcion}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-3">
                      <Target size={18} className="text-blue-500" />
                      {t.experiencia.actividadesTitulo}
                    </h4>
                    <ul className="space-y-2">
                      {seleccionada.actividades.map((act, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.08 }}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                        >
                          <span className="text-blue-500 mt-1">▸</span>
                          {act}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-3">
                      <CheckCircle2 size={18} className="text-green-500" />
                      {t.experiencia.logrosTitulo}
                    </h4>
                    <ul className="space-y-2">
                      {seleccionada.logros.map((logro, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.45 + i * 0.08 }}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                        >
                          <CheckCircle2 size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          {logro}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experiencia;