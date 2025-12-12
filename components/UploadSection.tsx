import React, { useState } from 'react';
import { Upload, CheckCircle, FileText, Code } from 'lucide-react';

export default function UploadSection() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API upload
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="upload" className="py-24 bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Copy */}
          <div>
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Empieza Ahora</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">
              Sube tu archivo y recibe un diagnóstico
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              ¿Tienes datos desordenados? No esperes más. Sube tu archivo directamente desde aquí y recibe un diagnóstico profesional sin compromiso en 24 horas.
            </p>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FileText size={20} className="text-brand-500"/> Formatos Aceptados
              </h4>
              <p className="text-slate-500 text-sm">
                Excel (.xlsx, .xls), CSV, TXT, JSON y bases de datos pequeñas (.db, .accdb). 
                <br/>Tamaño máximo recomendado: 500MB.
              </p>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm">
              <span className="font-bold">Nota:</span>
              <p>Tus datos están protegidos por encriptación SSL y acuerdos de confidencialidad estrictos.</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                  <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="Tu nombre" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                  <input type="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="tu@empresa.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Limpieza</label>
                  <select required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white">
                    <option value="">Selecciona una opción...</option>
                    <option value="basica">Limpieza básica</option>
                    <option value="integracion">Integración de múltiples archivos</option>
                    <option value="ia">Preparación para IA</option>
                    <option value="consultoria">No estoy seguro (asesoría incluida)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Archivo</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg hover:bg-slate-50 transition-colors relative">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-slate-400" />
                      <div className="flex text-sm text-slate-600 justify-center">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-brand-600 hover:text-brand-500 focus-within:outline-none">
                          <span>Sube un archivo</span>
                          <input type="file" className="sr-only" onChange={handleFileChange} required />
                        </label>
                      </div>
                      <p className="text-xs text-slate-500">
                        {fileName ? <span className="text-brand-600 font-semibold">{fileName}</span> : "XLS, CSV, JSON hasta 500MB"}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Descripción del problema (Opcional)</label>
                  <textarea rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder='Ej: "Tengo datos duplicados en 3 archivos diferentes..."'></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-3 px-4 rounded-lg text-white font-bold text-lg shadow-lg transition-all ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-brand-600 hover:bg-brand-700 hover:shadow-brand-500/30'}`}
                >
                  {loading ? 'Enviando...' : 'Enviar Archivo'}
                </button>
              </form>
            ) : (
              <div className="text-center py-10 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">¡Archivo Enviado con Éxito!</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Tu archivo ha sido recibido. Nuestro equipo experto lo revisará en las próximas 24 horas y te contactará al correo proporcionado con un diagnóstico, plan de limpieza y presupuesto.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-500">
                  ¿Tienes dudas urgentes? Escríbenos a <span className="font-semibold text-brand-600">soporte@dataclean.pro</span>
                </div>
                <button onClick={() => {setSubmitted(false); setFileName('');}} className="mt-8 text-brand-600 font-medium hover:underline">
                  Enviar otro archivo
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Technical Instructions Toggle (For Demo Purposes as per prompt requirements) */}
        <div className="mt-20 border-t border-slate-200 pt-10">
          <button 
            onClick={() => setShowInstructions(!showInstructions)}
            className="flex items-center gap-2 text-slate-400 hover:text-brand-600 transition-colors text-sm font-mono mx-auto"
          >
            <Code size={16} />
            {showInstructions ? 'Ocultar Guía de Implementación Técnica' : 'Ver Guía de Implementación Técnica (Admin)'}
          </button>

          {showInstructions && (
            <div className="mt-8 bg-slate-900 text-slate-300 p-8 rounded-xl font-mono text-sm overflow-hidden">
               <h3 className="text-white font-bold text-lg mb-4 border-b border-slate-700 pb-2">Instrucciones Técnicas de Implementación</h3>
               
               <div className="grid md:grid-cols-2 gap-8">
                 <div>
                   <h4 className="text-brand-400 font-bold mb-2">Recomendación: WIX (Opción Pro)</h4>
                   <ol className="list-decimal list-inside space-y-2 text-slate-400">
                     <li>En editor Wix: Agregar &gt; Formularios &gt; "Formulario en blanco".</li>
                     <li>Añadir campos: Texto (Nombre), Email, Dropdown (Tipo), Carga de archivos.</li>
                     <li>Configuración de Carga: Permitir Excel, CSV, JSON. Max 500MB.</li>
                     <li>Destino: "Enviar a correo y bandeja interna".</li>
                     <li>Confirmación: Configurar "Mostrar mensaje personalizado" con el texto de éxito mostrado arriba.</li>
                   </ol>
                 </div>
                 <div>
                   <h4 className="text-brand-400 font-bold mb-2">Alternativas</h4>
                   <ul className="space-y-2 text-slate-400">
                     <li><strong>Google Forms:</strong> Gratis, fácil. Incrustar vía HTML iframe. Datos van a Sheets. Límite 25MB.</li>
                     <li><strong>Typeform:</strong> UX superior. Requiere plan pago para lógica avanzada. Incrustar código.</li>
                     <li><strong>JotForm:</strong> Potente para archivos grandes. Incrustar script en HTML.</li>
                   </ul>
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}