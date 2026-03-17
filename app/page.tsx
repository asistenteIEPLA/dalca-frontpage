import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import Footer from "@/components/Footer";
import { CheckCircle2, Factory, Shield, Award, Settings, Building2, CarFront, Construction } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <HeroCanvas />

      {/* SECTORES */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:text-center">
            <h2 className="font-inter font-black text-deep-onyx text-4xl md:text-5xl uppercase tracking-tight">Sectores Industriales</h2>
            <div className="h-1.5 w-24 bg-primary-orange mt-6 md:mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Arquitectura", icon: <Building2 className="w-10 h-10 text-primary-orange mb-4" />, desc: "Perfiles, cancelería y estructuras con la máxima resistencia a la intemperie (Qualicoat)." },
              { title: "Automotriz", icon: <CarFront className="w-10 h-10 text-primary-orange mb-4" />, desc: "Componentes automotrices con recubrimientos técnicos que superan pruebas de cámara salina." },
              { title: "Industrial", icon: <Factory className="w-10 h-10 text-primary-orange mb-4" />, desc: "Maquinaria pesada, válvulas y estructuras expuestas a ambientes químicos severos." },
              { title: "Construcción", icon: <Construction className="w-10 h-10 text-primary-orange mb-4" />, desc: "Estructuras metálicas, andamios y sistemas de soporte con protección anticorrosiva." }
            ].map((sector, idx) => (
              <div key={idx} className="bg-white border-t-4 border-t-primary-orange shadow-sm p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {sector.icon}
                <h3 className="font-inter font-bold text-xl text-deep-onyx mb-3">{sector.title}</h3>
                <p className="font-mono flex-1 text-sm text-gray-500 leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-deep-slate py-24 px-6 border-y border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          {[
            { value: "500k+", label: "m² Aplicados", icon: <Settings className="opacity-20 hidden md:block w-32 h-32 absolute -right-4 -bottom-4" /> },
            { value: "ISO 9001", label: "Certificación", icon: <Shield className="opacity-20 hidden md:block w-32 h-32 absolute -right-4 -bottom-4" /> },
            { value: "10 Años", label: "De Garantía", icon: <Award className="opacity-20 hidden md:block w-32 h-32 absolute -right-4 -bottom-4" /> }
          ].map((stat, idx) => (
            <div key={idx} className="relative overflow-hidden w-full p-8 border border-gray-800 bg-gray-900/40 min-h-[160px] flex flex-col justify-center">
              {stat.icon}
              <div className="relative z-10">
                <p className="font-inter font-black text-5xl md:text-6xl text-primary-orange mb-2 tracking-tight">{stat.value}</p>
                <p className="font-mono text-white/50 text-lg uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-background py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-inter font-black text-deep-onyx text-4xl md:text-5xl uppercase tracking-tight">Proceso de Excelencia</h2>
            <div className="h-1.5 w-24 bg-primary-orange mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-gray-200 z-0"></div>
            
            {[
              { step: "01", title: "Preparación", desc: "Granallado y tratamiento químico (fosfatizado y desengrase) para máxima adherencia." },
              { step: "02", title: "Recubrimiento", desc: "Aplicación electrostática en cabinas automatizadas de última generación." },
              { step: "03", title: "Curado", desc: "Termofijación en horno programable con control exacto de curva térmica." },
              { step: "04", title: "Control", desc: "Pruebas de de espesor, impacto, cuadriculaje y cámara salina." }
            ].map((process, idx) => (
              <div key={idx} className="relative z-10 flex flex-col pt-2">
                <div className="w-14 h-14 bg-white border-2 border-primary-orange rounded-full flex items-center justify-center font-inter font-black text-primary-orange text-xl mb-6 shadow-sm">
                  {process.step}
                </div>
                <h3 className="font-inter font-bold text-xl text-deep-onyx mb-3">{process.title}</h3>
                <p className="font-mono text-sm text-gray-500 leading-relaxed pr-6">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-orange py-32 px-6 text-center shadow-[inset_0_20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-inter font-black text-white text-4xl md:text-6xl uppercase tracking-tighter mb-10 drop-shadow-md">
            ¿Listo para elevar<br />tu estándar?
          </h2>
          <button className="bg-white text-primary-orange font-bold font-mono px-10 py-5 text-lg uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300 shadow-xl group flex items-center gap-3 mx-auto">
            Hablar con un Experto
            <CheckCircle2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
