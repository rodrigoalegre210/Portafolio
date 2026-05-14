"use client"; 

export default function Navbar() {
  
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
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-5 bg-[#050505]/40 backdrop-blur-md border-b border-cyan-500/20">
      
      <div 
        className="text-cyan-400 font-bold tracking-widest text-xl drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] cursor-pointer"
        onClick={(e) => handleScroll(e, 'about')} 
      >
        [ RODRI_OS ]
      </div>

      <ul className="flex gap-10 font-mono text-sm text-cyan-700">
        <li className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,243,255,0.8)] transition-all cursor-pointer">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')}>01.SOBRE_MI</a>
        </li>
        <li className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,243,255,0.8)] transition-all cursor-pointer">
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>02.SKILLS</a>
        </li>
        <li className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,243,255,0.8)] transition-all cursor-pointer">
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>03.PROYECTOS</a>
        </li>
      </ul>

      <button className="px-5 py-2 text-xs font-mono font-bold text-cyan-400 border border-cyan-500 hover:bg-cyan-500 hover:text-[#050505] transition-all shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.8)]">
        DESCARGAR_CV.EXE
      </button>
    </nav>
  );
}