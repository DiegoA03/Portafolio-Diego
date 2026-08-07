import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contacto = () => {
  const { t } = useLanguage();

  return (
    <footer id="contacto" className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-gray-900 dark:to-black text-white py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.contacto.titulo}</h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 max-w-2xl mx-auto">
            {t.contacto.subtitulo}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a 
            href="mailto:ingdaalvarez@gmail.com" 
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Mail size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{t.contacto.email}</h3>
              <p className="text-blue-100 dark:text-gray-300 text-sm">ingdaalvarez@gmail.com</p>
            </div>
          </a>

          {/* Teléfono */}
          <a 
            href="tel:3107897525" 
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{t.contacto.telefono}</h3>
              <p className="text-blue-100 dark:text-gray-300 text-sm">+57 310 789 7525</p>
            </div>
          </a>

          {/* Ubicación */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{t.contacto.ubicacion}</h3>
              <p className="text-blue-100 dark:text-gray-300 text-sm">{t.contacto.direccion1}</p>
              <p className="text-blue-100 dark:text-gray-300 text-sm">{t.contacto.direccion2}</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <a 
            href={`mailto:ingdaalvarez@gmail.com?subject=${t.contacto.asuntoCorreo}`}
            className="inline-flex items-center gap-2 bg-white text-blue-600 dark:bg-blue-500 dark:text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-50 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Send size={20} />
            {t.contacto.botonEnviar}
          </a>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-100 dark:text-gray-400 text-sm">
            © 2026 Diego Andrés Álvarez Lizarazo. {t.contacto.derechos}
          </p>
          <p className="text-blue-200 dark:text-gray-500 text-xs mt-2">
            {t.contacto.footerRol}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contacto;