import React from 'react';
import { AlertTriangle, CheckCircle, Clock, Database, FileCheck, ShieldCheck, Zap } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <>
      {/* SECCIÓN 2: EL PROBLEMA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Tus datos son un desastre?
            </h2>
            <p className="text-lg text-slate-600">
              La mayoría de empresas tienen datos valiosos atrapados en archivos desorganizados: duplicados, inconsistencias, formatos mixtos, valores faltantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="text-red-500" />
                Esto afecta tu rentabilidad
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 font-bold mt-1">×</span> 
                  <span><strong>Reportes que llegan tarde:</strong> Tiempo perdido en limpieza manual.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 font-bold mt-1">×</span> 
                  <span><strong>Dashboards incorrectos:</strong> Decisiones basadas en información incompleta.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 font-bold mt-1">×</span> 
                  <span><strong>Proyectos de IA fallidos:</strong> Modelos que fracasan por mala data.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 font-bold mt-1">×</span> 
                  <span><strong>Ineficiencia operativa:</strong> Equipos gastando horas en tareas repetitivas.</span>
                </li>
              </ul>
            </div>
            
            <div className="pl-0 md:pl-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                GoCleanDoc resuelve esto en días, no semanas.
              </h3>
              <p className="text-slate-600 mb-6">
                El resultado es tiempo perdido en limpieza manual, análisis imprecisos y decisiones basadas en información incompleta.
              </p>
              <div className="p-6 bg-slate-50 border-l-4 border-brand-500 rounded-r-lg">
                <p className="text-brand-800 font-medium italic">
                  "No puedes construir un negocio inteligente sobre datos sucios."
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
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Tu equipo externo de datos</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-12">
            GoCleanDoc es el servicio que toman empresas cuando necesitan datos listos para trabajar. No somos software genérico. Somos especialistas que entienden tus datos.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-brand-500/50 transition-colors">
              <div className="w-14 h-14 bg-brand-900/50 rounded-lg flex items-center justify-center mx-auto mb-6 text-brand-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-3">1. Subes</h4>
              <p className="text-slate-400 leading-relaxed">Subes tu archivo o URL. Aceptamos Excel, CSV, JSON, bases de datos y repositorios online.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-brand-500/50 transition-colors relative">
              <div className="w-14 h-14 bg-brand-900/50 rounded-lg flex items-center justify-center mx-auto mb-6 text-brand-400">
                <Zap size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">2. Procesamos</h4>
              <p className="text-slate-400 leading-relaxed">Nuestro sistema analiza, diagnostica y prepara. Limpiamos, organizamos y documentamos completamente.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-brand-500/50 transition-colors relative">
              <div className="w-14 h-14 bg-brand-900/50 rounded-lg flex items-center justify-center mx-auto mb-6 text-brand-400">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">3. Recibes</h4>
              <p className="text-slate-400 leading-relaxed">Un dataset profesional, validado y listo para análisis, reportes o inteligencia artificial.</p>
            </div>
          </div>

          <div className="inline-block px-6 py-2 border border-brand-500/30 rounded-full bg-brand-900/20 text-brand-300 font-medium">
            Profesional. Rápido. Confiable.
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: DIFERENCIALES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Por qué elegir GoCleanDoc</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               {
                 icon: <Database className="text-brand-600" size={24} />,
                 title: "Especialistas en datos",
                 desc: "Nuestro equipo entiende limpieza de datos a nivel profesional, no es automatización ciega."
               },
               {
                 icon: <FileCheck className="text-brand-600" size={24} />,
                 title: "Documentación completa",
                 desc: "Sabes exactamente qué cambió, por qué y cómo usar tus datos. Diccionarios de datos incluidos."
               },
               {
                 icon: <Zap className="text-brand-600" size={24} />,
                 title: "Soporte múltiples formatos",
                 desc: "Excel, CSV, JSON, bases de datos, URLs de repositorios online. Todo en un lugar."
               },
               {
                 icon: <ShieldCheck className="text-brand-600" size={24} />,
                 title: "Validación exhaustiva",
                 desc: "Cada dataset se prueba contra reglas de calidad específicas de tu industria antes de entregar."
               },
               {
                 icon: <CheckCircle className="text-brand-600" size={24} />,
                 title: "Preparación para IA",
                 desc: "Si necesitas datos para machine learning, los preparamos correctamente desde el inicio."
               },
               {
                 icon: <Clock className="text-brand-600" size={24} />,
                 title: "Entrega rápida",
                 desc: "De 2 a 7 días según el plan. Sin semanas de espera ni sorpresas."
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