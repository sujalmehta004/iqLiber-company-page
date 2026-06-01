"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ value, suffix="", duration=1.5 }: { value:number; suffix?:string; duration?:number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const ran = useRef(false);
  useEffect(() => {
    if (!inView || ran.current || !ref.current) return;
    ran.current = true;
    let start: number|null = null;
    const el = ref.current;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts-start)/(duration*1000), 1);
      const e = 1 - Math.pow(1-p, 3);
      el.textContent = `${Math.floor(e*value)}${suffix}`;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, suffix, duration]);
  return <span ref={ref} className="font-display font-extrabold tabular-nums">0{suffix}</span>;
}

const stats = [
  { value: 312, suffix: "%",  label: "Organic Traffic Growth",    emoji: "📈" },
  { value: 98,  suffix: "%",  label: "Client Satisfaction Rate",  emoji: "🏆" },
  { value: 4,   suffix: ".9★",label: "Average Review Score",      emoji: "⭐" },
  { value: 100, suffix: "+",  label: "Global Brands Scaled",      emoji: "🌍" },
];

const capabilities = [
  { pct: 99, label: "SEO Optimization Score",               color: "#6C63FF" },
  { pct: 92, label: "Click-Through Rate Uplift",            color: "#FF6B9D" },
  { pct: 88, label: "Conversion Rate Optimization Boost",   color: "#FFD166" },
];

export default function MarketingShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="marketing" ref={sectionRef} className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(165deg, #fff5f8 0%, #fdfbff 60%, #f4f0ff 100%)" }}>

      {/* Decoratives */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #6C63FF, transparent)" }} />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease:"linear" }}
        className="absolute top-12 right-[10%] text-5xl select-none opacity-15">📊</motion.div>
      <motion.div animate={{ y:[0,-14,0] }} transition={{ duration:4, repeat:Infinity }}
        className="absolute bottom-16 left-[8%] text-4xl select-none opacity-20">🚀</motion.div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-[13px] font-extrabold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background:"#f5f3ff", color:"#6C63FF" }}>
            📊 Growth Analytics
          </span>
          <h2 className="text-[40px] md:text-[52px] font-display font-extrabold text-gray-900 leading-tight">
            Numbers That <span style={{ background:"linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Speak</span>
          </h2>
          <p className="text-[17px] text-gray-400 font-medium max-w-lg mx-auto mt-4">
            Every campaign we run is backed by data, driven by creative strategy, and built to compound.
          </p>
        </div>

        {/* Big stat numbers — no containers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-24 text-center">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.1 }}>
              <div className="text-[42px] mb-1">{s.emoji}</div>
              <div className="text-[48px] md:text-[56px] leading-none"
                style={{ background:"linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                <CountUp value={s.value} suffix={s.suffix} duration={1.8} />
              </div>
              <div className="text-[13px] font-sans font-bold text-gray-400 uppercase tracking-wider mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Two column: SVG chart + progress bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Growth chart (no container) */}
          <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.8 }}>
            <h3 className="text-[24px] font-display font-bold text-gray-900 mb-2">Revenue Growth Curve</h3>
            <p className="text-[15px] text-gray-400 font-medium mb-8">Quarterly performance across our client portfolio</p>
            <div className="relative h-[220px]">
              <svg viewBox="0 0 480 200" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="mg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#6C63FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[50,100,150].map(y => <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="#f0eeff" strokeWidth="1" strokeDasharray="4,4" />)}
                {/* Gradient fill */}
                {inView && <motion.path d="M10,180 Q120,140 220,120 T430,50 L470,35 L470,200 L10,200 Z"
                  fill="url(#mg2)" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1 }} />}
                {/* Line */}
                {inView && <motion.path d="M10,180 Q120,140 220,120 T430,50 L470,35" fill="none"
                  stroke="#6C63FF" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength:0 }} animate={{ pathLength:1 }} transition={{ duration:2.2, ease:"easeInOut" }} />}
                {/* Second line (comparison) */}
                {inView && <motion.path d="M10,175 Q120,160 220,155 T430,120 L470,110" fill="none"
                  stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" strokeDasharray="6,4"
                  initial={{ pathLength:0 }} animate={{ pathLength:1 }} transition={{ duration:2.5, ease:"easeInOut", delay:0.3 }} />}
              </svg>
              {/* Legend */}
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2"><div className="w-6 h-0.5 bg-purple-500 rounded" /><span className="text-[12px] font-bold text-gray-400">IQ Liber Clients</span></div>
                <div className="flex items-center gap-2"><div className="w-6 h-0 border-t-2 border-dashed border-pink-400" /><span className="text-[12px] font-bold text-gray-400">Industry Average</span></div>
              </div>
            </div>
          </motion.div>

          {/* Right — capability bars (no container) */}
          <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.8 }}>
            <h3 className="text-[24px] font-display font-bold text-gray-900 mb-2">Our Capability Scores</h3>
            <p className="text-[15px] text-gray-400 font-medium mb-10">Measured across live client campaigns</p>
            <div className="flex flex-col gap-8">
              {capabilities.map((cap,i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[15px] font-bold text-gray-700">{cap.label}</span>
                    <span className="text-[15px] font-extrabold" style={{ color: cap.color }}>{cap.pct}%</span>
                  </div>
                  {/* Track */}
                  <div className="w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
                    {inView && <motion.div className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${cap.color}99, ${cap.color})` }}
                      initial={{ width:0 }} animate={{ width:`${cap.pct}%` }}
                      transition={{ duration:1.4, ease:"easeOut", delay:i*0.18 }} />}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
