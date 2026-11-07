"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Star, Sparkles, BookOpen, Layers } from "lucide-react";
import CommissionModal from "./components/CommissionModal";

const WHATSAPP_NUMBER = "918340623262";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const catalog = [
  {
    id: "LT-01",
    title: "Zen Buddha Sanctuary",
    type: "Enclosed Glass Bowl",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80",
    flora: ["Cushion Moss", "Fittonia", "River Slate"],
  },
  {
    id: "LT-02",
    title: "The Living Luminary",
    type: "Terrarium Table Lamp",
    price: "₹5,999",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&auto=format&fit=crop&q=80",
    flora: ["Java Moss", "Micro Ferns", "LED Habitat Light"],
  },
  {
    id: "LT-03",
    title: "Misty Falls Paludarium",
    type: "Dual Biome Waterfall",
    price: "₹6,800",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=80",
    flora: ["Anubias Nana", "Lava Rocks", "Water Feature"],
  },
  {
    id: "LT-04",
    title: "Miniature Path Jar",
    type: "Apothecary Vessel",
    price: "₹2,799",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=80",
    flora: ["Pillow Moss", "Couple Figurines", "Fine Sand Path"],
  },
];

const reviews = [
  {
    name: "Arjun S.",
    city: "Bengaluru",
    comment: "The terrarium lamp sits on my work desk. It has been 4 months and the moss is still thriving without any fuss.",
    build: "Living Luminary Lamp",
    stars: 5,
  },
  {
    name: "Pooja M.",
    city: "Mumbai",
    comment: "Gifted the Zen Buddha bowl to my mother. The stone staircase craftsmanship inside the jar is breathtaking.",
    build: "Zen Buddha Sanctuary",
    stars: 5,
  },
  {
    name: "Devendra K.",
    city: "Kolkata",
    comment: "The packaging for transit was rock-solid. Zero soil displacement during delivery. A truly living art piece.",
    build: "Misty Falls Paludarium",
    stars: 5,
  },
];

