import React from "react";
import PageShell from "@/components/PageShell";
import ContactComponent from "@/components/Contact";
import Link from "next/link";
import { Cpu, Database, Code, Server, GitBranch, Shield, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom Software Development | IQ Liber",
  description: "Engineered-for-scale backend systems, custom APIs, and enterprise software — hand-crafted for your exact requirements.",
};

const features = [
  { icon: Cpu,       title: "Enterprise Backend Systems",  desc: "Scalable REST & GraphQL APIs, microservices, and event-driven architectures that handle millions of requests." , color: "#6C63FF" },
  { icon: Database,  title: "Database Architecture",       desc: "Relational, NoSQL, and time-series database design with query optimization, indexing, and data modeling.", color: "#9B59FF" },
  { icon: Code,      title: "Custom Business Logic",       desc: "If SaaS can't do it, we engineer it from scratch. Proprietary algorithms, complex workflows, bespoke automation.", color: "#FF6B9D" },
  { icon: Server,    title: "API Integrations",            desc: "Connect your entire tech stack — payment gateways, ERPs, CRMs, third-party APIs — into a unified system.", color: "#06D6A0" },
  { icon: GitBranch, title: "Version-Controlled Development", desc: "Clean Git workflows, code reviews, CI/CD pipelines, and documented codebases you actually own.", color: "#FF9F1C" },
  { icon: Shield,    title: "Security & Compliance",      desc: "OWASP best practices, data encryption, access control, and vulnerability scanning built in from day one.", color: "#A855F7" },
];

export default function CustomSoftwarePage() {
  return (
    <PageShell>
      <div className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(155deg, #f5f3ff 0%, #fdfbff 50%, #f0f0ff 100%)" }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/#services" className="text-[13px] text-gray-400 hover:text-purple-600 transition-colors">Services</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[13px] font-bold text-purple-600">Custom Software Development</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-[12px] font-extrabold uppercase tracking-widest"
            style={{ background: "rgba(108,99,255,0.1)", color: "#6C63FF", border: "1px solid rgba(108,99,255,0.2)" }}>
            ⚙️ Precision Engineering
          </div>
          <h1 className="text-[52px] md:text-[68px] font-display font-extrabold text-gray-900 leading-[1.04] mb-6">
            Software Built<br />
            <span style={{ background: "linear-gradient(135deg,#6C63FF,#9B59FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              for Scale.
            </span>
          </h1>
          <p className="text-[19px] text-gray-600 font-medium max-w-xl mb-10 leading-relaxed">
            We don&apos;t use templates or off-the-shelf SaaS. Every system we build is <strong>engineered from scratch</strong> for your exact requirements, your scale, your goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-9 py-4 rounded-full text-white text-[16px] font-bold"
              style={{ background: "linear-gradient(135deg,#6C63FF,#9B59FF)", boxShadow: "0 8px 28px rgba(108,99,255,0.38)" }}>
              Start Your Project 🚀
            </Link>
          </div>
        </div>
      </div>
      <div className="py-24" style={{ background: "#fdfbff" }}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-[36px] font-display font-extrabold text-gray-900 text-center mb-16">What We Build</h2>
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
