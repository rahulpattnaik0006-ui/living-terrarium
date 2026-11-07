"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
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

// Hand-drawn spiral arrow pointing to more content
function SpiralArrowMore() {
  return (
    <div className="flex flex-col items-center gap-1.5 text-[#544c3d]">
      <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#4d613e] font-semibold">
        Scroll to discover more
      </span>
      <svg
        width="34"
        height="52"
        viewBox="0 0 40 65"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#4d613e] animate-bounce"
      >
        <path d="M20 4 C34 4 36 16 22 17 C11 18 9 32 23 32 C35 32 35 46 20 54" />
        <path d="M14 47 L20 55 L26 47" />
      </svg>
    </div>
  );
}

// Delicate miniature leaf skeleton
function MiniLeafSkeleton({ className = "w-5 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M50 152 Q 49 80 50 8" strokeWidth="1.5" />
      <path
        d="M50 8 C 18 38 8 92 50 152 C 92 92 82 38 50 8 Z"
        strokeWidth="0.9"
        strokeDasharray="3 2"
      />
      <path d="M50 134 Q 34 122 18 124" />
      <path d="M50 114 Q 28 98 12 98" />
      <path d="M50 94 Q 26 78 14 74" />
      <path d="M50 74 Q 28 58 20 52" />
      <path d="M50 54 Q 32 40 28 34" />
      <path d="M50 34 Q 40 24 38 20" />
      <path d="M50 134 Q 66 122 82 124" />
      <path d="M50 114 Q 72 98 88 98" />
      <path d="M50 94 Q 74 78 86 74" />
      <path d="M50 74 Q 72 58 80 52" />
      <path d="M50 54 Q 68 40 72 34" />
      <path d="M50 34 Q 60 24 62 20" />
    </svg>
  );
}

