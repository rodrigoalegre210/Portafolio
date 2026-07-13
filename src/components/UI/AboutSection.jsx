import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center px-6 py-24 z-10">
      
      {/* Contenedor estilo cristal oscuro (Glassmorphism) */}
      <div className="max-w-6xl w-full bg-[#050505]/60 backdrop-blur-md border border-cyan-500/30 p-8 shadow-[0_0_30px_rgba(0,243,255,0.05)]">
        
        {/* Cabecera de la ventana de terminal (CORREGIDA Y ESTILIZADA) */}
        {/* Agregamos "items-center" para que los botones y el texto queden perfectamente alineados */}
        <div className="flex items-center gap-2 border-b border-cyan-500/30 pb-4 mb-8">
          {/* LED 1: Rojo Cyberpunk */}
          <span className="w-3 h-3 bg-[#ff003c]/80 rounded-sm shadow-[0_0_8px_rgba(255,0,60,0.6)]"></span>
          {/* LED 2: Azul profundo Tron */}
          <span className="w-3 h-3 bg-[#0055ff]/80 rounded-sm shadow-[0_0_8px_rgba(0,85,255,0.6)]"></span>
          {/* LED 3: Cian Neón (Activo / Parpadeando) */}
          <span className="w-3 h-3 bg-[#00f3ff]/80 rounded-sm shadow-[0_0_8px_rgba(0,243,255,0.8)] animate-pulse"></span>
          
          <span className="ml-4 font-mono text-xs text-cyan-600 tracking-widest">~/archivos_clasificados/agente_id.sys</span>
        </div>

        {/* Título de la sección */}
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-widest mb-10 drop-shadow-[0_0_10px_rgba(0,243,255,0.4)]">
          01. REGISTRO_DE_IDENTIDAD
        </h2>

        {/* Contenedor Flex Estricto: Fuerza FOTO a la izquierda y TEXTO a la derecha */}
        <div className="flex flex-row gap-10 items-start">
          
          {/* Columna 1: Tu Foto (Ancho fijo para que no se achique) */}
          <div className="w-[250px] shrink-0 flex flex-col items-center gap-4">
            <div className="relative w-full h-[250px] border-2 border-cyan-500/50 p-1 bg-black shadow-[0_0_20px_rgba(0,243,255,0.2)]">
              {/* Aquí colocamos tu foto temporalmente comentada hasta que la subas */}
               <Image 
                src="/Mi-Foto.jpeg" 
                alt="Rodrigo Alegre"
                fill
                className="object-cover"
                priority 
              />
              
              {/* Overlay de líneas de escaneo estilo Abstergo */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,243,255,0.05)_50%)] bg-[length:100%_4px] opacity-50 pointer-events-none"></div>
            </div>
            
            {/* Nombre Actualizado */}
            <span className="font-mono text-xs text-cyan-400 tracking-wider bg-cyan-900/30 px-3 py-1 border border-cyan-500/30">
              ID_AGENTE: RODRIGO_ALEGRE
            </span>
          </div>

          {/* Columna 2: Datos del Perfil (Ocupa el resto del espacio) */}
          <div className="flex-1 space-y-6 font-mono text-sm md:text-base text-cyan-100/80 leading-relaxed">
            <p>
              <span className="text-cyan-400 font-bold">&gt; ROL_PRIMARIO:</span> Científico de Datos & Desarrollador de IA.
            </p>
            <p>
              <span className="text-cyan-400 font-bold">&gt; HISTORIAL_OPERATIVO:</span> Formación en Ciencia de Datos con evolución hacia el desarrollo de software y la automatización con IA. Capacidad probada para traducir requerimientos de negocio en arquitecturas de código escalables y sistemas de datos que funcionan en producción, no solo en teoría.
            </p>
            <p>
              <span className="text-cyan-400 font-bold">&gt; ENFOQUE:</span> Especialista en el desarrollo de soluciones de IA y automatización de procesos de datos. Combino análisis, desarrollo y gobernanza de datos para construir sistemas medibles, no solo prototipos.
            </p>
            <p>
              <span className="text-cyan-400 font-bold">&gt; OBJETIVO_SISTEMA:</span> Construir e implementar soluciones de datos e IA que resuelvan problemas reales, con la ambición de escalarlas a un impacto cada vez mayor.
            </p>
          </div>

        </div>
        
        {/* Pie de la ventana */}
        <div className="mt-12 flex items-center gap-4 opacity-50">
           <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
           <span className="text-xs font-mono text-cyan-500 tracking-widest">FIN_DEL_REGISTRO</span>
           <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}