"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SandCanvas = dynamic(() => import("./SandCanvas"), { ssr: false });

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

// Reduced to 5 icons, very low opacity
const floatingIcons = [
  { icon: "🖥️", style: { top: "18%", left: "4%"  }, delay: 0,   dur: 3.5 },
  { icon: "🚀",  style: { top: "55%", left: "2%"  }, delay: 1.2, dur: 4.0 },
  { icon: "⚡",  style: { top: "15%", right: "5%" }, delay: 0.5, dur: 3.2 },
  { icon: "🌐",  style: { bottom: "25%", right: "3%" }, delay: 0.9, dur: 3.8 },
  { icon: "💻",  style: { bottom: "20%", left: "8%" }, delay: 1.6, dur: 2.9 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center pt-20 pb-10"
      style={{ background: "linear-gradient(155deg, #fdfbff 0%, #f3eeff 45%, #fff0f8 100%)" }}>

      {/* Subtle glow orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #b39dff 0%, transparent 70%)", opacity: 0.18 }} />
      <div className="absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff9dc8 0%, transparent 70%)", opacity: 0.14 }} />

      {/* 5 floating icons — very low opacity */}
      {floatingIcons.map((ic, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
          transition={{ duration: ic.dur, repeat: Infinity, ease: "easeInOut", delay: ic.delay }}
          className="absolute text-2xl select-none pointer-events-none"
          style={{ ...ic.style, opacity: 0.09 }}
        >
          {ic.icon}
        </motion.div>
      ))}

      {/* Floating registration text */}
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute select-none pointer-events-none text-center"
        style={{ bottom: "12%", right: "2%", maxWidth: "200px" }}
      >
        <span className="text-[10px] font-bold tracking-widest uppercase text-purple-500 block">
          🇳🇵 Registered in Nepal
        </span>
        <span className="text-[9px] font-semibold text-gray-500 block mt-0.5">
          Reg. No: 221097/078/079
        </span>
      </motion.div>

      {/* Main content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[80vh]">

        {/* Left — Text */}
        <motion.div
          variants={stagger} initial="hidden" animate="visible"
          className="flex flex-col gap-7 text-center lg:text-left justify-center py-10"
        >
          <motion.div variants={item}>
            <span className="inline-block text-[12px] font-extrabold tracking-[0.22em] uppercase px-5 py-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(108,99,255,0.10), rgba(255,107,157,0.10))",
                color: "#6C63FF",
                border: "1px solid rgba(108,99,255,0.18)",
                backdropFilter: "blur(8px)",
              }}>
              🏆 IQ Liber Pvt. Ltd — Full-Service Tech Partner
            </span>
          </motion.div>

          <motion.h1 variants={item}
            className="text-[40px] sm:text-[54px] lg:text-[64px] font-display font-extrabold leading-[1.05] tracking-tight text-gray-900">
            From Pixel to Empire.
            <br />
            <span style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              We Build It All.
            </span>
          </motion.h1>

          <motion.p variants={item}
            className="text-[17px] sm:text-[19px] font-sans font-medium leading-relaxed text-gray-600 max-w-xl mx-auto lg:mx-0">
            We handle your <strong>architecture</strong>, <strong>code</strong>, and <strong>marketing</strong>.
            You run the business. <span className="text-purple-600 font-semibold">Fully managed, end-to-end digital dominance.</span>
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a href="#contact" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden flex items-center gap-2.5 px-9 py-4 rounded-full text-white text-[16px] font-bold"
              style={{
                background: "linear-gradient(135deg, #6C63FF 0%, #9B59FF 60%, #FF6B9D 100%)",
                boxShadow: "0 8px 32px rgba(108,99,255,0.38), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}>
              <span className="relative z-10">Launch My Project 🚀</span>
              <div className="absolute inset-0 bg-white/15 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 skew-x-[-15deg]" />
            </motion.a>
            <motion.a href="#services" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}
              className="px-9 py-4 rounded-full text-[16px] font-bold transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(16px)",
                border: "1.5px solid rgba(108,99,255,0.25)",
                color: "#6C63FF",
                boxShadow: "0 4px 20px rgba(108,99,255,0.10)",
              }}>
              Explore Solutions ✦
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={item} className="flex items-center gap-8 justify-center lg:justify-start">
            {[
              { num: "100+", label: "Brands Scaled" },
              { num: "99%",  label: "Client Satisfaction" },
              { num: "4.9★", label: "Average Rating" },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col items-center lg:items-start">
                <span className="text-[22px] font-display font-extrabold"
                  style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {stat.num}
                </span>
                <span className="text-[11px] font-semibold text-gray-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Full-height Sand Canvas */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="relative w-full hidden lg:flex items-stretch"
          style={{ minHeight: "520px" }}
        >
          <SandCanvas />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <div className="w-5 h-8 rounded-full border-2 border-gray-400 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
