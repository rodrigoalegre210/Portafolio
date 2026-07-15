"use client";

import { Orbitron } from "next/font/google";
import { useBoot } from "./BootContext";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function Hero() {
  const { booted } = useBoot();

  // Helper: cada bloque arranca invisible y "sube" a su lugar cuando el
  // sistema se enciende. El delay escalona la aparición (efecto cascada).
  const reveal = (delay, extra = "") => ({
    className: `${extra} transition-all duration-700 ease-out ${
      booted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`,
    style: { transitionDelay: `${delay}ms` },
  });

  return (
    <section className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen pointer-events-none py-20 px-6">
      {/* Backdrop oscuro radial: separa el texto del fondo 3D (partículas + esfera)
          sin tapar las partículas de los bordes. Queda por encima del canvas (z-0)
          pero por debajo del contenido del hero. */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_center,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.55)_45%,transparent_78%)] pointer-events-none" />

      {/* Nombre */}
      <h1
        {...reveal(
          1000,
          `${orbitron.className} text-center text-4xl md:text-7xl font-black tracking-[0.12em] leading-tight text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-cyan-400 to-cyan-800 drop-shadow-[0_0_25px_rgba(0,243,255,0.5)]`
        )}
      >
        CIENCIA DE DATOS
        <br />
        &amp; DESARROLLO DE IA
      </h1>

      {/* Rol */}
      <div {...reveal(1250, "flex items-center gap-4 mt-6 font-mono")}>
        <span className="w-8 md:w-12 h-[1px] bg-cyan-500/50"></span>
        <p className="text-cyan-100 text-xs md:text-base tracking-[0.25em] [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
          MACHINE LEARNING <span className="text-cyan-500">//</span> AUTOMATIZACIÓN <span className="text-cyan-500">//</span> DATOS EN PRODUCCIÓN
        </p>
        <span className="w-8 md:w-12 h-[1px] bg-cyan-500/50"></span>
      </div>

      {/* Propuesta de valor */}
      <p
        {...reveal(
          1500,
          "mt-8 max-w-2xl text-center font-mono text-sm md:text-base text-cyan-100/80 leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]"
        )}
      >
        Construyo soluciones de <span className="text-cyan-300">datos e IA</span> que resuelven problemas reales y llegan a producción — no solo prototipos.
      </p>

      {/* Botones de acción */}
      <div
        {...reveal(
          1750,
          "mt-12 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
        )}
      >
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

      {/* Indicador de scroll (el pulso vive en el hijo para no chocar con el fade) */}
      <div {...reveal(2050, "absolute bottom-24")}>
        <div className="flex flex-col items-center gap-2 font-mono text-xs md:text-sm tracking-[0.3em] text-cyan-200/90 animate-pulse [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]">
          <span>DESPLAZAR PARA ACCEDER</span>
          <span className="text-lg leading-none">▼</span>
        </div>
      </div>

      {/* Pie decorativo */}
      <div
        {...reveal(
          2250,
          "absolute bottom-10 flex w-full justify-between px-10 text-xs font-mono text-cyan-400/70 [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]"
        )}
      >
        <span>SYS.OP // V_1.0.4</span>
        <span>ESTADO: SEGURO</span>
      </div>
    </section>
  );
}
