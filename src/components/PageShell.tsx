"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",      href: "/"         },
  { label: "Services",  href: "/#services" },
  { label: "Growth",    href: "/#marketing" },
  { label: "Our Story", href: "/#about"    },
  { label: "Blog",      href: "/blog"      },
];

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#fdfbff" }}>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md shadow-[0_2px_24px_rgba(108,99,255,0.08)] border-b border-purple-100/60">
        <div className="w-full px-8 lg:px-14 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)" }}>
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-[18px] font-display font-extrabold tracking-tight"
              style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              IQ Liber
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <Link key={link.label} href={link.href}
                className="text-[14px] font-semibold text-gray-600 hover:text-purple-600 transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact"
              className="px-6 py-2.5 rounded-full text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#6C63FF,#9B59FF)", boxShadow: "0 4px 16px rgba(108,99,255,0.3)" }}>
              Contact Us
            </Link>
          </div>

          <button className="md:hidden p-2 rounded-xl text-gray-600" onClick={() => setMobileOpen(o => !o)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white/95 border-t border-purple-100/60">
              <div className="px-6 py-4 flex flex-col gap-3">
                {navLinks.map(link => (
                  <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                    className="py-2 text-[15px] font-semibold text-gray-700 hover:text-purple-600 transition-colors">
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  className="mt-2 text-center py-3 rounded-full text-[14px] font-bold text-white"
                  style={{ background: "linear-gradient(135deg,#6C63FF,#9B59FF)" }}>
                  Contact Us →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 text-white/50 text-[13px] font-medium text-center border-t border-white/5"
        style={{ background: "#0f0f1a" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[17px] font-display font-bold text-white">IQ Liber</span>
          <span>© {new Date().getFullYear()} IQ Liber Pvt. Ltd. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/#services"  className="hover:text-white transition-colors">Services</Link>
            <Link href="/blog"       className="hover:text-white transition-colors">Blog</Link>
            <Link href="/contact"    className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
