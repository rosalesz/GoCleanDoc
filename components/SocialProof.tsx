import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Quote } from 'lucide-react';

export default function SocialProof() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const cases = [
    {
      title: "Caso 1: Empresa de E-commerce",
      before: ["150,000 registros de clientes", "Duplicados y fechas mixtas", "Reportes imprecisos"],
      after: ["Dataset de 127,000 únicos", "Estandarización completa", "Validación de emails"],
      result: "Reducción de 40% en tiempo de análisis mensual."
    },
    {
      title: "Caso 2: Empresa de Recursos Humanos",
      before: ["Datos en 3 Excels diferentes", "Nombres inconsistentes", "Monedas mezcladas"],
      after: ["Base de datos única", "Diccionario de datos creado", "Auditoría mejorada"],
      result: "Dashboards de RRHH precisos y confiables."
    },
    {
      title: "Caso 3: Startup de IA",
      before: ["500,000 registros crudos", "Variables sin codificar", "Outliers no identificados"],
      after: ["Normalización avanzada", "Balanceo de clases", "Documentación técnica"],
      result: "Modelo entrenó 40% más rápido con 15% mejor precisión."
    }
  ];

  const faqs = [
    { q: "¿Qué formatos de archivo aceptan?", a: "Excel (.xlsx, .xls), CSV, TXT, JSON, bases de datos pequeñas (.db, .accdb) y URLs de repositorios (GitHub, GitLab, Kaggle, Google Drive, Dropbox)." },
    { q: "¿Cuál es el tamaño máximo de archivo?", a: "Recomendamos hasta 500MB. Archivos más grandes requieren consulta previa." },
    { q: "¿Cuánto tiempo tarda?", a: "Depende del plan: Básico (2-3 días), Integra (3-5 días), IA-Ready (5-7 días hábiles)." },
    { q: "¿Qué pasa con mis datos? ¿Son confidenciales?", a: "Sí. Todos los datos se procesan bajo estricta confidencialidad. Usamos servidores seguros y eliminamos archivos después de entrega." },
    { q: "¿Puedo subir datos desde una URL?", a: "Sí. Aceptamos URLs de GitHub, GitLab, Kaggle, Google Drive, Dropbox y otros repositorios. El sistema descarga y procesa automáticamente." },
    { q: "¿Incluye soporte después de la entrega?", a: "Sí. Respondemos preguntas sobre el dataset entregado y realizamos ajustes menores si es necesario." },
    { q: "¿Puedo usar los datos para IA/Machine Learning?", a: "Sí. El plan IA-Ready está específicamente diseñado para esto. Incluye normalización, codificación de variables y preparación técnica completa." },
    { q: "¿Qué sucede si encuentran problemas graves en mis datos?", a: "Te lo comunicamos inmediatamente. Incluimos un diagnóstico detallado y recomendaciones antes de proceder." }
  ];

  return (
    <>
      {/* SECCIÓN 8: CASOS DE EJEMPLO */}
      <section id="casos" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Resultados reales de nuestros clientes</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="p-6 border-b border-slate-100 bg-slate-50">
                  <h3 className="font-bold text-slate-900">{c.title}</h3>
                </div>
                <div className="p-6 space-y-4 flex-1">
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wide">Antes</span>
                    <ul className="list-disc list-inside text-sm text-slate-600 mt-1">
                      {c.before.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Después</span>
                    <ul className="list-disc list-inside text-sm text-slate-600 mt-1">
                      {c.after.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-indigo-50 border-t border-indigo-100">
                  <p className="text-sm text-indigo-900 font-medium"><strong>Resultado:</strong> {c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 9: TESTIMONIOS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { quote: "Teníamos datos de clientes esparcidos en 5 archivos diferentes. GoCleanDoc los consolidó, limpió y documentó en una semana. Ahora nuestros reportes son confiables y nuestro equipo ahorra 20 horas mensuales.", author: "María González", role: "Directora de Datos, TechVentas" },
               { quote: "Intentamos limpiar nuestros datos internamente. Gastamos 3 meses y aún había inconsistencias. GoCleanDoc lo hizo bien en 5 días. La documentación que incluyen es invaluable.", author: "Carlos Rodríguez", role: "CEO, Logística Plus" },
               { quote: "Necesitábamos preparar datos para un modelo de machine learning. GoCleanDoc no solo limpió, sino que preparó específicamente para IA. El modelo entrenó 40% más rápido.", author: "Laura Martínez", role: "Data Scientist, InnovaAI" }
             ].map((t, i) => (
               <div key={i} className="bg-slate-800 p-8 rounded-xl relative hover:bg-slate-750 transition-colors">
                 <Quote className="text-brand-500 absolute top-6 left-6 opacity-30" size={40} />
                 <p className="text-slate-300 relative z-10 mb-6 italic">"{t.quote}"</p>
                 <div>
                   <p className="font-bold text-white">{t.author}</p>
                   <p className="text-sm text-brand-400">{t.role}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* SECCIÓN 10: FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="font-semibold text-slate-800">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} className="text-slate-500"/> : <ChevronDown size={20} className="text-slate-500"/>}
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-white text-slate-600 border-t border-slate-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}