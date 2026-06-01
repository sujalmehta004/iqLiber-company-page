import React from "react";
import PageShell from "@/components/PageShell";
import ContactComponent from "@/components/Contact";
import Link from "next/link";
import { Cloud, GitBranch, Shield, Zap, RefreshCw, Monitor, ArrowRight } from "lucide-react";

export const metadata = {
  title: "DevOps & Cloud Infrastructure | IQ Liber",
  description: "Zero-downtime deployments, CI/CD pipelines, and auto-scaling cloud architecture on AWS, GCP, and Azure.",
};

const features = [
  { icon: Cloud,      title: "Cloud Architecture",      desc: "AWS, Google Cloud, and Azure — multi-region, fault-tolerant infrastructure designed for any load.", color: "#10B981" },
  { icon: GitBranch,  title: "CI/CD Pipelines",         desc: "Automated testing, staging, and production deployments. Ship features confidently, multiple times per day.", color: "#06D6A0" },
  { icon: Shield,     title: "Security Hardening",       desc: "VPC configuration, IAM roles, secrets management, WAF, and DDoS protection built into every deployment.", color: "#6C63FF" },
  { icon: Zap,        title: "Performance at Scale",     desc: "Load balancing, auto-scaling groups, CDN distribution, and database clustering for unlimited growth.", color: "#FF9F1C" },
  { icon: RefreshCw,  title: "Monitoring & Alerts",      desc: "Real-time dashboards, uptime monitoring, log aggregation, and on-call incident response setup.", color: "#FF6B9D" },
  { icon: Monitor,    title: "Containerization",         desc: "Docker, Kubernetes, and Helm charts for portable, isolated, and easily scalable application deployments.", color: "#A855F7" },
];

export default function DevOpsPage() {
  return (
    <PageShell>
      <div className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(155deg, #f0fff8 0%, #fdfbff 50%, #f0fffe 100%)" }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/#services" className="text-[13px] text-gray-400 hover:text-purple-600 transition-colors">Services</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[13px] font-bold text-green-600">DevOps & Cloud</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-[12px] font-extrabold uppercase tracking-widest"
            style={{ background: "rgba(16,185,129,0.1)", color: "#10B981", border: "1px solid rgba(16,185,129,0.2)" }}>
            🛡️ Infrastructure Experts
          </div>
          <h1 className="text-[52px] md:text-[68px] font-display font-extrabold text-gray-900 leading-[1.04] mb-6">
            Infrastructure That<br />
            <span style={{ background: "linear-gradient(135deg,#10B981,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Never Sleeps.
            </span>
          </h1>
          <p className="text-[19px] text-gray-600 font-medium max-w-xl mb-10 leading-relaxed">
            Zero-downtime deployments, bulletproof security, and auto-scaling cloud systems that grow with your business.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-white text-[16px] font-bold"
            style={{ background: "linear-gradient(135deg,#10B981,#06B6D4)", boxShadow: "0 8px 28px rgba(16,185,129,0.35)" }}>
            Secure My Infrastructure 🛡️
          </Link>
        </div>
      </div>
      <div className="py-24" style={{ background: "#fdfbff" }}>
        <div className="max-w-6xl mx-auto px-8">
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
