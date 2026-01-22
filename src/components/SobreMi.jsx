import React from 'react';
import { User, MapPin, Calendar, Code, Target } from 'lucide-react';

const SobreMi = () => {
  const datosPersonales = [
    { icono: <Code size={20} />, label: 'Código', valor: '1152118' },
    { icono: <MapPin size={20} />, label: 'Ubicación', valor: 'Cúcuta, Norte de Santander' },
    { icono: <Calendar size={20} />, label: 'Nacimiento', valor: '03 de Agosto, 2002' },
    { icono: <User size={20} />, label: 'Estado Civil', valor: 'Soltero' }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <User className="text-blue-600" size={32} />
          Sobre Mí
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Columna de texto - 2/3 */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Perfil Profesional</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Soy estudiante de undécimo semestre del programa de <span className="font-semibold text-blue-600">Ingeniería de Sistemas 
                de la Universidad Francisco de Paula Santander</span>, con formación orientada al desarrollo de soluciones tecnológicas, 
                el análisis de sistemas de información y la documentación técnica y de gestión de proyectos, con una proyección hacia el 
                área de la inteligencia artificial.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Me caracterizo por asumir mis responsabilidades académicas con <span className="font-semibold text-blue-600">compromiso, 
                ética y una actitud proactiva</span> frente al aprendizaje continuo, buscando aportar valor en los entornos donde me desempeño.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Target className="text-blue-600" size={24} />
                Competencias Destacadas
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">💻 Desarrollo Full Stack</h4>
                  <p className="text-gray-700 text-sm">
                    Perfil con mayor orientación al frontend, experiencia en HTML, CSS, JavaScript, Bootstrap y Tailwind. 
                    Backend con PHP y arquitectura MVC, logrando aplicaciones mantenibles y eficientes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">📊 Análisis y Diseño de Sistemas</h4>
                  <p className="text-gray-700 text-sm">
                    Competencias en análisis de datos, interpretación de necesidades del cliente, levantamiento de requerimientos 
                    y diseño de soluciones alineadas a los objetivos del negocio usando diagramas UML.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">📝 Documentación Técnica</h4>
                  <p className="text-gray-700 text-sm">
                    Me destaco significativamente en la elaboración de informes claros, estructurados y bien organizados, 
                    que facilitan la comunicación entre equipos técnicos y administrativos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                🎯 Expectativa Profesional
              </h3>
              <p className="leading-relaxed">
                Aspiro a fortalecer mis competencias técnicas y personales durante el proceso de prácticas profesionales, 
                aportando de manera significativa a la organización donde realice esta etapa formativa, mientras continúo 
                desarrollándome en el área de la inteligencia artificial y el desarrollo de software.
              </p>
            </div>

            {/* Fortalezas */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Principales Fortalezas</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Trabajo en equipo', 'Responsabilidad', 'Autodisciplina', 'Aprendizaje rápido', 'Orden y organización', 'Proactividad'].map((fortaleza) => (
                  <div key={fortaleza} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700 font-medium">{fortaleza}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna lateral - 1/3 */}
          <div className="space-y-6">
            {/* Espacio para foto */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[3/4] flex items-center justify-center">
                <img 
                  src="/src/components/Documents/image.png" 
                  alt="Diego Álvarez" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-6xl font-bold">DA</div>';
                  }}
                />
              </div>
            </div>

            {/* Datos personales */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-800 mb-4">Información Personal</h3>
              <div className="space-y-3">
                {datosPersonales.map((dato, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-blue-600 mt-1">{dato.icono}</div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">{dato.label}</p>
                      <p className="text-sm font-semibold text-gray-700">{dato.valor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-800 mb-4">Idiomas</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">Español</span>
                    <span className="text-xs text-blue-600">Nativo</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">Inglés</span>
                    <span className="text-xs text-blue-600">Regular</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};export default SobreMi;

