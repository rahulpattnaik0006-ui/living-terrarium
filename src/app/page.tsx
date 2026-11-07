"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Star, Sparkles } from "lucide-react";
import CommissionModal from "./components/CommissionModal";

const WHATSAPP_NUMBER = "918340623262";

// Built-in inline SVG icon for Instagram
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
  const heroRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroJarY = useTransform(heroScroll, [0, 1], ["0%", "28%"]);
  const heroJarScale = useTransform(heroScroll, [0, 1], [1, 1.15]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "-45%"]);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  const { scrollYProgress: reviewScroll } = useScroll({
    target: reviewsRef,
    offset: ["start end", "end start"],
  });

  const card1Y = useTransform(reviewScroll, [0, 1], [30, -30]);
  const card2Y = useTransform(reviewScroll, [0, 1], [60, -60]);
  const card3Y = useTransform(reviewScroll, [0, 1], [20, -20]);

  return (
    <div className="bg-[#050806] text-[#f2f7f3] min-h-screen font-sans selection:bg-[#22c55e] selection:text-black">
      
      {/* Scrollable Body (Curtain Layer) */}
      <div className="relative z-10 bg-[#070b08] shadow-[0_30px_70px_rgba(0,0,0,0.95)] mb-[400px] sm:mb-[360px] pb-16 border-b border-[#18261b]">
        
        {/* Sticky Minimal Navbar */}
        <header className="sticky top-0 z-40 bg-[#070b08]/80 backdrop-blur-md border-b border-[#18261b]/60 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-[#4d7c55]/40 bg-[#101712] overflow-hidden flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Living Terrarium"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1545241047-6083a3684587?w=120&auto=format&fit=crop&q=80";
                }}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif tracking-wider text-xs uppercase font-bold text-slate-200">
              Living Terrarium
            </span>
          </div>

          <a
            href="https://www.instagram.com/living_terrarium/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-full bg-[#111a13] border border-[#233526] text-[#86efac] active:scale-95 transition-transform"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@living_terrarium</span>
          </a>
        </header>

        {/* SECTION 1: HERO PARALLAX */}
        <section ref={heroRef} className="relative h-[85vh] sm:h-screen flex flex-col items-center justify-center overflow-hidden px-4">
          <div className="absolute w-72 h-72 rounded-full bg-[#22c55e]/10 blur-[100px] pointer-events-none -top-10" />

          <motion.div
            style={{ y: heroTextY, opacity: heroTextOpacity }}
            className="absolute z-0 text-center select-none pointer-events-none px-4"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#86efac] block mb-2">
              Bespoke Miniature Ecosystems
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Find Peace <br />
              <span className="italic font-normal text-[#86efac]/80">in a jar.</span>
            </h1>
          </motion.div>

          <motion.div
            style={{ y: heroJarY, scale: heroJarScale }}
            className="relative z-10 w-64 h-80 sm:w-80 sm:h-96 mt-20 flex items-center justify-center pointer-events-none"
          >
            <img
              src="/hero-jar.png"
              alt="Living Terrarium"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80";
              }}
              className="w-full h-full object-contain drop-shadow-[0_25px_45px_rgba(34,197,94,0.22)]"
            />
          </motion.div>

          <div className="absolute bottom-6 z-20 flex flex-col items-center gap-1.5 opacity-60">
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Scroll to Explore</span>
            <div className="w-1 h-5 rounded-full bg-[#22c55e]/50 animate-pulse" />
          </div>
        </section>

        {/* SECTION 2: CATALOG */}
        <section className="px-5 py-12 max-w-xl mx-auto">
          <div className="flex items-end justify-between mb-4 border-b border-[#1b261d] pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#86efac] block mb-1">
                Handcrafted Inventory
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">The Living Catalog</h2>
            </div>
            <span className="text-[11px] font-mono text-slate-500">4 Flagship Vessels</span>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="w-full mb-6 py-3 rounded-2xl bg-gradient-to-r from-[#142318] to-[#1c3322] border border-[#2d4d34] text-[#86efac] font-mono text-xs font-bold flex items-center justify-center gap-2 active:scale-98 transition-transform cursor-pointer shadow-lg shadow-black/40"
          >
            <Sparkles size={15} />
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
                className="group rounded-3xl border border-[#1d2a1f] bg-[#0c130e]/80 backdrop-blur-md p-4 transition-all duration-300 hover:border-[#38533c] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              >
                <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-[#213123] mb-4 bg-[#080d09]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#86efac] border border-[#2a3d2e]">
                    {item.type}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#86efac] transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-mono text-base font-bold text-[#86efac]">{item.price}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.flora.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#131d15] text-slate-300 border border-[#203023]"
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
                  className="w-full py-2.5 rounded-xl bg-[#162319] hover:bg-[#22c55e] hover:text-black border border-[#273a2b] text-slate-200 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
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
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#86efac] block mb-1">
              Verified Collectors
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">Words From Caretakers</h2>
          </div>

          <div className="space-y-4">
            <motion.div
              style={{ y: card1Y }}
              className="p-5 rounded-2xl border border-[#223526] bg-[#0d140f]/90 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(reviews[0].stars)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">"{reviews[0].comment}"</p>
              <div className="flex items-center justify-between text-[11px] font-mono border-t border-[#1a291d] pt-2.5 text-slate-400">
                <span className="text-white font-bold">{reviews[0].name} ({reviews[0].city})</span>
                <span className="text-[#86efac]">{reviews[0].build}</span>
              </div>
            </motion.div>

            <motion.div
              style={{ y: card2Y }}
              className="p-5 rounded-2xl border border-[#283e2d] bg-[#101913]/90 backdrop-blur-md shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(reviews[1].stars)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-slate-200 leading-relaxed mb-3">"{reviews[1].comment}"</p>
              <div className="flex items-center justify-between text-[11px] font-mono border-t border-[#1a291d] pt-2.5 text-slate-400">
                <span className="text-white font-bold">{reviews[1].name} ({reviews[1].city})</span>
                <span className="text-[#86efac]">{reviews[1].build}</span>
              </div>
            </motion.div>

            <motion.div
              style={{ y: card3Y }}
              className="p-5 rounded-2xl border border-[#223526] bg-[#0d140f]/90 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(reviews[2].stars)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">"{reviews[2].comment}"</p>
              <div className="flex items-center justify-between text-[11px] font-mono border-t border-[#1a291d] pt-2.5 text-slate-400">
                <span className="text-white font-bold">{reviews[2].name} ({reviews[2].city})</span>
                <span className="text-[#86efac]">{reviews[2].build}</span>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      {/* SECTION 4: CONTACT (Curtain Reveal Footer) */}
      <footer className="fixed bottom-0 left-0 right-0 z-0 h-[400px] sm:h-[360px] bg-gradient-to-b from-[#09110b] to-[#040605] px-6 py-8 flex flex-col justify-between max-w-xl mx-auto">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#86efac] block mb-1">
            Start Your Commission
          </span>
          <h2 className="font-serif text-3xl font-bold text-white leading-tight">
            Bring Nature <br />
            <span className="italic font-normal text-[#86efac]">Into Your Space.</span>
          </h2>
          <p className="text-xs text-slate-400 mt-2 max-w-xs leading-relaxed">
            Custom vessel sizes, customized figurines, and corporate bulk gifting available.
          </p>
        </div>

        <div className="space-y-2.5 my-auto">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20would%20like%20to%20discuss%20a%20custom%20terrarium%20order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-2xl bg-[#22c55e] text-black font-mono font-bold text-xs flex items-center justify-between shadow-lg shadow-green-950/50 active:scale-98 transition-transform cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <MessageCircle size={16} /> Direct WhatsApp Inquiry
            </span>
            <span>→</span>
          </a>

          <a
            href="https://www.instagram.com/living_terrarium/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-2xl bg-[#111c13] border border-[#243827] text-slate-200 font-mono text-xs flex items-center justify-between active:scale-98 transition-transform cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <InstagramIcon className="w-4 h-4 text-[#86efac]" /> Follow @living_terrarium
            </span>
            <span className="text-slate-500">↗</span>
          </a>
        </div>

        <div className="flex items-center justify-between border-t border-[#19261b] pt-4 text-[10px] font-mono text-slate-500">
          <span>Living Terrarium Studio</span>
          <span>Find peace in a jar</span>
        </div>
      </footer>

      {/* Commission Configurator Modal */}
      <CommissionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

    </div>
  );
}