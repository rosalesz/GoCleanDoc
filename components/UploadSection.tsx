import React, { useState, useEffect } from 'react';
import { Upload, CheckCircle, FileText, Code, Link as LinkIcon, AlertCircle, RefreshCw } from 'lucide-react';

export default function UploadSection() {
  const [formState, setFormState] = useState<'idle' | 'analyzing' | 'completed'>('idle');
  const [fileName, setFileName] = useState('');
  const [inputType, setInputType] = useState<'file' | 'url'>('file');
  const [url, setUrl] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  
  // Agent Simulation State
  const [analysisStep, setAnalysisStep] = useState(0);
  const steps = [
    { msg: "Archivo recibido", progress: 20 },
    { msg: "Leyendo estructura...", progress: 40 },
    { msg: "Buscando duplicados...", progress: 60 },
    { msg: "Detectando inconsistencias...", progress: 80 },
    { msg: "Generando diagnóstico preliminar...", progress: 100 },
    { msg: "Análisis completado", progress: 100 }
  ];

  useEffect(() => {
    if (formState === 'analyzing') {
      const timers = [
        setTimeout(() => setAnalysisStep(0), 0),
        setTimeout(() => setAnalysisStep(1), 2000),
        setTimeout(() => setAnalysisStep(2), 4000),
        setTimeout(() => setAnalysisStep(3), 6000),
        setTimeout(() => setAnalysisStep(4), 8000),
        setTimeout(() => {
          setAnalysisStep(5);
          setFormState('completed');
        }, 10000)
      ];
      return () => timers.forEach(clearTimeout);
    } else if (formState === 'idle') {
      setAnalysisStep(0);
    }
  }, [formState]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('analyzing');
  };

  const resetForm = () => {
    setFormState('idle');
    setFileName('');
    setUrl('');
  };

  return (
    <section id="upload" className="py-24 bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Copy */}
          <div>
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Analiza tu archivo ahora</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">
              Sube tu archivo o URL
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Nuestro agente analizará la estructura, identificará problemas y te enviará un diagnóstico preliminar.
            </p>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FileText size={20} className="text-brand-500"/> Formatos Aceptados
              </h4>
              <p className="text-slate-500 text-sm">
                Excel (.xlsx, .xls), CSV, TXT, JSON, bases de datos pequeñas (.db, .accdb).
                <br/>
                <span className="font-semibold text-slate-700">También aceptamos URLs:</span> GitHub, GitLab, Kaggle, Drive, Dropbox.
              </p>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-blue-50 text-blue-900 rounded-lg text-sm border border-blue-100">
              <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
              <p>Tus datos están protegidos por encriptación SSL y acuerdos de confidencialidad estrictos. Eliminamos los archivos después del procesamiento.</p>
            </div>
          </div>

          {/* Right Side: Form & Simulation */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 min-h-[600px] flex flex-col justify-center">
            
            {formState === 'idle' && (
              <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre de la empresa</label>
                  <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="Nombre de tu empresa" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email de contacto</label>
                  <input type="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="tu@empresa.com" />
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Selecciona tu opción</label>
                   <div className="flex gap-4 mb-2">
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input 
                        type="radio" 
                        name="inputType" 
                        className="text-brand-600 focus:ring-brand-500" 
                        checked={inputType === 'file'} 
                        onChange={() => setInputType('file')}
                       />
                       <span className="text-sm text-slate-700">Subir archivo</span>
                     </label>
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input 
                        type="radio" 
                        name="inputType" 
                        className="text-brand-600 focus:ring-brand-500" 
                        checked={inputType === 'url'}
                        onChange={() => setInputType('url')}
                       />
                       <span className="text-sm text-slate-700">Pegar URL de repositorio</span>
                     </label>
                   </div>
                </div>

                {inputType === 'file' ? (
                   <div>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg hover:bg-slate-50 transition-colors relative">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-10 w-10 text-slate-400" />
                        <div className="flex text-sm text-slate-600 justify-center">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-brand-600 hover:text-brand-500 focus-within:outline-none">
                            <span>Sube un archivo</span>
                            <input type="file" className="sr-only" onChange={handleFileChange} required />
                          </label>
                        </div>
                        <p className="text-xs text-slate-500">
                          {fileName ? <span className="text-brand-600 font-semibold">{fileName}</span> : "XLS, CSV, JSON, DB hasta 500MB"}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LinkIcon className="h-5 w-5 text-slate-400" />
                      </div>
                      <input 
                        type="url" 
                        required 
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full pl-10 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                        placeholder="https://github.com/usuario/dataset" 
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Plan que te interesa</label>
                  <select required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white">
                    <option value="">Selecciona una opción...</option>
                    <option value="basico">GoCleanDoc Básico</option>
                    <option value="integra">GoCleanDoc Integra</option>
                    <option value="ia-ready">GoCleanDoc IA-Ready</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje adicional (Opcional)</label>
                  <textarea rows={2} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="Cuéntanos sobre tus datos o necesidades específicas..."></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 px-4 rounded-lg text-white font-bold text-lg shadow-lg bg-brand-600 hover:bg-brand-700 hover:shadow-brand-500/30 transition-all"
                >
                  Analizar mi archivo
                </button>
              </form>
            )}

            {formState === 'analyzing' && (
              <div className="text-center py-10 animate-fade-in space-y-8">
                 <div className="w-24 h-24 mx-auto relative flex items-center justify-center">
                    <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                    <div 
                      className="absolute inset-0 border-4 border-brand-500 rounded-full border-t-transparent animate-spin"
                      style={{ animationDuration: '1.5s' }}
                    ></div>
                    <RefreshCw className="text-brand-500 animate-pulse" size={40} />
                 </div>
                 
                 <div className="space-y-4 max-w-sm mx-auto">
                    <h3 className="text-xl font-bold text-slate-900 transition-all duration-300">
                      {steps[analysisStep].msg}
                    </h3>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-brand-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `${steps[analysisStep].progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-slate-500">Por favor no cierres esta ventana.</p>
                 </div>
              </div>
            )}

            {formState === 'completed' && (
              <div className="text-center py-6 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">¡Análisis Completado!</h3>
                <p className="text-slate-600 mb-6 leading-relaxed px-4">
                  El diagnóstico final llegará a tu correo en <strong>24 horas</strong>.
                  <br/><br/>
                  Mientras tanto, te enviaremos:
                </p>
                <ul className="text-left max-w-xs mx-auto space-y-2 mb-8 text-sm text-slate-700 bg-slate-50 p-4 rounded-lg">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Resumen preliminar de hallazgos</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Estimación de tiempo según tu plan</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Próximos pasos</li>
                </ul>
                
                <button onClick={resetForm} className="text-brand-600 font-bold hover:underline">
                  Volver a analizar otro archivo
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Technical Instructions Toggle */}
        <div className="mt-20 border-t border-slate-200 pt-10">
          <button 
            onClick={() => setShowInstructions(!showInstructions)}
            className="flex items-center gap-2 text-slate-400 hover:text-brand-600 transition-colors text-sm font-mono mx-auto"
          >
            <Code size={16} />
            {showInstructions ? 'Ocultar Guía de Implementación Técnica' : 'Ver Guía de Implementación Técnica (Admin)'}
          </button>

          {showInstructions && (
            <div className="mt-8 bg-slate-900 text-slate-300 p-8 rounded-xl font-mono text-xs md:text-sm overflow-hidden">
               <h3 className="text-white font-bold text-lg mb-6 border-b border-slate-700 pb-4">Instrucciones Técnicas de Implementación</h3>
               
               <div className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-6">
                   <div>
                      <h4 className="text-brand-400 font-bold mb-2">Opción 1: Wix (Principal)</h4>
                      <ol className="list-decimal list-inside space-y-1 text-slate-400">
                        <li>Instala "Wix Forms" o "Wix Bookings".</li>
                        <li>Campos: Texto (Empresa), Email, Radio (Archivo/URL), Upload (Max 500MB), Texto (URL), Dropdown (Plan).</li>
                        <li>Automations: Integra con Zapier/Make para simular estados.</li>
                        <li>Frontend: Usa Velo (JS) para la barra de progreso simulada.</li>
                      </ol>
                   </div>
                   <div>
                      <h4 className="text-brand-400 font-bold mb-2">Opción 2: JotForm</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-400">
                        <li>Habilita "File Upload" en configuración.</li>
                        <li>Usa "Conditional Logic" para mostrar mensajes de progreso (Card Layout).</li>
                        <li>Configura "Email Notifications" automáticas.</li>
                      </ul>
                   </div>
                 </div>
                 <div className="space-y-6">
                   <div>
                      <h4 className="text-brand-400 font-bold mb-2">Opción 3: Google Forms</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-400">
                         <li>Usa campo "URL de archivo" (Drive/Dropbox) para evitar login obligatorio de Google.</li>
                         <li>Apps Script: Simula estados del agente en la respuesta.</li>
                         <li>Zapier + Sheets para emails automáticos.</li>
                      </ul>
                   </div>
                    <div>
                      <h4 className="text-brand-400 font-bold mb-2">Opción 4: Typeform</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-400">
                         <li>Usa preguntas secuenciales y "Logic Jumps".</li>
                         <li>Webhooks para enviar datos al backend.</li>
                         <li>Email automático con diagnóstico preliminar.</li>
                      </ul>
                   </div>
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}