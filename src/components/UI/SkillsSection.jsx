export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full min-h-screen flex items-center justify-center px-6 py-24 z-10">
      
      {/* Contenedor principal estilo cristal oscuro */}
      <div className="max-w-6xl w-full bg-[#050505]/60 backdrop-blur-md border border-cyan-500/30 p-8 shadow-[0_0_30px_rgba(0,243,255,0.05)]">
        
        {/* Cabecera de la ventana de terminal */}
        <div className="flex items-center gap-2 border-b border-cyan-500/30 pb-4 mb-8">
          <span className="w-3 h-3 bg-[#ff003c]/80 rounded-sm shadow-[0_0_8px_rgba(255,0,60,0.6)]"></span>
          <span className="w-3 h-3 bg-[#0055ff]/80 rounded-sm shadow-[0_0_8px_rgba(0,85,255,0.6)]"></span>
          <span className="w-3 h-3 bg-[#00f3ff]/80 rounded-sm shadow-[0_0_8px_rgba(0,243,255,0.8)] animate-pulse"></span>
          <span className="ml-4 font-mono text-xs text-cyan-600 tracking-widest">~/archivos_clasificados/modulos_sistema.exe</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-widest mb-10 drop-shadow-[0_0_10px_rgba(0,243,255,0.4)]">
          02. MÓDULOS_DE_SISTEMA
        </h2>

        {/* GRILLA DE HABILIDADES (3 Columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* MODULO 1: DATA & IA */}
          <div className="relative border border-cyan-900/50 bg-black/40 p-6 group hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] overflow-hidden">
            {/* Fondo de red que aparece al hacer hover */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,243,255,0.02)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <h3 className="text-cyan-300 font-mono text-lg mb-6 border-b border-cyan-500/20 pb-2 flex items-center justify-between">
              <span>[ NÚCLEO_DATOS ]</span>
              <span className="text-xs text-cyan-700 animate-pulse">IA_ACTIVA</span>
            </h3>
            <ul className="space-y-4 font-mono text-sm text-cyan-100/70">
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#ff003c] font-bold">&gt;</span> Python (Estructuras & Análisis)
              </li>
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#ff003c] font-bold">&gt;</span> Modelos de Machine Learning
              </li>
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#ff003c] font-bold">&gt;</span> SQL & Manipulación de Datos
              </li>
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#ff003c] font-bold">&gt;</span> Matemáticas Aplicadas (IA)
              </li>
            </ul>
          </div>

          {/* MODULO 2: FULL STACK */}
          <div className="relative border border-cyan-900/50 bg-black/40 p-6 group hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,243,255,0.02)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <h3 className="text-cyan-300 font-mono text-lg mb-6 border-b border-cyan-500/20 pb-2 flex items-center justify-between">
              <span>[ DESARROLLO_WEB ]</span>
              <span className="text-xs text-cyan-700">FULL_STACK</span>
            </h3>
            <ul className="space-y-4 font-mono text-sm text-cyan-100/70">
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#0055ff] font-bold">&gt;</span> React.js & Next.js
              </li>
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#0055ff] font-bold">&gt;</span> Node.js & APIs REST
              </li>
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#0055ff] font-bold">&gt;</span> Arquitectura Escalable
              </li>
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#0055ff] font-bold">&gt;</span> Tailwind CSS & UI/UX
              </li>
            </ul>
          </div>

          {/* MODULO 3: LÓGICA Y NEGOCIOS */}
          <div className="relative border border-cyan-900/50 bg-black/40 p-6 group hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,243,255,0.02)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <h3 className="text-cyan-300 font-mono text-lg mb-6 border-b border-cyan-500/20 pb-2 flex items-center justify-between">
              <span>[ PROTOCOLOS_OP ]</span>
              <span className="text-xs text-cyan-700">ESTRATEGIA</span>
            </h3>
            <ul className="space-y-4 font-mono text-sm text-cyan-100/70">
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#00f3ff] font-bold animate-pulse">&gt;</span> Business Analysis
              </li>
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#00f3ff] font-bold animate-pulse">&gt;</span> Resolución Lógica
              </li>
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#00f3ff] font-bold animate-pulse">&gt;</span> Inglés Técnico
              </li>
              <li className="flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                <span className="text-[#00f3ff] font-bold animate-pulse">&gt;</span> Gestión de Proyectos
              </li>
            </ul>
          </div>

        </div>
        
        {/* Pie de la ventana */}
        <div className="mt-12 flex items-center gap-4 opacity-50">
           <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
           <span className="text-xs font-mono text-cyan-500 tracking-widest">SISTEMA_ESTABLE</span>
           <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}