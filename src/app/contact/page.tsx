import React from "react";
import PageShell from "@/components/PageShell";
import ContactComponent from "@/components/Contact";
import { MapPin, Clock, Globe, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact Us | IQ Liber — Start Your Growth Journey",
  description: "Get in touch with IQ Liber. Visit our office in Kathmandu, Nepal or reach us online. We respond within 2 hours.",
};

const officeDetails = [
  { icon: MapPin, label: "Headquarters", value: "Mid-Baneshwor, Kathmandu 44600, Nepal", sub: "Near Nepal Telecom Tower" },
  { icon: Phone,  label: "Phone / WhatsApp", value: "+977 1 4586940", sub: "Mon – Fri, 9 AM – 6 PM NST" },
  { icon: Mail,   label: "Business Email", value: "grow@iqliber.com", sub: "For project inquiries" },
  { icon: Globe,  label: "Website", value: "www.iqliber.com", sub: "Always online" },
  { icon: Clock,  label: "Response Time", value: "Under 2 hours", sub: "During business hours" },
];

export default function ContactPage() {
  return (
    <PageShell>
      {/* Office Hero */}
      <div className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(155deg, #fdfbff 0%, #f3eeff 50%, #fff0f8 100%)" }}>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #b39dff, transparent)", opacity: 0.2 }} />
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="inline-block text-[12px] font-extrabold tracking-[0.22em] uppercase px-5 py-2 rounded-full mb-6"
            style={{ background: "rgba(255,240,248,0.9)", color: "#FF6B9D", border: "1px solid rgba(255,107,157,0.2)" }}>
            🤝 Let&apos;s Connect
          </span>
          <h1 className="text-[48px] md:text-[64px] font-display font-extrabold text-gray-900 leading-tight mb-6">
            Start Your{" "}
            <span style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Growth Journey
            </span>
          </h1>
          <p className="text-[18px] text-gray-500 font-medium max-w-lg mx-auto">
            Drop a message and a senior engineer will be in touch within one business day. We&apos;re based in Kathmandu, building for the world.
          </p>
        </div>
      </div>

      {/* Office Info Grid */}
      <div className="py-16" style={{ background: "#fdfbff" }}>
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-[28px] font-display font-extrabold text-gray-900 mb-10 text-center">
            Find Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {officeDetails.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", border: "1.5px solid rgba(108,99,255,0.12)", boxShadow: "0 4px 24px rgba(108,99,255,0.06)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg,#6C63FF22,#FF6B9D22)" }}>
                    <Icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">{item.label}</div>
                  <div className="text-[15px] font-bold text-gray-900 mb-1">{item.value}</div>
                  <div className="text-[12px] text-gray-400 font-medium">{item.sub}</div>
                </div>
              );
            })}
          </div>

          {/* Map placeholder */}
          <div className="rounded-3xl overflow-hidden mb-16 relative"
            style={{ height: "320px", background: "linear-gradient(135deg, #f3eeff 0%, #fff0f8 100%)", border: "1.5px solid rgba(108,99,255,0.15)" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="text-6xl">📍</div>
              <div className="text-center">
                <div className="text-[20px] font-display font-extrabold text-gray-800 mb-1">Mid-Baneshwor, Kathmandu</div>
                <div className="text-[14px] text-gray-500 font-medium">Nepal · 44600</div>
              </div>
              <a href="https://maps.google.com/?q=Mid-Baneshwor+Kathmandu+Nepal" target="_blank" rel="noopener noreferrer"
                className="mt-2 px-6 py-2.5 rounded-full text-[13px] font-bold text-white"
                style={{ background: "linear-gradient(135deg,#6C63FF,#9B59FF)", boxShadow: "0 4px 16px rgba(108,99,255,0.3)" }}>
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form (reusing component) */}
      <ContactComponent />
    </PageShell>
  );
}
