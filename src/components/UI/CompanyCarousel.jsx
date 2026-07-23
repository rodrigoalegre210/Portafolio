import Image from 'next/image';

export default function CompanyCarousel() {
  const companies = [
    { id: 1, name: "CODERHOUSE", logo: "/Logo_Coderhouse.png", url: "https://www.coderhouse.com/ar/", status: "ACTIVO" },
    { id: 2, name: "ARBAIT", logo: "/Logo_ArBait.png", url: "#", status: "VERIFICADO" },
    { id: 3, name: "CONCIENCIA_CONECTADA", logo: "/Logo_ConcienciaConectada.png", url: "https://concienciaconectada.com/", status: "VERIFICADO" },
    { id: 4, name: "PAGA_EN_LINEA", logo: "/Logo_PagaEnLinea.png", url: "https://corp.pagaenlinea.cl/", status: "VERIFICADO" },
    { id: 5, name: "VIAXPERTA", logo: "/Logo_Viaxperta.png", url: "https://viaxperta.com/", status: "VERIFICADO" },
  ];

  // Armamos un "vagón" multiplicando la lista 4 veces
  const trainCar = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="relative isolate w-full py-8 bg-[#050505] border-y border-cyan-500/20 z-10 overflow-hidden flex flex-col items-center select-none">
      
      {/* CAMBIO ACÁ: Título más claro y letra un poco más grande (text-xs en lugar de text-[10px]) */}
      <span className="font-mono text-[10px] sm:text-xs text-cyan-500 tracking-wider sm:tracking-widest uppercase mb-8 sm:mb-10 px-3 sm:px-4 py-1 border border-cyan-900/50 bg-cyan-950/20 shadow-[0_0_10px_rgba(0,243,255,0.1)] text-center">
        [ HISTORIAL_LABORAL_VERIFICADO ]
      </span>

      {/* Sombras de desvanecimiento en los bordes (más finas en móvil para no tapar los logos) */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

      {/* PISTA DEL CARRUSEL */}
      <div className="flex w-full carousel-track">
        
        {/* ================= VAGÓN 1 ================= */}
        <div className="flex w-max animate-infinite-scroll">
          {trainCar.map((company, index) => (
            <a 
              key={`v1-${index}`} 
              href={company.url !== "#" ? company.url : null} 
              target={company.url !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="w-[170px] sm:w-[250px] shrink-0 flex flex-col items-center justify-center px-6 sm:px-10 border-x border-cyan-900/30 group cursor-pointer"
            >
              <div className="relative h-16 w-32 flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`Logo corporativo de ${company.name}`}
                  fill
                  draggable={false}
                  className="object-contain opacity-70 grayscale-0 sm:opacity-40 sm:grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(0,243,255,0.8)] transition-all duration-500"
                />
              </div>
              
              <span className="font-mono text-[10px] sm:text-sm font-bold text-cyan-400 mt-3 sm:mt-4 opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity tracking-wider sm:tracking-widest group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]">
                {company.name}
              </span>
            </a>
          ))}
        </div>

        {/* ================= VAGÓN 2 ================= */}
        <div className="flex w-max animate-infinite-scroll" aria-hidden="true">
          {trainCar.map((company, index) => (
            <a 
              key={`v2-${index}`} 
              href={company.url !== "#" ? company.url : null} 
              target={company.url !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="w-[170px] sm:w-[250px] shrink-0 flex flex-col items-center justify-center px-6 sm:px-10 border-x border-cyan-900/30 group cursor-pointer"
            >
              <div className="relative h-16 w-32 flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`Logo corporativo de ${company.name}`}
                  fill
                  draggable={false}
                  className="object-contain opacity-70 grayscale-0 sm:opacity-40 sm:grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(0,243,255,0.8)] transition-all duration-500"
                />
              </div>
              
              <span className="font-mono text-[10px] sm:text-sm font-bold text-cyan-400 mt-3 sm:mt-4 opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity tracking-wider sm:tracking-widest group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]">
                {company.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}