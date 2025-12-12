import React, { useState, useEffect } from 'react';
import { Database, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Planes', href: '#planes' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Casos', href: '#casos' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-brand-600 p-1.5 rounded-lg text-white group-hover:bg-brand-700 transition-colors">
                <Database size={24} />
              </div>
              <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                GoClean<span className="text-brand-600 font-light">Doc</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-brand-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#upload" 
              className="px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-full hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/25"
            >
              Analiza tu archivo gratis
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-md ${scrolled ? 'text-slate-600' : 'text-slate-900 lg:text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#upload"
              className="block w-full text-center mt-4 px-5 py-3 bg-brand-600 text-white font-semibold rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Analiza tu archivo gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}