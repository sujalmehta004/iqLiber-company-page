import React from "react";
import PageShell from "@/components/PageShell";
import ContactComponent from "@/components/Contact";
import Link from "next/link";
import { Globe, Layers, Gauge, Search, Box, Cpu, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Next-Gen Web Solutions | IQ Liber",
  description: "Immersive Next.js web apps with WebGL, GSAP animations, and structured SEO — experiences users never forget.",
};

const features = [
  { icon: Globe,  title: "Next.js 15 & React 19",    desc: "Server-side rendering, App Router, React Server Components — the fastest, most modern web stack available.", color: "#06D6A0" },
  { icon: Box,    title: "3D & WebGL Experiences",   desc: "Three.js, React Three Fiber, and custom GLSL shaders for immersive 3D web experiences that wow.", color: "#6C63FF" },
  { icon: Gauge,  title: "Performance Optimization", desc: "Core Web Vitals 90+, edge caching, image optimization, lazy loading — fast from day one.", color: "#FF9F1C" },
  { icon: Search, title: "Technical SEO",            desc: "Structured data, Open Graph, canonical tags, sitemap generation, and robots.txt — fully managed.", color: "#FF6B9D" },
  { icon: Layers, title: "CMS & Headless Commerce",  desc: "Sanity, Contentful, Shopify headless — flexible content management your team can actually use.", color: "#A855F7" },
  { icon: Cpu,    title: "GSAP & Framer Motion",     desc: "Cinematic scroll animations, page transitions, and micro-interactions that make your site feel alive.", color: "#10B981" },
];

export default function WebSolutionsPage() {
  return (
    <PageShell>
      <div className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(155deg, #f0fffe 0%, #fdfbff 50%, #f0fff8 100%)" }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/#services" className="text-[13px] text-gray-400 hover:text-purple-600 transition-colors">Services</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[13px] font-bold text-teal-600">Next-Gen Web Solutions</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-[12px] font-extrabold uppercase tracking-widest"
            style={{ background: "rgba(6,182,212,0.1)", color: "#06B6D4", border: "1px solid rgba(6,182,212,0.2)" }}>
            🌐 Web Engineers
          </div>
          <h1 className="text-[52px] md:text-[68px] font-display font-extrabold text-gray-900 leading-[1.04] mb-6">
            Websites That<br />
            <span style={{ background: "linear-gradient(135deg,#06D6A0,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Leave an Impression.
            </span>
          </h1>
          <p className="text-[19px] text-gray-600 font-medium max-w-xl mb-10 leading-relaxed">
            From blazing-fast Next.js apps to immersive 3D WebGL experiences — we build the web presence you&apos;ve always envisioned.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-white text-[16px] font-bold"
            style={{ background: "linear-gradient(135deg,#06D6A0,#06B6D4)", boxShadow: "0 8px 28px rgba(6,214,160,0.35)" }}>
            Build My Website 🌐
          </Link>
        </div>
      </div>
      <div className="py-24" style={{ background: "#fdfbff" }}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-[36px] font-display font-extrabold text-gray-900 text-center mb-16">Web Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((f, i) => { const Icon = f.icon; return (
              <div key={i} className="rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.72)", backdropFilter: "blur(20px)", border: `1.5px solid ${f.color}22`, boxShadow: `0 4px 24px ${f.color}10` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${f.color}18` }}>
                  <Icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h3 className="text-[17px] font-display font-extrabold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-[14px] text-gray-500 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </div>
      <ContactComponent />
    </PageShell>
  );
}
