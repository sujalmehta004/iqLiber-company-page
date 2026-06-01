import React from "react";
import PageShell from "@/components/PageShell";
import ContactComponent from "@/components/Contact";
import Link from "next/link";
import { BarChart3, TrendingUp, Target, Eye, MessageSquare, Search, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Digital Marketing & Branding | IQ Liber",
  description: "Data-driven digital marketing services — SEO, PPC, social media, content, and brand identity. Compounding results for ambitious businesses.",
};

import DigitalMarketingInteractive from "@/components/DigitalMarketingInteractive";

const results = [
  { num: "312%", label: "Avg. Organic Traffic Growth" },
  { num: "4.9★", label: "Client Satisfaction Rating" },
  { num: "92%",  label: "Click-Through Rate Uplift" },
  { num: "100+", label: "Brands Scaled Globally" },
];

export default function DigitalMarketingPage() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(155deg, #fffbf0 0%, #fdfbff 50%, #fff0f8 100%)" }}>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #FF9F1C, transparent)", opacity: 0.12 }} />
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/#services" className="text-[13px] text-gray-400 hover:text-purple-600 transition-colors">Services</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[13px] font-bold text-purple-600">Digital Marketing & Branding</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-[12px] font-extrabold uppercase tracking-widest"
            style={{ background: "rgba(255,159,28,0.1)", color: "#FF9F1C", border: "1px solid rgba(255,159,28,0.25)" }}>
            📈 Growth Engine
          </div>
          <h1 className="text-[52px] md:text-[72px] font-display font-extrabold text-gray-900 leading-[1.02] mb-6">
            Digital Marketing<br />
            <span style={{ background: "linear-gradient(135deg,#FF9F1C,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              That Compounds.
            </span>
          </h1>
          <p className="text-[19px] text-gray-600 font-medium max-w-xl mb-10 leading-relaxed">
            We don't run ads — we build <strong>growth machines</strong>. Data-driven campaigns, premium branding, and compounding SEO that puts your business at the top and keeps it there.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact"
              className="px-9 py-4 rounded-full text-white text-[16px] font-bold"
              style={{ background: "linear-gradient(135deg,#FF9F1C,#FF6B9D)", boxShadow: "0 8px 28px rgba(255,159,28,0.4)" }}>
              Start Growing Today 🚀
            </Link>
            <a href="#process" className="px-9 py-4 rounded-full text-[16px] font-bold text-gray-700"
              style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1.5px solid rgba(255,159,28,0.25)" }}>
              See Our Process ↓
            </a>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-16 border-y border-gray-100" style={{ background: "#fdfbff" }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {results.map((r, i) => (
              <div key={i}>
                <div className="text-[40px] font-display font-extrabold mb-1"
                  style={{ background: "linear-gradient(135deg,#FF9F1C,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {r.num}
                </div>
                <div className="text-[13px] text-gray-500 font-semibold">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DigitalMarketingInteractive />      {/* Pricing */}
      <div className="py-24" style={{ background: "linear-gradient(135deg, #fff0f8 0%, #fdfbff 100%)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-[36px] md:text-[48px] font-display font-extrabold text-gray-900 text-center mb-6">
            Transparent <span style={{ background: "linear-gradient(135deg,#FF9F1C,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pricing</span>
          </h2>
          
          <div className="max-w-3xl mx-auto mb-16 p-6 rounded-2xl text-center shadow-sm"
            style={{ background: "rgba(255,107,157,0.06)", border: "1px dashed rgba(255,107,157,0.4)" }}>
            <p className="text-[15px] font-bold text-gray-800 leading-relaxed md:leading-normal">
              🔥 <span className="text-pink-500">Special Offer:</span> When you subscribe to any of our Digital Marketing packages, our full <strong className="text-pink-600">WhatsApp Business API software platform</strong> access and specialized IT technical support are completely bundled in at <span className="underline decoration-pink-300 decoration-2">no additional cost!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="rounded-3xl p-8 transition-transform hover:-translate-y-2 relative flex flex-col"
              style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(20px)", border: "1.5px solid rgba(108,99,255,0.15)", boxShadow: "0 8px 32px rgba(108,99,255,0.05)" }}>
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#6C63FF] mb-2">Basic Package</div>
              <div className="text-[28px] lg:text-[32px] font-display font-extrabold text-gray-900 mb-6">
                NPR 38k <span className="text-[14px] text-gray-400 font-medium tracking-normal">/ mo</span>
              </div>
              <ul className="space-y-4 mb-10 text-[13px] text-gray-600 font-medium flex-1">
                <li className="flex gap-3 items-start"><span className="text-[#6C63FF] font-bold mt-[-1px]">✓</span> WhatsApp Business API Setup & Support</li>
                <li className="flex gap-3 items-start"><span className="text-[#6C63FF] font-bold mt-[-1px]">✓</span> Profile Optimization (FB & IG)</li>
                <li className="flex gap-3 items-start"><span className="text-[#6C63FF] font-bold mt-[-1px]">✓</span> Competitor Analysis & Roadmap</li>
                <li className="flex gap-3 items-start"><span className="text-[#6C63FF] font-bold mt-[-1px]">✓</span> Tailored Content Strategy & Calendar</li>
                <li className="flex gap-3 items-start"><span className="text-[#6C63FF] font-bold mt-[-1px]">✓</span> 10 Graphic Banners (3 Custom Festival)</li>
                <li className="flex gap-3 items-start"><span className="text-[#6C63FF] font-bold mt-[-1px]">✓</span> 4 Video Reels with Voice-Overs</li>
                <li className="flex gap-3 items-start"><span className="text-[#6C63FF] font-bold mt-[-1px]">✓</span> Automated Post Scheduling</li>
              </ul>
              <Link href="?plan=Basic+Package#contact" className="block text-center w-full py-3.5 rounded-full text-[14px] font-bold transition-all hover:bg-opacity-80"
                style={{ background: "rgba(108,99,255,0.1)", color: "#6C63FF" }}>
                Get Started
              </Link>
            </div>

            {/* Tier 2 */}
            <div className="rounded-3xl p-8 transition-transform hover:-translate-y-2 relative transform md:-translate-y-4 shadow-xl flex flex-col"
              style={{ background: "linear-gradient(145deg, #ffffff, #fdfbff)", border: "2px solid #FF6B9D", boxShadow: "0 12px 40px rgba(255,107,157,0.15)" }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-extrabold uppercase tracking-widest text-white px-4 py-1.5 rounded-full shadow-md whitespace-nowrap"
                style={{ background: "linear-gradient(135deg,#FF9F1C,#FF6B9D)" }}>
                Most Popular
              </div>
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#FF6B9D] mb-2 mt-2">Standard Package</div>
              <div className="text-[28px] lg:text-[32px] font-display font-extrabold text-gray-900 mb-6">
                NPR 60k <span className="text-[14px] text-gray-400 font-medium tracking-normal">/ mo</span>
              </div>
              <ul className="space-y-4 mb-10 text-[13px] text-gray-600 font-medium flex-1">
                <li className="flex gap-3 items-start"><span className="text-[#FF6B9D] font-bold mt-[-1px]">✓</span> <strong className="text-gray-800">Everything in Basic, plus:</strong></li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B9D] font-bold mt-[-1px]">✓</span> 24 Graphic Banners (8 Custom Festival)</li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B9D] font-bold mt-[-1px]">✓</span> 8 Video Reels with Voice-Overs</li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B9D] font-bold mt-[-1px]">✓</span> 2 Professional Digital Articles on Medium</li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B9D] font-bold mt-[-1px]">✓</span> Meta Pixel Implementation for Remarketing</li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B9D] font-bold mt-[-1px]">✓</span> Full Meta Ads Setup, Budget Monitoring</li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B9D] font-bold mt-[-1px]">✓</span> Comprehensive Monthly Performance Report</li>
              </ul>
              <Link href="?plan=Standard+Package#contact" className="block text-center w-full py-3.5 rounded-full text-[14px] font-bold text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#FF9F1C,#FF6B9D)" }}>
                Get Started
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="rounded-3xl p-8 transition-transform hover:-translate-y-2 relative flex flex-col"
              style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(20px)", border: "1.5px solid rgba(6,214,160,0.15)", boxShadow: "0 8px 32px rgba(6,214,160,0.05)" }}>
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#06D6A0] mb-2">Premium Package</div>
              <div className="text-[28px] lg:text-[32px] font-display font-extrabold text-gray-900 mb-6">
                NPR 100k <span className="text-[14px] text-gray-400 font-medium tracking-normal">/ mo</span>
              </div>
              <ul className="space-y-4 mb-10 text-[13px] text-gray-600 font-medium flex-1">
                <li className="flex gap-3 items-start"><span className="text-[#06D6A0] font-bold mt-[-1px]">✓</span> <strong className="text-gray-800">Everything in Standard, plus:</strong></li>
                <li className="flex gap-3 items-start"><span className="text-[#06D6A0] font-bold mt-[-1px]">✓</span> 50 High-Quality Graphic Banners</li>
                <li className="flex gap-3 items-start"><span className="text-[#06D6A0] font-bold mt-[-1px]">✓</span> 20 Video Reels with Voice-Overs</li>
                <li className="flex gap-3 items-start"><span className="text-[#06D6A0] font-bold mt-[-1px]">✓</span> 5 Strategic Digital Articles on Medium</li>
                <li className="flex gap-3 items-start"><span className="text-[#06D6A0] font-bold mt-[-1px]">✓</span> Advanced A/B Campaign Testing Matrixes</li>
                <li className="flex gap-3 items-start"><span className="text-[#06D6A0] font-bold mt-[-1px]">✓</span> Deep-Dive Weekly Strategy & Progress Reports</li>
              </ul>
              <Link href="?plan=Premium+Package#contact" className="block text-center w-full py-3.5 rounded-full text-[14px] font-bold transition-all hover:bg-opacity-80"
                style={{ background: "rgba(6,214,160,0.1)", color: "#00b284" }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ContactComponent />
    </PageShell>
  );
}
