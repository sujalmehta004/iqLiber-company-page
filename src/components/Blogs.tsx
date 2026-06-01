"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight, Sparkles } from "lucide-react";

const posts = [
  { id:1, cat:"Web Apps",    emoji:"🌐", title:"Next-Gen WebGL & React 19: Building Hyper-Immersive Products",
    excerpt:"How Next.js 15, React Compiler, and custom Three.js shaders are redefining what's possible in corporate web experiences.",
    date:"May 28, 2026", author:"Santosh M.", readTime:"6 min", color:"#6C63FF", glow:"rgba(108,99,255,0.25)" },
  { id:2, cat:"Development", emoji:"⚙️", title:"Why Custom Software Always Outperforms Generic SaaS",
    excerpt:"Custom databases, automated micro-APIs, and proprietary algorithms unlock efficiency no off-the-shelf product can match.",
    date:"May 18, 2026", author:"Alex Rivers", readTime:"8 min", color:"#FF6B9D", glow:"rgba(255,107,157,0.25)" },
  { id:3, cat:"Marketing",   emoji:"📈", title:"Dominating Google: High-Intent Keyword Acquisition Strategy",
    excerpt:"Our high-performance SEO keyword mapping methodology that generates compounding CTRs and sustainable client growth.",
    date:"Apr 29, 2026", author:"Sarah S.", readTime:"5 min", color:"#06D6A0", glow:"rgba(6,214,160,0.25)" },
  { id:4, cat:"Marketing",   emoji:"🎨", title:"The Art of Digital Branding in the AI Era",
    excerpt:"Minimalism, curated typography, micro-animations — how elite businesses define their identity before a word is read.",
    date:"Apr 15, 2026", author:"Marcus G.", readTime:"4 min", color:"#FF9F1C", glow:"rgba(255,159,28,0.25)" },
  { id:5, cat:"Development", emoji:"🤖", title:"Building AI-Powered Workflows That Actually Save Time",
    excerpt:"Practical guide to integrating LLMs, automation scripts, and intelligent APIs into your existing business operations.",
    date:"Mar 30, 2026", author:"Santosh M.", readTime:"7 min", color:"#A855F7", glow:"rgba(168,85,247,0.25)" },
  { id:6, cat:"Web Apps",   emoji:"☁️", title:"Cloud-Native Architecture: Build Once, Scale Infinitely",
    excerpt:"How containerized microservices, Kubernetes, and serverless functions allow your app to handle any load.",
    date:"Mar 10, 2026", author:"Alex Rivers", readTime:"9 min", color:"#10B981", glow:"rgba(16,185,129,0.25)" },
];

const cats = ["All","Development","Web Apps","Marketing"] as const;
type Cat = typeof cats[number];

