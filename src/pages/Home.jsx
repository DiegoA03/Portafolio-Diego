import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Download, Eye } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></span>
              {t.home.disponible}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.home.hola} <span className="text-blue-600 dark:text-blue-400">Diego Álvarez</span> 👋
            </h1>

            <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 h-10">
              <TypeAnimation
                key={t.home.roles.join('-')}
                sequence={t.home.roles.flatMap((rol) => [rol, 2000])}
                wrapper="span"
                speed={50}
                className="font-semibold text-blue-600 dark:text-blue-400"
                repeat={Infinity}
                cursor={true}
              />
            </div>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8">
              {t.home.descripcion}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/hoja-de-vida.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition flex items-center gap-2">
                <Eye size={20} />
                {t.home.verCV}
              </a>

              <a href="/hoja-de-vida.pdf" download="CV-Diego-Alvarez.pdf" className="bg-white dark:bg-transparent text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-400/10 transition flex items-center gap-2">
                <Download size={20} />
                {t.home.descargar}
              </a>

              <div className="flex gap-3">
                <a href="mailto:ingdaalvarez@gmail.com" className="w-12 h-12 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/DiegoA03" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/diego-andres-alvarez-lizarazo-6a40113a6/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/proyectos" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                {t.home.verProyectos} →
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-end h-full">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full blur-3xl scale-90"></div>
              <img src="/foto-cuerpo.png" alt="Diego Álvarez" className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-float" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;