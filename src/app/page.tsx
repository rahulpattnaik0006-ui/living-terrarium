"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, BookOpen, Layers, Star, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "918340623262";

// Hand-drawn arrow curving upwards directly to the navbar Catalog button
function CatalogUpwardArrow() {
  return (
    <div className="flex items-center gap-1.5 text-[#3b4f2c]">
      <span className="font-serif italic text-xs tracking-wide text-[#2e3e23] font-semibold">
        Explore 22+ builds
      </span>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="-rotate-12 animate-pulse text-[#3b4f2c]"
      >
        <path d="M10 32 C 14 14, 24 10, 32 8" />
        <path d="M23 4 L33 8 L27 16" />
      </svg>
    </div>
  );
}

// Botanically accurate realistic olive leaf skeleton
function RealisticOliveLeaf({ className = "w-10 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 140" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M40 6 C22 28, 14 62, 22 96 C26 112, 34 126, 40 134 C46 126, 54 112, 58 96 C66 62, 58 28, 40 6 Z" strokeWidth="1.6" className="stroke-[#3b4f2c]/50" />
      <path d="M40 134 Q39 70 40 6" strokeWidth="1.8" className="stroke-[#2f4023]/65" />
      <path d="M40 118 Q30 108 24 106" strokeWidth="1.1" className="stroke-[#3b4f2c]/45" />
      <path d="M40 112 Q50 102 56 100" strokeWidth="1.1" className="stroke-[#3b4f2c]/45" />
      <path d="M40 98 Q28 88 20 84" strokeWidth="1.1" className="stroke-[#3b4f2c]/45" />
      <path d="M40 92 Q52 82 60 78" strokeWidth="1.1" className="stroke-[#3b4f2c]/45" />
      <path d="M40 76 Q26 66 18 60" strokeWidth="1.1" className="stroke-[#3b4f2c]/45" />
      <path d="M40 70 Q54 60 61 54" strokeWidth="1.1" className="stroke-[#3b4f2c]/45" />
      <path d="M40 54 Q28 46 22 38" strokeWidth="1.1" className="stroke-[#3b4f2c]/45" />
      <path d="M40 48 Q52 40 57 32" strokeWidth="1.1" className="stroke-[#3b4f2c]/45" />
    </svg>
  );
}

const ambientLeaves = [
  { top: "8%", left: "5%", size: "w-9 h-14 sm:w-11 sm:h-18", rotate: -28, delay: 0 },
  { top: "14%", left: "84%", size: "w-10 h-16 sm:w-12 sm:h-20", rotate: 34, delay: 1.2 },
  { top: "28%", left: "12%", size: "w-8 h-12 sm:w-10 sm:h-16", rotate: 18, delay: 0.7 },
  { top: "38%", left: "86%", size: "w-9 h-14 sm:w-11 sm:h-18", rotate: -36, delay: 2.1 },
  { top: "52%", left: "6%", size: "w-10 h-16 sm:w-12 sm:h-20", rotate: -15, delay: 1.5 },
  { top: "66%", left: "85%", size: "w-8 h-12 sm:w-10 sm:h-16", rotate: 25, delay: 0.3 },
  { top: "80%", left: "10%", size: "w-9 h-14 sm:w-11 sm:h-18", rotate: 42, delay: 2.5 },
];

const biomes = [
  {
    num: "01",
    tag: "ENCLOSED BIOSPHERE",
    title: "Terrarium",
    desc: "Self-sustaining moss microclimates flourishing in sealed glass chambers with zero daily upkeep.",
    imageSrc: "/terrarium/03.png",
    fallback: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=700&auto=format&fit=crop&q=80",
  },
  {
    num: "02",
    tag: "DUAL-REALM WATERFALL",
    title: "Paludarium",
    desc: "Where living aquatic currents merge with emergent stone ledges and lush terrestrial ferns.",
    imageSrc: "/paludarium/03.png",
    fallback: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=700&auto=format&fit=crop&q=80",
  },
  {
    num: "03",
    tag: "SUBMERGED HARDSCAPE",
    title: "Aquarium",
    desc: "Japanese Iwagumi-inspired aquatic scapes carved from ancient volcanic slate and living aquatic flora.",
    imageSrc: "/aquarium/02.png",
    fallback: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=700&auto=format&fit=crop&q=80",
  },
];

export default function LivingTerrariumSite() {
  return (
    <div className="bg-[#172014] text-[#1c2517] h-screen overflow-y-scroll snap-y snap-mandatory font-sans selection:bg-[#3b4f2c] selection:text-[#f4f0e6]">
      
      {/* HEADER WITH PROMINENT CATALOG POINTER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4f0e6]/95 backdrop-blur-md border-b border-[#ded6c4] px-3.5 sm:px-6 py-2.5 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-full border border-[#c8bea9] bg-[#eae3d2] overflow-hidden flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Living Terrarium"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1545241047-6083a3684587?w=120&auto=format&fit=crop&q=80";
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-serif tracking-wider text-xs uppercase font-bold text-[#172014]">
            Living Terrarium
          </span>
        </Link>

        {/* NAV GROUP WITH THE ARROW POINTER */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block">
            <CatalogUpwardArrow />
          </div>

          <nav className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href="/catalog"
              className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#24331c] text-[#f4f0e6] hover:bg-[#324527] transition-all flex items-center gap-1 font-bold shadow-md shadow-[#172014]/20"
            >
              <Layers size={12} className="text-[#a4b893]" />
              <span>Catalog</span>
            </Link>

            <Link
              href="/reviews"
              className="text-[11px] font-mono px-2.5 py-1.5 rounded-lg text-[#25351e] hover:bg-[#eae3d2] font-semibold flex items-center gap-1"
            >
              <Star size={11} />
              <span>Reviews</span>
            </Link>

            <Link
              href="/care-guide"
              className="text-[11px] font-mono px-2.5 py-1.5 rounded-lg text-[#25351e] hover:bg-[#eae3d2] font-semibold flex items-center gap-1"
            >
              <BookOpen size={11} />
              <span>Care</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* AMBIENT FLOATING LEAVES BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {ambientLeaves.map((leaf, index) => (
          <div key={index} style={{ top: leaf.top, left: leaf.left }} className="absolute">
            <motion.div
              animate={{
                y: [0, -14, 0],
                x: [0, index % 2 === 0 ? 8 : -8, 0],
                rotate: [leaf.rotate, leaf.rotate + (index % 2 === 0 ? 10 : -10), leaf.rotate],
              }}
              transition={{
                duration: 6 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: leaf.delay,
              }}
            >
              <RealisticOliveLeaf className={leaf.size} />
            </motion.div>
          </div>
        ))}
      </div>

      {/* SLIDE 0: HERO INTRO (TIGHTLY BALANCED VERTICAL ALIGNMENT) */}
      <section className="h-screen w-full snap-start snap-always relative bg-[#f4f0e6] flex flex-col items-center justify-center px-4 pt-14 pb-4">
        
        {/* MOBILE PROMINENT ARROW CALLOUT */}
        <div className="sm:hidden absolute top-14 right-4 z-20 flex items-center gap-1 text-[#3b4f2c]">
          <span className="font-serif italic text-[11px] text-[#24331c] font-semibold">
            See Catalog
          </span>
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-12 animate-pulse text-[#3b4f2c]">
            <path d="M10 32 C 14 14, 24 10, 32 8" />
            <path d="M23 4 L33 8 L27 16" />
          </svg>
        </div>

        {/* HERO CONTAINER */}
        <div className="w-full max-w-md mx-auto my-auto flex flex-col items-center text-center z-20">
          
          {/* Top Crest Banner */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-[1px] w-6 bg-[#3b4f2c]/40" />
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#3b4f2c] font-bold">
              LIVING BIOSPHERE GALLERY
            </span>
            <span className="h-[1px] w-6 bg-[#3b4f2c]/40" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#172014] leading-[1.05] mb-2">
            Find Peace <br />
            <span className="italic font-normal text-[#3b4f2c]">in a jar.</span>
          </h1>

          {/* Center Stage Jar */}
          <div className="relative w-56 h-64 sm:w-72 sm:h-80 flex items-center justify-center my-1">
            <img
              src="/hero-jar.png"
              alt="Living Terrarium"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1545241047-6083a3684587?w=700&auto=format&fit=crop&q=80";
              }}
              className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(23,32,20,0.25)]"
            />
          </div>

          {/* Brand Philosophy Quote on Slide 1 */}
          <p className="font-serif italic text-xs sm:text-sm text-[#52493b] max-w-xs mt-1">
            "Encapsulating nature’s stillness into living architecture."
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-1 z-20 text-[#675d4d] pb-2">
          <span className="text-[9px] font-mono uppercase tracking-widest text-[#3b4f2c] font-semibold">
            Scroll to explore biomes
          </span>
          <div className="w-1.5 h-4 rounded-full bg-[#3b4f2c]/50 animate-bounce" />
        </div>
      </section>

      {/* SLIDES 1, 2, 3: TERRARIUM (03.png), PALUDARIUM (03.png), AQUARIUM (02.png) */}
      {biomes.map((item, idx) => (
        <section
          key={item.num}
          className="h-screen w-full snap-start snap-always relative bg-[#f4f0e6] flex flex-col items-center justify-center px-4 pt-14 pb-4 border-b border-[#ded6c4]"
        >
          <div className="w-full max-w-md mx-auto my-auto flex flex-col items-center text-center z-20">
            
            {/* Category Phase Pill */}
            <div className="mb-2">
              <span className="text-[10px] font-mono text-[#3b4f2c] tracking-widest font-bold px-3 py-1 rounded-full bg-[#eae3d2] border border-[#d6cdbc]">
                {item.num} / {item.tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172014] mb-2">
              {item.title}
            </h2>

            {/* Grooved Image Pedestal Frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center my-2">
              <div className="w-full h-full rounded-3xl p-2.5 bg-[#eae3d2] border-2 border-[#3b4f2c]/30 shadow-[0_16px_36px_rgba(23,32,20,0.18)]">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0c130b] flex items-center justify-center relative">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = item.fallback;
                    }}
                    className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#172014]/85 text-[9px] font-mono text-[#f4f0e6] border border-[#3b4f2c]">
                    Phase {item.num}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#4f4637] leading-relaxed max-w-sm mt-1 mb-3">
              {item.desc}
            </p>

            {/* Action Link directly to that part of Catalog */}
            <Link
              href="/catalog"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#24331c] text-[#f4f0e6] text-xs font-mono font-bold hover:bg-[#324527] transition-all shadow-md active:scale-95"
            >
              <span>Explore {item.title}s in Catalog</span>
              <ArrowUpRight size={13} className="text-[#a4b893]" />
            </Link>
          </div>

          <div className="text-[9px] font-mono text-[#786e5e] uppercase tracking-widest pb-1 z-20">
            {idx < 2 ? "Swipe for next biome ↓" : "Swipe to commission ↓"}
          </div>
        </section>
      ))}

      {/* SLIDE 4: DARK OLIVE CURTAIN FOOTER */}
      <footer className="h-screen w-full snap-start snap-always relative bg-gradient-to-b from-[#1c2618] to-[#11170f] text-[#f4f0e6] px-6 py-10 flex flex-col justify-between max-w-xl mx-auto">
        <div className="pt-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#cfc5b0] block mb-1">
            Start Your Commission
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4f0e6] leading-tight">
            Bring Nature <br />
            <span className="italic font-normal text-[#a3b793]">Into Your Space.</span>
          </h2>
          <p className="text-xs text-[#b8ad96] mt-3 leading-relaxed">
            Custom vessel sizes, customized figurines, and corporate gifting available directly through WhatsApp.
          </p>
        </div>

        <div className="space-y-3 my-auto">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20would%20like%20to%20discuss%20a%20custom%20order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-2xl bg-[#f4f0e6] text-[#172014] font-mono font-bold text-xs flex items-center justify-between shadow-lg hover:bg-[#eae3d2] active:scale-98 transition-transform cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <MessageCircle size={16} /> Direct WhatsApp Inquiry
            </span>
            <span>→</span>
          </a>

          <Link
            href="/catalog"
            className="w-full py-3.5 px-4 rounded-2xl bg-[#283622] border border-[#3e5335] text-[#f4f0e6] font-mono text-xs flex items-center justify-between hover:bg-[#32432a] active:scale-98 transition-transform"
          >
            <span className="flex items-center gap-2">
              <Layers size={16} className="text-[#a4b893]" /> Browse 22-Piece Catalog
            </span>
            <span>→</span>
          </Link>
        </div>

        <div className="flex items-center justify-between border-t border-[#2c3d25] pt-4 text-[10px] font-mono text-[#9f947f]">
          <span>Living Terrarium Studio</span>
          <span>Find peace in a jar</span>
        </div>
      </footer>

    </div>
  );
}