"use client";

import React, { useRef, useEffect } from "react";

const COLORS = [
  "#9B59FF", "#6C63FF", "#C084FC", "#FF6B9D",
  "#FFD166", "#FF9DC8", "#A78BFA", "#818CF8",
  "#F472B6", "#34D399",
];

interface Particle {
  x: number; y: number;
  ox: number; oy: number;
  vx: number; vy: number;
  size: number;
  color: string;
  alpha: number;
}

export default function SandCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });
  const animId = useRef(0);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      if (!canvas) return;
      const W = container.clientWidth;
      const H = container.clientHeight;
      canvas.width = W;
      canvas.height = H;
      buildParticles(W, H);
    };

    function buildParticles(W: number, H: number) {
      particles.current = [];
      const count = 7000;
      const cx = W / 2;
      const cy = H / 2;

      for (let i = 0; i < count; i++) {
        const t = i / count;
        // Dual-arm galaxy spiral
        const arm = i % 2 === 0 ? 0 : Math.PI;
        const turns = 4.5;
        const angle = arm + t * Math.PI * 2 * turns;
        const maxR   = Math.min(W, H) * 0.44;
        const r      = t * maxR;
        const spread = (r / maxR) * 22 + 3;

        const ox = cx + Math.cos(angle) * r + (Math.random() - 0.5) * spread;
        const oy = cy + Math.sin(angle) * r * 0.72 + (Math.random() - 0.5) * spread;

        particles.current.push({
          x: ox + (Math.random() - 0.5) * 60,
          y: oy + (Math.random() - 0.5) * 60,
          ox, oy,
          vx: 0, vy: 0,
          size: 0.8 + Math.random() * 1.6,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 0.45 + Math.random() * 0.5,
        });
      }
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const REPULSE_R  = 130;
    const REPULSE_F  = 11;
    const SPRING     = 0.035;
    const DAMPING    = 0.82;

    function tick() {
      if (!canvas) return;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const active = mouse.current.active;

      for (const p of particles.current) {
        if (active) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < REPULSE_R * REPULSE_R) {
            const dist = Math.sqrt(dist2) || 0.001;
            const force = (REPULSE_R - dist) / REPULSE_R;
            p.vx += (dx / dist) * force * REPULSE_F;
            p.vy += (dy / dist) * force * REPULSE_F;
          }
        }

        // Spring back to origin
        p.vx += (p.ox - p.x) * SPRING;
        p.vy += (p.oy - p.y) * SPRING;
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId.current = requestAnimationFrame(tick);
    }

    tick();

    // Mouse handlers
    const onMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    };
    const onMouseLeave = () => { mouse.current.active = false; };

    // Touch handlers
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const t = e.touches[0];
      mouse.current.x = t.clientX - rect.left;
      mouse.current.y = t.clientY - rect.top;
      mouse.current.active = true;
    };
    const onTouchEnd = () => { mouse.current.active = false; };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(animId.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative" style={{ minHeight: "520px" }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ cursor: "crosshair", display: "block" }}
      />
      {/* subtle overlay glow */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(108,99,255,0.06) 0%, transparent 70%)" }} />
    </div>
  );
}
