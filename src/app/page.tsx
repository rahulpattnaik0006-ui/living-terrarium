"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, BookOpen, Layers, Star, ArrowUpRight, Compass } from "lucide-react";

const WHATSAPP_NUMBER = "918340623262";

// Upward Catalog Pointer Arrow
function UpwardCatalogPointer() {
  return (
    <div className="flex items-center gap-1.5 text-[#2d3f23]">
      <span className="font-serif italic text-xs tracking-wide text-[#1c2916] font-semibold hidden sm:inline">
        Explore 22+ builds
      </span>
      <span className="font-serif italic text-[11px] tracking-wide text-[#1c2916] font-semibold sm:hidden">
        Catalog
      </span>
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="-rotate-12 animate-pulse text-[#354c29]"
      >
        <path d="M10 32 C 14 14, 24 10, 32 8" />
        <path d="M23 4 L33 8 L27 16" />
      </svg>
    </div>
  );
}

// Detailed botanical leaf skeleton with natural venation
function BotanicalOliveLeaf({ className = "w-10 h-16", opacity = "opacity-40" }: { className?: string; opacity?: string }) {
  return (
    <svg viewBox="0 0 80 140" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={`${className} ${opacity}`}>
      <path d="M40 6 C20 28, 12 64, 20 98 C24 114, 34 128, 40 134 C46 128, 56 114, 60 98 C68 64, 60 28, 40 6 Z" strokeWidth="1.6" className="stroke-[#2d3e23]" />
      <path d="M40 134 Q39 70 40 6" strokeWidth="1.8" className="stroke-[#1d2917]" />
      <path d="M40 118 Q28 108 22 104" strokeWidth="1.1" className="stroke-[#3a4e2d]" />
      <path d="M40 112 Q52 102 58 98" strokeWidth="1.1" className="stroke-[#3a4e2d]" />
      <path d="M40 96 Q26 86 18 80" strokeWidth="1.1" className="stroke-[#3a4e2d]" />
      <path d="M40 90 Q54 80 62 76" strokeWidth="1.1" className="stroke-[#3a4e2d]" />
      <path d="M40 74 Q24 64 16 56" strokeWidth="1.1" className="stroke-[#3a4e2d]" />
      <path d="M40 68 Q56 58 64 52" strokeWidth="1.1" className="stroke-[#3a4e2d]" />
      <path d="M40 50 Q26 42 20 34" strokeWidth="1.1" className="stroke-[#3a4e2d]" />
      <path d="M40 44 Q54 36 60 28" strokeWidth="1.1" className="stroke-[#3a4e2d]" />
    </svg>
  );
}

// 12 Depth-Layered Botanical Leaves (Foreground blur, crisp midground, soft background)
const leavesField = [
  { top: "6%", left: "-2%", size: "w-14 h-24 sm:w-20 sm:h-32", rotate: -35, blur: "blur-[1.5px]", opacity: "opacity-35", delay: 0 },
  { top: "10%", left: "84%", size: "w-12 h-20 sm:w-16 sm:h-28", rotate: 28, blur: "blur-0", opacity: "opacity-45", delay: 1.2 },
  { top: "22%", left: "8%", size: "w-8 h-14 sm:w-10 sm:h-18", rotate: 15, blur: "blur-0", opacity: "opacity-40", delay: 0.5 },
  { top: "32%", left: "90%", size: "w-10 h-16 sm:w-14 sm:h-22", rotate: -40, blur: "blur-[0.5px]", opacity: "opacity-30", delay: 2.1 },
  { top: "45%", left: "4%", size: "w-11 h-18 sm:w-14 sm:h-24", rotate: -18, blur: "blur-0", opacity: "opacity-50", delay: 1.6 },
  { top: "56%", left: "86%", size: "w-9 h-14 sm:w-12 sm:h-18", rotate: 32, blur: "blur-0", opacity: "opacity-45", delay: 0.8 },
  { top: "68%", left: "-3%", size: "w-16 h-26 sm:w-20 sm:h-34", rotate: 45, blur: "blur-[2px]", opacity: "opacity-30", delay: 2.4 },
  { top: "74%", left: "88%", size: "w-10 h-16 sm:w-12 sm:h-20", rotate: -25, blur: "blur-0", opacity: "opacity-40", delay: 1.1 },
  { top: "86%", left: "10%", size: "w-12 h-20 sm:w-14 sm:h-24", rotate: 12, blur: "blur-[0.5px]", opacity: "opacity-35", delay: 1.9 },
  { top: "92%", left: "80%", size: "w-8 h-12 sm:w-10 sm:h-16", rotate: -15, blur: "blur-0", opacity: "opacity-40", delay: 0.3 },
];

