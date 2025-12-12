import React from 'react';
import { AlertTriangle, CheckCircle, Clock, Users, ShieldCheck, Zap, UserCheck } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <>
      {/* SECCIÓN 2: EL PROBLEMA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              El 80% de las empresas pierden oportunidades por datos desordenados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="text-red-500" />
                La Realidad Actual
              </h3>
              <p className="text-slate-600 mb-4">
                Tus datos están en múltiples archivos. Duplicados. Incompletos. Con formatos inconsistentes. Errores que nadie detectó.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 font-bold">×</span> No puedes hacer análisis confiables.
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 font-bold">×</span> Los dashboards muestran información incorrecta.
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 font-bold">×</span> Los modelos de IA fallan.
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 font-bold">×</span> Los reportes generan decisiones equivocadas.
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Mientras tanto, tu competencia ya está usando datos limpios para:
              </h3>
              <ul className="space-y-4">
                {[
                  "Identificar oportunidades que tú no ves",
                  "Automatizar decisiones con IA",
                  "Generar reportes que realmente importan",
                  "Ahorrar horas de trabajo manual"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-green-100 text-green-600">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-blue-50 border-l-4 border-brand-500 rounded-r-lg">
                <p className="text-brand-800 font-medium">
                  El problema no es que no tengas datos. Es que no están listos para usarlos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: LA SOLUCIÓN */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm">La Solución</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">DataClean Pro: Tu equipo de datos especializado</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-12">
            No es un software. No es una herramienta que tengas que aprender. Es un servicio.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
              <div className="w-12 h-12 bg-brand-900 rounded-lg flex items-center justify-center mx-auto mb-4 text-brand-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Envías</h4>
              <p className="text-slate-400">Tus archivos desordenados sin importar el formato.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm relative">
              <div className="absolute top-1/2 -left-4 hidden md:block text-slate-600">→</div>
              <div className="w-12 h-12 bg-brand-900 rounded-lg flex items-center justify-center mx-auto mb-4 text-brand-400">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Procesamos</h4>
              <p className="text-slate-400">Nuestro equipo experto limpia, organiza y valida.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm relative">
              <div className="absolute top-1/2 -left-4 hidden md:block text-slate-600">→</div>
              <div className="w-12 h-12 bg-brand-900 rounded-lg flex items-center justify-center mx-auto mb-4 text-brand-400">
                <CheckCircle size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Recibes</h4>
              <p className="text-slate-400">Un dataset profesional listo para análisis o IA.</p>
            </div>
          </div>

          <p className="text-xl font-medium text-white">
            Nosotros hacemos el trabajo técnico. Tú obtienes datos confiables.<br />
            <span className="text-brand-400 text-lg">Sin complicaciones. Sin sorpresas. Sin curva de aprendizaje.</span>
          </p>
        </div>
      </section>

      {/* SECCIÓN 7: DIFERENCIALES (Why Choose Us) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Lo que nos diferencia</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               {
                 icon: <Clock className="text-brand-600" size={24} />,
                 title: "Rapidez",
                 desc: "Resultados en días, no semanas. Nuestro equipo trabaja enfocado exclusivamente en tu proyecto."
               },
               {
                 icon: <Users className="text-brand-600" size={24} />,
                 title: "Asesoría Humana",
                 desc: "Hablas con expertos, no con chatbots. Te explicamos qué encontramos y por qué lo limpiamos así."
               },
               {
                 icon: <ShieldCheck className="text-brand-600" size={24} />,
                 title: "Profesional",
                 desc: "Equipo experto en datos. Procesos documentados. Garantía de calidad en cada entrega."
               },
               {
                 icon: <UserCheck className="text-brand-600" size={24} />,
                 title: "Ideal PyMEs",
                 desc: "No necesitas contratar a un especialista en datos. Nosotros somos tu equipo de datos externo."
               }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                 <div className="mb-4 bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center">
                   {item.icon}
                 </div>
                 <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-slate-600 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
}