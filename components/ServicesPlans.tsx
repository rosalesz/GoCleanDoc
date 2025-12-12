import React from 'react';
import { Layers, FileSpreadsheet, GitMerge, BrainCircuit, clipboardCheck, FileCheck, Check, Search, Cog, Send, Shield } from 'lucide-react';

export default function ServicesPlans() {
  const services = [
    { title: "Limpieza y Depuración", desc: "Eliminamos espacios, caracteres especiales, inconsistencias y valores inválidos." },
    { title: "Eliminación de Duplicados", desc: "Identificamos y removemos registros duplicados sin perder información valiosa." },
    { title: "Estandarización", desc: "Unificamos formatos de fechas, números, textos y categorías." },
    { title: "Corrección de Errores", desc: "Detectamos y corregimos valores faltantes e inconsistencias lógicas." },
    { title: "Integración de Archivos", desc: "Combinamos datos de múltiples fuentes en una única fuente confiable." },
    { title: "Preparación para IA", desc: "Estructuramos datos específicamente para modelos de ML e IA." },
    { title: "Validación de Calidad", desc: "Verificamos estándares de precisión y completitud antes de entregar." },
    { title: "Reporte y Documentación", desc: "Entregamos documentación sobre estructura, cambios y uso de los datos." }
  ];

  return (
    <>
      {/* SECCIÓN 4: SERVICIOS */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Cobertura completa de preparación de datos</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="group p-6 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all cursor-default">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <Layers size={20} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: PLANES */}
      <section id="planes" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Elige el plan que se ajuste a tu necesidad</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900">DataClean Básico</h3>
              <p className="text-slate-500 text-sm mt-2 mb-6">Para empresas con datasets pequeños o puntuales</p>
              <div className="text-4xl font-bold text-slate-900 mb-6">
                <span className="text-lg font-normal text-slate-500">Desde</span> $99 <span className="text-lg font-normal text-slate-500">USD</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Limpieza y depuración",
                  "Eliminación de duplicados",
                  "Estandarización básica",
                  "Validación de calidad",
                  "Entrega en 3-5 días hábiles"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <Check size={16} className="text-brand-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#upload" className="w-full py-3 text-center rounded-lg border border-slate-300 font-semibold hover:bg-slate-50 transition-colors text-slate-700">
                Solicitar Presupuesto
              </a>
            </div>

            {/* Plan 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-brand-500 relative flex flex-col transform lg:-translate-y-4">
              <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MÁS POPULAR
              </div>
              <h3 className="text-2xl font-bold text-slate-900">DataClean Integra</h3>
              <p className="text-slate-500 text-sm mt-2 mb-6">Para empresas con múltiples fuentes de datos</p>
              <div className="text-4xl font-bold text-slate-900 mb-6">
                <span className="text-lg font-normal text-slate-500">Desde</span> $299 <span className="text-lg font-normal text-slate-500">USD</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Todo lo del plan Básico",
                  "Integración de hasta 3 archivos",
                  "Corrección avanzada de errores",
                  "Reporte antes y después",
                  "Documentación del dataset",
                  "Entrega en 5-7 días hábiles",
                  "Revisión y ajustes incluidos"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <Check size={16} className="text-brand-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#upload" className="w-full py-3 text-center rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors">
                Solicitar Presupuesto
              </a>
            </div>

            {/* Plan 3 */}
            <div className="bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700 flex flex-col text-white">
              <h3 className="text-2xl font-bold">DataClean Pro IA-Ready</h3>
              <p className="text-slate-400 text-sm mt-2 mb-6">Para empresas que usan o planean usar IA</p>
              <div className="text-4xl font-bold mb-6">
                <span className="text-lg font-normal text-slate-400">Desde</span> $799 <span className="text-lg font-normal text-slate-400">USD</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Todo lo del plan Integra",
                  "Preparación especializada para IA/ML",
                  "Integración de hasta 5 archivos",
                  "Análisis de calidad avanzado",
                  "Documentación técnica completa",
                  "Soporte post-entrega (14 días)",
                  "Entrega en 7-10 días hábiles",
                  "Consultoría sobre estructura"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-brand-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#upload" className="w-full py-3 text-center rounded-lg bg-slate-700 font-semibold hover:bg-slate-600 transition-colors text-white">
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: PROCESO */}
      <section id="proceso" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Cuatro pasos simples hacia datos limpios</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-200 z-0"></div>

            {[
              { 
                step: "01", 
                title: "Envío de Archivos", 
                desc: "Subes tus archivos (Excel, CSV, TXT, JSON, DB). Sin complicaciones.",
                icon: <Send size={24} className="text-white" />
              },
              { 
                step: "02", 
                title: "Diagnóstico", 
                desc: "Analizamos problemas, calculamos alcance y presentamos plan en 24h.",
                icon: <Search size={24} className="text-white" />
              },
              { 
                step: "03", 
                title: "Limpieza", 
                desc: "Depuramos, estandarizamos y validamos cada dato según el plan.",
                icon: <Cog size={24} className="text-white" />
              },
              { 
                step: "04", 
                title: "Entrega Final", 
                desc: "Recibes tu dataset limpio, documentado y validado.",
                icon: <Shield size={24} className="text-white" />
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-slate-50">
                  <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}