export default function Blogs() {
  const [active, setActive] = useState<Cat>("All");
  const [query, setQuery]   = useState("");

  const filtered = posts.filter(p =>
    (active === "All" || p.cat === active) &&
    (p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase()))
  );

  const handleReset = useCallback(() => { setActive("All"); setQuery(""); }, []);

  return (
    <section id="blogs" className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(170deg, #f4f0ff 0%, #fdfbff 50%, #fff5f8 100%)" }}>

      <motion.div animate={{ y:[0,-14,0], rotate:[0,10,-10,0] }} transition={{ duration:4.5, repeat:Infinity }}
        className="absolute top-14 right-[7%] text-3xl select-none pointer-events-none" style={{ opacity: 0.12 }}>📚</motion.div>
      <motion.div animate={{ y:[0,12,0] }} transition={{ duration:3.5, repeat:Infinity, delay:1 }}
        className="absolute bottom-20 left-[5%] text-2xl select-none pointer-events-none" style={{ opacity: 0.12 }}>✍️</motion.div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[13px] font-extrabold tracking-[0.22em] uppercase px-5 py-2 rounded-full mb-5"
              style={{ background: "rgba(245,243,255,0.9)", color: "#6C63FF", border: "1.5px solid rgba(108,99,255,0.2)", backdropFilter: "blur(12px)" }}>
              <Sparkles className="w-3.5 h-3.5" /> Expert Insights
            </span>
            <h2 className="text-[36px] md:text-[48px] font-display font-extrabold text-gray-900 leading-tight">
              Ideas that{" "}
              <span style={{ background:"linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Inspire
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search articles..."
                className="pl-11 pr-5 py-3 rounded-2xl text-[14px] font-medium outline-none w-56 transition-all duration-200 focus:w-64"
                style={{ background: "rgba(255,255,255,0.8)", border: "1.5px solid rgba(108,99,255,0.15)", backdropFilter: "blur(16px)", color: "#1a1a2e" }} />
            </div>
            <a href="/blog"
              className="px-5 py-3 rounded-2xl text-[13px] font-bold whitespace-nowrap"
              style={{ background: "linear-gradient(135deg,#6C63FF,#9B59FF)", color: "white", boxShadow: "0 4px 16px rgba(108,99,255,0.25)" }}>
              View All →
            </a>
          </div>
        </motion.div>

        <div className="flex gap-3 mb-12 flex-wrap">
          {cats.map(cat => (
            <motion.button key={cat} onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-200"
              style={active === cat ? {
                background: "linear-gradient(135deg, #6C63FF, #9B59FF)", color: "white", boxShadow: "0 6px 20px rgba(108,99,255,0.38)",
              } : {
                background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)",
                border: "1.5px solid rgba(108,99,255,0.15)", color: "#6b7280",
              }}>
              {cat}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {filtered.slice(0, 4).map((post, i) => (
                <motion.div key={post.id}
                  initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  whileHover={{ y: -10, boxShadow: `0 20px 60px ${post.glow}` }}
                  className="group relative rounded-3xl p-7 cursor-pointer overflow-hidden transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.72)", backdropFilter: "blur(24px)", border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: `0 4px 32px ${post.glow.replace("0.25","0.07")}` }}>
                  <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-18 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${post.color}, transparent)` }} />
                  <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-xl text-[24px] mb-5 shadow-md"
                    style={{ background: `linear-gradient(135deg, ${post.color}20, ${post.color}10)`, border: `1.5px solid ${post.color}30` }}>
                    {post.emoji}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: post.color }}>{post.cat}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-[11px] text-gray-400">{post.date}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-[11px] text-gray-400">⏱ {post.readTime}</span>
                  </div>
                  <h3 className="text-[18px] font-display font-extrabold text-gray-900 leading-snug mb-3 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ background: `linear-gradient(135deg, ${post.color}, ${post.color}88)` }}>
                        {post.author.split(" ").map(p => p[0]).join("")}
                      </div>
                      <span className="text-[12px] font-semibold text-gray-500">by {post.author}</span>
                    </div>
                    <motion.span whileHover={{ scale: 1.08 }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-bold"
                      style={{ background: `${post.color}14`, color: post.color, border: `1.5px solid ${post.color}30` }}>
                      Read more <ArrowUpRight className="w-3 h-3" />
                    </motion.span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `linear-gradient(90deg, transparent, ${post.color}, transparent)` }} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-[18px] font-display font-bold text-gray-500">No articles found.</p>
              <motion.button onClick={handleReset} whileHover={{ scale: 1.05 }}
                className="mt-5 px-6 py-2.5 rounded-full text-[13px] font-bold"
                style={{ background: "linear-gradient(135deg,#6C63FF22,#FF6B9D22)", color: "#6C63FF", border: "1.5px solid rgba(108,99,255,0.25)" }}>
                Reset filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-40px" }}
          className="text-center mt-12"
        >
          <a href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-bold"
            style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1.5px solid rgba(108,99,255,0.2)", color: "#6C63FF" }}>
            View all articles <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
