"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "Pre-2013",
    emoji: "🏭",
    title: "Industrial Roots — Nepal",
    desc: "Raised in an entrepreneurial family, learning production systems and business fundamentals through his father's pioneering rice-processing factory. The seeds of innovation were planted early.",
    color: "#6C63FF",
    detail: "Gained early exposure to manufacturing workflows, supply chains, and operational business management — skills that later shaped his engineering mindset.",
  },
  {
    year: "2013–2014",
    emoji: "🎓",
    title: "Engineering Excellence — Finland",
    desc: "Moved to Finland to study Mechanical Engineering at HAMK University. Gained deep manufacturing expertise at CNC Systems Finland and conducted research at Aalto University.",
    color: "#FF6B9D",
    detail: "Aalto University research focused on digital fabrication and rapid prototyping — experience that directly led to the founding of a 3D printing hardware company.",
  },
  {
    year: "2015",
    emoji: "🚀",
    title: "Co-Founded Mehta Heino Industries",
    desc: "Partnered with Petri Heino in Espoo, Finland to launch a 3D-printing hardware startup — the MHI3D/MANU printer for schools and startups worldwide.",
    color: "#06D6A0",
    detail: "MHI3D was one of the most affordable industrial-grade desktop 3D printers of its time, designed to democratize manufacturing for educators and early-stage startups.",
  },
  {
    year: "2024",
    emoji: "💡",
    title: "IP Acquired by CurifyLabs",
    desc: "The company's proprietary 3D-printing technology and hardware IP were acquired by Finnish health-tech firm CurifyLabs — a global milestone for South Asian founders.",
    color: "#FF9F1C",
    detail: "CurifyLabs uses the technology to automate personalized medicine and pharmaceutical manufacturing — applying 3D printing to life-saving healthcare innovation.",
  },
  {
    year: "2025 – Now",
    emoji: "🌏",
    title: "Returning Home — IQ Liber is Born",
    desc: "Drawing on a decade of deep-tech innovation, Santosh returned to Nepal to establish IQ Liber — driving digital transformation and creating world-class tech opportunities locally.",
    color: "#A855F7",
    detail: "IQ Liber is the culmination of cross-disciplinary expertise: hardware engineering, embedded systems, product design, and now world-class software development — all in service of Nepal's digital future.",
  },
];

const stats = [
  { num: "2025",  label: "Founded" },
  { num: "100+",  label: "Brands Scaled" },
  { num: "4.9★",  label: "Client Rating" },
  { num: "∞",     label: "Growth Potential" },
];