// Scattered field of tiny leaves
const ambientLeaves = [
  { top: "8%", left: "6%", size: "w-5 h-8", rotate: -25, delay: 0.2, duration: 6 },
  { top: "12%", left: "84%", size: "w-6 h-9", rotate: 32, delay: 1.1, duration: 7.5 },
  { top: "18%", left: "20%", size: "w-4 h-6", rotate: 48, delay: 1.9, duration: 5.8 },
  { top: "22%", left: "10%", size: "w-5 h-7", rotate: 15, delay: 2.3, duration: 5.5 },
  { top: "25%", left: "74%", size: "w-5 h-8", rotate: -35, delay: 0.4, duration: 7.0 },
  { top: "29%", left: "92%", size: "w-4 h-6", rotate: -40, delay: 0.8, duration: 8 },
  { top: "36%", left: "5%", size: "w-6 h-10", rotate: 42, delay: 1.7, duration: 6.8 },
  { top: "42%", left: "88%", size: "w-4 h-6", rotate: -15, delay: 3.1, duration: 5.2 },
  { top: "48%", left: "12%", size: "w-5 h-8", rotate: 22, delay: 0.5, duration: 7.2 },
  { top: "54%", left: "82%", size: "w-6 h-9", rotate: -28, delay: 2.0, duration: 6.4 },
  { top: "62%", left: "7%", size: "w-4 h-6", rotate: -12, delay: 1.4, duration: 8.5 },
  { top: "68%", left: "91%", size: "w-5 h-8", rotate: 35, delay: 2.8, duration: 5.9 },
  { top: "72%", left: "24%", size: "w-5 h-7", rotate: 12, delay: 2.5, duration: 6.5 },
  { top: "76%", left: "14%", size: "w-6 h-9", rotate: -18, delay: 0.9, duration: 7.8 },
  { top: "80%", left: "76%", size: "w-4 h-6", rotate: -44, delay: 1.2, duration: 8.0 },
  { top: "84%", left: "86%", size: "w-5 h-7", rotate: 26, delay: 3.4, duration: 6.1 },
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
  const heroTrackRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroTrackRef,
    offset: ["start start", "end end"],
  });

  // Main title fades early on scroll
  const titleOpacity = useTransform(heroProgress, [0, 0.05], [1, 0]);
  const scrollHintOpacity = useTransform(heroProgress, [0, 0.08], [1, 0]);

  // Jar stays centered, slightly compresses and moves upward to make space for topics
  const jarScale = useTransform(heroProgress, [0, 0.15], [1.1, 0.85]);
  const jarY = useTransform(heroProgress, [0, 0.15], ["10%", "-15%"]);

  // Sequential topics revealed below the jar
  const topic1Opacity = useTransform(heroProgress, [0.15, 0.25, 0.35, 0.40], [0, 1, 1, 0]);
  const topic1Y = useTransform(heroProgress, [0.15, 0.25, 0.35, 0.40], ["30px", "0px", "0px", "-30px"]);

  const topic2Opacity = useTransform(heroProgress, [0.45, 0.55, 0.65, 0.70], [0, 1, 1, 0]);
  const topic2Y = useTransform(heroProgress, [0.45, 0.55, 0.65, 0.70], ["30px", "0px", "0px", "-30px"]);

  const topic3Opacity = useTransform(heroProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const topic3Y = useTransform(heroProgress, [0.75, 0.85, 0.95, 1], ["30px", "0px", "0px", "-30px"]);

  // Reviews section scroll parallax
  const { scrollYProgress: reviewScroll } = useScroll({
    target: reviewsRef,
    offset: ["start end", "end start"],
  });
  const card1Y = useTransform(reviewScroll, [0, 1], [30, -30]);
  const card2Y = useTransform(reviewScroll, [0, 1], [60, -60]);
  const card3Y = useTransform(reviewScroll, [0, 1], [20, -20]);

  return (
    <div className="bg-[#172014] text-[#1c2517] min-h-screen font-sans selection:bg-[#3a4b30] selection:text-[#f5f2e9]">
      
      {/* Scrollable Beige Curtain Layer */}
      <div className="relative z-10 bg-[#f4f0e6] shadow-[0_30px_70px_rgba(20,28,18,0.22)] mb-[400px] sm:mb-[360px] pb-16 border-b border-[#ded6c4]">
        
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-40 bg-[#f4f0e6]/95 backdrop-blur-md border-b border-[#ded6c4] px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-[#c8bea9] bg-[#eae3d2] overflow-hidden flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Living Terrarium"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1545241047-6083a3684587?w=120&auto=format&fit=crop&q=80"; }}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif tracking-wider text-xs uppercase font-bold text-[#172014]">
              Living Terrarium
            </span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            <Link href="/catalog" className="text-[11px] font-mono px-2.5 py-1.5 rounded-lg text-[#32432b] hover:bg-[#eae3d2] transition-colors flex items-center gap-1 font-semibold">
              <Layers size={13} /> <span className="hidden sm:inline">Catalog</span>
            </Link>
            <Link href="/care-guide" className="text-[11px] font-mono px-2.5 py-1.5 rounded-lg text-[#32432b] hover:bg-[#eae3d2] transition-colors flex items-center gap-1 font-semibold">
              <BookOpen size={13} /> <span className="hidden sm:inline">Care Guide</span>
            </Link>
            <a href="https://www.instagram.com/living_terrarium/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-[#eae4d5] border border-[#d6cdbc] text-[#2c3a25] hover:bg-[#ded6c4] active:scale-95 transition-all ml-1">
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          </nav>
        </header>

        {/* SECTION 1: STORYTELLING HERO WITH DENSE AMBIENT SKELETON LEAVES */}
        <section ref={heroTrackRef} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4">
            
            <div className="absolute w-80 h-80 rounded-full bg-[#495b3b]/12 blur-[120px] pointer-events-none -top-10" />

            {/* FIELD OF TINY FLOATING LEAF SKELETONS */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              {ambientLeaves.map((leaf, index) => (
                <div
                  key={index}
                  style={{ top: leaf.top, left: leaf.left }}
                  className="absolute"
                >
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      x: [0, index % 2 === 0 ? 6 : -6, 0],
                      rotate: [leaf.rotate, leaf.rotate + (index % 2 === 0 ? 8 : -8), leaf.rotate],
                    }}
                    transition={{
                      duration: leaf.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: leaf.delay,
                    }}
                    className="text-[#3c4f2e]/20"
                  >
                    <MiniLeafSkeleton className={leaf.size} />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Main Title: Fades out immediately on scroll */}
            <motion.div
              style={{ opacity: titleOpacity }}
              className="absolute top-[12%] sm:top-[15%] z-10 text-center px-4 w-full"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#4d613e] font-semibold block mb-2">
                Bespoke Miniature Ecosystems
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#172014] leading-[1.08]">
                Find Peace <br />
                <span className="italic font-normal text-[#4d613e]">in a jar.</span>
              </h1>
            </motion.div>

            {/* The Jar: Center staged */}
            <motion.div
              style={{ scale: jarScale, y: jarY }}
              className="relative z-10 w-72 h-80 sm:w-96 sm:h-[400px] flex items-center justify-center pointer-events-none mt-10"
            >
              <img
                src="/hero-jar.png"
                alt="Living Terrarium"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80"; }}
                className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(35,46,29,0.22)]"
              />
            </motion.div>

            {/* Topics: Centered below jar */}
            <div className="absolute top-[65%] sm:top-[70%] left-0 right-0 mx-auto px-6 w-full max-w-md text-center pointer-events-none z-10">
              
              <motion.div style={{ opacity: topic1Opacity, y: topic1Y, position: "absolute", left: 0, right: 0 }}>
                <span className="text-[10px] font-mono text-[#4d613e] mb-1 block">01 / ENCLOSED</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172014] mb-2">Terrarium</h2>
                <p className="text-xs sm:text-sm text-[#5c5445] leading-relaxed max-w-xs mx-auto">Self-sustaining glass ecosystems that thrive on neglect.</p>
              </motion.div>

              <motion.div style={{ opacity: topic2Opacity, y: topic2Y, position: "absolute", left: 0, right: 0 }}>
                <span className="text-[10px] font-mono text-[#4d613e] mb-1 block">02 / DUAL-REALM</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172014] mb-2">Paludarium</h2>
                <p className="text-xs sm:text-sm text-[#5c5445] leading-relaxed max-w-xs mx-auto">Waterfalls merging seamlessly with lush land moss.</p>
              </motion.div>

              <motion.div style={{ opacity: topic3Opacity, y: topic3Y, position: "absolute", left: 0, right: 0 }}>
                <span className="text-[10px] font-mono text-[#4d613e] mb-1 block">03 / SUBMERGED</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172014] mb-2">Aquarium</h2>
                <p className="text-xs sm:text-sm text-[#5c5445] leading-relaxed max-w-xs mx-auto">Aquascapes featuring raw Iwagumi stones and aquatic flora.</p>
              </motion.div>

            </div>

            {/* Spiral Scroll Guide: Scroll to discover more */}
            <motion.div
              style={{ opacity: scrollHintOpacity }} 
              className="absolute bottom-5 flex flex-col items-center z-10"
            >
              <SpiralArrowMore />
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: REVIEWS */}
        <section ref={reviewsRef} className="px-5 py-12 pt-24 max-w-xl mx-auto overflow-hidden border-t border-[#ded6c4]">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#4d613e] font-semibold block mb-1">
              Verified Collectors
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#172014]">Words From Caretakers</h2>
          </div>

          <div className="space-y-4">
            <motion.div style={{ y: card1Y }} className="p-5 rounded-2xl border border-[#ded6c4] bg-[#faf7f2] shadow-sm">
              <div className="flex items-center gap-1 text-[#9b7e3b] mb-2">
                {[...Array(reviews[0].stars)].map((_, i) => (<Star key={i} size={13} fill="currentColor" />))}
              </div>
              <p className="text-xs text-[#383329] leading-relaxed mb-3">"{reviews[0].comment}"</p>
              <div className="flex items-center justify-between text-[11px] font-mono border-t border-[#ded6c4] pt-2.5 text-[#6c6556]">
                <span className="text-[#172014] font-bold">{reviews[0].name} ({reviews[0].city})</span>
                <span className="text-[#435636] font-semibold">{reviews[0].build}</span>
              </div>
            </motion.div>

            <motion.div style={{ y: card2Y }} className="p-5 rounded-2xl border border-[#ded6c4] bg-[#faf7f2] shadow-sm">
              <div className="flex items-center gap-1 text-[#9b7e3b] mb-2">
                {[...Array(reviews[1].stars)].map((_, i) => (<Star key={i} size={13} fill="currentColor" />))}
              </div>
              <p className="text-xs text-[#383329] leading-relaxed mb-3">"{reviews[1].comment}"</p>
              <div className="flex items-center justify-between text-[11px] font-mono border-t border-[#ded6c4] pt-2.5 text-[#6c6556]">
                <span className="text-[#172014] font-bold">{reviews[1].name} ({reviews[1].city})</span>
                <span className="text-[#435636] font-semibold">{reviews[1].build}</span>
              </div>
            </motion.div>

            <motion.div style={{ y: card3Y }} className="p-5 rounded-2xl border border-[#ded6c4] bg-[#faf7f2] shadow-sm">
              <div className="flex items-center gap-1 text-[#9b7e3b] mb-2">
                {[...Array(reviews[2].stars)].map((_, i) => (<Star key={i} size={13} fill="currentColor" />))}
              </div>
              <p className="text-xs text-[#383329] leading-relaxed mb-3">"{reviews[2].comment}"</p>
              <div className="flex items-center justify-between text-[11px] font-mono border-t border-[#ded6c4] pt-2.5 text-[#6c6556]">
                <span className="text-[#172014] font-bold">{reviews[2].name} ({reviews[2].city})</span>
                <span className="text-[#435636] font-semibold">{reviews[2].build}</span>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      {/* SECTION 3: DARK OLIVE CURTAIN FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 z-0 h-[400px] sm:h-[360px] bg-gradient-to-b from-[#1c2618] to-[#12190f] text-[#f4f0e6] px-6 py-8 flex flex-col justify-between max-w-xl mx-auto">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#cfc5b0] block mb-1">Start Your Commission</span>
          <h2 className="font-serif text-3xl font-bold text-[#f4f0e6] leading-tight">Bring Nature <br /><span className="italic font-normal text-[#cfc5b0]">Into Your Space.</span></h2>
          <p className="text-xs text-[#b8ad96] mt-2 max-w-xs leading-relaxed">Custom vessel sizes, customized figurines, and corporate bulk gifting available.</p>
        </div>

        <div className="space-y-2.5 my-auto">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20would%20like%20to%20discuss%20a%20custom%20terrarium%20order.`} target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 rounded-2xl bg-[#f4f0e6] text-[#172014] font-mono font-bold text-xs flex items-center justify-between shadow-lg shadow-black/30 hover:bg-[#eae3d2] active:scale-98 transition-transform cursor-pointer">
            <span className="flex items-center gap-2"><MessageCircle size={16} /> Direct WhatsApp Inquiry</span><span>→</span>
          </a>

          <div className="flex gap-2">
            <Link href="/catalog" className="flex-1 py-2.5 px-3 rounded-xl bg-[#283622] border border-[#3e5335] text-[#f4f0e6] font-mono text-xs flex items-center justify-center gap-1.5 hover:bg-[#32432a]">
              <Layers size={13} /> Full Catalog
            </Link>
            <Link href="/care-guide" className="flex-1 py-2.5 px-3 rounded-xl bg-[#283622] border border-[#3e5335] text-[#f4f0e6] font-mono text-xs flex items-center justify-center gap-1.5 hover:bg-[#32432a]">
              <BookOpen size={13} /> Care Guide
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#2c3d25] pt-4 text-[10px] font-mono text-[#9f947f]">
          <span>Living Terrarium Studio</span><span>Find peace in a jar</span>
        </div>
      </footer>
    </div>
  );
}