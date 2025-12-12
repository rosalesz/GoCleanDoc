import React from 'react';
import { ArrowRight, FileCheck, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-400 text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          Especialistas en Limpieza de Datos B2B
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
          Convierte el caos de datos en <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">inteligencia empresarial</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          GoCleanDoc prepara tus datos para análisis, reportes y IA. Sin complicaciones técnicas.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#upload" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-500 transition-all shadow-lg shadow-brand-900/50 flex items-center justify-center gap-2"
          >
            Analiza tu archivo gratis
            <ArrowRight size={20} />
          </a>
          <a 
            href="#proceso" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-slate-200 font-semibold rounded-lg hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            Ver cómo funciona
            <Play size={20} className="fill-current" />
          </a>
        </div>

        {/* Floating cards simulation */}
        <div className="mt-16 relative mx-auto max-w-4xl hidden lg:block opacity-80">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 backdrop-blur-sm transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 absolute top-0 left-0 z-0">
            <div className="flex items-center gap-4 font-mono text-sm text-slate-300">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="flex-1 truncate">clientes_raw_2024.csv</div>
              <div className="text-red-400">Duplicados: 2,400</div>
            </div>
          </div>
          <div className="bg-slate-800/80 border border-brand-500/30 rounded-xl p-4 backdrop-blur-sm transform translate-y-8 z-20 shadow-2xl max-w-lg mx-auto">
             <div className="flex items-center gap-4 font-mono text-sm text-white">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="flex-1 font-semibold text-brand-300">dataset_clean_ia_ready.json</div>
              <div className="text-green-400 flex items-center gap-1">
                <span className="text-xs bg-green-500/20 px-2 py-0.5 rounded">100% IA Ready</span>
              </div>
            </div>
          </div>
           <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 backdrop-blur-sm transform rotate-[2deg] hover:rotate-0 transition-transform duration-500 absolute top-0 right-0 z-0">
            <div className="flex items-center gap-4 font-mono text-sm text-slate-300">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="flex-1 truncate">ventas_q3_incompleto.xlsx</div>
              <div className="text-yellow-400">Nulos: 15%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}