export default function LivingTerrariumSite() {
  const [modalOpen, setModalOpen] = useState(false);
  const heroTrackRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  // Pinned Hero Scroll Progress (tracks across 220vh track)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroTrackRef,
    offset: ["start start", "end end"],
  });

  // Jar: Starts prominent (1.1x), diminishes down to 0.45x, and fades out cleanly
  const jarScale = useTransform(heroProgress, [0, 0.7], [1.1, 0.45]);
  const jarOpacity = useTransform(heroProgress, [0.4, 0.75], [1, 0]);
  const jarY = useTransform(heroProgress, [0, 0.7], ["0%", "18%"]);

  // Typography: Starts modest (0.85x), scales UP into a large bold statement (1.45x)
  const textScale = useTransform(heroProgress, [0, 0.75], [0.85, 1.45]);
  const textOpacity = useTransform(heroProgress, [0, 0.15, 0.8, 0.95], [0.85, 1, 1, 0.1]);
  const textY = useTransform(heroProgress, [0, 0.75], ["0%", "-12%"]);

  // Scroll prompt indicator fades away on initial scroll
  const hintOpacity = useTransform(heroProgress, [0, 0.18], [1, 0]);

  // Review parallax
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
        
        {/* Sticky Multi-Page Navbar */}
        <header className="sticky top-0 z-40 bg-[#f4f0e6]/95 backdrop-blur-md border-b border-[#ded6c4] px-4 sm:px-6 py-3 flex items-center justify-between">
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

          {/* Page Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/catalog"
              className="text-[11px] font-mono px-2.5 py-1.5 rounded-lg text-[#32432b] hover:bg-[#eae3d2] transition-colors flex items-center gap-1 font-semibold"
            >
              <Layers size={13} />
              <span>Catalog</span>
            </Link>

            <Link
              href="/care-guide"
              className="text-[11px] font-mono px-2.5 py-1.5 rounded-lg text-[#32432b] hover:bg-[#eae3d2] transition-colors flex items-center gap-1 font-semibold"
            >
              <BookOpen size={13} />
              <span>Care Guide</span>
            </Link>

            <a
              href="https://www.instagram.com/living_terrarium/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-1.5 rounded-full bg-[#eae4d5] border border-[#d6cdbc] text-[#2c3a25] hover:bg-[#ded6c4] active:scale-95 transition-all ml-1"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          </nav>
        </header>

        {/* SECTION 1: PINNED 3D HERO SCROLL */}
        <section ref={heroTrackRef} className="relative h-[220vh]">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4">
            
            <div className="absolute w-80 h-80 rounded-full bg-[#495b3b]/12 blur-[120px] pointer-events-none -top-10" />

            {/* Typography: Scales UP into focus without being covered */}
            <motion.div
              style={{ scale: textScale, opacity: textOpacity, y: textY }}
              className="z-10 text-center select-none max-w-lg mb-4"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#4d613e] font-semibold block mb-2">
                Bespoke Miniature Ecosystems
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#172014] leading-[1.08]">
                Find Peace <br />
                <span className="italic font-normal text-[#4d613e]">in a jar.</span>
              </h1>
            </motion.div>

            {/* Jar: Cleanly positioned below title; DIMINISHES as you scroll */}
            <motion.div
              style={{ scale: jarScale, opacity: jarOpacity, y: jarY }}
              className="z-20 w-60 h-72 sm:w-72 sm:h-84 flex items-center justify-center pointer-events-none"
            >
              <img
                src="/hero-jar.png"
                alt="Living Terrarium"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80";
                }}
                className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(35,46,29,0.22)]"
              />
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              style={{ opacity: hintOpacity }}
              className="absolute bottom-6 flex flex-col items-center gap-1.5"
            >
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#787163]">
                Scroll down to enter
              </span>
              <div className="w-1 h-5 rounded-full bg-[#394a2e]/60 animate-pulse" />
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: CATALOG REVEAL */}
        <section className="px-5 py-12 max-w-xl mx-auto">
          <div className="flex items-end justify-between mb-4 border-b border-[#ded6c4] pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#4d613e] font-semibold block mb-1">
                Handcrafted Inventory
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#172014]">The Living Catalog</h2>
            </div>
            <Link
              href="/catalog"
              className="text-[11px] font-mono text-[#4d613e] underline font-semibold hover:text-[#172014]"
            >
              View all →
            </Link>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="w-full mb-6 py-3 rounded-2xl bg-[#232f1e] hover:bg-[#32432b] text-[#f4f0e6] font-mono text-xs font-bold flex items-center justify-center gap-2 active:scale-98 transition-transform cursor-pointer shadow-md shadow-[#172014]/15"
          >
            <Sparkles size={15} className="text-[#d8cfbe]" />
            <span>Design a Custom Commission</span>
          </button>

          <div className="grid grid-cols-1 gap-6">
            {catalog.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-3xl border border-[#ded6c4] bg-[#faf7f2] p-4 transition-all duration-300 hover:border-[#b8ac95] hover:shadow-lg shadow-sm"
              >
                <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-[#ded6c4] mb-4 bg-[#eae3d2]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#172014]/80 backdrop-blur-md text-[10px] font-mono text-[#f4f0e6] border border-[#3b4b32]">
                    {item.type}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif font-bold text-lg text-[#172014] group-hover:text-[#384a2d] transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-mono text-base font-bold text-[#2d3d24]">{item.price}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.flora.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#eae3d2] text-[#2d3a26] border border-[#ded6c4]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20am%20interested%20in%20commissioning%20the%20${encodeURIComponent(
                    item.title
                  )}%20(${item.id})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#232f1e] hover:bg-[#34462c] text-[#f4f0e6] text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <MessageCircle size={14} />
                  Commission on WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: REVIEWS */}
        <section ref={reviewsRef} className="px-5 py-12 max-w-xl mx-auto overflow-hidden">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#4d613e] font-semibold block mb-1">
              Verified Collectors
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#172014]">Words From Caretakers</h2>
          </div>

          <div className="space-y-4">
            <motion.div
              style={{ y: card1Y }}
              className="p-5 rounded-2xl border border-[#ded6c4] bg-[#faf7f2] shadow-sm"
            >
              <div className="flex items-center gap-1 text-[#9b7e3b] mb-2">
                {[...Array(reviews[0].stars)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-[#383329] leading-relaxed mb-3">"{reviews[0].comment}"</p>
              <div className="flex items-center justify-between text-[11px] font-mono border-t border-[#ded6c4] pt-2.5 text-[#6c6556]">
                <span className="text-[#172014] font-bold">{reviews[0].name} ({reviews[0].city})</span>
                <span className="text-[#435636] font-semibold">{reviews[0].build}</span>
              </div>
            </motion.div>

            <motion.div
              style={{ y: card2Y }}
              className="p-5 rounded-2xl border border-[#ded6c4] bg-[#faf7f2] shadow-sm"
            >
              <div className="flex items-center gap-1 text-[#9b7e3b] mb-2">
                {[...Array(reviews[1].stars)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-[#383329] leading-relaxed mb-3">"{reviews[1].comment}"</p>
              <div className="flex items-center justify-between text-[11px] font-mono border-t border-[#ded6c4] pt-2.5 text-[#6c6556]">
                <span className="text-[#172014] font-bold">{reviews[1].name} ({reviews[1].city})</span>
                <span className="text-[#435636] font-semibold">{reviews[1].build}</span>
              </div>
            </motion.div>

            <motion.div
              style={{ y: card3Y }}
              className="p-5 rounded-2xl border border-[#ded6c4] bg-[#faf7f2] shadow-sm"
            >
              <div className="flex items-center gap-1 text-[#9b7e3b] mb-2">
                {[...Array(reviews[2].stars)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
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

      {/* SECTION 4: DARK OLIVE CURTAIN FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 z-0 h-[400px] sm:h-[360px] bg-gradient-to-b from-[#1c2618] to-[#12190f] text-[#f4f0e6] px-6 py-8 flex flex-col justify-between max-w-xl mx-auto">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#cfc5b0] block mb-1">
            Start Your Commission
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#f4f0e6] leading-tight">
            Bring Nature <br />
            <span className="italic font-normal text-[#cfc5b0]">Into Your Space.</span>
          </h2>
          <p className="text-xs text-[#b8ad96] mt-2 max-w-xs leading-relaxed">
            Custom vessel sizes, customized figurines, and corporate bulk gifting available.
          </p>
        </div>

        <div className="space-y-2.5 my-auto">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20would%20like%20to%20discuss%20a%20custom%20terrarium%20order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-2xl bg-[#f4f0e6] text-[#172014] font-mono font-bold text-xs flex items-center justify-between shadow-lg shadow-black/30 hover:bg-[#eae3d2] active:scale-98 transition-transform cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <MessageCircle size={16} /> Direct WhatsApp Inquiry
            </span>
            <span>→</span>
          </a>

          <div className="flex gap-2">
            <Link
              href="/catalog"
              className="flex-1 py-2.5 px-3 rounded-xl bg-[#283622] border border-[#3e5335] text-[#f4f0e6] font-mono text-xs flex items-center justify-center gap-1.5 hover:bg-[#32432a]"
            >
              <Layers size={13} /> Full Catalog
            </Link>
            <Link
              href="/care-guide"
              className="flex-1 py-2.5 px-3 rounded-xl bg-[#283622] border border-[#3e5335] text-[#f4f0e6] font-mono text-xs flex items-center justify-center gap-1.5 hover:bg-[#32432a]"
            >
              <BookOpen size={13} /> Care Guide
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#2c3d25] pt-4 text-[10px] font-mono text-[#9f947f]">
          <span>Living Terrarium Studio</span>
          <span>Find peace in a jar</span>
        </div>
      </footer>

      <CommissionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

    </div>
  );
}