export default function LivingTerrariumSite() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Master scroll progress across interactive 450vh track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. HERO JAR: Starts large (1.2) -> Diminishes down to 0.82 into the pedestal
  const jarScale = useTransform(scrollYProgress, [0, 0.2], [1.2, 0.82]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.12], ["0%", "-30%"]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Phase Tracker visibility (appears right as hero text disappears)
  const trackerOpacity = useTransform(scrollYProgress, [0.12, 0.18], [0, 1]);

  // Image Transitions (Smooth crossfade between the center jar and each biome upload)
  const heroJarOpacity = useTransform(scrollYProgress, [0, 0.15, 0.22], [1, 1, 0]);
  const terrariumOpacity = useTransform(scrollYProgress, [0.18, 0.25, 0.44, 0.5], [0, 1, 1, 0]);
  const paludariumOpacity = useTransform(scrollYProgress, [0.45, 0.52, 0.7, 0.76], [0, 1, 1, 0]);
  const aquariumOpacity = useTransform(scrollYProgress, [0.71, 0.78, 0.96, 1], [0, 1, 1, 1]);

  // Text content crossfades
  const text1Opacity = useTransform(scrollYProgress, [0.2, 0.26, 0.42, 0.48], [0, 1, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.48, 0.54, 0.68, 0.74], [0, 1, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.74, 0.8, 0.95, 1], [0, 1, 1, 1]);

  // Phase Tracker active states
  const phase1Active = useTransform(scrollYProgress, [0.18, 0.22, 0.44, 0.48], [0.3, 1, 1, 0.3]);
  const phase2Active = useTransform(scrollYProgress, [0.45, 0.49, 0.7, 0.74], [0.3, 1, 1, 0.3]);
  const phase3Active = useTransform(scrollYProgress, [0.71, 0.76, 0.98, 1], [0.3, 1, 1, 1]);

  return (
    <div className="bg-[#121910] text-[#1c2517] font-sans selection:bg-[#354c29] selection:text-[#f4f0e6]">
      
      {/* 1. STICKY NAVBAR WITH ARROW POINTER */}
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

        {/* POINTER TO CATALOG */}
        <div className="flex items-center gap-2 sm:gap-4">
          <UpwardCatalogPointer />

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

      {/* 2. DENSE MULTI-LAYER BOTANICAL LEAF FIELD */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {leavesField.map((leaf, index) => (
          <div key={index} style={{ top: leaf.top, left: leaf.left }} className={`absolute ${leaf.blur}`}>
            <motion.div
              animate={{
                y: [0, -18, 0],
                x: [0, index % 2 === 0 ? 10 : -10, 0],
                rotate: [leaf.rotate, leaf.rotate + (index % 2 === 0 ? 12 : -12), leaf.rotate],
              }}
              transition={{
                duration: 7 + (index % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: leaf.delay,
              }}
            >
              <BotanicalOliveLeaf className={leaf.size} opacity={leaf.opacity} />
            </motion.div>
          </div>
        ))}
      </div>

      {/* 3. INTERACTIVE PINNED STORYTELLING CANVAS (450vh) */}
      <div ref={containerRef} className="relative h-[450vh] bg-[#f4f0e6]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between px-4 pt-16 pb-6 overflow-hidden">
          
          {/* TOP ARCHITECTURAL SECTION FILLER */}
          <div className="w-full max-w-md mx-auto text-center z-20 pt-1">
            
            {/* Slide 1 Crest (Visible in Hero) */}
            <motion.div style={{ opacity: heroTextOpacity, y: heroTextY }} className="space-y-1">
              <div className="flex items-center justify-center gap-2">
                <span className="h-[1px] w-6 bg-[#354c29]/40" />
                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#354c29] font-bold">
                  LIVING BOTANICAL ATELIER
                </span>
                <span className="h-[1px] w-6 bg-[#354c29]/40" />
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#172014] leading-[1.08]">
                Find Peace <br />
                <span className="italic font-normal text-[#354c29]">in a jar.</span>
              </h1>
            </motion.div>

            {/* REAL-TIME PHASE PILL TRACKER (Appears as you scroll into biomes) */}
            <motion.div style={{ opacity: trackerOpacity }} className="flex items-center justify-center gap-2">
              <motion.span
                style={{ opacity: phase1Active }}
                className="text-[9px] sm:text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#eae3d2] border border-[#354c29]/40 text-[#172014] font-bold"
              >
                01 Terrarium
              </motion.span>
              <span className="text-[#354c29]/30 text-xs">•</span>
              <motion.span
                style={{ opacity: phase2Active }}
                className="text-[9px] sm:text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#eae3d2] border border-[#354c29]/40 text-[#172014] font-bold"
              >
                02 Paludarium
              </motion.span>
              <span className="text-[#354c29]/30 text-xs">•</span>
              <motion.span
                style={{ opacity: phase3Active }}
                className="text-[9px] sm:text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#eae3d2] border border-[#354c29]/40 text-[#172014] font-bold"
              >
                03 Aquarium
              </motion.span>
            </motion.div>
          </div>

          {/* CENTER STAGE: THE JAR DIMINISHES & MORPHS THROUGH ALL 3 BIOMES */}
          <div className="relative w-full max-w-sm h-[40vh] sm:h-[45vh] flex items-center justify-center my-auto z-20">
            
            {/* Grooved Outer Architectural Pedestal */}
            <motion.div
              style={{ scale: jarScale }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem] p-3 bg-[#eae3d2] border-2 border-[#354c29]/35 shadow-[0_24px_50px_rgba(23,32,20,0.22)] flex items-center justify-center"
            >
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#0a1009] relative flex items-center justify-center">
                
                {/* Image 0: The Original Large Jar (diminishes and fades out) */}
                <motion.img
                  style={{ opacity: heroJarOpacity }}
                  src="/hero-jar.png"
                  alt="Living Terrarium Hero"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1545241047-6083a3684587?w=700&auto=format&fit=crop&q=80";
                  }}
                  className="absolute inset-0 m-auto max-w-[88%] max-h-[88%] object-contain drop-shadow-xl"
                />

                {/* Image 1: Terrarium (03.png) */}
                <motion.img
                  style={{ opacity: terrariumOpacity }}
                  src="/terrarium/03.png"
                  alt="Terrarium Build 03"
                  className="absolute inset-0 m-auto max-w-full max-h-full object-contain"
                />

                {/* Image 2: Paludarium (03.png) */}
                <motion.img
                  style={{ opacity: paludariumOpacity }}
                  src="/paludarium/03.png"
                  alt="Paludarium Build 03"
                  className="absolute inset-0 m-auto max-w-full max-h-full object-contain"
                />

                {/* Image 3: Aquarium (02.png) */}
                <motion.img
                  style={{ opacity: aquariumOpacity }}
                  src="/aquarium/02.png"
                  alt="Aquarium Build 02"
                  className="absolute inset-0 m-auto max-w-full max-h-full object-contain"
                />

                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#121910]/85 text-[9px] font-mono text-[#f4f0e6] border border-[#354c29]/60">
                  Living Biome
                </span>
              </div>
            </motion.div>

          </div>

          {/* BOTTOM CONSOLE: NARRATIVE & CATALOG JUMP */}
          <div className="w-full max-w-md mx-auto text-center z-20 pb-2 min-h-[140px] flex flex-col justify-center relative">
            
            {/* Hero Quote on Slide 1 */}
            <motion.div style={{ opacity: heroTextOpacity }} className="space-y-2">
              <p className="font-serif italic text-xs sm:text-sm text-[#473e31] max-w-xs mx-auto">
                "Encapsulating nature’s stillness into living architecture."
              </p>
              <motion.div style={{ opacity: scrollCueOpacity }} className="flex flex-col items-center gap-1 pt-1 text-[#675d4d]">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#354c29] font-bold">
                  Scroll to enter journey
                </span>
                <div className="w-1.5 h-4 rounded-full bg-[#354c29]/50 animate-bounce" />
              </motion.div>
            </motion.div>

            {/* Biome 1 Details: Terrarium */}
            <motion.div style={{ opacity: text1Opacity }} className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#172014] mb-1">
                Enclosed Terrarium
              </h2>
              <p className="text-xs text-[#4f4637] leading-relaxed max-w-xs mb-2.5">
                Self-sustaining moss microclimates flourishing in sealed glass chambers with zero daily upkeep.
              </p>
              <Link
                href="/catalog#terrariums"
                className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#24331c] text-[#f4f0e6] text-xs font-mono font-bold hover:bg-[#324527] shadow-sm"
              >
                <span>View Terrariums in Catalog</span>
                <ArrowUpRight size={13} className="text-[#a4b893]" />
              </Link>
            </motion.div>

            {/* Biome 2 Details: Paludarium */}
            <motion.div style={{ opacity: text2Opacity }} className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#172014] mb-1">
                Dual-Realm Paludarium
              </h2>
              <p className="text-xs text-[#4f4637] leading-relaxed max-w-xs mb-2.5">
                Where living aquatic currents merge with emergent stone ledges and lush terrestrial ferns.
              </p>
              <Link
                href="/catalog#paludariums"
                className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#24331c] text-[#f4f0e6] text-xs font-mono font-bold hover:bg-[#3245