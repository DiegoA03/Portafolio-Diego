import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const numeroWhatsApp = '573107897525'; // Tu número
  const mensaje = 'Hola Diego, vi tu portafolio y me gustaría contactarte.';
  
  // Usamos la variable numeroWhatsApp en el template literal para que sea más limpio
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a 
      href={urlWhatsApp}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="animate-pulse" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Contáctame por WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;