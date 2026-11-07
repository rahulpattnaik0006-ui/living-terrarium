"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Layers, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const WHATSAPP_NUMBER = "918340623262";

function BotanicalOliveLeaf({ className = "w-10 h-16", opacity = "opacity-40" }: { className?: string; opacity?: string }) {
  return (
    <svg viewBox="0 0 80 140" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={`${className} ${opacity}`}>
      <path d="M40 6 C20 28, 12 64, 20 98 C24 114, 34 128, 40 134 C46 128, 56 114, 60 98 C68 64, 60 28, 40 6 Z" strokeWidth="1.6" className="stroke-current" />
      <path d="M40 134 Q39 70 40 6" strokeWidth="1.8" className="stroke-current" />
      <path d="M40 118 Q28 108 22 104" strokeWidth="1.1" className="stroke-current" />
      <path d="M40 112 Q52 102 58 98" strokeWidth="1.1" className="stroke-current" />
    </svg>
  );
}

const biomes = [
  {
    num: "01",
    tag: "ENCLOSED BIOSPHERE",
    title: "Terrarium",
    desc: "Self-sustaining moss microclimates flourishing in sealed glass chambers with zero daily upkeep.",
    imageSrc: "/terrarium/03.png",
    bg: "bg-[#1c2618]",
    text: "text-[#f4f0e6]",
    accent: "text-[#a4b893]",
  },
  {
    num: "02",
    tag: "DUAL-REALM WATERFALL",
    title: "Paludarium",
    desc: "Where living aquatic currents merge with emergent stone ledges and lush terrestrial ferns.",
    imageSrc: "/paludarium/03.png",
    bg: "bg-[#f4f0e6]",
    text: "text-[#172014]",
    accent: "text-[#354c29]",
  },
  {
    num: "03",
    tag: "SUBMERGED HARDSCAPE",
    title: "Aquarium",
    desc: "Japanese Iwagumi-inspired aquatic scapes carved from ancient volcanic slate and living aquatic flora.",
    imageSrc: "/aquarium/02.png",
    bg: "bg-[#0f140d]",
    text: "text-[#f4f0e6]",
    accent: "text-[#8a9980]",
  },
];

