import React from 'react';
import { Layers, FileSpreadsheet, GitMerge, BrainCircuit, Check, Search, Cog, Send, Shield, FileText, Database } from 'lucide-react';

export default function ServicesPlans() {
  const services = [
    { 
      title: "Limpieza de datos", 
      desc: "Eliminamos duplicados, corregimos inconsistencias, estandarizamos formatos. Cada registro se valida contra reglas de calidad.",
      icon: <Layers size={20} />
    },
    { 
      title: "Organización y estructuración", 
      desc: "Reorganizamos datos en esquemas lógicos, normalizamos nombres de columnas, creamos relaciones entre tablas.",
      icon: <FileSpreadsheet size={20} />
    },
    { 
      title: "Validación automática", 
      desc: "Ejecutamos pruebas exhaustivas: rangos de valores, tipos de datos, integridad referencial, detección de anomalías.",
      icon: <Shield size={20} />
    },
    { 
      title: "Documentación completa", 
      desc: "Incluimos diccionario de datos, metadatos, notas sobre transformaciones realizadas. Tu equipo entiende qué cambió.",
      icon: <FileText size={20} />
    },
    { 
      title: "Integración con repositorios", 
      desc: "Conectamos con GitHub, GitLab, Kaggle, Google Drive, Dropbox. Procesamos desde URLs sin descargas.",
      icon: <Database size={20} />
    },
    { 
      title: "Preparación para IA", 
      desc: "Formateamos datos para ML: normalización, codificación de variables categóricas, manejo de valores faltantes.",
      icon: <BrainCircuit size={20} />
    }
  ];

  return (
    <>
      {/* SECCIÓN 4: SERVICIOS */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Qué hacemos por tus datos</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all cursor-default bg-slate-50 hover:bg-white">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border border-slate-200 group-hover:bg-brand-50 group-hover:border-brand-200 group-hover:text-brand-600 transition-colors shadow-sm">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: PLANES */}
      <section id="planes" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Elige el plan que necesitas</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Plan 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900">GoCleanDoc Básico</h3>
              <p className="text-slate-500 text-sm mt-2 mb-6 h-10">Para empresas con datasets pequeños y limpiezas puntuales.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="text-sm font-semibold text-slate-900 pb-2 border-b border-slate-100">Incluye:</li>
                {[
                  "Limpieza básica",
                  "Eliminación de duplicados",
                  "Validación de tipos de datos",
                  "Tamaño máximo: 50MB",
                  "Entrega: 2-3 días hábiles"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <Check size={16} className="text-brand-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#upload" className="w-full py-3 text-center rounded-lg border-2 border-slate-200 font-bold hover:border-brand-500 hover:text-brand-600 transition-colors text-slate-700">
                Comenzar con Básico
              </a>
            </div>

            {/* Plan 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-brand-500 relative flex flex-col transform lg:-translate-y-4">
              <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                RECOMENDADO
              </div>
              <h3 className="text-2xl font-bold text-slate-900">GoCleanDoc Integra</h3>
              <p className="text-slate-500 text-sm mt-2 mb-6 h-10">Para empresas con múltiples fuentes de datos y análisis frecuentes.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="text-sm font-semibold text-slate-900 pb-2 border-b border-slate-100">Incluye todo lo de Básico más:</li>
                {[
                  "Limpieza avanzada",
                  "Estructuración de datos",
                  "Validación automática",
                  "Documentación completa",
                  "Soporte para URLs",
                  "Tamaño máximo: 200MB",
                  "Entrega: 3-5 días hábiles"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <Check size={16} className="text-brand-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#upload" className="w-full py-3 text-center rounded-lg bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors shadow-lg hover:shadow-brand-500/25">
                Elegir Integra
              </a>
            </div>

            {/* Plan 3 */}
            <div className="bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700 flex flex-col text-white">
              <h3 className="text-2xl font-bold">GoCleanDoc IA-Ready</h3>
              <p className="text-slate-400 text-sm mt-2 mb-6 h-10">Para empresas que preparan datos para machine learning.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="text-sm font-semibold text-slate-300 pb-2 border-b border-slate-700">Incluye todo lo de Integra más:</li>
                {[
                  "Preparación específica para IA",
                  "Normalización avanzada",
                  "Detección de anomalías",
                  "Codificación de variables",
                  "Soporte prioritario",
                  "Tamaño máximo: 500MB",
                  "Entrega: 5-7 días hábiles"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-brand-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#upload" className="w-full py-3 text-center rounded-lg bg-slate-700 font-bold hover:bg-slate-600 transition-colors text-white border border-slate-600">
                Activar IA-Ready
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: PROCESO */}
      <section id="proceso" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Cómo funciona GoCleanDoc</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-200 z-0"></div>

            {[
              { 
                step: "01", 
                title: "Envía tu archivo o URL", 
                desc: "Carga tu Excel, CSV, JSON, base de datos o URL de repositorio. Nuestro sistema recibe y valida el formato.",
                icon: <Send size={24} className="text-white" />
              },
              { 
                step: "02", 
                title: "Diagnóstico automático", 
                desc: "Nuestro agente analiza la estructura, identifica duplicados, detecta inconsistencias y genera un diagnóstico preliminar.",
                icon: <Search size={24} className="text-white" />
              },
              { 
                step: "03", 
                title: "Limpieza y preparación", 
                desc: "Nuestro equipo ejecuta la limpieza según el plan: eliminación de duplicados, estandarización, validación.",
                icon: <Cog size={24} className="text-white" />
              },
              { 
                step: "04", 
                title: "Entrega y soporte", 
                desc: "Recibes tu dataset limpio, validado y documentado. Incluye guía de cambios y soporte.",
                icon: <Shield size={24} className="text-white" />
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center group">
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-slate-50 group-hover:border-brand-50 transition-colors">
                  <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Paso {item.step}: {item.title}</h3>
                <p className="text-sm text-slate-600 px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}