"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Star, BookOpen, Layers } from "lucide-react";

const WHATSAPP_NUMBER = "918340623262";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Hand-drawn arrow curling toward the catalog in the navbar
function PointerToCatalog() {
  return (
    <div className="flex items-center gap-1.5 text-[#3b4f2c]">
      <span className="font-serif italic text-xs tracking-wide text-[#2e3e23] font-semibold hidden sm:inline">
        Explore full collection
      </span>
      <span className="font-serif italic text-[11px] tracking-wide text-[#2e3e23] font-semibold sm:hidden">
        See catalog
      </span>
      <svg
        width="28"
        height="28"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#3b4f2c] -rotate-12 animate-pulse"
      >
        <path d="M8 28 C 12 10, 24 8, 32 10" />
        <path d="M25 6 L33 10 L27 16" />
      </svg>
    </div>
  );
}

// Botanically accurate olive leaf skeleton with organic curved margins and natural lateral venation
function RealisticOliveLeaf({ className = "w-10 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 140"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Organic Outer Blade Silhouette */}
      <path
        d="M40 6 C22 28, 14 62, 22 96 C26 112, 34 126, 40 134 C46 126, 54 112, 58 96 C66 62, 58 28, 40 6 Z"
        strokeWidth="1.6"
        className="stroke-[#3b4f2c]/55"
      />
      {/* Central Midrib Spine */}
      <path
        d="M40 134 Q39 70 40 6"
        strokeWidth="1.8"
        className="stroke-[#2f4023]/70"
      />
      {/* Secondary Lateral Veins (Alternating Natural Angles) */}
      <path d="M40 118 Q30 108 24 106" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 112 Q50 102 56 100" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 98 Q28 88 20 84" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 92 Q52 82 60 78" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 76 Q26 66 18 60" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 70 Q54 60 61 54" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 54 Q28 46 22 38" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 48 Q52 40 57 32" strokeWidth="1.1" className="stroke-[#3b4f2c]/50" />
      <path d="M40 32 Q32 26 28 20" strokeWidth="1" className="stroke-[#3b4f2c]/45" />
      <path d="M40 26 Q48 20 51 16" strokeWidth="1" className="stroke-[#3b4f2c]/45" />
    </svg>
  );
}

// Scattered ambient leaves (Medium sized, distinct olive tone)
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
    image: "/hero-terrarium.png",
    fallback: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=700&auto=format&fit=crop&q=80",
  },
  {
    num: "02",
    tag: "DUAL-REALM WATERFALL",
    title: "Paludarium",
    desc: "Where living aquatic currents merge with emergent stone ledges and lush terrestrial ferns.",
    image: "/hero-paludarium.png",
    fallback: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=700&auto=format&fit=crop&q=80",
  },
  {
    num: "03",
    tag: "SUBMERGED HARDSCAPE",
    title: "Aquarium",
    desc: "Japanese Iwagumi-inspired aquatic scapes carved from ancient volcanic slate and living aquatic flora.",
    image: "/hero-aquarium.png",
    fallback: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=700&auto=format&fit=crop&q=80",
  },
];

const reviews = [
  {
    name: "Arjun S.", city: "Bengaluru",
    comment: "The terrarium lamp sits on my work desk. It has been 4 months and the moss is still thriving without any fuss.",
    build: "Living Luminary Lamp", stars: 5,
  },
  {
    name: "Pooja M.", city: "Mumbai",
    comment: "Gifted the Zen Buddha bowl to my mother. The stone staircase craftsmanship inside the jar is breathtaking.",
    build: "Zen Buddha Sanctuary", stars: 5,
  },
  {
    name: "Devendra K.", city: "Kolkata",
    comment: "The packaging for transit was rock-solid. Zero soil displacement during delivery. A truly living art piece.",
    build: "Misty Falls Paludarium", stars: 5,
  },
];

