import { Hexagon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Hexagon className="w-8 h-8 text-[#F57C00]" />
            <span className="font-inter font-bold text-xl tracking-tight text-white">
              DALCA COATING
            </span>
          </div>
          <p className="text-gray-400 font-mono text-sm max-w-sm mt-4 leading-relaxed">
            Ingeniería en acabados industriales y recubrimientos de alto rendimiento para proyectos de extrema exigencia.
          </p>
        </div>
        
        <div>
          <h4 className="font-inter font-bold uppercase tracking-wider text-sm mb-6 text-gray-200">
            Sectores
          </h4>
          <ul className="space-y-4 font-mono text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#F57C00] transition-colors">Arquitectura</a></li>
            <li><a href="#" className="hover:text-[#F57C00] transition-colors">Automotriz</a></li>
            <li><a href="#" className="hover:text-[#F57C00] transition-colors">Industrial</a></li>
            <li><a href="#" className="hover:text-[#F57C00] transition-colors">Construcción</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-inter font-bold uppercase tracking-wider text-sm mb-6 text-gray-200">
            Contacto
          </h4>
          <ul className="space-y-4 font-mono text-sm text-gray-400">
            <li>info@dalcacoating.com</li>
            <li>+1 (555) 123-4567</li>
            <li className="pt-4">
              <button className="text-[#F57C00] font-semibold border-b border-[#F57C00]/30 hover:border-[#F57C00] transition-colors pb-1">
                Solicitar Cotización →
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-gray-500 font-mono text-xs">
        <p>© {new Date().getFullYear()} DALCA Coating. Todos los derechos reservados.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
}
