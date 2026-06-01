"use client";

import React, { useState, useCallback } from "react";
import ReactLenis from "lenis/react";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";

const IntroScreen       = dynamic(() => import("@/components/IntroScreen"));
const Hero              = dynamic(() => import("@/components/Hero"));
const Services          = dynamic(() => import("@/components/Services"));
const MarketingShowcase = dynamic(() => import("@/components/MarketingShowcase"));
const About             = dynamic(() => import("@/components/About"));
const Contact           = dynamic(() => import("@/components/Contact"));

const LENIS_OPTIONS = {
  lerp: 0.09,
  smoothWheel: true,
  syncTouch: false,
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
};

export default function Home() {
  const [introActive, setIntroActive] = useState(true);
  const [showNavbar,  setShowNavbar]  = useState(false);

  // Check sessionStorage on mount to see if intro already played
  React.useEffect(() => {
    if (sessionStorage.getItem("iq_liber_intro_played")) {
      setIntroActive(false);
      setShowNavbar(true);
    }
  }, []);

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem("iq_liber_intro_played", "true");
    setIntroActive(false);
    setTimeout(() => setShowNavbar(true), 120);
  }, []);

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      <div className="flex flex-col min-h-screen relative font-sans antialiased" style={{ willChange: "scroll-position" }}>

        {introActive && <IntroScreen onComplete={handleIntroComplete} />}
        <Navbar visible={showNavbar} />

        <main className={`flex flex-col flex-1 transition-opacity duration-700 ${showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <Hero />
          <Services />
          <MarketingShowcase />
          <About />
          <Contact />

          <footer className="py-12 text-white/50 text-[13px] font-medium text-center border-t border-white/5" style={{ background: "#0f0f1a" }}>
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[17px] font-display font-bold text-white">IQ Liber</span>
              <span>© {new Date().getFullYear()} IQ Liber Pvt. Ltd. All rights reserved.</span>
              <div className="flex items-center gap-6">
                <a href="/#services" className="hover:text-white transition-colors">Services</a>
                <a href="/blog"      className="hover:text-white transition-colors">Blog</a>
                <a href="/contact"   className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </ReactLenis>
  );
}
