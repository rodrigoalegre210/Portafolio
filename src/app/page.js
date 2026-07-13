import ParticleBackground from "@/components/Three/ParticleBackground";
import BootScreen from "@/components/UI/BootScreen";
import Navbar from "@/components/UI/Navbar";
import Hero from "@/components/UI/Hero";
import AboutSection from "@/components/UI/AboutSection";
import CompanyCarousel from "@/components/UI/CompanyCarousel"; // <-- Importamos el Carrusel
import SkillsSection from "@/components/UI/SkillsSection";
import ProjectsSection from "@/components/UI/ProjectsSection";
import { BootProvider } from "@/components/UI/BootContext";

export default function Home() {
  return (
    <BootProvider>
      <main className="relative w-full bg-[#050505]">
        <BootScreen />
        <Navbar />
        <ParticleBackground />

        {/* SECCIÓN 0: HERO */}
        <Hero />

        {/* SECCIÓN 1: SOBRE MÍ */}
        <AboutSection />

        {/* SECCIÓN EXTRA: CARRUSEL DE EMPRESAS */}
        <CompanyCarousel /> {/* <-- Lo agregamos aquí */}

        {/* SECCIÓN 2: SKILLS */}
        <SkillsSection />

        {/* SECCIÓN 3: PROYECTOS */}
        <ProjectsSection />
      </main>
    </BootProvider>
  );
}