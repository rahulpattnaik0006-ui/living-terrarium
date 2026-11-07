"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, Star, Sparkles, Heart, Quote } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "918340623262";

// Floating beige geometry particles matching the catalog aesthetic
const floatingGeometries = [
  { top: "6%", left: "6%", type: "diamond", size: "w-3 h-3", delay: 0 },
  { top: "12%", left: "90%", type: "cross", size: "w-3.5 h-3.5", delay: 1.1 },
  { top: "24%", left: "14%", type: "ring", size: "w-4 h-4", delay: 2.3 },
  { top: "38%", left: "86%", type: "diamond", size: "w-3 h-3", delay: 0.8 },
  { top: "54%", left: "8%", type: "cross", size: "w-3.5 h-3.5", delay: 1.6 },
  { top: "68%", left: "92%", type: "ring", size: "w-4 h-4", delay: 2.1 },
  { top: "82%", left: "12%", type: "diamond", size: "w-3 h-3", delay: 0.4 },
  { top: "92%", left: "84%", type: "cross", size: "w-3.5 h-3.5", delay: 1.9 },
];

function FloatingParticle({ type, size }: { type: string; size: string }) {
  if (type === "diamond") {
    return <div className={`${size} rotate-45 border border-[#e8dfcf]/25 bg-[#e8dfcf]/10`} />;
  }
  if (type === "ring") {
    return <div className={`${size} rounded-full border border-[#e8dfcf]/25`} />;
  }
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

// 8 Verified Customer Reviews using your uploaded photos
const customerReviews = [
  {
    id: "REV-01",
    name: "Dr. S. K. Mukherjee",
    role: "Department Faculty",
    city: "Jamshedpur",
    file: "06",
    vessel: "Zen Buddha Sanctuary",
    tag: "Office Desk Sanctum",
    stars: 5,
    quote:
      "Having this living moss biosphere on my study desk brings an immediate sense of stillness. Four months in and the humidity balance inside remains pristine without opening.",
  },
  {
    id: "REV-02",
    name: "Rohan & Campus Team",
    role: "College Society Heads",
    city: "Jamshedpur",
    file: "02",
    vessel: "Spherical Moss Garden",
    tag: "Event Memento",
    stars: 5,
    quote:
      "We commissioned these handcrafted vessels for our institutional meet. The craftsmanship of the layered soil strata and live cushion moss impressed every single guest.",
  },
  {
    id: "REV-03",
    name: "Aman, Kunal & Sneha",
    role: "Collectors",
    city: "Kolkata",
    file: "03",
    vessel: "Water Bridge Vista",
    tag: "Handcrafted Gift",
    stars: 5,
    quote:
      "Transporting living glass ecosystems can be risky, but the packaging was rock-solid. Zero soil displacement during transit and the miniature stone bridge looks magical.",
  },
  {
    id: "REV-04",
    name: "Pooja, Tanu & Divya",
    role: "Plant Enthusiasts",
    city: "Ranchi",
    file: "04",
    vessel: "Companion Apothecaries",
    tag: "Living Room Accent",
    stars: 5,
    quote:
      "The miniature figurines combined with real living fern fronds make this look like a fairytale trapped in glass. It is now the favorite conversation starter in our room.",
  },
  {
    id: "REV-05",
    name: "Aditya & Friends",
    role: "Campus Batch Gift",
    city: "Ranchi",
    file: "05",
    vessel: "Stone Stairway Haven",
    tag: "Graduation Keepsake",
    stars: 5,
    quote:
      "Custom ordered with a stone path leading upward. The studio captured our exact specifications. The live moss requires almost zero effort to stay green.",
  },
  {
    id: "REV-06",
    name: "Ananya & Priya",
    role: "Nature Lovers",
    city: "Bengaluru",
    file: "07",
    vessel: "Lakeside Couple Biome",
    tag: "Custom Anniversary Gift",
    stars: 5,
    quote:
      "Commissioned for a 20th celebration. The natural slate staircase and lush pillow moss look breathtaking under warm ambient room lighting.",
  },
  {
    id: "REV-07",
    name: "Megha S.",
    role: "Software Designer",
    city: "Pune",
    file: "08",
    vessel: "Verdant Stroll Jar",
    tag: "Workstation Greenery",
    stars: 5,
    quote:
      "Working 10 hours in front of screens is exhausting. Looking over at this closed apothecary jar gives my eyes instant relief. Truly peace in a jar.",
  },
  {
    id: "REV-08",
    name: "Mrs. Sunita Verma",
    role: "Home Maker",
    city: "New Delhi",
    file: "Screenshot 2026-11-07 131306",
    vessel: "Ganesha Floral Sanctum",
    tag: "Sacred Festive Accent",
    stars: 5,
    quote:
      "The handcrafted idol surrounded by living moss beds arrived in flawless condition. A sacred, living piece of art that radiates positive energy.",
  },
];

export default function CustomerReviewsPage() {
  return (
    <div className="bg-[#121a11] text-[#f4f0e6] min-h-screen font-sans selection:bg-[#344828] selection:text-[#f4f0e6] relative overflow-hidden">
      
      {/* FLOATING BEIGE GEOMETRIC PARTICLES */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingGeometries.map((item, idx) => (
          <div key={idx} style={{ top: item.top, left: item.left }} className="absolute">
            <motion.div
              animate={{
                y: [0, -16, 0],
                x: [0, idx % 2 === 0 ? 8 : -8, 0],
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 7 + (idx % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
            >
              <FloatingParticle type={item.type} size={item.size} />
            </motion.div>
          </div>
        ))}
      </div>

      {/* TOP HEADER */}
      <header className="sticky top-0 z-40 bg-[#121a11]/90 backdrop-blur-md border-b border-[#283824] px-5 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-mono font-bold text-[#b2c8a2] hover:text-[#f4f0e6] transition-colors"
        >
          <ArrowLeft size={15} /> Back to Studio
        </Link>
        <span className="font-serif tracking-wider text-xs uppercase font-bold text-[#f4f0e6]">
          Collector Testimonials
        </span>
      </header>

      <main className="max-w-2xl mx-auto px-5 py-10 relative z-10">
        
        {/* TITLE & INTRO */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a1bb90] font-bold block mb-2">
            Verified Caretakers
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4f0e6]">
            Words From Our Collectors
          </h1>
          <p className="text-xs text-[#b8ad96] mt-3 max-w-md mx-auto leading-relaxed">
            Every terrarium is delivered fully assembled with live moss cultures. Here is how our living biospheres thrive in homes, university desks, and workspaces across India.
          </p>

          {/* METRIC STRIP */}
          <div className="grid grid-cols-3 gap-2 mt-6 p-3 rounded-2xl bg-[#182316] border border-[#2c3d25] text-center max-w-md mx-auto">
            <div>
              <span className="font-serif font-bold text-lg text-[#f4f0e6] block">100%</span>
              <span className="text-[9px] font-mono text-[#a1bb90] uppercase">Living Moss</span>
            </div>
            <div className="border-x border-[#2c3d25]">
              <span className="font-serif font-bold text-lg text-[#f4f0e6] block">Zero</span>
              <span className="text-[9px] font-mono text-[#a1bb90] uppercase">Transit Spills</span>
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-[#f4f0e6] block">5.0 ★</span>
              <span className="text-[9px] font-mono text-[#a1bb90] uppercase">Care Rating</span>
            </div>
          </div>
        </div>

        {/* REVIEWS GRID */}
        <div className="space-y-8">
          {customerReviews.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border-2 border-[#2c3d25] bg-[#162014]/90 backdrop-blur-md p-5 sm:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row gap-5 items-center sm:items-start"
            >
              {/* Photo Frame (supports any aspect ratio without distortion) */}
              <div className="relative w-36 h-48 sm:w-40 sm:h-52 bg-[#0c120c] rounded-2xl border-2 border-[#384c30] p-1.5 shrink-0 flex items-center justify-center shadow-[inset_0_0_0_3px_#121a11,0_8px_20px_rgba(0,0,0,0.6)]">
                <img
                  src={`/reviews/${rev.file}.jpg`}
                  alt={rev.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.endsWith(".png")) {
                      target.src = `/reviews/${rev.file}.png`;
                    } else {
                      target.src =
                        "https://images.unsplash.com/photo-1545241047-6083a3684587?w=500&auto=format&fit=crop&q=80";
                    }
                  }}
                  className="w-full h-full object-cover rounded-xl"
                />
                <span className="absolute bottom-3 left-3 right-3 py-0.5 rounded-md bg-[#121a11]/90 border border-[#384c30] text-[9px] font-mono text-[#a1bb90] text-center">
                  Verified Photo
                </span>
              </div>

              {/* Review Text Content */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-between mb-2">
                  <div className="flex items-center gap-1 text-[#eab308]">
                    {[...Array(rev.stars)].map((_, idx) => (
                      <Star key={idx} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1e2a1b] text-[#a1bb90] border border-[#2d3f27] hidden sm:inline-block">
                    {rev.tag}
                  </span>
                </div>

                <div className="relative my-3">
                  <Quote size={20} className="text-[#384c30]/60 mb-1 inline-block -scale-x-100" />
                  <p className="text-xs sm:text-sm text-[#ded5c3] leading-relaxed italic">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="border-t border-[#263520] pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] font-mono gap-1">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#f4f0e6]">
                      {rev.name}
                    </h3>
                    <span className="text-[#8e8574] text-[10px]">
                      {rev.role} • {rev.city}
                    </span>
                  </div>
                  <span className="text-[#a1bb90] font-semibold text-[10px]">
                    Setup: {rev.vessel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM COMMUNITY CALLOUT */}
        <div className="mt-16 p-6 rounded-3xl bg-gradient-to-b from-[#1b2718] to-[#141d12] border-2 border-[#2f4227] text-center space-y-3 shadow-xl">
          <div className="w-10 h-10 rounded-full bg-[#24331f] border border-[#3c5332] text-[#a1bb90] flex items-center justify-center mx-auto">
            <Heart size={18} fill="currentColor" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f4f0e6]">
            Caring For a Living Terrarium?
          </h3>
          <p className="text-xs text-[#b8ad96] max-w-sm mx-auto leading-relaxed">
            Send us a snapshot of your jar on your desk, room, or workspace on WhatsApp to be featured in our permanent collector archive.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20would%20like%20to%20share%20a%20photo%20of%20my%20Living%20Terrarium%20setup.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f4f0e6] text-[#121a11] hover:bg-[#e4ddcd] text-xs font-mono font-bold transition-all active:scale-95 shadow-md mt-2"
          >
            <MessageCircle size={15} />
            Share Your Jar on WhatsApp
          </a>
        </div>

      </main>
    </div>
  );
}