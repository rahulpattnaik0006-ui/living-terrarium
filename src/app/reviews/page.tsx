"use client";

import { motion } from "framer-motion";
import { MessageCircle, Quote, Heart } from "lucide-react";
import Navbar from "@/app/components/Navbar";

const WHATSAPP_NUMBER = "918340623262";

const floatingGeometries = [
  { top: "6%", left: "6%", type: "diamond", size: "w-3 h-3", delay: 0 },
  { top: "12%", left: "90%", type: "cross", size: "w-3.5 h-3.5", delay: 1.1 },
  { top: "24%", left: "14%", type: "ring", size: "w-4 h-4", delay: 2.3 },
  { top: "38%", left: "86%", type: "diamond", size: "w-3 h-3", delay: 0.8 },
  { top: "54%", left: "8%", type: "cross", size: "w-3.5 h-3.5", delay: 1.6 },
  { top: "68%", left: "92%", type: "ring", size: "w-4 h-4", delay: 2.1 },
  { top: "82%", left: "12%", type: "diamond", size: "w-3 h-3", delay: 0.4 },
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

const quotesOnly = [
  {
    id: "Q-01",
    file: "06",
    quote: "Having this living moss biosphere on my study desk brings an immediate sense of stillness. Months in and the humidity balance inside remains pristine without opening.",
  },
  {
    id: "Q-02",
    file: "02",
    quote: "The craftsmanship of the layered soil strata and live cushion moss impressed everyone. A truly living piece of art.",
  },
  {
    id: "Q-03",
    file: "03",
    quote: "Zero soil displacement during transit. The packaging was rock-solid and the miniature stone bridge looks magical on our shelf.",
  },
  {
    id: "Q-04",
    file: "04",
    quote: "The miniature figurines combined with real living ferns look like a fairytale trapped in glass. Our favorite centerpiece.",
  },
  {
    id: "Q-05",
    file: "05",
    quote: "Custom ordered with a natural stone trail. The studio captured our exact vision and it requires practically zero effort to stay green.",
  },
  {
    id: "Q-06",
    file: "07",
    quote: "The natural slate staircase and lush pillow moss look breathtaking under ambient room lighting. We are completely in love with it.",
  },
  {
    id: "Q-07",
    file: "08",
    quote: "Working long hours in front of screens is exhausting. Glancing over at this closed apothecary jar gives my eyes instant calm.",
  },
  {
    id: "Q-08",
    file: "09",
    quote: "Surrounded by living moss beds and delivered in flawless condition. It radiates an incredibly peaceful, grounding energy.",
  },
];

export default function CustomerReviewsPage() {
  const handleReviewImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>, file: string) => {
    const target = e.currentTarget;
    const currentSrc = target.src;
    if (currentSrc.endsWith(".png")) {
      target.src = `/reviews/${file}.jpg`;
    } else {
      target.src = "https://images.unsplash.com/photo-1545241047-6083a3684587?w=500&auto=format&fit=crop&q=80";
    }
  };

  return (
    <div className="bg-[#121a11] text-[#f4f0e6] min-h-screen font-sans selection:bg-[#344828] selection:text-[#f4f0e6] relative overflow-hidden">
      
      {/* 1. UNIVERSAL NAVBAR */}
      <Navbar currentPage="reviews" />

      {/* 2. FLOATING BEIGE GEOMETRY */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingGeometries.map((item, idx) => (
          <div key={idx} style={{ top: item.top, left: item.left }} className="absolute">
            <motion.div
              animate={{ y: [0, -16, 0], x: [0, idx % 2 === 0 ? 8 : -8, 0], rotate: [0, 45, 0] }}
              transition={{ duration: 7 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            >
              <FloatingParticle type={item.type} size={item.size} />
            </motion.div>
          </div>
        ))}
      </div>

      <main className="max-w-xl mx-auto px-5 pt-24 pb-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a1bb90] font-bold block mb-1.5">
            Living Proof
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4f0e6]">
            Collector Experiences
          </h1>
          <p className="text-xs text-[#b8ad96] mt-2 max-w-sm mx-auto leading-relaxed">
            Real caretaker setups photographed inside homes and desks across India.
          </p>
        </motion.div>

        {/* REVIEWS LIST: REFINED BORDER + SCROLL MOTION */}
        <div className="space-y-8">
          {quotesOnly.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl border-2 border-[#33462b] ring-1 ring-[#ded6c4]/20 bg-gradient-to-b from-[#182316] to-[#121910] p-4 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.55)] flex flex-col sm:flex-row gap-4 items-center"
            >
              {/* Photo Frame */}
              <div className="relative w-36 h-48 sm:w-40 sm:h-52 bg-[#0c120c] rounded-2xl border-2 border-[#3d5134] ring-1 ring-[#ded6c4]/15 p-1.5 shrink-0 flex items-center justify-center shadow-[inset_0_0_0_3px_#121a11]">
                <img
                  src={`/reviews/${rev.file}.png`}
                  alt="Customer Terrarium"
                  onError={(e) => handleReviewImgError(e, rev.file)}
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl"
                />
              </div>

              {/* Quote Content */}
              <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
                <Quote size={20} className="text-[#a1bb90]/60 mb-2 mx-auto sm:mx-0 -scale-x-100" />
                <p className="font-serif italic text-sm sm:text-base text-[#f4f0e6] leading-relaxed">
                  "{rev.quote}"
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#263520] flex items-center justify-between text-[10px] font-mono text-[#a1bb90]">
                  <span>Verified Living Terrarium Setup</span>
                  <span>100% Closed Biome</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM PROMPT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-14 p-6 rounded-3xl bg-[#182316] border border-[#2f4227] ring-1 ring-[#ded6c4]/15 text-center space-y-2.5"
        >
          <Heart size={18} className="text-[#a1bb90] mx-auto fill-current" />
          <h3 className="font-serif text-lg font-bold text-[#f4f0e6]">Have a Living Terrarium?</h3>
          <p className="text-xs text-[#b8ad96] max-w-xs mx-auto">
            Send us a photo of your jar thriving in your space to be featured in our permanent collection.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20would%20like%20to%20share%20a%20photo%20of%20my%20Living%20Terrarium.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#f4f0e6] text-[#121a11] text-xs font-mono font-bold mt-2 shadow-md hover:bg-[#eae3d2]"
          >
            <MessageCircle size={14} /> Send Photo via WhatsApp
          </a>
        </motion.div>

      </main>
    </div>
  );
}
