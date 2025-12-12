import React from 'react';
import { Database, Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20">
      {/* SECCIÓN 12: CTA FINAL */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20 border-b border-slate-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Empieza hoy. Datos limpios en días.</h2>
        <p className="text-xl text-slate-400 mb-10">
          No esperes más. Tus datos están listos para ser transformados en activos valiosos.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <a 
            href="#upload" 
            className="px-8 py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-500 transition-all shadow-lg hover:shadow-brand-500/50"
          >
            Analiza tu archivo gratis
          </a>
          <a 
            href="#planes" 
            className="px-8 py-4 bg-transparent border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 hover:text-white transition-all"
          >
            Ver planes y precios
          </a>
        </div>
        <div className="mt-8">
           <a href="#" className="text-brand-400 text-sm hover:underline">Habla con un especialista</a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg text-white">
                <Database size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">GoClean<span className="text-brand-500 font-light">Doc</span></span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Especialistas en limpieza y preparación de datos para empresas. Transformamos datos crudos en datasets listos para inteligencia artificial y análisis.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-400 transition-colors">Servicios</a></li>
              <li><a href="#planes" className="hover:text-brand-400 transition-colors">Planes</a></li>
              <li><a href="#proceso" className="hover:text-brand-400 transition-colors">Proceso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 GoCleanDoc. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20}/></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20}/></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}