import React from 'react';
import { Database, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20">
      {/* SECCIÓN 12: CTA FINAL */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20 border-b border-slate-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Tus datos limpios están a un clic de distancia</h2>
        <p className="text-xl text-slate-400 mb-10">
          No esperes más a que tus datos te frenen. Cada día que pases con información desordenada es dinero que pierdes en decisiones incorrectas.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <a 
            href="#upload" 
            className="px-8 py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-500 transition-all shadow-lg hover:shadow-brand-500/50"
          >
            Solicitar Diagnóstico Gratis
          </a>
          <a 
            href="#planes" 
            className="px-8 py-4 bg-transparent border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 hover:text-white transition-all"
          >
            Ver Planes
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">No hay compromiso. No hay sorpresas.</p>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg text-white">
                <Database size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">DataClean <span className="text-brand-500 font-light">Pro</span></span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Servicio especializado en limpieza y preparación de datos para PyMEs y emprendedores. Preparamos tu información para el futuro de la IA.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Limpieza de Datos</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Preparación IA</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Integración</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Validación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Confidencialidad</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 DataClean Pro. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20}/></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20}/></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail size={20}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}