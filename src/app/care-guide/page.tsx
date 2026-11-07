"use client";

import { motion } from "framer-motion";
import { Sun, Droplets, Thermometer, AlertCircle, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const WHATSAPP_NUMBER = "918340623262";

const floatingGeometries = [
  { top: "6%", left: "8%", type: "diamond", size: "w-3 h-3", delay: 0 },
  { top: "14%", left: "90%", type: "cross", size: "w-3.5 h-3.5", delay: 1.1 },
  { top: "28%", left: "12%", type: "ring", size: "w-4 h-4", delay: 2.3 },
  { top: "45%", left: "86%", type: "diamond", size: "w-3 h-3", delay: 0.8 },
  { top: "62%", left: "8%", type: "cross", size: "w-3.5 h-3.5", delay: 1.6 },
  { top: "78%", left: "92%", type: "ring", size: "w-4 h-4", delay: 2.1 },
];

function FloatingParticle({ type, size }: { type: string; size: string }) {
  if (type === "diamond") return <div className={`${size} rotate-45 border border-[#e8dfcf]/25 bg-[#e8dfcf]/10`} />;
  if (type === "ring") return <div className={`${size} rounded-full border border-[#e8dfcf]/25`} />;
  if (type === "cross") {
    return (
      <div className={`${size} relative flex items-center justify-center`}>
        <span className="absolute w-full h-[1px] bg-[#e8dfcf]/30" />
        <span className="absolute h-full w-[1px] bg-[#e8dfcf]/30" />
      </div>
    );
  }
  return <div className={`${size} border border-[#e8dfcf]/20 bg-[#e8dfcf]/10`} />;
}

const careCards = [
  {
    icon: Sun,
    title: "Light Requirements",
    rule: "Bright Indirect Light Only",
    desc: "Keep within 3 to 6 feet of an east- or north-facing window, or under a gentle desk lamp. Never place under harsh direct afternoon sunlight, as enclosed glass magnifies heat rapidly.",
  },
  {
    icon: Droplets,
    title: "Watering & Humidity",
    rule: "Once Every 2–4 Months",
    desc: "A closed terrarium recycles its own moisture through condensation. Light condensation in the morning is healthy. Only mist with 3–4 sprays of distilled water if no condensation forms for weeks.",
  },
  {
    icon: Thermometer,
    title: "Ideal Climate",
    rule: "18°C – 28°C",
    desc: "Living mosses and ferns thrive in standard room conditions. Keep vessels safely away from direct air conditioner vents, heat blowers, or hot electronics.",
  },
  {
    icon: AlertCircle,
    title: "Maintenance & Mold Check",
    rule: "Zero Regular Trimming",
    desc: "If heavy droplets run continuously down the glass, open the lid for 20–30 minutes to balance humidity. Gently trim any dead leaf tips using clean tweezers.",
  },
];

export default function CareGuidePage() {
  return (
    <div className="bg-[#121a11] text-[#f4f0e6] min-h-screen font-sans selection:bg-[#344828] selection:text-[#f4f0e6] relative overflow-hidden">
      
      {/* 1. UNIVERSAL NAVBAR */}
      <Navbar currentPage="care" />

      {/* 2. FLOATING GEOMETRY */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingGeometries.map((item, idx) => (
          <div key={idx} style={{ top: item.top, left: item.left }} className="absolute">
            <motion.div
              animate={{ y: [0, -18, 0], x: [0, idx % 2 === 0 ? 8 : -8, 0], rotate: [0, 45, 0] }}
              transition={{ duration: 7 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            >
              <FloatingParticle type={item.type} size={item.size} />
            </motion.div>
          </div>
        ))}
      </div>

      <main className="max-w-xl mx-auto px-5 pt-28 pb-14 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a1bb90] font-bold block mb-2">
            Long-term Thriving
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4f0e6]">
            Caretaker's Manual
          </h1>
          <p className="text-xs text-[#b8ad96] mt-2 max-w-sm mx-auto leading-relaxed">
            Essential guidelines to keep your closed living biosphere thriving for years with practically zero maintenance.
          </p>
        </motion.div>

        {/* CARE CARDS WITH FRAMER MOTION SCROLL */}
        <div className="space-y-6">
          {careCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                className="p-5 rounded-3xl bg-[#162014] border-2 border-[#33462b] ring-1 ring-[#ded6c4]/20 shadow-xl"
              >
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#202e1c] text-[#a1bb90] flex items-center justify-center shrink-0 border border-[#354c29]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#f4f0e6] leading-tight">{card.title}</h3>
                    <span className="text-[10px] font-mono text-[#a1bb90] uppercase tracking-wider">{card.rule}</span>
                  </div>
                </div>
                <p className="text-xs text-[#b8ad96] leading-relaxed mt-2 pl-1">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* WHATSAPP SUPPORT CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-3xl bg-[#182316] border border-[#2f4227] ring-1 ring-[#ded6c4]/15 text-center space-y-2.5"
        >
          <h3 className="font-serif text-lg font-bold text-[#f4f0e6]">Need Diagnosis for Your Jar?</h3>
          <p className="text-xs text-[#b8ad96] max-w-xs mx-auto">
            Send us a clear photograph of your moss setup on WhatsApp and our studio artisan will guide you directly.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20have%20a%20question%20about%20caring%20for%20my%20Living%20Terrarium.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f4f0e6] text-[#121a11] text-xs font-mono font-bold mt-2 shadow-md hover:bg-[#eae3d2]"
          >
            <MessageCircle size={15} /> Consult on WhatsApp
          </a>
        </motion.div>

      </main>
    </div>
  );
}