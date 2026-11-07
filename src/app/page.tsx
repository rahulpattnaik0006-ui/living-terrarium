"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, BookOpen, Layers, Star } from "lucide-react";

const WHATSAPP_NUMBER = "918340623262";

function RealisticOliveLeaf({ className = "w-10 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 140" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M40 6 C22 28, 14 62, 22 96 C26 112, 34 126, 40 134 C46 126, 54 112, 58 96 C66 62, 58 28, 40 6 Z" strokeWidth="1.6" className="stroke-[#3b4f2c]/55" />
      <path d="M40 134 Q39 70 40 6" strokeWidth="1.8" className="stroke-[#2f4023]/70" />
      <path d="M40 118 Q30 108 24 106" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 112 Q50 102 56 100" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 98 Q28 88 20 84" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 92 Q52 82 60 78" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 76 Q26 66 18 60" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 70 Q54 60 61 54" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 54 Q28 46 22 38" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 48 Q52 40 57 32" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
    </svg>
  );
}

const ambientLeaves = [
  { top: "6%", left: "4%", size: "w-9 h-14 sm:w-11 sm:h-18", rotate: -28, delay: 0 },
  { top: "12%", left: "82%", size: "w-10 h-16 sm:w-12 sm:h-20", rotate: 34, delay: 1.2 },
  { top: "26%", left: "10%", size: "w-8 h-12 sm:w-10 sm:h-16", rotate: 18, delay: 0.7 },
  { top: "34%", left: "88%", size: "w-9 h-14 sm:w-11 sm:h-18", rotate: -36, delay: 2.1 },
  { top: "48%", left: "5%", size: "w-10 h-16 sm:w-12 sm:h-20", rotate: -15, delay: 1.5 },
  { top: "58%", left: "84%", size: "w-8 h-12 sm:w-10 sm:h-16", rotate: 25, delay: 0.3 },
  { top: "72%", left: "8%", size: "w-9 h-14 sm:w-11 sm:h-18", rotate: 42, delay: 2.5 },
  { top: "82%", left: "80%", size: "w-10 h-16 sm:w-12 sm:h-20", rotate: -22, delay: 1.8 },
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
      
      {/* MOBILE-FRIENDLY NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4f0e6]/95 backdrop-blur-md border-b border-[#ded6c4] px-3 sm:px-6 py-2.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#c8bea9] bg-[#eae3d2] overflow-hidden flex items-center justify-center">
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
          <span className="font-serif tracking-wider text-[11px] sm:text-xs uppercase font-bold text-[#172014]">
            Living Terrarium
          </span>
        </Link>

        <nav className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/catalog"
            className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#24331c] text-[#f4f0e6] font-bold flex items-center gap-1 shadow-sm"
          >
            <Layers size={11} className="text-[#a4b893]" />
            <span>Catalog</span>
          </Link>

          <Link
            href="/reviews"
            className="text-[11px] font-mono px-2 py-1 rounded-lg text-[#25351e] hover:bg-[#eae3d2] font-semibold flex items-center gap-1"
          >
            <Star size={11} />
            <span>Reviews</span>
          </Link>

          <Link
            href="/care-guide"
            className="text-[11px] font-mono px-2 py-1 rounded-lg text-[#25351e] hover:bg-[#eae3d2] font-semibold flex items-center gap-1"
          >
            <BookOpen size={11} />
            <span>Care</span>
          </Link>
        </nav>
      </header>

      {/* AMBIENT FLOATING LEAVES */}
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

      {/* STAGE 0: HERO INTRO */}
      <section className="h-screen w-full snap-start snap-always relative bg-[#f4f0e6] flex flex-col items-center justify-center px-4 pt-14">
        <div className="text-center max-w-lg z-20 mb-2">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#3b4f2c] font-bold block mb-1.5">
            Bespoke Botanical Biomes
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#172014] leading-[1.08]">
            Find Peace <br />
            <span className="italic font-normal text-[#3b4f2c]">in a jar.</span>
          </h1>
        </div>

        <div className="relative z-20 w-64 h-72 sm:w-80 sm:h-96 flex items-center justify-center">
          <img
            src="/hero-jar.png"
            alt="Living Terrarium"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1545241047-6083a3684587?w=700&auto=format&fit=crop&q=80";
            }}
            className="w-full h-full object-contain drop-shadow-[0_22px_35px_rgba(23,32,20,0.25)]"
          />
        </div>

        <div className="absolute bottom-5 flex flex-col items-center gap-1.5 z-20 text-[#675d4d]">
          <span className="text-[9px] font-mono uppercase tracking-widest text-[#3b4f2c] font-semibold">
            Scroll down to enter
          </span>
          <div className="w-1.5 h-5 rounded-full bg-[#3b4f2c]/50 animate-bounce" />
        </div>
      </section>

      {/* STAGES 1, 2, 3: TERRARIUM (03.png), PALUDARIUM (03.png), AQUARIUM (02.png) */}
      {biomes.map((item, idx) => (
        <section
          key={item.num}
          className="h-screen w-full snap-start snap-always relative bg-[#f4f0e6] flex flex-col justify-between items-center px-5 pt-16 pb-6 border-b border-[#ded6c4]"
        >
          {/* Architectural Top Filler */}
          <div className="w-full max-w-md pt-2 text-center z-20 border-b border-[#ded6c4]/80 pb-2.5">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="h-[1px] w-8 bg-[#3b4f2c]/40" />
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#3b4f2c] font-bold">
                LIVING BIOSPHERE GALLERY
              </span>
              <span className="h-[1px] w-8 bg-[#3b4f2c]/40" />
            </div>
            <p className="font-serif italic text-xs text-[#52493b]">
              "Encapsulating nature’s stillness into living architecture."
            </p>
          </div>

          {/* DYNAMIC BIOME IMAGE: Loads exact .png with unconstrained aspect ratio */}
          <div className="relative z-20 w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center my-auto">
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

          {/* NARRATIVE */}
          <div className="w-full max-w-md text-center z-20 mb-2">
            <span className="text-[10px] font-mono text-[#3b4f2c] tracking-widest font-bold block mb-1">
              {item.num} / {item.tag}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#172014] mb-1.5">
              {item.title}
            </h2>
            <p className="text-xs text-[#4f4637] leading-relaxed max-w-sm mx-auto">
              {item.desc}
            </p>

            <Link
              href="/catalog"
              className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-mono font-bold text-[#202d18] underline hover:text-[#3b4f2c]"
            >
              View in Catalog →
            </Link>
          </div>

          <div className="text-[9px] font-mono text-[#786e5e] uppercase tracking-widest">
            {idx < 2 ? "Swipe for next biome ↓" : "Swipe to commission ↓"}
          </div>
        </section>
      ))}

      {/* FOOTER */}
      <footer className="h-screen w-full snap-start snap-always relative bg-gradient-to-b from-[#1c2618] to-[#11170f] text-[#f4f0e6] px-6 py-10 flex flex-col justify-between max-w-xl mx-auto">
        <div className="pt-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#cfc5b0] block mb-1">
            Start Your Commission
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#f4f0e6] leading-tight">
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
              <Layers size={16} className="text-[#a4b893]" /> Browse Full Catalog
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