export default function LivingTerrariumSite() {
  return (
    <div className="bg-[#172014] text-[#1c2517] h-screen overflow-y-scroll snap-y snap-mandatory font-sans selection:bg-[#3b4f2c] selection:text-[#f4f0e6]">
      
      {/* STICKY TOP NAVBAR WITH PROMINENT CATALOG ARROW POINTER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4f0e6]/95 backdrop-blur-md border-b border-[#ded6c4] px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
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

        {/* POINTER ARROW GUIDING VISITOR DIRECTLY TO CATALOG */}
        <div className="flex items-center gap-3 sm:gap-5">
          <PointerToCatalog />

          <nav className="flex items-center gap-1.5 sm:gap-2">
  <Link
    href="/catalog"
    className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#24331c] text-[#f4f0e6] hover:bg-[#344828] transition-all flex items-center gap-1.5 font-bold shadow-md shadow-[#172014]/20"
  >
    <Layers size={13} className="text-[#a4b893]" />
    <span>Catalog</span>
  </Link>

  <Link
    href="/reviews"
    className="text-[11px] font-mono px-2.5 py-1.5 rounded-lg text-[#32432b] hover:bg-[#eae3d2] transition-colors flex items-center gap-1 font-semibold"
  >
    <Star size={13} />
    <span>Reviews</span>
  </Link>

  <Link
    href="/care-guide"
    className="text-[11px] font-mono px-2.5 py-1.5 rounded-lg text-[#32432b] hover:bg-[#eae3d2] transition-colors hidden sm:flex items-center gap-1 font-semibold"
  >
    <BookOpen size={13} />
    <span>Care</span>
  </Link>
</nav>
        </div>
      </header>

      {/* AMBIENT LEAF SKELETONS FIXED CANVAS */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {ambientLeaves.map((leaf, index) => (
          <div
            key={index}
            style={{ top: leaf.top, left: leaf.left }}
            className="absolute"
          >
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

      {/* STAGE 0: HERO INTRO (SNAP SLIDE 1) */}
      <section className="h-screen w-full snap-start snap-always relative bg-[#f4f0e6] flex flex-col items-center justify-center px-4 pt-16">
        <div className="text-center max-w-lg z-20 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#3b4f2c] font-bold block mb-2">
            Bespoke Botanical Biomes
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#172014] leading-[1.08]">
            Find Peace <br />
            <span className="italic font-normal text-[#3b4f2c]">in a jar.</span>
          </h1>
        </div>

        {/* Center Stage Jar */}
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

        <div className="absolute bottom-6 flex flex-col items-center gap-1.5 z-20 text-[#675d4d]">
          <span className="text-[9px] font-mono uppercase tracking-widest text-[#3b4f2c] font-semibold">
            Scroll down to enter
          </span>
          <div className="w-1.5 h-6 rounded-full bg-[#3b4f2c]/50 animate-bounce" />
        </div>
      </section>

      {/* STAGES 1, 2, 3: TERRARIUM, PALUDARIUM, AQUARIUM (STRICT 1-BY-1 SNAP SLIDES) */}
      {biomes.map((item, idx) => (
        <section
          key={item.num}
          className="h-screen w-full snap-start snap-always relative bg-[#f4f0e6] flex flex-col justify-between items-center px-5 pt-20 pb-8 border-b border-[#ded6c4]"
        >
          {/* ARTISAN STUDIO TOP EMBLEM - Fills the upper space gracefully */}
          <div className="w-full max-w-md pt-2 text-center z-20 border-b border-[#ded6c4]/80 pb-3">
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

          {/* DYNAMIC BIOME IMAGE: Dedicated frame with automatic transition per stage */}
          <div className="relative z-20 w-64 h-72 sm:w-80 sm:h-88 flex items-center justify-center my-auto">
            <div className="w-full h-full rounded-[2.5rem] p-2 bg-[#eae3d2] border-2 border-[#3b4f2c]/30 shadow-[0_20px_45px_rgba(23,32,20,0.18)]">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#172014] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = item.fallback;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#172014]/85 text-[10px] font-mono text-[#f4f0e6] border border-[#3b4f2c]">
                  Phase {item.num}
                </span>
              </div>
            </div>
          </div>

          {/* BIOME NARRATIVE CONTENT */}
          <div className="w-full max-w-md text-center z-20 mb-4">
            <span className="text-[10px] font-mono text-[#3b4f2c] tracking-widest font-bold block mb-1">
              {item.num} / {item.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172014] mb-2">
              {item.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4f4637] leading-relaxed max-w-sm mx-auto">
              {item.desc}
            </p>

            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 mt-3.5 text-xs font-mono font-bold text-[#202d18] underline hover:text-[#3b4f2c]"
            >
              View available {item.title} designs in Catalog →
            </Link>
          </div>

          <div className="text-[9px] font-mono text-[#786e5e] uppercase tracking-widest">
            {idx < 2 ? "Swipe for next biome ↓" : "Swipe for collectors review ↓"}
          </div>
        </section>
      ))}

      {/* SECTION 4: COLLECTOR REVIEWS (SNAP SLIDE 5) */}
      <section className="h-screen w-full snap-start snap-always relative bg-[#f4f0e6] flex flex-col justify-center px-5 pt-16 max-w-xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#3b4f2c] font-bold block mb-1">
            Verified Collectors
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#172014]">
            Words From Caretakers
          </h2>
        </div>

        <div className="space-y-3.5">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl border border-[#ded6c4] bg-[#faf7f2] shadow-sm"
            >
              <div className="flex items-center gap-1 text-[#9b7e3b] mb-1.5">
                {[...Array(rev.stars)].map((_, idx) => (
                  <Star key={idx} size={12} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-[#383329] leading-relaxed mb-2">
                "{rev.comment}"
              </p>
              <div className="flex items-center justify-between text-[11px] font-mono border-t border-[#ded6c4] pt-2 text-[#6c6556]">
                <span className="text-[#172014] font-bold">{rev.name} ({rev.city})</span>
                <span className="text-[#3b4f2c] font-semibold">{rev.build}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] font-mono text-[#786e5e] mt-4 uppercase tracking-widest">
          Scroll down to contact studio ↓
        </p>
      </section>

      {/* SECTION 5: DARK OLIVE FINAL CURTAIN (SNAP SLIDE 6) */}
      <footer className="h-screen w-full snap-start snap-always relative bg-gradient-to-b from-[#1c2618] to-[#11170f] text-[#f4f0e6] px-6 py-12 flex flex-col justify-between max-w-xl mx-auto">
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
              <Layers size={16} className="text-[#a4b893]" /> Browse Full 20+ Item Catalog
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