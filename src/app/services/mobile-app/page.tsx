import React from "react";
import PageShell from "@/components/PageShell";
import ContactComponent from "@/components/Contact";
import Link from "next/link";
import { Smartphone, Zap, Wifi, RefreshCw, Lock, Star, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Mobile App Development | IQ Liber",
  description: "High-performance iOS & Android apps with stunning UX, offline capability, and flawless performance.",
};

const features = [
  { icon: Smartphone, title: "Native iOS & Android",   desc: "Pure Swift and Kotlin development for maximum performance and access to all platform capabilities.", color: "#FF6B9D" },
  { icon: Zap,        title: "Cross-Platform (React Native / Flutter)", desc: "One codebase, two platforms — without sacrificing the native feel your users expect.", color: "#6C63FF" },
  { icon: Wifi,       title: "Offline-First Architecture", desc: "Apps that work flawlessly with zero connectivity, syncing seamlessly when back online.", color: "#06D6A0" },
  { icon: RefreshCw,  title: "Real-Time Features",     desc: "Live chat, push notifications, real-time data sync, and collaborative features built into the core.", color: "#FF9F1C" },
  { icon: Lock,       title: "Security & Compliance",  desc: "End-to-end encryption, biometric auth, and full App Store / Play Store compliance from launch.", color: "#A855F7" },
  { icon: Star,       title: "5-Star UX Design",       desc: "Pixel-perfect interfaces that users love — smooth animations, intuitive flows, premium visuals.", color: "#10B981" },
];

export default function MobileAppPage() {
  return (
    <PageShell>
      <div className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(155deg, #fff5f8 0%, #fdfbff 50%, #fff0ff 100%)" }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/#services" className="text-[13px] text-gray-400 hover:text-purple-600 transition-colors">Services</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[13px] font-bold text-pink-500">Mobile App Development</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-[12px] font-extrabold uppercase tracking-widest"
            style={{ background: "rgba(255,107,157,0.1)", color: "#FF6B9D", border: "1px solid rgba(255,107,157,0.2)" }}>
            📱 App Engineers
          </div>
          <h1 className="text-[52px] md:text-[68px] font-display font-extrabold text-gray-900 leading-[1.04] mb-6">
            Apps Users<br />
            <span style={{ background: "linear-gradient(135deg,#FF6B9D,#9B59FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Can&apos;t Put Down.
            </span>
          </h1>
          <p className="text-[19px] text-gray-600 font-medium max-w-xl mb-10 leading-relaxed">
            We build high-performance mobile apps with flawless UX, offline capability, and premium interfaces — for iOS, Android, or both.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-white text-[16px] font-bold"
            style={{ background: "linear-gradient(135deg,#FF6B9D,#9B59FF)", boxShadow: "0 8px 28px rgba(255,107,157,0.38)" }}>
            Build My App 📱
          </Link>
        </div>
      </div>
      <div className="py-24" style={{ background: "#fdfbff" }}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-[36px] font-display font-extrabold text-gray-900 text-center mb-16">App Capabilities</h2>
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
