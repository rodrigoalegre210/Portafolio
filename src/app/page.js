import ParticleBackground from "@/components/Three/ParticleBackground";
import BootScreen from "@/components/UI/BootScreen";
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
      <BootScreen />
      <Navbar />
      <ParticleBackground />

      {/* SECCIÓN 0: HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen pointer-events-none py-20 px-6">

        {/* Nombre */}
        <h1 className={`${orbitron.className} text-center text-5xl md:text-8xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-cyan-400 to-cyan-800 drop-shadow-[0_0_25px_rgba(0,243,255,0.5)]`}>
          RODRIGO ALEGRE
        </h1>

        {/* Rol */}
        <div className="flex items-center gap-4 mt-6 font-mono">
          <span className="w-8 md:w-12 h-[1px] bg-cyan-500/50"></span>
          <p className="text-cyan-100 text-xs md:text-base tracking-[0.25em]">
            CIENTÍFICO DE DATOS <span className="text-cyan-500">//</span> DESARROLLADOR DE IA
          </p>
          <span className="w-8 md:w-12 h-[1px] bg-cyan-500/50"></span>
        </div>

        {/* Propuesta de valor */}
        <p className="mt-8 max-w-2xl text-center font-mono text-sm md:text-base text-cyan-100/70 leading-relaxed">
          Construyo soluciones de <span className="text-cyan-300">datos e IA</span> que resuelven problemas reales y llegan a producción — no solo prototipos.
        </p>

        {/* Botones de acción */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
          <a
            href="#projects"
            className={`${orbitron.className} group relative px-8 py-3 font-bold text-xs md:text-sm tracking-widest text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.7)]`}
          >
            VER PROYECTOS
          </a>
          <a
            href="#about"
            className={`${orbitron.className} px-8 py-3 font-bold text-xs md:text-sm tracking-widest text-cyan-300 border border-cyan-500/50 hover:border-cyan-300 hover:bg-cyan-500/10 transition-all`}
          >
            REGISTRO DE IDENTIDAD
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-24 flex flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-cyan-500/50 animate-pulse">
          <span>DESPLAZAR PARA ACCEDER</span>
          <span className="text-lg leading-none">▼</span>
        </div>

        {/* Pie decorativo */}
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