"use client";

import { createContext, useContext, useState } from "react";

// Contexto de "encendido del sistema".
// booted = false  -> todavía está corriendo el BootScreen (todo oculto).
// booted = true   -> el boot terminó; las piezas aparecen en cascada.
const BootContext = createContext({ booted: false, setBooted: () => {} });

export function BootProvider({ children }) {
  const [booted, setBooted] = useState(false);
  return (
    <BootContext.Provider value={{ booted, setBooted }}>
      {children}
    </BootContext.Provider>
  );
}

export const useBoot = () => useContext(BootContext);
