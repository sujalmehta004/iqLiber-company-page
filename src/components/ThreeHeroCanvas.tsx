"use client";

import React, { useRef, useState, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

// ─── Playful 3D shape ───────────────────────────────────────────────────────
function PlayfulShape({
  position, color, shapeType, scale = 1, speed = 1,
}: {
  position: [number, number, number];
  color: string; shapeType: "torus" | "sphere" | "box" | "cone" | "knot" | "dodecahedron" | "icosahedron" | "octahedron";
  scale?: number; speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.2 * speed;
    meshRef.current.rotation.y = t * 0.25 * speed;
  });
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {shapeType === "torus"        && <torusGeometry       args={[1, 0.38, 12, 36]} />}
      {shapeType === "sphere"       && <sphereGeometry      args={[1, 20, 20]} />}
      {shapeType === "box"          && <boxGeometry         args={[1.4, 1.4, 1.4]} />}
      {shapeType === "cone"         && <coneGeometry        args={[0.8, 1.6, 20]} />}
      {shapeType === "knot"         && <torusKnotGeometry   args={[0.6, 0.22, 60, 10]} />}
      {shapeType === "dodecahedron" && <dodecahedronGeometry args={[1, 0]} />}
      {shapeType === "icosahedron"  && <icosahedronGeometry  args={[1, 0]} />}
      {shapeType === "octahedron"   && <octahedronGeometry   args={[1, 0]} />}
      <meshStandardMaterial color={color} metalness={0.35} roughness={0.2} />
    </mesh>
  );
}

