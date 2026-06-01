"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import * as THREE from "three";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const letterRefs    = useRef<(HTMLSpanElement | null)[]>([]);

  const [stage, setStage] = useState<1 | 3 | 4>(1);

  const letters = ["I", "Q", " ", "L", "i", "b", "e", "r"];

  // Refs for Three.js animation loop
  const stageRef         = useRef<number>(1);
  const animationFrameId = useRef<number>(0);
  const windForceRef     = useRef({ value: 0 });
  const lerpProgressRef  = useRef({ value: 0 });
  const materialRef      = useRef<THREE.PointsMaterial | null>(null);

  useEffect(() => { stageRef.current = stage; }, [stage]);

  // Stage 1: Falling Letters → auto-trigger Stage 3 after bounce
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textContainerRef.current, { opacity: 1 });
      const filteredLetters = letterRefs.current.filter(Boolean) as HTMLSpanElement[];

      gsap.fromTo(
        filteredLetters,
        { y: -window.innerHeight - 100, opacity: 0, rotate: () => gsap.utils.random(-15, 15) },
        {
          y: 0, opacity: 1, rotate: 0,
          // ⚡ Faster: 0.7s duration, 0.06 stagger (was 1.2s / 0.1)
          duration: 0.7,
          ease: "bounce.out",
          stagger: 0.06,
          onComplete: () => {
            // Shorter hold: 0.4s (was 0.8s)
            gsap.delayedCall(0.4, () => setStage(3));
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Stage 3 & 4: WebGL Particle Disintegration
  useEffect(() => {
    if (stage < 3) return;

    gsap.to(textContainerRef.current, {
      opacity: 0, scale: 0.9, duration: 0.25,
      onComplete: () => {
        if (textContainerRef.current) textContainerRef.current.style.display = "none";
      },
    });

    const canvas = canvasRef.current;
    if (!canvas) return;

    const width  = window.innerWidth;
    const height = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);

    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, width, 0, -height, 0.1, 1000);
    camera.position.z = 100;

    // Sample large logo pixel positions
    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx    = offscreenCanvas.getContext("2d")!;
    offscreenCanvas.width  = width;
    offscreenCanvas.height = height;

    const scale      = Math.min(width, 1000) / 1000;
    const largeFontSize = Math.round(110 * scale);
    offscreenCtx.fillStyle   = "#ffffff";
    offscreenCtx.font        = `bold ${largeFontSize}px "Space Grotesk", sans-serif`;
    offscreenCtx.textAlign   = "center";
    offscreenCtx.textBaseline = "middle";
    offscreenCtx.fillText("IQ Liber", width / 2, height / 2);

    const largeData   = offscreenCtx.getImageData(0, 0, width, height);
    const largePixels: THREE.Vector3[] = [];
    const step = 4;
    for (let y = 0; y < height; y += step)
      for (let x = 0; x < width; x += step)
        if (largeData.data[(y * width + x) * 4 + 3] > 128)
          largePixels.push(new THREE.Vector3(x, -y, 0));

    // Sample small navbar logo pixel positions
    offscreenCtx.clearRect(0, 0, width, height);
    offscreenCtx.fillStyle   = "#6C63FF";
    offscreenCtx.font        = `bold 24px "Space Grotesk", sans-serif`;
    offscreenCtx.textAlign   = "left";
    offscreenCtx.textBaseline = "top";
    offscreenCtx.fillText("IQ Liber", 28, 20);

    const smallData   = offscreenCtx.getImageData(0, 0, width, height);
    const smallPixels: THREE.Vector3[] = [];
    for (let y = 0; y < height; y += step)
      for (let x = 0; x < width; x += step)
        if (smallData.data[(y * width + x) * 4 + 3] > 128)
          smallPixels.push(new THREE.Vector3(x, -y, 0));

    const particleCount = Math.max(largePixels.length, 5000);
    const geometry      = new THREE.BufferGeometry();
    const positions     = new Float32Array(particleCount * 3);
    const initPos       = new Float32Array(particleCount * 3);
    const targetPos     = new Float32Array(particleCount * 3);
    const speeds        = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const s = largePixels[i % largePixels.length] ?? new THREE.Vector3(width / 2, -height / 2, 0);
      const e = smallPixels[i % (smallPixels.length || 1)] ?? new THREE.Vector3(28 + Math.random() * 80, -20, 0);
      positions[i*3]=initPos[i*3]=s.x; positions[i*3+1]=initPos[i*3+1]=s.y; positions[i*3+2]=initPos[i*3+2]=0;
      targetPos[i*3]=e.x; targetPos[i*3+1]=e.y; targetPos[i*3+2]=0;
      speeds[i*3]=(Math.random()-0.5)*2; speeds[i*3+1]=-(1.2+Math.random()*2.8); speeds[i*3+2]=Math.random();
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0x6C63FF, size: 2.0, transparent: true, opacity: 0.9 });
    materialRef.current = material;
    scene.add(new THREE.Points(geometry, material));

    windForceRef.current   = { value: 0 };
    lerpProgressRef.current = { value: 0 };

    // ⚡ Faster wind build: 0.9s (was 1.6s)
    gsap.timeline({ onComplete: () => setStage(4) })
        .to(windForceRef.current, { value: 1.0, duration: 0.9, ease: "power2.inOut" });

    const startTime = Date.now();
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      const elapsed = (Date.now() - startTime) / 1000;
      const pos     = geometry.attributes.position.array as Float32Array;
      const cur     = stageRef.current;
      for (let i = 0; i < particleCount; i++) {
        const xi = i*3, yi = i*3+1, zi = i*3+2;
        const wf = windForceRef.current.value;
        if (cur === 3) {
          pos[xi] = initPos[xi] + wf*(speeds[xi]*4+Math.sin(elapsed*2+initPos[yi]*0.04)*28);
          pos[yi] = initPos[yi] - wf*(speeds[yi]*5+Math.cos(elapsed*1.5+initPos[xi]*0.05)*14);
          pos[zi] = Math.sin(elapsed*4+speeds[zi])*8*wf;
        } else if (cur === 4) {
          const sx = initPos[xi]+wf*(speeds[xi]*4+Math.sin(elapsed*2+initPos[yi]*0.04)*28);
          const sy = initPos[yi]-wf*(speeds[yi]*5+Math.cos(elapsed*1.5+initPos[xi]*0.05)*14);
          const p  = lerpProgressRef.current.value;
          pos[xi] = THREE.MathUtils.lerp(sx, targetPos[xi], p);
          pos[yi] = THREE.MathUtils.lerp(sy, targetPos[yi], p);
          pos[zi] = THREE.MathUtils.lerp(0,  targetPos[zi], p);
        }
      }
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    return () => { cancelAnimationFrame(animationFrameId.current); scene.clear(); renderer.dispose(); };
  }, [stage]);

  // Stage 4: converge particles — ⚡ faster: 0.9s (was 1.6s)
  useEffect(() => {
    if (stage !== 4) return;
    gsap.to(lerpProgressRef.current, {
      value: 1, duration: 0.9, ease: "power3.inOut",
      onComplete: () => {
        if (canvasRef.current)
          gsap.to(canvasRef.current, { opacity: 0, duration: 0.4, onComplete: () => {
            cancelAnimationFrame(animationFrameId.current);
            onComplete();
          }});
        if (materialRef.current) gsap.to(materialRef.current, { opacity: 0, duration: 0.4 });
      },
    });
  }, [stage, onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fef9ff 0%, #f0e8ff 40%, #ffe8f4 100%)" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Decorative floating blobs behind text */}
      <div className="absolute top-[15%] left-[8%]  w-20 h-20 bg-purple-300/40 rounded-full blur-2xl" />
      <div className="absolute top-[20%] right-[10%] w-28 h-28 bg-pink-300/40   rounded-full blur-2xl" />
      <div className="absolute bottom-[20%] left-[15%] w-24 h-24 bg-indigo-300/40 rounded-full blur-2xl" />

      {/* Large letter logo */}
      <div ref={textContainerRef} className="relative z-10 flex items-center gap-1">
        {letters.map((char, index) => {
          if (char === " ") return <div key={`sp-${index}`} className="w-6 sm:w-12" />;
          return (
            <span
              key={`ch-${index}`}
              ref={el => { letterRefs.current[index] = el; }}
              className="inline-block text-[13vw] sm:text-[9vw] font-display font-extrabold leading-none select-none"
              style={{ background: "linear-gradient(135deg, #6C63FF, #FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}
