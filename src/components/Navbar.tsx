"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  visible: boolean;
}

const navLinks = [
  { label: "Home",      href: "/#home"     },
  { label: "Services",  href: "/#services"  },
  { label: "Growth",    href: "/#marketing" },
  { label: "Our Story", href: "/#about"    },
  { label: "Blog",      href: "/blog"      },
];

export default function Navbar({ visible }: NavbarProps) {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            scrolled
              ? "bg-white/85 backdrop-blur-md shadow-[0_2px_24px_rgba(108,99,255,0.08)] border-b border-purple-100/60"
              : "bg-white/50 backdrop-blur-sm"
          }`}
        >
          <div className="w-full px-8 lg:px-14 h-16 flex items-center justify-between">
            {/* Logo */}
            <a href="/#home" className="flex items-center gap-2 shrink-0 group">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)" }}>
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-[18px] font-display font-extrabold tracking-tight"
                style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                IQ Liber
              </span>
            </a>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                link.href.startsWith("/blog") ? (
                  <Link key={link.label} href={link.href}
                    className="text-[14px] font-sans font-semibold text-gray-600 hover:text-purple-600 transition-colors duration-200 relative group">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </Link>
                ) : (
                  <a key={link.label} href={link.href}
                    className="text-[14px] font-sans font-semibold text-gray-600 hover:text-purple-600 transition-colors duration-200 relative group">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </a>
                )
              ))}
            </nav>

            {/* CTA — Contact Us only (no Sign In) */}
            <div className="hidden md:flex items-center">
              <Link href="/contact"
                className="px-6 py-2.5 rounded-full text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#6C63FF,#9B59FF)", boxShadow: "0 4px 16px rgba(108,99,255,0.28)" }}>
                Contact Us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-purple-50 transition-colors"
              onClick={() => setMobileOpen(o => !o)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile drawer */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-purple-100/60"
              >
                <div className="px-6 py-4 flex flex-col gap-3">
                  {navLinks.map(link => (
                    link.href.startsWith("/blog") ? (
                      <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                        className="py-2 text-[15px] font-semibold text-gray-700 hover:text-purple-600 transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                        className="py-2 text-[15px] font-semibold text-gray-700 hover:text-purple-600 transition-colors">
                        {link.label}
                      </a>
                    )
                  ))}
                  <Link href="/contact" onClick={() => setMobileOpen(false)}
                    className="mt-2 w-full text-center py-3 rounded-full text-[14px] font-bold text-white"
                    style={{ background: "linear-gradient(135deg,#6C63FF,#9B59FF)" }}>
                    Contact Us →
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
