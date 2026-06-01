"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [form, setForm]         = useState({ name:"", email:"", service:"Software Development", message:"" });
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const plan = params.get("plan");
      if (plan) {
        setForm(prev => ({
          ...prev,
          service: "Digital Marketing & Branding",
          message: `I would like to have the ${plan} and need to know more about all of your plans.\n\n`
        }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSuccess(true);
    confetti({ particleCount: 180, spread: 100, origin: { y: 0.55 }, colors: ["#6C63FF","#FF6B9D","#FFD166","#06D6A0"] });
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f4f0ff 0%, #fdfbff 55%, #fff5f8 100%)" }}>

      {/* Decoratives */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #FF6B9D, transparent)" }} />
      <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #6C63FF, transparent)" }} />
      <motion.div animate={{ y:[0,-14,0] }} transition={{ duration:4, repeat:Infinity }}
        className="absolute top-20 right-[9%] text-4xl select-none opacity-20">💌</motion.div>
      <motion.div animate={{ y:[0,12,0] }} transition={{ duration:3.5, repeat:Infinity, delay:1 }}
        className="absolute bottom-24 left-[6%] text-3xl select-none opacity-25">✉️</motion.div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-[13px] font-extrabold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background:"#fff0f8", color:"#FF6B9D" }}>
            🤝 Let's Connect
          </span>
          <h2 className="text-[40px] md:text-[52px] font-display font-extrabold text-gray-900 leading-tight">
            Start Your <span style={{ background:"linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Growth Journey</span>
          </h2>
          <p className="text-[17px] text-gray-400 font-medium max-w-lg mx-auto mt-4">
            Drop a message and a senior engineer will be in touch within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left — coordinates (open, no container) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {[
              { icon: MapPin, emoji:"📍", label:"Our Office", value:"Mid-Baneshwor, Kathmandu, Nepal" },
              { icon: Mail,   emoji:"📧", label:"Business Email", value:"grow@iqliber.com" },
              { icon: Phone,  emoji:"📞", label:"Phone Line", value:"+977 1 4586940" },
            ].map((c, i) => (
              <motion.div key={i}
                initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.12 }}
                className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background:"linear-gradient(135deg,#6C63FF22,#FF6B9D22)" }}>
                  {c.emoji}
                </div>
                <div>
                  <div className="text-[12px] font-extrabold uppercase tracking-widest text-gray-400 mb-0.5">{c.label}</div>
                  <div className="text-[15px] font-bold text-gray-800">{c.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Response time badge */}
            <div className="flex items-center gap-3 mt-4">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[14px] font-bold text-gray-600">Typically replies within 2 hours</span>
            </div>
          </div>

          {/* Right — form (open, minimal) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form key="form" onSubmit={handleSubmit}
                  initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                  className="flex flex-col gap-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-extrabold uppercase tracking-widest text-gray-500">Full Name</label>
                      <input required placeholder="John Doe" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                        className="bg-transparent border-b-2 border-gray-200 focus:border-purple-400 py-2.5 text-[15px] font-medium text-gray-800 outline-none transition-colors placeholder:text-gray-300" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-extrabold uppercase tracking-widest text-gray-500">Email Address</label>
                      <input required type="email" placeholder="you@company.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                        className="bg-transparent border-b-2 border-gray-200 focus:border-purple-400 py-2.5 text-[15px] font-medium text-gray-800 outline-none transition-colors placeholder:text-gray-300" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-extrabold uppercase tracking-widest text-gray-500">Service Interest</label>
                    <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}
                      className="bg-transparent border-b-2 border-gray-200 focus:border-purple-400 py-2.5 text-[15px] font-medium text-gray-800 outline-none transition-colors cursor-pointer">
                      {["Software Development","Mobile App Development","Web Solutions","Digital Marketing & Branding"].map(s =>
                        <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-extrabold uppercase tracking-widest text-gray-500">Project Brief</label>
                    <textarea required rows={4} placeholder="Tell us about your goals, timeline, and budget..."
                      value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                      className="bg-transparent border-b-2 border-gray-200 focus:border-purple-400 py-2.5 text-[15px] font-medium text-gray-800 outline-none transition-colors resize-none placeholder:text-gray-300" />
                  </div>

                  <button type="submit" disabled={loading}
                    className="self-start flex items-center gap-3 px-8 py-4 rounded-2xl text-white text-[15px] font-bold transition-all duration-300 hover:shadow-[0_8px_28px_rgba(108,99,255,0.45)] hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none"
                    style={{ background:"linear-gradient(135deg,#6C63FF,#FF6B9D)" }}>
                    {loading ? (
                      <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div key="success"
                  initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
                  className="flex flex-col items-center justify-center text-center gap-6 py-20">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background:"linear-gradient(135deg,#6C63FF22,#FF6B9D22)" }}>
                    <CheckCircle2 className="w-10 h-10 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-[28px] font-display font-extrabold text-gray-900 mb-3">Message Received! 🎉</h3>
                    <p className="text-[16px] text-gray-500 font-medium max-w-md">
                      Thank you, <strong>{form.name}</strong>! A senior engineer has been assigned to your <strong>{form.service}</strong> brief. We'll reach you at <strong>{form.email}</strong> within the day.
                    </p>
                  </div>
                  <button onClick={()=>{setSuccess(false);setForm({name:"",email:"",service:"Software Development",message:""})}}
                    className="text-[13px] font-extrabold uppercase tracking-widest text-purple-500 hover:text-pink-500 transition-colors">
                    Send another message →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
