"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, TrendingUp, Target, Eye, MessageSquare, Search, ChevronDown } from "lucide-react";

const features = [
  { icon: MessageSquare,title: "Click-to-WhatsApp Ads",   desc: "Stop wasting ad budget on cold website clicks that lead to high bounce rates and abandoned carts. We build and launch high-performing Facebook and Instagram campaigns that open a direct conversation instantly inside your customer's WhatsApp chat, making it effortless to capture real intent and close sales instantly.", deepDive: "Traditional digital marketing loses up to 70% of potential buyers between the initial ad click and the final website checkout. Click-to-WhatsApp (CTWA) ads eliminate this friction entirely. By placing optimized call-to-action buttons across the Facebook Feed, Facebook Marketplace, Instagram Feed, and interactive Stories, we capture target buyers exactly where they are scrolling.\n\nThe moment a prospect interacts with your ad, they aren't forced to fill out a tedious website form or wait for an email response. Instead, they are routed instantly into an official, branded WhatsApp window with a pre-filled custom text block tailored to that specific ad campaign. This creates a seamless transition from passive visual browsing to active personal conversation, driving your conversion metrics up while maintaining a record of the user's authentic phone number for future marketing touchpoints.", color: "#06D6A0" },
  { icon: Target,       title: "Automated AI Chatbots",    desc: "Put your sales on autopilot 24/7. Our custom-built conversational flows automatically greet users, ask qualifying questions, collect data, display direct product catalogs, and handle bookings—saving your staff hours of manual work.", deepDive: "Never let an inquiry go cold again, even at midnight. Our advanced conversation architecture uses visual drag-and-drop flow builders to program highly sophisticated, conditional chat trees that respond instantly to customer behavior.\n\n• Interactive Multi-Media Flow Building: We build custom chat scripts utilizing rich text, interactive dynamic buttons, file attachments, and media lists to guide users naturally through choices.\n• Digital Product Catalogs & E-Commerce Integration: Display your products natively inside WhatsApp. Customers can browse collections, view prices, add items to their digital shopping cart, and complete orders directly from their chat menu.\n• Conditional Logic & Custom Attributes: The bot collects user answers—such as city, product interest, budget, or booking preferences—and automatically tags their profile. If a user clicks \"Track Order,\" the bot communicates with backend tracking systems to pull real-time data automatically; if they click \"Talk to an Agent,\" it instantly alerts your staff.", color: "#6C63FF" },
  { icon: Search,       title: "Centralized Lead CRM",     desc: "Never lose a customer inquiry again. Every lead name, phone number, and conversation log is automatically captured and organized in one single workspace, giving your entire team a clear view to collaborate and handle follow-ups without confusion.", deepDive: "Managing a growing business through a single standard WhatsApp phone or split social media logins causes missed messages, double replies, and zero organizational transparency. Our centralized platform provides an enterprise-grade multi-agent workspace.\n\n• Shared Team Inbox: Support up to 1 owner and 5+ active customer service agents simultaneously under one single official company WhatsApp number.\n• Smart Customer Profiles & Custom Tags: Automatically compile all lead names, WhatsApp numbers, and conversation history into one clean database. Agents can filter contacts using custom tags, status categories (Active, Requesting, Closed), and unique customer attributes to quickly sort hot leads from general inquiries.\n• Managerial Intervention & Performance Tracking: Team leaders can oversee individual agent chats in real-time, monitor response speeds, track sales follow-ups, and step directly into live conversations to handle complaints or guide complex sales closures.", color: "#FF9F1C" },
  { icon: Eye,          title: "Full-Suite Brand Management", desc: "Keep your social media profiles highly professional and consistently active. We manage your entire monthly calendar, including custom visual designs, branded promotional banners, and high-quality video Reels featuring engaging voice-overs.", deepDive: "Consistency is the foundation of digital trust. Our creative team takes complete ownership of your brand's outward aesthetic, eliminating the need for you to hire independent freelance designers or video editors.\n\nEvery month begins with an in-depth competitor audit and a structured content planning calendar. From there, we produce a comprehensive asset package containing 10 to 50 bespoke, high-conversion graphical banners tailored for daily updates, special discount campaigns, and specific festival celebrations. Moving beyond static images, we script, edit, and launch high-engagement short-form video Reels featuring studio-grade voice-overs designed to tell your customer success stories or make major announcements. Every single asset is pre-approved by you, optimized with high-intent keyword text, and scheduled to post automatically at peak audience engagement times.", color: "#A855F7" },
  { icon: TrendingUp,   title: "Smart Mass Broadcasting",  desc: "Instantly re-engage your entire customer base. Send personalized updates, festival greetings, payment reminders, or flash sales to thousands of contacts simultaneously with an official setup designed to keep your number active and safe from bans.", deepDive: "Standard WhatsApp broadcasting is strictly limited and frequently triggers automatic spam filters, leading to permanent number blocks. By utilizing the official WhatsApp Business API (WABA), we unlock compliant, unlimited broadcasting potential.\n\n• Bulk Broadcast Engine: Upload spreadsheets or select specific customer tags within your dashboard to send out new offers, product announcements, or seasonal greetings to up to 200,000+ contacts in a single click without any risk of suspension.\n• Smart Retargeting & Click-Tracking: Track user engagement metrics precisely. See exactly who received your message, who read it, and who clicked on specific internal links or buttons, allowing you to run automated follow-ups exclusively for interested users.\n• Automated Event Triggers: Set up rule-based system automations such as automated birthday greeting campaigns, dynamic payment reminders, abandoned cart warnings, and automated feedback requests triggered by customer behavior.", color: "#FF6B9D" },
  { icon: BarChart3,    title: "Safe Ads & Payment Compliance", desc: "Run your marketing securely and stress-free. We ensure your Facebook pages and WhatsApp numbers stay protected from routine platform suspensions, and you can conveniently fund your entire advertising budget directly using your standard local Nepal Debit or Visa card.", deepDive: "For businesses in Nepal, scaling an online brand typically presents severe logistical challenges—ranging from strict international Dollar card spending limits to unexpected, automated Facebook page bans and ad account suspensions. Our service removes these technical roadblocks entirely.\n\nWe build and run your entire marketing system through verified, corporate-backed Meta Business Portfolios, providing advanced infrastructure protection that shields your brand from common ad restrictions. Additionally, our local integration removes the headache of managing premium dollar credit cards; you can fund your active advertising budget and pay for campaigns smoothly using a standard Nepal Visa or Debit card. Backed by dedicated IT technical support, your automated messaging paths, ad campaigns, and sales channels remain functional, fully compliant, and completely uninterrupted.", color: "#10B981" },
];

