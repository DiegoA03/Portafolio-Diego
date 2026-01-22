import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contacto = () => {
  return (
    <footer id="contacto" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">¿Hablamos?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estoy disponible para oportunidades de prácticas profesionales y proyectos interesantes. 
            No dudes en contactarme.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a 
            href="mailto:diegoandresalli@ufps.edu.co" 
            className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <Mail size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-blue-100 text-sm">diegoandresalli@ufps.edu.co</p>
            </div>
          </a>

          {/* Teléfono */}
          <a 
            href="tel:3107897525" 
            className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <Phone size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Teléfono</h3>
              <p className="text-blue-100 text-sm">+57 310 789 7525</p>
            </div>
          </a>

          {/* Ubicación */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Ubicación</h3>
              <p className="text-blue-100 text-sm">Av 5a #23-19 San Mateo</p>
              <p className="text-blue-100 text-sm">Cúcuta, Norte de Santander</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <a 
            href="mailto:diegoandresalli@ufps.edu.co?subject=Oportunidad de Prácticas Profesionales" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Send size={20} />
            Enviar Mensaje
          </a>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-white border-opacity-20 text-center">
          <p className="text-blue-100 text-sm">
            © 2025 Diego Andrés Álvarez Lizarazo. Todos los derechos reservados.
          </p>
          <p className="text-blue-200 text-xs mt-2">
            Estudiante de Ingeniería de Sistemas - Universidad Francisco de Paula Santander
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contacto;