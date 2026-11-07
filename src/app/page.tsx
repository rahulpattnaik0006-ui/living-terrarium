"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Menu, X, ArrowDown, Layers, Star, BookOpen } from "lucide-react";

const WHATSAPP_NUMBER = "918340623262";

// Instagram Icon
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Detailed botanical leaf skeleton
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

// 12 Depth-Layered Botanical Leaves
const leavesField = [
  { top: "6%", left: "-2%", size: "w-14 h-24 sm:w-20 sm:h-32", rotate: -35, blur: "blur-[1.5px]", opacity: "opacity-35", delay: 0 },
  { top: "10%", left: "84%", size: "w-12 h-20 sm:w-16 sm:h-28", rotate: 28, blur: "blur-0", opacity: "opacity-45", delay: 1.2 },
  { top: "22%", left: "8%", size: "w-8 h-14 sm:w-10 sm:h-18", rotate: 15, blur: "blur-0", opacity: "opacity-40", delay: 0.5 },
  { top: "32%", left: "90%", size: "w-10 h-16 sm:w-14 sm:h-22", rotate: -40, blur: "blur-[0.5px]", opacity: "opacity-30", delay: 2.1 },
  { top: "45%", left: "4%", size: "w-11 h-18 sm:w-14 sm:h-24", rotate: -18, blur: "blur-0", opacity: "opacity-50", delay: 1.6 },
  { top: "56%", left: "86%", size: "w-9 h-14 sm:w-12 sm:h-18", rotate: 32, blur: "blur-0", opacity: "opacity-45", delay: 0.8 },
  { top: "68%", left: "-3%", size: "w-16 h-26 sm:w-20 sm:h-34", rotate: 45, blur: "blur-[2px]", opacity: "opacity-30", delay: 2.4 },
  { top: "74%", left: "88%", size: "w-10 h-16 sm:w-12 sm:h-20", rotate: -25, blur: "blur-0", opacity: "opacity-40", delay: 1.1 },
];