export default function LivingTerrariumSite() {
  return (
    <div className="bg-[#f4f0e6] text-[#1c2517] font-sans selection:bg-[#354c29] selection:text-[#f4f0e6]">
      
      {/* 1. UNIVERSAL NAVBAR (Identical across every page) */}
      <Navbar currentPage="home" />

      {/* 2. MASSIVE HERO SECTION */}
      <section className="relative w-full min-h-[95vh] sm:min-h-screen bg-[#f4f0e6] pt-28 pb-10 flex flex-col overflow-hidden">
        
        {/* Background Leaves */}
        <BotanicalOliveLeaf className="absolute -top-10 -right-20 w-[400px] h-[600px] text-[#e3dac5] rotate-45 opacity-60 z-0" />
        <BotanicalOliveLeaf className="absolute top-[40%] -left-32 w-[350px] h-[500px] text-[#e3dac5] -rotate-12 opacity-60 z-0" />

        <div className="relative z-10 flex flex-col items-center text-center px-4 mb-4">
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#354c29] font-extrabold mb-3 bg-[#eae3d2] px-4 py-1.5 rounded-full border border-[#ded6c4]">
            Botanical Atelier
          </span>
          <h1 className="font-serif text-6xl sm:text-[100px] font-extrabold tracking-tighter text-[#121910] leading-[0.9] w-full break-words">
            FIND PEACE <br />
            <span className="italic font-light tracking-normal text-[#354c29]">in a jar.</span>
          </h1>
          <p className="font-serif italic text-sm sm:text-base text-[#473e31] max-w-sm mt-4">
            Encapsulating nature’s absolute stillness into living, breathing architecture.
          </p>
        </div>

        {/* Hero Jar */}
        <div className="relative z-10 w-full flex-1 flex justify-center items-end mt-4 px-2">
          <motion.img
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/hero-jar.png"
            alt="Living Terrarium"
            className="w-full max-w-lg sm:max-w-2xl object-contain drop-shadow-[0_40px_60px_rgba(23,32,20,0.3)] scale-[1.1] sm:scale-100 origin-bottom"
          />
        </div>
      </section>

      {/* 3. VERTICAL FULL-BLEED BIOMES */}
      <div className="w-full">
        {biomes.map((item, idx) => (
          <section key={item.num} className={`relative w-full px-4 sm:px-8 py-14 sm:py-20 ${item.bg} ${item.text} flex flex-col lg:flex-row items-center gap-8 lg:gap-16 overflow-hidden`}>
            
            <BotanicalOliveLeaf className={`absolute top-0 right-0 w-[500px] h-[500px] opacity-10 rotate-90 pointer-events-none ${item.accent}`} />

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col z-10"
            >
              <span className={`text-xs font-mono uppercase tracking-widest font-bold mb-3 ${item.accent}`}>
                Phase {item.num} // {item.tag}
              </span>
              <h2 className="font-serif text-5xl sm:text-7xl font-extrabold tracking-tighter leading-none mb-6">
                {item.title}
              </h2>
              <p className="text-sm sm:text-lg opacity-80 leading-relaxed max-w-md mb-8">
                {item.desc}
              </p>
              
              <Link href={`/catalog#${item.title.toLowerCase()}s`} className={`inline-flex items-center justify-between w-full max-w-xs px-6 py-4 rounded-2xl font-mono font-bold text-sm transition-transform active:scale-95 ${idx % 2 === 0 ? 'bg-[#f4f0e6] text-[#121910]' : 'bg-[#121910] text-[#f4f0e6]'}`}>
                <span>Explore Catalog</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* ENLARGED PICTURE CONTAINER */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative z-10"
            >
              <div className={`w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden p-2 sm:p-4 border-2 ${idx % 2 === 0 ? 'border-[#4a5c3e]/30 bg-[#24331c]' : 'border-[#d4cab3]/50 bg-[#e3dac5]'}`}>
                <div className="w-full h-full rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden bg-[#0c130b] relative">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 right-4 backdrop-blur-md bg-black/40 border border-white/20 px-4 py-2 rounded-xl">
                    <span className="font-mono text-[10px] uppercase text-white tracking-widest">Available Now</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </section>
        ))}
      </div>

      {/* 4. FOOTER */}
      <footer className="relative z-20 bg-gradient-to-b from-[#182315] to-[#0c120a] text-[#f4f0e6] px-6 py-12 border-t border-[#2d3f26]">
        <div className="max-w-xl mx-auto flex flex-col justify-between gap-8">
          <div className="text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#a4b893] font-bold block mb-2">
              Start Your Commission
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#f4f0e6] leading-tight">
              Bring Nature <br />
              <span className="italic font-normal text-[#a4b893]">Into Your Space.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#b8ad96] mt-4 leading-relaxed max-w-sm mx-auto">
              Custom vessel dimensions, customized figurines, and bulk corporate gifting crafted to order.
            </p>
          </div>

          <div className="space-y-4 max-w-sm mx-auto w-full">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20would%20like%20to%20discuss%20a%20custom%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-5 rounded-2xl bg-[#f4f0e6] text-[#172014] font-mono font-bold text-sm flex items-center justify-between shadow-xl hover:bg-[#eae3d2] active:scale-98 transition-transform cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <MessageCircle size={18} /> WhatsApp Inquiry
              </span>
              <span>→</span>
            </a>

            <div className="flex gap-3">
              <Link href="/catalog" className="flex-1 py-3.5 rounded-xl bg-[#24331c] border border-[#3b5030] text-[#f4f0e6] font-mono text-xs flex items-center justify-center gap-2 hover:bg-[#2f4324] shadow-lg transition-transform active:scale-95">
                <Layers size={14} className="text-[#a4b893]" /> Catalog (22)
              </Link>
              <Link href="/reviews" className="flex-1 py-3.5 rounded-xl bg-[#24331c] border border-[#3b5030] text-[#f4f0e6] font-mono text-xs flex items-center justify-center gap-2 hover:bg-[#2f4324] shadow-lg transition-transform active:scale-95">
                <Star size={14} className="text-[#a4b893]" /> Reviews
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#263720] pt-6 mt-4 text-[10px] font-mono text-[#8a9980] max-w-sm mx-auto w-full">
            <span>Living Terrarium Studio</span>
            <span>Find peace in a jar</span>
          </div>
        </div>
      </footer>

    </div>
  );
}