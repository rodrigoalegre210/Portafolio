import ParticleBackground from "@/components/Three/ParticleBackground";
import Navbar from "@/components/UI/Navbar";
import AboutSection from "@/components/UI/AboutSection";
import CompanyCarousel from "@/components/UI/CompanyCarousel"; // <-- Importamos el Carrusel
import SkillsSection from "@/components/UI/SkillsSection";
import ProjectsSection from "@/components/UI/ProjectsSection";

import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"] 
});

export default function Home() {
  return (
    <main className="relative w-full bg-[#050505]">
      <Navbar />
      <ParticleBackground />

      {/* SECCIÓN 0: HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen pointer-events-none py-20">
        {/* ... (Tu código de Iniciando queda igual) ... */}
        <h1 className={`${orbitron.className} text-5xl md:text-7xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-700 drop-shadow-[0_0_20px_rgba(0,243,255,0.6)]`}>
          INICIANDO
        </h1>
        <div className="flex items-center gap-4 mt-6 font-mono">
          <span className="w-12 h-[1px] bg-cyan-500/50"></span>
          <p className="text-cyan-200 text-sm tracking-widest animate-pulse">
            CONECTANDO AL SERVIDOR...
          </p>
          <span className="w-12 h-[1px] bg-cyan-500/50"></span>
        </div>
        <div className="absolute bottom-10 flex w-full justify-between px-10 text-xs font-mono text-cyan-500/50">
          <span>SYS.OP // V_1.0.4</span>
          <span>ESTADO: SEGURO</span>
        </div>
      </section>

      {/* SECCIÓN 1: SOBRE MÍ */}
      <AboutSection />

      {/* SECCIÓN EXTRA: CARRUSEL DE EMPRESAS */}
      <CompanyCarousel /> {/* <-- Lo agregamos aquí */}

      {/* SECCIÓN 2: SKILLS */}
      <SkillsSection />
      
      {/* SECCIÓN 3: PROYECTOS */}
      <ProjectsSection />

    </main>
  );
}