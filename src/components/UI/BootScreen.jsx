"use client";

import { useState, useEffect } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "900"] });

// Cada etapa: el texto se tipea rápido y luego la barra "carga" hasta su objetivo
const STAGES = [
  { text: "> INICIALIZANDO NÚCLEO DEL SISTEMA...", progress: 20 },
  { text: "> CARGANDO MÓDULOS DE INTERFAZ...", progress: 45 },
  { text: "> RENDERIZANDO ENTORNO 3D...", progress: 68 },
  { text: "> ESTABLECIENDO CONEXIÓN SEGURA...", progress: 88 },
  { text: "> SISTEMA LISTO.", progress: 100 },
];

const TYPE_SPEED = 16;    // ms por carácter en las ráfagas rápidas
const STUTTER_CHANCE = 0.13; // probabilidad de que un carácter "se trabe"
const STUTTER_MIN = 120;  // pausa mínima de una traba (ms)
const STUTTER_MAX = 340;  // pausa máxima de una traba (ms)
const FILL_MS = 1500;     // cuánto tarda la barra en llegar al objetivo de cada etapa
const HOLD_MS = 600;      // pausa "cargando" tras cada etapa (sensación de arranque)
const FINAL_HOLD = 1100;  // pausa extra en 100% antes del fade

export default function BootScreen() {
  const [lines, setLines] = useState([]);     // líneas ya tipeadas
  const [current, setCurrent] = useState(""); // línea que se está tipeando
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);    // dispara el fade-out
  const [hidden, setHidden] = useState(false); // desmonta del DOM

  useEffect(() => {
    // Bandera LOCAL a esta ejecución del efecto (a prueba del doble montaje de React)
    let cancelled = false;

    // Reinicio limpio por si React remonta en desarrollo
    setLines([]);
    setCurrent("");
    setProgress(0);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));

    // Anima la barra de 'from' a 'to' en 'duration' ms, con micro-pausas
    // mecánicas para que se sienta que el sistema "trabaja" cargando.
    const animateProgress = async (from, to, duration) => {
      const STEP_MS = 55;
      const steps = Math.max(1, Math.round(duration / STEP_MS));
      for (let i = 1; i <= steps; i++) {
        if (cancelled) return;
        setProgress(Math.round(from + ((to - from) * i) / steps));
        // De vez en cuando la barra se "atasca" un instante antes de seguir.
        const stall = Math.random() < 0.12 ? 90 + Math.random() * 160 : 0;
        await delay(STEP_MS + stall);
      }
    };

    // Tipea 'text' con ráfagas rápidas y "trabas" aleatorias (sensación glitch).
    const typeText = async (text) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        setCurrent(text.slice(0, i));
        // Algunos caracteres al azar hacen que el tipeo "se trabe" un instante.
        const char = text[i - 1];
        let wait;
        if (Math.random() < STUTTER_CHANCE) {
          wait = STUTTER_MIN + Math.random() * (STUTTER_MAX - STUTTER_MIN);
        } else if (char === " ") {
          wait = TYPE_SPEED + 45; // pausa leve entre palabras
        } else {
          wait = TYPE_SPEED;
        }
        await delay(wait);
      }
    };

    const run = async () => {
      // Accesibilidad: si el sistema pide "reducir movimiento", evitamos el
      // efecto glitch/trabas y las micro-pausas de la barra, PERO igual
      // mostramos cada mensaje por tramos y con tiempo para leerlos.
      if (reduce) {
        for (const stage of STAGES) {
          if (cancelled) return;
          setLines((p) => [...p, stage.text]); // línea completa, sin tipeo
          setProgress(stage.progress);          // la barra sube por tramos
          await delay(950);                     // tiempo para leer
        }
        await delay(FINAL_HOLD);
        if (!cancelled) setDone(true);
        return;
      }

      let prev = 0;
      for (const stage of STAGES) {
        // 1) Tipeo con trabas y ráfagas
        await typeText(stage.text);
        if (cancelled) return;

        // 2) Fijamos la línea ya completa
        setLines((p) => [...p, stage.text]);
        setCurrent("");

        // 3) La barra carga lentamente hasta el objetivo de la etapa
        await animateProgress(prev, stage.progress, FILL_MS);
        prev = stage.progress;

        // 4) Pausa "cargando" para dar la sensación de sistema iniciándose
        await delay(HOLD_MS);
      }

      // Pausa final para que se lea "SISTEMA LISTO." antes del fade
      await delay(FINAL_HOLD);
      if (!cancelled) setDone(true);
    };

    run();

    return () => {
      cancelled = true;
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // Al iniciar el fade-out: restauramos scroll y desmontamos al terminar
  useEffect(() => {
    if (!done) return;
    document.body.style.overflow = "";
    const t = setTimeout(() => setHidden(true), 700); // == duración de la transición
    return () => clearTimeout(t);
  }, [done]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Iniciando sistema"
    >
      {/* Grilla de fondo sutil */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,243,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,243,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
        {/* Título */}
        <h1
          className={`${orbitron.className} text-4xl md:text-5xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-700 drop-shadow-[0_0_20px_rgba(0,243,255,0.6)]`}
        >
          SYS.OP
        </h1>
        <div className="mt-3 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-cyan-500/70">
          <span className="h-[1px] w-8 bg-cyan-500/40" />
          BOOT SEQUENCE V_1.0.4
          <span className="h-[1px] w-8 bg-cyan-500/40" />
        </div>

        {/* Log del sistema (tipeo + cursor) */}
        <div className="mt-10 h-32 w-full font-mono text-xs text-cyan-300/80">
          {lines.map((line, i) => (
            <p key={i} className="mb-1 tracking-wide drop-shadow-[0_0_6px_rgba(0,243,255,0.3)]">
              {line}
            </p>
          ))}
          {current !== "" ? (
            <p className="mb-1 tracking-wide drop-shadow-[0_0_6px_rgba(0,243,255,0.3)]">
              {current}
              <span className="ml-0.5 inline-block h-3 w-2 animate-pulse bg-cyan-400 align-middle" />
            </p>
          ) : (
            progress < 100 && (
              <span className="inline-block h-3 w-2 animate-pulse bg-cyan-400 align-middle" />
            )
          )}
        </div>

        {/* Barra de carga */}
        <div className="mt-6 w-full">
          <div className="mb-2 flex justify-between font-mono text-[10px] tracking-widest text-cyan-500/80">
            <span>CARGANDO ENTORNO</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden border border-cyan-900/60 bg-cyan-950/20">
            <div
              className="h-full bg-gradient-to-r from-cyan-600 to-cyan-300 shadow-[0_0_12px_rgba(0,243,255,0.7)] transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
