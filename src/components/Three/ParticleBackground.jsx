"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useBoot } from "@/components/UI/BootContext";

// 1. El Núcleo de Datos (Basado en la esfera de AC Black Flag)
function DataCore({ revealed }) {
  const coreRef = useRef();

  useFrame((state, delta) => {
    // Rotación constante y lenta del núcleo
    coreRef.current.rotation.y -= delta * 0.1;
    coreRef.current.rotation.z += delta * 0.05;

    // Efecto de paralaje: el núcleo sigue un poco al mouse
    const mouseX = state.pointer.x * 0.5;
    const mouseY = state.pointer.y * 0.5;
    coreRef.current.position.x += (mouseX - coreRef.current.position.x) * 0.05;
    coreRef.current.position.y += (mouseY - coreRef.current.position.y) * 0.05;

    // "Encendido": la esfera crece desde cero hasta su tamaño real.
    const target = revealed ? 1 : 0;
    const s = coreRef.current.scale.x + (target - coreRef.current.scale.x) * delta * 2.2;
    coreRef.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={coreRef} scale={0}>
      {/* Usamos un Icosaedro para que parezca una red de nodos matemáticos */}
      <icosahedronGeometry args={[1.8, 2]} />
      <meshBasicMaterial
        color="#00f3ff" /* Cian neón */
        wireframe={true}
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

// 2. La Nube de Partículas
function Particles() {
  const count = 3000;
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15; 
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15; 
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15; 

      // Tonos cian y toques de rojo advertencia (estilo Cyberpunk)
      color.setHex(Math.random() > 0.8 ? 0xff003c : 0x00f3ff);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, [count]);

  useFrame((state, delta) => {
    // Rotación base de las partículas
    pointsRef.current.rotation.y += delta * 0.03;
    
    // Interactividad pesada con el mouse
    const mouseX = state.pointer.x * 2;
    const mouseY = state.pointer.y * 2;
    pointsRef.current.position.x += (mouseX - pointsRef.current.position.x) * 0.02;
    pointsRef.current.position.y += (mouseY - pointsRef.current.position.y) * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

// 3. El Escenario Principal
export default function ParticleBackground() {
  const { booted } = useBoot();

  return (
    <Canvas
      camera={{ position: [0, 0, 4] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        // El fondo aparece primero (fade), antes que los textos y botones.
        opacity: booted ? 1 : 0,
        transition: "opacity 1500ms ease-out",
        transitionDelay: "300ms",
      }}
    >
      {/* Niebla oscura para dar profundidad infinita */}
      <fog attach="fog" args={["#050505", 2, 10]} />
      <DataCore revealed={booted} />
      <Particles />
    </Canvas>
  );
}