export default function About() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="about" className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(165deg, #fdfbff 0%, #f4f0ff 50%, #fff5f9 100%)" }}>

      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #FF6B9D, transparent)", opacity: 0.12 }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #6C63FF, transparent)", opacity: 0.08 }} />
      <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute top-[15%] left-[5%] text-3xl select-none pointer-events-none" style={{ opacity: 0.12 }}>🌟</motion.div>
      <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 3.8, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[20%] right-[6%] text-2xl select-none pointer-events-none" style={{ opacity: 0.12 }}>🏆</motion.div>

      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[13px] font-extrabold tracking-[0.22em] uppercase px-5 py-2 rounded-full mb-5"
            style={{ background: "rgba(255,240,248,0.9)", color: "#FF6B9D", border: "1.5px solid rgba(255,107,157,0.2)", backdropFilter: "blur(12px)" }}>
            📖 Our Story
          </span>
          <h2 className="text-[40px] md:text-[54px] font-display font-extrabold text-gray-900 leading-tight">
            The Story Behind<br />
            <span style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              The Vision
            </span>
          </h2>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="relative rounded-3xl p-8 md:p-12 mb-20 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(24px)",
            border: "1.5px solid rgba(108,99,255,0.18)",
            boxShadow: "0 8px 48px rgba(108,99,255,0.12)",
          }}
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #6C63FF, transparent)", opacity: 0.18 }} />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl flex items-center justify-center text-[40px] font-display font-extrabold text-white shadow-xl"
                style={{ background: "linear-gradient(135deg, #6C63FF 0%, #FF6B9D 100%)" }}>
                SM
              </div>
              <div className="mt-3 text-center">
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-purple-400">Founder & CEO</div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-gray-900">Santosh Mehta</h3>
                <span className="px-3 py-1 rounded-full text-[12px] font-bold"
                  style={{ background: "linear-gradient(135deg,#6C63FF22,#FF6B9D22)", color: "#6C63FF", border: "1px solid rgba(108,99,255,0.2)" }}>
                  🌍 Finland → Nepal
                </span>
              </div>
              <p className="text-[15px] font-semibold text-purple-600 mb-4 italic">&ldquo;From Helsinki Labs to Himalayan Innovation&rdquo;</p>
              <p className="text-[15px] text-gray-600 font-medium leading-relaxed mb-4">
                A pioneering Nepali engineer who bridged <strong>European deep-tech innovation</strong> with Nepal&apos;s growing tech ecosystem. Co-founder of Finnish 3D-printing startup <strong>Mehta Heino Industries</strong>, whose IP was acquired by health-tech firm CurifyLabs in 2024 — one of the few South Asian entrepreneurs to achieve a <strong>hardware startup &rarr; international IP acquisition</strong> journey.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Cross-Platform Software", "Embedded Systems", "3D Printing Pioneer", "IT Architecture", "Product Design"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-[12px] font-bold text-gray-600"
                    style={{ background: "rgba(108,99,255,0.07)", border: "1px solid rgba(108,99,255,0.14)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="text-center rounded-2xl py-6 px-4 cursor-default"
              style={{
                background: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(16px)",
                border: "1.5px solid rgba(108,99,255,0.12)",
                boxShadow: "0 4px 20px rgba(108,99,255,0.08)",
              }}
            >
              <div className="text-[32px] font-display font-extrabold"
                style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {s.num}
              </div>
              <div className="text-[13px] font-semibold text-gray-400 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h3 className="text-[28px] md:text-[36px] font-display font-extrabold text-gray-900">
            Professional{" "}
            <span style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Timeline
            </span>
          </h3>
          <p className="text-[14px] text-gray-400 font-medium mt-2">Click any milestone to explore details</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(to bottom, #6C63FF, #FF6B9D, #A855F7, transparent)" }} />

          <div className="flex flex-col gap-10">
            {milestones.map((m, idx) => {
              const isLeft = idx % 2 === 0;
              const isOpen = expanded === idx;
              return (
                <motion.div key={idx}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <motion.div
                    className={`w-full md:w-[calc(50%-3rem)] cursor-pointer`}
                    onClick={() => setExpanded(isOpen ? null : idx)}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      boxShadow: isOpen
                        ? `0 20px 50px ${m.color}35`
                        : `0 4px 24px ${m.color}12`,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: "rgba(255,255,255,0.75)",
                      backdropFilter: "blur(20px)",
                      border: `1.5px solid ${isOpen ? m.color + "55" : m.color + "25"}`,
                      borderRadius: "20px",
                      padding: "24px",
                    }}
                  >
                    <span className="text-[12px] font-extrabold tracking-[0.16em] uppercase px-3 py-1 rounded-full inline-block mb-3"
                      style={{ background: `${m.color}14`, color: m.color }}>
                      {m.year}
                    </span>
                    <h4 className="text-[19px] font-display font-extrabold text-gray-900 mb-2 leading-snug">
                      {m.emoji} {m.title}
                    </h4>
                    <p className="text-[14px] font-medium text-gray-500 leading-relaxed">{m.desc}</p>

                    {/* Expandable detail */}
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${m.color}22` }}>
                        <p className="text-[13px] font-medium text-gray-500 leading-relaxed italic">{m.detail}</p>
                      </div>
                    </motion.div>

                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="text-[12px] font-bold" style={{ color: m.color }}>
                        {isOpen ? "▲ Less" : "▼ More"}
                      </span>
                    </div>
                  </motion.div>

                  {/* Animated centre node */}
                  <motion.div
                    className="hidden md:flex w-14 h-14 shrink-0 rounded-full items-center justify-center text-2xl z-10 cursor-pointer"
                    onClick={() => setExpanded(isOpen ? null : idx)}
                    animate={{
                      scale: isOpen ? 1.25 : 1,
                      boxShadow: isOpen
                        ? `0 0 0 8px ${m.color}22, 0 8px 24px ${m.color}44`
                        : `0 4px 16px ${m.color}44`,
                    }}
                    whileHover={{ scale: 1.2, boxShadow: `0 0 0 6px ${m.color}22, 0 8px 24px ${m.color}55` }}
                    transition={{ duration: 0.3 }}
                    style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}88)` }}
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {m.emoji}
                    </motion.span>
                  </motion.div>

                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
