export default function ProjectsSection() {
  // Base de datos local de tus proyectos. ¡Acá podés agregar o modificar los tuyos reales!
  const projects = [
    {
      id: "PRJ_01",
      title: "BIVLO — SISTEMA DE GESTIÓN CON IA",
      status: "DESENCRIPTADO",
      desc: "Sistema de gestión empresarial (SaaS) para PyMEs con núcleo de IA propio: segmentación de clientes por Machine Learning (K-Means) y predicción de quiebres de stock mediante regresión, sin depender de APIs externas pagas.",
      tech: ["Python", "FastAPI", "React.js", "PostgreSQL", "Scikit-learn"],
      github: "https://github.com/rodrigoalegre210/Sistema-Contable"
    },
    {
      id: "PRJ_02",
      title: "NEOSCORE AI — CREDIT SCORING CONDUCTUAL",
      status: "DESENCRIPTADO",
      desc: "Motor de credit scoring para fintech que evalúa el riesgo crediticio en tiempo real analizando comportamiento transaccional real, en vez de depender de historiales estáticos de burós tradicionales.",
      tech: ["Python", "FastAPI", "Next.js", "PostgreSQL"],
      github: "https://github.com/rodrigoalegre210/NeoScore-AI"
    },
    {
      id: "PRJ_03",
      title: "ANÁLISIS DE VENTAS DE SUPERMERCADO",
      status: "DESENCRIPTADO",
      desc: "Análisis exploratorio y visualización de datos de ventas: rendimiento por sucursal, comportamiento de clientes y métodos de pago, con un dashboard web simple para explorar los resultados.",
      tech: ["Python", "Jupyter Notebook", "Pandas"],
      github: "https://github.com/rodrigoalegre210/Analisis-Supermercados"
    }
  ];

  return (
    <section id="projects" className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 md:py-24 z-10">

      {/* Contenedor principal estilo cristal oscuro */}
      <div className="max-w-6xl w-full bg-[#050505]/60 backdrop-blur-md border border-cyan-500/30 p-5 sm:p-8 shadow-[0_0_30px_rgba(0,243,255,0.05)]">
        
        {/* Cabecera de la ventana de terminal */}
        <div className="flex items-center gap-2 border-b border-cyan-500/30 pb-4 mb-8">
          <span className="w-3 h-3 bg-[#ff003c]/80 rounded-sm shadow-[0_0_8px_rgba(255,0,60,0.6)]"></span>
          <span className="w-3 h-3 bg-[#0055ff]/80 rounded-sm shadow-[0_0_8px_rgba(0,85,255,0.6)]"></span>
          <span className="w-3 h-3 bg-[#00f3ff]/80 rounded-sm shadow-[0_0_8px_rgba(0,243,255,0.8)] animate-pulse"></span>
          <span className="ml-2 sm:ml-4 font-mono text-[10px] sm:text-xs text-cyan-600 tracking-wider sm:tracking-widest truncate">~/archivos_clasificados/expedientes_proyectos.db</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-wider sm:tracking-widest mb-8 sm:mb-10 drop-shadow-[0_0_10px_rgba(0,243,255,0.4)] break-words">
          03. ARCHIVOS_DE_PROYECTOS
        </h2>

        {/* LISTA DE PROYECTOS */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative flex flex-col md:flex-row border border-cyan-900/50 bg-black/40 group hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] overflow-hidden"
            >
              {/* Overlay de escaneo al hacer hover */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,243,255,0.03)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              {/* Bloque Izquierdo: Visual/ID */}
              <div className="w-full md:w-[200px] bg-[#050505] border-r border-cyan-900/50 p-6 flex flex-col items-center justify-center shrink-0">
                {/* Ícono de microchip (SVG) — reemplaza el emoji de carpeta */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 mb-3 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(0,243,255,0.7)]"
                >
                  <rect x="7" y="7" width="10" height="10" rx="1" />
                  <rect x="10.5" y="10.5" width="3" height="3" rx="0.5" className="fill-cyan-400/40 stroke-none" />
                  <path d="M9.5 7V4M12 7V4M14.5 7V4M9.5 20v-3M12 20v-3M14.5 20v-3M7 9.5H4M7 12H4M7 14.5H4M20 9.5h-3M20 12h-3M20 14.5h-3" />
                </svg>
                <span className="font-mono text-xs text-cyan-600 tracking-widest">
                  ID: {project.id}
                </span>
                <span className="font-mono text-[10px] text-green-500 mt-2 bg-green-900/20 px-2 py-1 border border-green-500/30">
                  {project.status}
                </span>
              </div>

              {/* Bloque Derecho: Información */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300 tracking-wider sm:tracking-widest mb-3 group-hover:text-cyan-100 transition-colors break-words">
                    <span className="text-cyan-600 group-hover:text-cyan-400 transition-colors">./</span>{project.title}
                  </h3>
                  <p className="font-mono text-sm text-cyan-100/70 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>
                
                {/* Tecnologías y Botones de Acción */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-cyan-900/50 pt-4">
                  
                  {/* Píldoras de Tecnología */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="font-mono text-xs text-cyan-400 bg-cyan-950/50 px-2 py-1 border border-cyan-800/50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botón de acción (repositorio) */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 self-start border border-cyan-500/60 bg-cyan-950/30 px-4 py-2 font-mono text-xs font-bold text-cyan-300 tracking-wider hover:bg-cyan-400 hover:text-black hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-200"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
                    </svg>
                    VER_CÓDIGO
                    <span className="opacity-60 group-hover/btn:translate-x-0.5 transition-transform">↗</span>
                  </a>

                </div>
              </div>

            </div>
          ))}
        </div>
        
        {/* Pie de la ventana */}
        <div className="mt-12 flex items-center gap-4 opacity-50">
           <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
           <span className="text-xs font-mono text-cyan-500 tracking-widest">FIN_DE_ARCHIVOS</span>
           <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}