// ─── Soft floating blob ──────────────────────────────────────────────────────
function FloatBlob({ position, color, r }: { position: [number,number,number]; color: string; r: number }) {
  return (
    <Float speed={r * 2} rotationIntensity={0} floatIntensity={r}>
      <mesh position={position}>
        <sphereGeometry args={[r, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
      </mesh>
    </Float>
  );
}

// ─── Nepal Flag with HTML registration badge ─────────────────────────────────
function NepalFlag({ position }: { position: [number, number, number] }) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(1.2, -0.8);
  shape.lineTo(0.3, -0.8);
  shape.lineTo(1.2, -1.6);
  shape.lineTo(0, -1.6);
  shape.closePath();

  const flagRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (flagRef.current) {
      flagRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
    }
  });

  return (
    <group position={position} scale={0.6}>
      <group ref={flagRef}>
        {/* Pole */}
        <mesh position={[-0.05, -0.8, 0]}>
          <boxGeometry args={[0.1, 2.5, 0.1]} />
          <meshStandardMaterial color="#8B6914" metalness={0.4} />
        </mesh>
        {/* Flag body — crimson */}
        <mesh position={[0, 0.4, 0]}>
          <extrudeGeometry args={[shape, { depth: 0.06, bevelEnabled: false }]} />
          <meshStandardMaterial color="#DC143C" />
        </mesh>
        {/* Flag border — blue */}
        <mesh position={[0, 0.4, -0.02]}>
          <extrudeGeometry args={[shape, { depth: 0.08, bevelEnabled: false }]} />
          <meshStandardMaterial color="#003594" side={THREE.DoubleSide} />
        </mesh>
        {/* Moon (upper) */}
        <mesh position={[0.42, -0.05, 0.08]}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
        {/* Sun (lower) */}
        <mesh position={[0.42, -0.65, 0.08]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* HTML Registration Badge — right of flag */}
        <Html position={[2.2, -0.5, 0]} center style={{ pointerEvents: "none" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(240,233,255,0.95))",
            border: "1.5px solid rgba(108,99,255,0.35)",
            borderRadius: "12px",
            padding: "6px 12px",
            minWidth: "140px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 4px 20px rgba(108,99,255,0.25)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "9px", fontWeight: 800, color: "#6C63FF", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Space Grotesk, sans-serif" }}>
              🇳🇵 Registered in Nepal
            </div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a2e", fontFamily: "Space Grotesk, sans-serif", marginTop: "2px" }}>
              Reg. No. 221097/078/079
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
}

// ─── Cute cartoon character (round head type) ─────────────────────────────────
function CartoonCharacter({ position, color, scale = 1, withBody = false }: {
  position: [number, number, number]; color: string; scale?: number; withBody?: boolean;
}) {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group position={position} scale={scale}>
        {/* Body */}
        {withBody && (
          <>
            <mesh position={[0, -0.9, 0]}>
              <capsuleGeometry args={[0.35, 0.6, 8, 16]} />
              <meshStandardMaterial color={color} roughness={0.3} />
            </mesh>
            {/* Arms */}
            <mesh position={[0.55, -0.7, 0]} rotation={[0, 0, -0.8]}>
              <capsuleGeometry args={[0.12, 0.4, 6, 12]} />
              <meshStandardMaterial color={color} roughness={0.3} />
            </mesh>
            <mesh position={[-0.55, -0.7, 0]} rotation={[0, 0, 0.8]}>
              <capsuleGeometry args={[0.12, 0.4, 6, 12]} />
              <meshStandardMaterial color={color} roughness={0.3} />
            </mesh>
          </>
        )}
        {/* Head */}
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color={color} roughness={0.25} />
        </mesh>
        {/* Left eye */}
        <mesh position={[0.2, 0.18, 0.46]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0.22, 0.18, 0.54]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        {/* Right eye */}
        <mesh position={[-0.2, 0.18, 0.46]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[-0.22, 0.18, 0.54]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        {/* Blush */}
        <mesh position={[0.35, -0.04, 0.42]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#FFB6C1" transparent opacity={0.65} />
        </mesh>
        <mesh position={[-0.35, -0.04, 0.42]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#FFB6C1" transparent opacity={0.65} />
        </mesh>
        {/* Smile */}
        <mesh position={[0, -0.15, 0.55]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.14, 0.025, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#c0392b" />
        </mesh>
      </group>
    </Float>
  );
}

// ─── Robot / Computer character ────────────────────────────────────────────────
function RobotCharacter({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const robotRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (robotRef.current) {
      robotRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.3;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={robotRef} position={position} scale={scale}>
        {/* Head (box) */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.9, 0.8, 0.8]} />
          <meshStandardMaterial color="#7C83FD" metalness={0.5} roughness={0.2} />
        </mesh>
        {/* Eyes (screens) */}
        <mesh position={[0.22, 0.55, 0.41]}>
          <boxGeometry args={[0.22, 0.18, 0.05]} />
          <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={1.5} />
        </mesh>
        <mesh position={[-0.22, 0.55, 0.41]}>
          <boxGeometry args={[0.22, 0.18, 0.05]} />
          <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={1.5} />
        </mesh>
        {/* Antenna */}
        <mesh position={[0, 1.05, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.35, 8]} />
          <meshStandardMaterial color="#555" metalness={0.8} />
        </mesh>
        <mesh position={[0, 1.25, 0]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color="#FF6B9D" emissive="#FF6B9D" emissiveIntensity={1.2} />
        </mesh>
        {/* Body */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[1.0, 0.9, 0.7]} />
          <meshStandardMaterial color="#9B59FF" metalness={0.4} roughness={0.3} />
        </mesh>
        {/* Chest panel */}
        <mesh position={[0, -0.25, 0.36]}>
          <boxGeometry args={[0.5, 0.45, 0.05]} />
          <meshStandardMaterial color="#6C63FF" emissive="#6C63FF" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

// ─── Sand Particle Effect (mouse-reactive) ──────────────────────────────────
function SandParticles() {
  const { size, viewport } = useThree();
  const particlesRef = useRef<THREE.Points>(null);
  const mousePos = useRef(new THREE.Vector2(0, 0));
  const particleCount = 3000;

  const positions = useRef(new Float32Array(particleCount * 3));
  const velocities = useRef(new Float32Array(particleCount * 3));
  const initPositions = useRef(new Float32Array(particleCount * 3));
  const colors = useRef(new Float32Array(particleCount * 3));

  // Initialize particles in a sphere formation
  const geometry = useRef<THREE.BufferGeometry | null>(null);

  const [isInitialized] = useState(() => {
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 2;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      const z = r * Math.cos(phi) * 0.5;
      positions.current[i * 3]     = initPositions.current[i * 3]     = x;
      positions.current[i * 3 + 1] = initPositions.current[i * 3 + 1] = y;
      positions.current[i * 3 + 2] = initPositions.current[i * 3 + 2] = z;
      velocities.current[i * 3]     = 0;
      velocities.current[i * 3 + 1] = 0;
      velocities.current[i * 3 + 2] = 0;
      // Warm sandy colors
      const t = Math.random();
      colors.current[i * 3]     = 0.6 + t * 0.4;      // R
      colors.current[i * 3 + 1] = 0.4 + t * 0.3;      // G
      colors.current[i * 3 + 2] = 0.2 + t * 0.1;      // B
    }
    return true;
  });
  void isInitialized;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current.x = ((e.clientX / window.innerWidth) * 2 - 1) * viewport.width / 2;
    mousePos.current.y = -((e.clientY / window.innerHeight) * 2 - 1) * viewport.height / 2;
  }, [viewport]);

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  void size;

  useFrame(() => {
    if (!particlesRef.current) return;
    const geo = particlesRef.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    const mx = mousePos.current.x;
    const my = mousePos.current.y;

    for (let i = 0; i < particleCount; i++) {
      const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;
      const dx = pos[ix] - mx;
      const dy = pos[iy] - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repulseRadius = 1.2;

      if (dist < repulseRadius) {
        const force = (repulseRadius - dist) / repulseRadius;
        velocities.current[ix] += dx / dist * force * 0.12;
        velocities.current[iy] += dy / dist * force * 0.12;
        velocities.current[iz] += (Math.random() - 0.5) * force * 0.05;
      }

      // Spring back to initial position
      velocities.current[ix] += (initPositions.current[ix] - pos[ix]) * 0.03;
      velocities.current[iy] += (initPositions.current[iy] - pos[iy]) * 0.03;
      velocities.current[iz] += (initPositions.current[iz] - pos[iz]) * 0.03;

      // Damping
      velocities.current[ix] *= 0.88;
      velocities.current[iy] *= 0.88;
      velocities.current[iz] *= 0.88;

      pos[ix] += velocities.current[ix];
      pos[iy] += velocities.current[iy];
      pos[iz] += velocities.current[iz];
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry ref={geometry}>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors.current, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.035} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

// ─── Main Scene ──────────────────────────────────────────────────────────────
function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(({ pointer }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.4, 0.04);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.3, 0.04);
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.1} />
      <directionalLight position={[5, 10, 5]} intensity={1.6} />
      <pointLight position={[-8, 5, 3]} intensity={1.2} color="#FF6B9D" />
      <pointLight position={[8, -4, 6]} intensity={1.0} color="#6C63FF" />
      <pointLight position={[0, 0, 8]}  intensity={0.5} color="#FFD166" />

      {/* Sand particle cloud (mouse-interactive) */}
      <SandParticles />

      {/* Central hero focal point */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <PlayfulShape position={[0, 0.3, 0]} color="#6C63FF" shapeType="knot" scale={1.2} speed={0.6} />
      </Float>

      {/* Nepal Flag with registration number */}
      <Float speed={1.0} floatIntensity={0.4}>
        <NepalFlag position={[2.2, 2.8, 0]} />
      </Float>

      {/* 6 Cartoon Characters */}
      <CartoonCharacter position={[-3.8, 1.8, 1]}   color="#FFD166" scale={0.75} />
      <CartoonCharacter position={[3.6, -2.0, 0.5]} color="#06D6A0" scale={0.70} withBody />
      <CartoonCharacter position={[-2.8, -2.8, -1]} color="#FF6B9D" scale={0.65} withBody />
      <CartoonCharacter position={[3.2,  2.5, -0.5]} color="#FF9F1C" scale={0.60} />
      <CartoonCharacter position={[-4.0, -0.5, 0.5]} color="#C084FC" scale={0.55} withBody />
      <CartoonCharacter position={[0.5,  3.5, -1]}   color="#34D399" scale={0.50} />

      {/* Robot Character */}
      <RobotCharacter position={[-1.5, -3.2, 0]} scale={0.65} />

      {/* More decorative shapes */}
      <Float speed={2.8} rotationIntensity={0.9} floatIntensity={1.5}>
        <PlayfulShape position={[-2.8,  0.2, -1]}   color="#FF6B9D" shapeType="torus"        scale={0.70} speed={1.0} />
      </Float>
      <Float speed={2.0} rotationIntensity={0.7} floatIntensity={1.1}>
        <PlayfulShape position={[2.8,   0.5, -1.5]} color="#FFD166" shapeType="box"          scale={0.60} speed={0.8} />
      </Float>
      <Float speed={2.4} rotationIntensity={0.8} floatIntensity={1.3}>
        <PlayfulShape position={[-1.5,  3.0, -2]}   color="#06D6A0" shapeType="dodecahedron" scale={0.55} speed={0.7} />
      </Float>
      <Float speed={1.8} rotationIntensity={1.0} floatIntensity={0.9}>
        <PlayfulShape position={[4.0,   1.2, -1]}   color="#FF9F1C" shapeType="icosahedron"  scale={0.50} speed={0.9} />
      </Float>
      <Float speed={3.0} rotationIntensity={1.2} floatIntensity={1.6}>
        <PlayfulShape position={[1.5,  -3.5, -0.5]} color="#9B59FF" shapeType="octahedron"   scale={0.55} speed={1.2} />
      </Float>
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={1.0}>
        <PlayfulShape position={[-4.5,  2.0, -1.5]} color="#EC4899" shapeType="cone"         scale={0.45} speed={0.6} />
      </Float>
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.8}>
        <PlayfulShape position={[1.0,  -0.5, -3]}   color="#3B82F6" shapeType="sphere"       scale={0.50} speed={0.5} />
      </Float>

      {/* Decorative blobs */}
      <FloatBlob position={[-4.5,  0.5, -2]}   color="#FFCBA4" r={0.55} />
      <FloatBlob position={[4.0,  -2.5, -1.5]} color="#FFB3C6" r={0.45} />
      <FloatBlob position={[0.8,   3.5, -2]}   color="#C8A4FF" r={0.40} />
      <FloatBlob position={[-3.0, -3.2, -1]}   color="#A4D8FF" r={0.42} />
      <FloatBlob position={[3.5,   3.0, -2]}   color="#A4FFD8" r={0.35} />
      <FloatBlob position={[-1.5,  0.0, -3]}   color="#FFD1A4" r={0.38} />
    </group>
  );
}

export default function ThreeHeroCanvas() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[560px] relative select-none cursor-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
      {/* Hint overlay */}
      <div className="absolute bottom-3 right-3 text-[11px] font-medium text-purple-400 opacity-60 pointer-events-none select-none flex items-center gap-1">
        <span>🖱️ Move mouse to interact</span>
      </div>
    </div>
  );
}
