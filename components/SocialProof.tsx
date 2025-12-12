import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Quote } from 'lucide-react';

export default function SocialProof() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const cases = [
    {
      title: "E-Commerce con Múltiples Fuentes",
      before: ["3 archivos diferentes", "2,400 duplicados", "Fechas inconsistentes"],
      after: ["1 dataset unificado", "0 duplicados", "Datos 100% completos"],
      result: "Identificaron que el 35% de sus ventas venían de un canal que no sabían que era rentable."
    },
    {
      title: "Empresa de Servicios (Datos Heredados)",
      before: ["DB antigua (8 años)", "Clientes duplicados", "Contactos inconsistentes"],
      after: ["Base limpia consolidada", "Clientes únicos", "Segmentación funcional"],
      result: "Redujeron costos de marketing en 40% al dirigirse a los clientes correctos."
    },
    {
      title: "Startup preparándose para IA",
      before: ["5 CSVs inconsistentes", "Valores nulos", "No apto para ML"],
      after: ["Dataset optimizado ML", "Documentación técnica", "Métricas de calidad"],
      result: "Lanzaron su modelo de IA 3 semanas antes de lo planeado."
    }
  ];

  const faqs = [
    { q: "¿Cuánto tiempo tarda la limpieza de datos?", a: "Depende de la complejidad. Pequeños: 3-5 días. Medianos: 5-7 días. Complejos: 7-10 días." },
    { q: "¿Qué formatos de archivo aceptan?", a: "Excel (.xlsx, .xls), CSV, TXT, JSON, y bases de datos pequeñas (SQLite, Access)." },
    { q: "¿Hay límite de tamaño de archivo?", a: "Idealmente hasta 500MB. Si es más grande, podemos dividir el trabajo." },
    { q: "¿Qué pasa si no me gusta el resultado?", a: "Incluimos revisiones. Si tras los ajustes no estás satisfecho, discutimos opciones." },
    { q: "¿Mis datos están seguros?", a: "Sí. Encriptación, servidores seguros y acuerdos de confidencialidad. No compartimos con terceros." },
    { q: "¿Necesito conocimientos técnicos?", a: "No. Entregamos datos listos para usar con documentación clara." },
    { q: "¿Puedo hacer cambios después?", a: "Sí. Planes superiores incluyen soporte post-entrega (hasta 14 días)." },
    { q: "¿Ofrecen servicio recurrente?", a: "Sí, podemos crear un plan mensual personalizado." }
  ];

  return (
    <>
      {/* SECCIÓN 8: CASOS DE EJEMPLO */}
      <section id="casos" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Transformaciones reales de datos</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
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
               { quote: "DataClean Pro nos entregó un dataset limpio en una semana. Ahora nuestros dashboards funcionan perfectamente.", author: "María García", role: "Gerente Operaciones, TechVentures Latam" },
               { quote: "El equipo fue muy profesional, nos explicó todo claramente. El precio fue justo y el trabajo rápido.", author: "Carlos Mendoza", role: "Fundador, E-Commerce Solutions" },
               { quote: "No solo limpiaron los datos, sino que nos asesoraron sobre cómo estructurarlos mejor para IA.", author: "Sofía Rodríguez", role: "Data Analyst, Innovatech Consulting" }
             ].map((t, i) => (
               <div key={i} className="bg-slate-800 p-8 rounded-xl relative">
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