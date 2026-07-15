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
    <section id="projects" className="relative w-full min-h-screen flex items-center justify-center px-6 py-24 z-10">
      
      {/* Contenedor principal estilo cristal oscuro */}
      <div className="max-w-6xl w-full bg-[#050505]/60 backdrop-blur-md border border-cyan-500/30 p-8 shadow-[0_0_30px_rgba(0,243,255,0.05)]">
        
        {/* Cabecera de la ventana de terminal */}
        <div className="flex items-center gap-2 border-b border-cyan-500/30 pb-4 mb-8">
          <span className="w-3 h-3 bg-[#ff003c]/80 rounded-sm shadow-[0_0_8px_rgba(255,0,60,0.6)]"></span>
          <span className="w-3 h-3 bg-[#0055ff]/80 rounded-sm shadow-[0_0_8px_rgba(0,85,255,0.6)]"></span>
          <span className="w-3 h-3 bg-[#00f3ff]/80 rounded-sm shadow-[0_0_8px_rgba(0,243,255,0.8)] animate-pulse"></span>
          <span className="ml-4 font-mono text-xs text-cyan-600 tracking-widest">~/archivos_clasificados/expedientes_proyectos.db</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-widest mb-10 drop-shadow-[0_0_10px_rgba(0,243,255,0.4)]">
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
                <span className="text-4xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] text-cyan-400">
                  📁
                </span>
                <span className="font-mono text-xs text-cyan-600 tracking-widest">
                  ID: {project.id}
                </span>
                <span className="font-mono text-[10px] text-green-500 mt-2 bg-green-900/20 px-2 py-1 border border-green-500/30">
                  {project.status}
                </span>
              </div>

              {/* Bloque Derecho: Información */}
              <div className="p-6 flex-1 flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 tracking-widest mb-3 group-hover:text-cyan-100 transition-colors">
                    &gt; {project.title}
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

                  {/* Enlaces (Estilo Línea de Comandos) */}
                  <div className="flex gap-4 font-mono text-xs font-bold">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,243,255,0.8)] transition-all"
                    >
                      [VER_CÓDIGO]
                    </a>
                  </div>

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