const process = [
  { step: "01", title: "Document Collection & KYC Verification",    desc: "We handle the administrative heavy lifting. Our team collects your official company registry paperwork, sets up your compliant Facebook Portfolio, and guides your business directly through official Meta verification checkpoints smoothly.", deepDive: "The onboarding phase focuses on building a safe, permanent digital foundation. We do not use loose personal accounts that risk sudden bans; instead, we transition your business to an official corporate footprint. Our compliance team collects your official business registration documents, VAT/PAN certificates, and identity paperwork. We structure and configure your centralized Meta Business Manager portfolio, link your official corporate social profiles, and clear official Meta verification checkpoints smoothly. This ensures your business gains access to higher tier messaging capabilities and is completely protected from sudden automated compliance shutdowns." },
  { step: "02", title: "Conversational Workflow Blueprinting",   desc: "We map out the perfect automated customer experience. Our engineers design custom interactive chatbot logic, configure automated triggers, format customer tagging structures, and integrate the WhatsApp Business API with your database.", deepDive: "With your verified framework active, our engineers design your custom automated customer experience. We analyze your typical sales conversations to construct optimized, interactive chat trees using the visual flow builder. We map out greeting sequences, configure buttons for instant navigation, build multi-media catalog displays, and create custom database forms. Behind the scenes, we assign custom logic tags and sorting rules to ensure that user inputs automatically segment leads by interest or intent level, preparing your multi-agent inbox for smooth operation." },
  { step: "03", title: "Creative Production & Live Ad Launch", desc: "We push your growth engine live. Our creative team rolls out your monthly graphic banners and voice-over video Reels while our ad specialists launch highly optimized campaigns targeted to drive high-intent shoppers straight to your chat inbox.", deepDive: "This step initiates active customer acquisition. Our design team establishes your monthly content plan, crafting custom graphic banners and high-retention video Reels complete with professional voice-overs. Concurrently, our ad specialists build targeted Meta campaign structures—designing and setting Click-to-WhatsApp ads across Facebook feeds, stories, and marketplace locations. We hook your creative assets up to the messaging system, meaning the exact moment your ads go live, every customer interaction triggers an instant, automated chat sequence designed to convert intent into a sale." },
  { step: "04", title: "Unified Tracking & Broadcast Scaling",     desc: "We turn cold data into recurring business growth. All inbound numbers are centralized transparently into your team dashboard, allowing us to implement smart broadcast re-engagement loops that convert old inquiries into loyal customers.", deepDive: "The final phase turns raw traffic into long-term customer value. As users interact with your ads and chatbots, all individual customer data, active phone numbers, and communication logs are systematically captured into your central dashboard database. We review these incoming analytics alongside your team to track sales conversion speeds and identify top-performing ad angles. Unconverted leads are then organized into targeted remarketing pools, allowing us to deploy bulk broadcasts, promotional seasonal campaigns, and automated follow-ups that turn old inquiries into long-term sales growth." },
];

