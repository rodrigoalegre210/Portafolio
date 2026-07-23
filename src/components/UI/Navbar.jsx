"use client";

import { useState } from "react";
import { useBoot } from "./BootContext";

const LINKS = [
  { id: "about", label: "01.SOBRE_MI" },
  { id: "skills", label: "02.SKILLS" },
  { id: "projects", label: "03.PROYECTOS" },
];

export default function Navbar() {
  const { booted } = useBoot(); // aparece cuando el sistema se enciende
  const [menuOpen, setMenuOpen] = useState(false); // panel móvil

  // Función avanzada para manejo de scroll
  const handleScroll = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // 1. Obtenemos la altura aproximada de tu Navbar (unos 80px)
      const navbarHeight = 80;

      // 2. Calculamos la distancia exacta desde el techo de la página hasta la sección
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

      // 3. Le restamos la altura de la barra para que no tape el título
      const offsetPosition = elementPosition - navbarHeight;

      // 4. Forzamos a la ventana completa a deslizarse hacia esa coordenada matemática
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setMenuOpen(false); // en móvil, cerramos el menú al navegar
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 md:px-10 py-4 md:py-5 bg-[#050505]/40 backdrop-blur-md border-b border-cyan-500/20 transition-all duration-700 ease-out ${
        booted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
      style={{ transitionDelay: "700ms" }}
    >
      <div
        className="text-cyan-400 font-bold tracking-widest text-lg md:text-xl drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] cursor-pointer"
        onClick={(e) => handleScroll(e, "about")}
      >
        [ R//A ]
      </div>

      {/* Navegación de escritorio */}
      <ul className="hidden md:flex gap-10 font-mono text-sm text-cyan-700">
        {LINKS.map((link) => (
          <li
            key={link.id}
            className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,243,255,0.8)] transition-all cursor-pointer"
          >
            <a href={`#${link.id}`} onClick={(e) => handleScroll(e, link.id)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CV de escritorio */}
      <a
        href="/Rodrigo_Alegre_CV.pdf"
        download="Rodrigo_Alegre_CV.pdf"
        className="hidden md:inline-block px-5 py-2 text-xs font-mono font-bold text-cyan-400 border border-cyan-500 hover:bg-cyan-500 hover:text-[#050505] transition-all shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.8)]"
      >
        DESCARGAR_CV
      </a>

      {/* Botón hamburguesa (solo móvil) */}
      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 border border-cyan-500/40 text-cyan-400"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
      >
        <span
          className={`block h-[2px] w-5 bg-cyan-400 transition-all duration-300 ${
            menuOpen ? "translate-y-[8px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-5 bg-cyan-400 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-5 bg-cyan-400 transition-all duration-300 ${
            menuOpen ? "-translate-y-[8px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Panel desplegable (solo móvil) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-md border-b border-cyan-500/20 overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col font-mono text-sm text-cyan-300">
          {LINKS.map((link) => (
            <li key={link.id} className="border-b border-cyan-900/40">
              <a
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="block px-6 py-4 hover:bg-cyan-500/10 hover:text-cyan-100 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="p-4">
            <a
              href="/Rodrigo_Alegre_CV.pdf"
              download="Rodrigo_Alegre_CV.pdf"
              onClick={() => setMenuOpen(false)}
              className="block text-center px-5 py-3 text-xs font-bold text-cyan-400 border border-cyan-500 hover:bg-cyan-500 hover:text-[#050505] transition-all"
            >
              DESCARGAR_CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
