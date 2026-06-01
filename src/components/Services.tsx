"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Smartphone, Globe, BarChart3, Shield, Code2 } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: Cpu, emoji: "⚙️",
    title: "Custom Software Development",
    desc: "Engineered-for-scale backend engines, API systems, and bespoke corporate solutions. Every line of code crafted for your exact scenario.",
    color: "from-violet-500 to-indigo-500",
    glow: "rgba(109,40,217,0.28)",
    bg: "rgba(245,243,255,0.7)",
    accent: "#6C63FF",
    href: "/services/custom-software",
  },
  {
    icon: Smartphone, emoji: "📱",
    title: "Mobile App Development",
    desc: "High-performance native & cross-platform apps with flawless UX, offline capability, and premium interfaces — iOS, Android, or both.",
    color: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.28)",
    bg: "rgba(255,245,248,0.7)",
    accent: "#FF6B9D",
    href: "/services/mobile-app",
  },
  {
    icon: Globe, emoji: "🌐",
    title: "Next-Gen Web Solutions",
    desc: "Immersive web apps powered by Next.js 15, WebGL, GSAP, and structured SEO. We build experiences users remember and engines reward.",
    color: "from-cyan-500 to-teal-500",
    glow: "rgba(6,182,212,0.28)",
    bg: "rgba(240,255,254,0.7)",
    accent: "#06D6A0",
    href: "/services/web-solutions",
  },
  {
    icon: BarChart3, emoji: "📈",
    title: "Digital Marketing & Branding",
    desc: "Data-driven growth engines. Premium SEO, visual identity, high-CTR campaigns, and analytics dashboards compounding results month over month.",
    color: "from-orange-400 to-amber-500",
    glow: "rgba(251,146,60,0.28)",
    bg: "rgba(255,251,240,0.7)",
    accent: "#FF9F1C",
    href: "/services/digital-marketing",
  },
  {
    icon: Shield, emoji: "🛡️",
    title: "DevOps & Cloud Infrastructure",
    desc: "Zero-downtime deployments, CI/CD pipelines, auto-scaling cloud architecture. Your systems stay fast, secure, and always-on.",
    color: "from-emerald-500 to-green-500",
    glow: "rgba(16,185,129,0.28)",
    bg: "rgba(240,255,247,0.7)",
    accent: "#10B981",
    href: "/services/devops",
  },
  {
    icon: Code2, emoji: "🤖",
    title: "AI & Automation Systems",
    desc: "Custom AI integrations, LLM-powered tools, workflow automation, and intelligent data pipelines. Let technology handle the repetitive.",
    color: "from-purple-500 to-fuchsia-500",
    glow: "rgba(168,85,247,0.28)",
    bg: "rgba(250,245,255,0.7)",
    accent: "#A855F7",
    href: "/services/ai-automation",
  },
];

export default function Services() {
  const router = useRouter();

  return (
    <section id="services" className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(175deg, #fff0f8 0%, #fdfbff 50%, #f4f0ff 100%)" }}>

      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-16 right-[8%] text-4xl select-none pointer-events-none" style={{ opacity: 0.10 }}>⭐</motion.div>
      <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 left-[6%] text-3xl select-none pointer-events-none" style={{ opacity: 0.10 }}>💡</motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #6C63FF, transparent)", opacity: 0.04 }} />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[13px] font-extrabold tracking-[0.22em] uppercase px-5 py-2 rounded-full mb-5"
            style={{ background: "rgba(245,243,255,0.85)", color: "#6C63FF", border: "1.5px solid rgba(108,99,255,0.2)", backdropFilter: "blur(12px)", boxShadow: "0 2px 12px rgba(108,99,255,0.08)" }}>
            ⚡ Core Offerings
          </span>
          <h2 className="text-[40px] md:text-[54px] font-display font-extrabold text-gray-900 leading-tight">
            Solutions Built to{" "}
            <span style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Scale</span>
          </h2>
          <p className="text-[18px] text-gray-500 font-medium max-w-lg mx-auto mt-4 leading-relaxed">
            Every service is custom-engineered for your scenario — not templated, not generic. Full-stack, fully managed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isClickable = !!svc.href;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                whileHover={{ y: -10, boxShadow: `0 24px 60px ${svc.glow}, 0 4px 24px rgba(0,0,0,0.06)` }}
                onClick={() => isClickable && router.push(svc.href!)}
                className={`group relative rounded-3xl p-7 overflow-hidden transition-all duration-300 ${isClickable ? "cursor-pointer" : "cursor-default"}`}
                style={{
                  background: svc.bg,
                  backdropFilter: "blur(20px)",
                  border: "1.5px solid rgba(255,255,255,0.5)",
                  boxShadow: `0 4px 32px ${svc.glow.replace("0.28", "0.09")}`,
                }}
              >
                {isClickable && (
                  <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                    style={{ background: `${svc.accent}18`, color: svc.accent, border: `1px solid ${svc.accent}33` }}>
                    Explore →
                  </div>
                )}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-25 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${svc.accent}, transparent)` }} />
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center shadow-lg mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{svc.emoji}</span>
                  <h3 className="text-[19px] font-display font-extrabold text-gray-900 leading-snug group-hover:text-purple-700 transition-colors duration-200">
                    {svc.title}
                  </h3>
                </div>
                <p className="text-[15px] font-medium text-gray-500 leading-relaxed mb-5">{svc.desc}</p>
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold cursor-pointer"
                  style={{ background: `linear-gradient(135deg, ${svc.accent}1a, ${svc.accent}0d)`, color: svc.accent, border: `1.5px solid ${svc.accent}40` }}
                  onClick={(e) => { e.stopPropagation(); if (isClickable) router.push(svc.href!); else document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  {isClickable ? "Explore Service →" : "Get Started →"}
                </motion.span>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(90deg, transparent, ${svc.accent}, transparent)` }} />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-[19px] font-display font-bold text-gray-700 mb-6">
            Not sure which service fits? Let&apos;s figure it out. ☕
          </p>
          <motion.a href="#contact" whileHover={{ y: -3, scale: 1.02 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white text-[16px] font-bold"
            style={{ background: "linear-gradient(135deg, #FF6B9D 0%, #9B59FF 50%, #6C63FF 100%)", boxShadow: "0 8px 32px rgba(108,99,255,0.32)" }}>
            Book a Free Consultation 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