export default function DigitalMarketingInteractive() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeProcess, setActiveProcess] = useState<number | null>(null);

  return (
    <>
      {/* Features */}
      <div className="py-24" style={{ background: "linear-gradient(175deg, #fff0f8 0%, #fdfbff 100%)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-[36px] md:text-[48px] font-display font-extrabold text-gray-900 text-center mb-4">
            Everything You Need to <span style={{ background: "linear-gradient(135deg,#FF9F1C,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dominate</span>
          </h2>
          <p className="text-[17px] text-gray-500 font-medium text-center max-w-lg mx-auto mb-16">
            From acquisition to retention — every channel, fully managed with AI and API integrations.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isActive = activeFeature === i;
              return (
                <motion.div key={i} layout onClick={() => setActiveFeature(isActive ? null : i)}
                  className="rounded-3xl p-7 cursor-pointer transition-all duration-300"
                  style={{ 
                    background: "rgba(255,255,255,0.8)", backdropFilter: "blur(20px)", 
                    border: isActive ? `1.5px solid ${f.color}88` : `1.5px solid rgba(255,255,255,0.5)`, 
                    boxShadow: isActive ? `0 12px 40px ${f.color}25` : `0 4px 24px ${f.color}14` 
                  }}>
                  <motion.div layout="position" className="flex items-start justify-between gap-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ background: `${f.color}18` }}>
                        <Icon className="w-5 h-5" style={{ color: f.color }} />
                      </div>
                      <div>
                        <h3 className="text-[18px] font-display font-extrabold text-gray-900 mt-1 hover:text-purple-600 transition-colors">{f.title}</h3>
                        <p className="text-[14px] text-gray-500 font-medium leading-relaxed mt-2">{f.desc}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 mt-3 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                  </motion.div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden">
                        <div className="pt-6 mt-4 border-t border-gray-100">
                          {f.deepDive.split('\n').map((paragraph, idx) => (
                            <p key={idx} className="text-[14px] text-gray-600 font-medium mb-3 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process */}
      <div id="process" className="py-24" style={{ background: "#fdfbff" }}>
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-[36px] md:text-[48px] font-display font-extrabold text-gray-900 text-center mb-16">
            Our <span style={{ background: "linear-gradient(135deg,#6C63FF,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Process</span>
          </h2>
          <div className="flex flex-col gap-6">
            {process.map((p, i) => {
              const isActive = activeProcess === i;
              return (
                <motion.div key={i} layout onClick={() => setActiveProcess(isActive ? null : i)}
                  className="flex flex-col gap-4 rounded-2xl p-6 cursor-pointer hover:shadow-md transition-all duration-300"
                  style={{ 
                    background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", 
                    border: isActive ? "1.5px solid rgba(255,107,157,0.3)" : "1.5px solid rgba(108,99,255,0.1)" 
                  }}>
                  <motion.div layout="position" className="flex gap-5 items-start justify-between">
                    <div className="flex gap-5 items-start">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[20px] font-display font-extrabold text-white shrink-0"
                        style={{ background: "linear-gradient(135deg,#FF9F1C,#FF6B9D)" }}>
                        {p.step}
                      </div>
                      <div className="mt-1">
                        <h3 className="text-[20px] font-display font-extrabold text-gray-900 mb-2">{p.title}</h3>
                        <p className="text-[15px] text-gray-500 font-medium leading-relaxed max-w-xl">{p.desc}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 mt-4 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                  </motion.div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden">
                        <div className="pt-5 mt-4 ml-19 border-t border-gray-100">
                          <h4 className="text-[12px] font-extrabold uppercase tracking-widest text-[#FF6B9D] mb-3">Deep Dive / System Architecture</h4>
                          <p className="text-[15px] text-gray-600 font-medium leading-relaxed max-w-2xl">
                            {p.deepDive}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
