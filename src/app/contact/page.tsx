"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const PHONE_NUMBER = "+91 83406 23262";
const WHATSAPP_NUMBER = "918340623262";

const floatingGeometries = [
  { top: "8%", left: "10%", type: "diamond", size: "w-3 h-3", delay: 0 },
  { top: "18%", left: "85%", type: "cross", size: "w-3.5 h-3.5", delay: 1.2 },
  { top: "35%", left: "12%", type: "ring", size: "w-4 h-4", delay: 2.1 },
  { top: "55%", left: "88%", type: "diamond", size: "w-3 h-3", delay: 0.7 },
  { top: "75%", left: "8%", type: "cross", size: "w-3.5 h-3.5", delay: 1.8 },
  { top: "88%", left: "82%", type: "ring", size: "w-4 h-4", delay: 2.5 },
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

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#121a11] text-[#f4f0e6] min-h-screen font-sans selection:bg-[#344828] selection:text-[#f4f0e6] flex flex-col justify-between relative overflow-hidden">
      
      {/* 1. UNIVERSAL NAVBAR */}
      <Navbar currentPage="contact" />

      {/* 2. FLOATING GEOMETRY PARTICLES */}
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

      {/* 3. CONTACT CONTENT */}
      <main className="max-w-md mx-auto w-full px-5 pt-28 pb-12 my-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a1bb90] font-bold block mb-2">
            Direct Reach
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4f0e6]">
            Get In Touch
          </h1>
          <p className="text-xs text-[#b8ad96] mt-2 max-w-xs mx-auto leading-relaxed">
            Reach out directly for custom vessel commissions, catalog inquiries, or care advice.
          </p>
        </motion.div>

        <div className="space-y-4">
          
          {/* 1. PHONE / WHATSAPP */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20would%20like%20to%20connect%20regarding%20Living%20Terrarium.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-5 rounded-2xl bg-[#162014] border-2 border-[#33462b] ring-1 ring-[#ded6c4]/20 hover:border-[#a1bb90] transition-all flex items-center justify-between group shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#202e1c] text-[#a1bb90] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#354c29]">
                <Phone size={22} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8574] block">
                  Phone / WhatsApp
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-[#f4f0e6]">
                  {PHONE_NUMBER}
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-[#a1bb90] group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Connect <ArrowRight size={14} />
            </span>
          </motion.a>

          {/* 2. INSTAGRAM */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="https://www.instagram.com/living_terrarium/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-5 rounded-2xl bg-[#162014] border-2 border-[#33462b] ring-1 ring-[#ded6c4]/20 hover:border-[#a1bb90] transition-all flex items-center justify-between group shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#202e1c] text-[#a1bb90] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#354c29]">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8574] block">
                  Instagram
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-[#f4f0e6]">
                  @living_terrarium
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-[#a1bb90] group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Visit <ArrowRight size={14} />
            </span>
          </motion.a>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#202c1c] py-4 text-center text-[10px] font-mono text-[#786e5e] relative z-10">
        Living Terrarium Studio • Find peace in a jar
      </footer>

    </div>
  );
}