export default function LivingTerrariumSite() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Master scroll progress across interactive 450vh track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. HERO JAR: Starts large (1.2) -> Diminishes down to 0.85 into the pedestal
  const jarScale = useTransform(scrollYProgress, [0, 0.2], [1.25, 0.85]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.12], ["0%", "-40%"]);
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
    <div className="bg-[#121910] text-[#1c2517] font-sans selection:bg-[#354c29] selection:text-[#f4f0e6] relative">
      
      {/* 1. ULTRA-CLEAN NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 px-5 py-4 flex items-center justify-between pointer-events-none">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 pointer-events-auto group">
          <div className="w-10 h-10 rounded-full border border-[#c8bea9] bg-[#eae3d2] overflow-hidden flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Living Terrarium"
              onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1545241047-6083a3684587?w=120&auto=format&fit=crop&q=80"; }}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-serif tracking-widest text-sm uppercase font-bold text-[#172014] bg-[#f4f0e6]/80 px-3 py-1 rounded-full backdrop-blur-md border border-[#ded6c4]">
            Living Terrarium
          </span>
        </Link>

        {/* 3-Line Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="w-11 h-11 rounded-full bg-[#172014] text-[#f4f0e6] flex items-center justify-center pointer-events-auto shadow-lg hover:bg-[#2b3a25] transition-colors"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* FULL SCREEN FROSTED MENU OVERLAY */}
      <motion.div 
        initial={false}
        animate={{ y: isMenuOpen ? "0%" : "-100%", opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[60] bg-[#121910]/95 backdrop-blur-xl flex flex-col justify-center items-center"
      >
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 w-12 h-12 rounded-full border border-[#354c29] bg-[#1a2517] text-[#a4b893] flex items-center justify-center hover:bg-[#2d3e23] transition-colors"
        >
          <X size={24} />
        </button>

        <nav className="flex flex-col items-center gap-8 text-center">
          <Link href="/catalog" onClick={() => setIsMenuOpen(false)} className="group flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-[#1a2517] border border-[#354c29] text-[#a4b893] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Layers size={24} />
            </div>
            <span className="font-serif text-3xl font-bold text-[#f4f0e6]">Catalog</span>
            <span className="text-xs font-mono text-[#8a9980] tracking-widest uppercase">Explore 22+ Builds</span>
          </Link>

          <Link href="/reviews" onClick={() => setIsMenuOpen(false)} className="group flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-[#1a2517] border border-[#354c29] text-[#a4b893] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Star size={24} />
            </div>
            <span className="font-serif text-3xl font-bold text-[#f4f0e6]">Reviews</span>
            <span className="text-xs font-mono text-[#8a9980] tracking-widest uppercase">Collector Proof</span>
          </Link>

          <Link href="/care-guide" onClick={() => setIsMenuOpen(false)} className="group flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-[#1a2517] border border-[#354c29] text-[#a4b893] flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen size={24} />
            </div>
            <span className="font-serif text-3xl font-bold text-[#f4f0e6]">Care Guide</span>
            <span className="text-xs font-mono text-[#8a9980] tracking-widest uppercase">Maintenance</span>
          </Link>

          <a href="https://www.instagram.com/living_terrarium/" target="_blank" rel="noopener noreferrer" className="mt-8 px-6 py-3 rounded-full bg-[#eae4d5] text-[#172014] font-mono font-bold text-sm flex items-center gap-2 hover:bg-[#d6cdbc] transition-colors">
            <InstagramIcon /> Follow on Instagram
          </a>
        </nav>
      </motion.div>

      {/* 2. AMBIENT LEAF FIELD */}
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
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between px-4 pt-24 pb-6 overflow-hidden">
          
          {/* TOP ARCHITECTURAL SECTION FILLER */}
          <div className="w-full max-w-md mx-auto text-center z-20">
            
            {/* Slide 1 Crest (Visible in Hero) */}
            <motion.div style={{ opacity: heroTextOpacity, y: heroTextY }} className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <span className="h-[1px] w-8 bg-[#354c29]/40" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#354c29] font-bold">
                  Bespoke Ecosystems
                </span>
                <span className="h-[1px] w-8 bg-[#354c29]/40" />
              </div>
              <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-[#172014] leading-[1.05]">
                Find Peace <br />
                <span className="italic font-normal text-[#354c29]">in a jar.</span>
              </h1>
            </motion.div>

            {/* REAL-TIME PHASE PILL TRACKER (Appears as you scroll into biomes) */}
            <motion.div style={{ opacity: trackerOpacity }} className="flex items-center justify-center gap-1.5 sm:gap-2">
              <motion.span style={{ opacity: phase1Active }} className="text-[9px] sm:text-[10px] font-mono px-3 py-1.5 rounded-full bg-[#eae3d2] border border-[#354c29]/40 text-[#172014] font-bold shadow-sm">
                01 Terrarium
              </motion.span>
              <span className="text-[#354c29]/30 text-xs hidden sm:block">•</span>
              <motion.span style={{ opacity: phase2Active }} className="text-[9px] sm:text-[10px] font-mono px-3 py-1.5 rounded-full bg-[#eae3d2] border border-[#354c29]/40 text-[#172014] font-bold shadow-sm">
                02 Paludarium
              </motion.span>
              <span className="text-[#354c29]/30 text-xs hidden sm:block">•</span>
              <motion.span style={{ opacity: phase3Active }} className="text-[9px] sm:text-[10px] font-mono px-3 py-1.5 rounded-full bg-[#eae3d2] border border-[#354c29]/40 text-[#172014] font-bold shadow-sm">
                03 Aquarium
              </motion.span>
            </motion.div>
          </div>

          {/* CENTER STAGE: THE JAR DIMINISHES & MORPHS */}
          <div className="relative w-full max-w-sm h-[40vh] sm:h-[45vh] flex items-center justify-center my-auto z-20">
            
            {/* Glowing background for the Hero Jar */}
            <motion.div style={{ opacity: heroTextOpacity }} className="absolute w-[120%] h-[120%] bg-[#495b3b]/10 rounded-full blur-[60px] -z-10" />

            {/* Grooved Outer Architectural Pedestal */}
            <motion.div
              style={{ scale: jarScale }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-[2.5rem] p-3 bg-[#eae3d2] border-2 border-[#354c29]/35 shadow-[0_30px_60px_rgba(23,32,20,0.22)] flex items-center justify-center"
            >
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#0a1009] relative flex items-center justify-center shadow-[inset_0_0_0_2px_#1c2916]">
                
                {/* Image 0: Hero Jar */}
                <motion.img
                  style={{ opacity: heroJarOpacity }}
                  src="/hero-jar.png"
                  alt="Living Terrarium Hero"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1545241047-6083a3684587?w=700&auto=format&fit=crop&q=80"; }}
                  className="absolute inset-0 m-auto max-w-[95%] max-h-[95%] object-contain drop-shadow-2xl"
                />

                {/* Image 1: Terrarium (03.png) */}
                <motion.img style={{ opacity: terrariumOpacity }} src="/terrarium/03.png" alt="Terrarium Build" className="absolute inset-0 m-auto w-full h-full object-cover opacity-80" />

                {/* Image 2: Paludarium (03.png) */}
                <motion.img style={{ opacity: paludariumOpacity }} src="/paludarium/03.png" alt="Paludarium Build" className="absolute inset-0 m-auto w-full h-full object-cover opacity-80" />

                {/* Image 3: Aquarium (02.png) */}
                <motion.img style={{ opacity: aquariumOpacity }} src="/aquarium/02.png" alt="Aquarium Build" className="absolute inset-0 m-auto w-full h-full object-cover opacity-80" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#121910]/85 text-[9px] font-mono text-[#f4f0e6] border border-[#354c29]/60">
                  Living Biome
                </span>
              </div>
            </motion.div>

          </div>

          {/* BOTTOM CONSOLE: NARRATIVE & DOWNWARD ARROW */}
          <div className="w-full max-w-md mx-auto text-center z-20 pb-4 min-h-[160px] flex flex-col justify-center relative">
            
            {/* Hero Scroll Down Indicator on Slide 1 */}
            <motion.div style={{ opacity: heroTextOpacity }} className="flex flex-col items-center justify-center gap-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#354c29] font-bold bg-[#eae3d2] px-4 py-1.5 rounded-full border border-[#ded6c4]">
                Scroll down to explore
              </span>
              <motion.div 
                animate={{ y: [0, 8, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 rounded-full bg-[#172014] text-[#f4f0e6] flex items-center justify-center shadow-lg"
              >
                <ArrowDown size={20} />
              </motion.div>
            </motion.div>

            {/* Biome 1 Details: Terrarium */}
            <motion.div style={{ opacity: text1Opacity }} className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172014] mb-2">
                Enclosed Terrarium
              </h2>
              <p className="text-xs sm:text-sm text-[#4f4637] leading-relaxed max-w-xs mb-4">
                Self-sustaining moss microclimates flourishing in sealed glass chambers with zero daily upkeep.
              </p>
              <Link href="/catalog#terrariums" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#172014] text-[#f4f0e6] text-xs font-mono font-bold hover:bg-[#2b3a25] shadow-lg transition-transform active:scale-95">
                View in Catalog
              </Link>
            </motion.div>

            {/* Biome 2 Details: Paludarium */}
            <motion.div style={{ opacity: text2Opacity }} className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172014] mb-2">
                Dual-Realm Paludarium
              </h2>
              <p className="text-xs sm:text-sm text-[#4f4637] leading-relaxed max-w-xs mb-4">
                Where living aquatic currents merge with emergent stone ledges and lush terrestrial ferns.
              </p>
              <Link href="/catalog#paludariums" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#172014] text-[#f4f0e6] text-xs font-mono font-bold hover:bg-[#2b3a25] shadow-lg transition-transform active:scale-95">
                View in Catalog
              </Link>
            </motion.div>

            {/* Biome 3 Details: Aquarium */}
            <motion.div style={{ opacity: text3Opacity }} className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172014] mb-2">
                Submerged Aquascape
              </h2>
              <p className="text-xs sm:text-sm text-[#4f4637] leading-relaxed max-w-xs mb-4">
                Japanese Iwagumi-inspired aquatic scapes carved from volcanic slate and aquatic stem plants.
              </p>
              <Link href="/catalog#aquariums" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#172014] text-[#f4f0e6] text-xs font-mono font-bold hover:bg-[#2b3a25] shadow-lg transition-transform active:scale-95">
                View in Catalog
              </Link>
            </motion.div>

          </div>

        </div>
      </div>

      {/* 4. FOOTER: COMMISSION & CONTACT */}
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