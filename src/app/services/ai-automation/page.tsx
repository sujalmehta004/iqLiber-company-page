import React from "react";
import PageShell from "@/components/PageShell";
import ContactComponent from "@/components/Contact";
import Link from "next/link";
import { Cpu, MessageSquare, Workflow, Database, BarChart3, Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "AI & Automation Systems | IQ Liber",
  description: "Custom AI integrations, LLM-powered tools, workflow automation, and intelligent data pipelines for your business.",
};

const features = [
  { icon: Cpu,          title: "Custom AI Model Integration", desc: "Connect GPT-4, Claude, Gemini, or open-source LLMs directly into your product with custom prompting and fine-tuning.", color: "#A855F7" },
  { icon: MessageSquare,title: "AI Chatbots & Assistants",   desc: "Intelligent conversational agents for customer support, sales, onboarding, and internal knowledge bases.", color: "#6C63FF" },
  { icon: Workflow,     title: "Business Workflow Automation", desc: "Eliminate repetitive tasks — automated data processing, document generation, approval flows, and scheduling.", color: "#FF6B9D" },
  { icon: Database,     title: "Intelligent Data Pipelines", desc: "ETL pipelines with ML-powered data enrichment, anomaly detection, and predictive analytics.", color: "#FF9F1C" },
  { icon: BarChart3,    title: "Predictive Analytics",       desc: "Forecast demand, detect churn, and surface actionable insights from your existing business data.", color: "#10B981" },
  { icon: Zap,          title: "Rapid Automation Scripts",   desc: "Python/Node scripts that automate your web scraping, report generation, and cross-platform integrations.", color: "#06D6A0" },
];

export default function AIAutomationPage() {
  return (
    <PageShell>
      <div className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(155deg, #faf5ff 0%, #fdfbff 50%, #f5f3ff 100%)" }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/#services" className="text-[13px] text-gray-400 hover:text-purple-600 transition-colors">Services</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[13px] font-bold text-purple-600">AI & Automation</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-[12px] font-extrabold uppercase tracking-widest"
            style={{ background: "rgba(168,85,247,0.1)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.2)" }}>
            🤖 AI Engineers
          </div>
          <h1 className="text-[52px] md:text-[68px] font-display font-extrabold text-gray-900 leading-[1.04] mb-6">
            AI That Works<br />
            <span style={{ background: "linear-gradient(135deg,#A855F7,#6C63FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              For You.
            </span>
          </h1>
          <p className="text-[19px] text-gray-600 font-medium max-w-xl mb-10 leading-relaxed">
            Custom LLM integrations, intelligent automation, and data pipelines — built to eliminate the repetitive and amplify the strategic.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-white text-[16px] font-bold"
            style={{ background: "linear-gradient(135deg,#A855F7,#6C63FF)", boxShadow: "0 8px 28px rgba(168,85,247,0.38)" }}>
            Automate My Business 🤖
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
