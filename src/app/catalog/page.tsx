"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Navbar from "@/app/components/Navbar";

const WHATSAPP_NUMBER = "918340623262";

const floatingGeometries = [
  { top: "4%", left: "8%", type: "diamond", size: "w-3 h-3", delay: 0 },
  { top: "8%", left: "85%", type: "cross", size: "w-3.5 h-3.5", delay: 1.2 },
  { top: "14%", left: "18%", type: "ring", size: "w-4 h-4", delay: 2.1 },
  { top: "19%", left: "92%", type: "square", size: "w-2.5 h-2.5", delay: 0.5 },
  { top: "25%", left: "6%", type: "cross", size: "w-3 h-3", delay: 1.8 },
  { top: "31%", left: "88%", type: "diamond", size: "w-3.5 h-3.5", delay: 0.9 },
  { top: "37%", left: "14%", type: "ring", size: "w-4 h-4", delay: 2.4 },
  { top: "44%", left: "82%", type: "square", size: "w-2 h-2", delay: 1.5 },
  { top: "52%", left: "5%", type: "diamond", size: "w-3 h-3", delay: 0.3 },
  { top: "58%", left: "91%", type: "cross", size: "w-3.5 h-3.5", delay: 2.7 },
  { top: "65%", left: "12%", type: "ring", size: "w-4 h-4", delay: 1.1 },
  { top: "72%", left: "86%", type: "square", size: "w-3 h-3", delay: 0.7 },
  { top: "79%", left: "8%", type: "cross", size: "w-3 h-3", delay: 2.0 },
  { top: "86%", left: "90%", type: "diamond", size: "w-3.5 h-3.5", delay: 1.4 },
  { top: "93%", left: "15%", type: "ring", size: "w-4 h-4", delay: 0.6 },
];

function FloatingParticle({ type, size }: { type: string; size: string }) {
  if (type === "diamond") return <div className={`${size} rotate-45 border border-[#e8dfcf]/30 bg-[#e8dfcf]/10`} />;
  if (type === "ring") return <div className={`${size} rounded-full border border-[#e8dfcf]/30`} />;
  if (type === "cross") {
    return (
      <div className={`${size} relative flex items-center justify-center`}>
        <span className="absolute w-full h-[1px] bg-[#e8dfcf]/35" />
        <span className="absolute h-full w-[1px] bg-[#e8dfcf]/35" />
      </div>
    );
  }
  return <div className={`${size} border border-[#e8dfcf]/25 bg-[#e8dfcf]/10`} />;
}

const terrariumList = [
  { id: "T-01", title: "Vertical Archway Vivarium", file: "03", tags: ["Display Cabinet", "Live Moss", "Wood Arch"] },
  { id: "T-02", title: "Spherical Moss Garden", file: "05", tags: ["Glass Orb", "Fittonia", "Pebble Path"] },
  { id: "T-03", title: "Dual Spire Jars", file: "06", tags: ["Twin Vials", "Pillow Moss", "Lichen"] },
  { id: "T-04", title: "Slanted Couple Biome", file: "07", tags: ["Slanted Bowl", "Couple Figurine", "Sand Trail"] },
  { id: "T-05", title: "Boy & Girl Miniature Jar", file: "08", tags: ["Apothecary Jar", "Figurines", "Micro Flora"] },
  { id: "T-06", title: "Verdant Stroll Path", file: "09", tags: ["Sealed Vessel", "Couple Figurine", "Cushion Moss"] },
  { id: "T-07", title: "Zen Monk Sanctuary", file: "10", tags: ["Tall Glass", "Buddha Figurine", "Forest Moss"] },
  { id: "T-08", title: "Tall Stone Stairway", file: "11", tags: ["Staircase Drift", "Micro Ferns", "Slate"] },
  { id: "T-09", title: "Companion Apothecaries", file: "12", tags: ["Twin Jars", "Lava Rock", "Live Moss"] },
  { id: "T-10", title: "Ancient Staircase Globe", file: "13", tags: ["Slanted Globe", "Stone Steps", "Riverbed"] },
  { id: "T-11", title: "White Sand Waterfall", file: "14", tags: ["Rope-tied Vessel", "Sand Fall", "Live Moss"] },
  { id: "T-12", title: "Layered Soil Pillar", file: "15", tags: ["Clear Cylinder", "Soil Strata", "Fittonia"] },
  { id: "T-13", title: "Spiderwood Forest Bowl", file: "16", tags: ["Wide Bowl", "Twisted Hardscape", "Lush Carpet"] },
  { id: "T-14", title: "Woodland Canopy Jar", file: "17", tags: ["Cork Jar", "Driftwood", "Moss"] },
  { id: "T-15", title: "Terraced Bridge Sanctum", file: "T04", tags: ["Wide Orb", "Miniature Bridge", "Pebble Bed"] },
  { id: "T-16", title: "Rainforest Display Cabinet", file: "TERRARIUM01", tags: ["Large Tank", "Jungle Drift", "Canopy"] },
  { id: "T-17", title: "Ganesha Floral Sanctum", file: "TERRARIUM02", tags: ["Slanted Bowl", "Ganesha Idol", "Sacred Garden"] },
];

const paludariumList = [
  { id: "P-01", title: "Riparium Planted Tank", file: "03", tags: ["Submerged Flora", "Emergent Plants", "Living Water"] },
  { id: "P-02", title: "Bromeliad Glow Jar", file: "PAULADIUR02", tags: ["Atmospheric Jar", "Mini Bromeliad", "Grow Light"] },
  { id: "P-03", title: "Neon Mist Vivarium", file: "PAULDARIUM01", tags: ["LED Spectral Light", "Active Misting", "Jungle Flora"] },
];

const aquariumList = [
  { id: "A-01", title: "Planted Nano Aquarium", file: "02", tags: ["Fine Sand Base", "Lava Rock Hide", "Aquatic Stem Flora"] },
  { id: "A-02", title: "Zen Lotus Stone Basin", file: "A01", tags: ["Ceramic Basin", "Emergent Flora", "Stepping Stones"] },
];

export default function CatalogPage() {
  return (
    <div className="bg-[#121a11] text-[#f4f0e6] min-h-screen font-sans selection:bg-[#344828] selection:text-[#f4f0e6] relative overflow-hidden">
      
      {/* 1. UNIVERSAL NAVBAR */}
      <Navbar currentPage="catalog" />

      {/* 2. FLOATING GEOMETRY PARTICLES */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingGeometries.map((item, idx) => (
          <div key={idx} style={{ top: item.top, left: item.left }} className="absolute">
            <motion.div
              animate={{ y: [0, -18, 0], x: [0, idx % 2 === 0 ? 8 : -8, 0], rotate: [0, 45, 0] }}
              transition={{ duration: 7 + (idx % 4), repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            >
              <FloatingParticle type={item.type} size={item.size} />
            </motion.div>
          </div>
        ))}
      </div>

      {/* 3. SECTION QUICK PILLS */}
      <div className="sticky top-0 z-30 bg-[#152014]/90 backdrop-blur-md border-b border-[#243320] py-3 px-4 pt-16">
        <div className="max-w-xl mx-auto flex items-center justify-center gap-2 text-[11px] font-mono">
          <a href="#terrariums" className="px-3.5 py-1 rounded-full bg-[#202e1c] border border-[#3b5033] text-[#b2c8a2] hover:bg-[#2e4228] transition-colors">
            Terrariums (17)
          </a>
          <a href="#paludariums" className="px-3.5 py-1 rounded-full bg-[#202e1c] border border-[#3b5033] text-[#b2c8a2] hover:bg-[#2e4228] transition-colors">
            Paludariums (3)
          </a>
          <a href="#aquariums" className="px-3.5 py-1 rounded-full bg-[#202e1c] border border-[#3b5033] text-[#b2c8a2] hover:bg-[#2e4228] transition-colors">
            Aquariums (2)
          </a>
        </div>
      </div>

      <main className="max-w-xl mx-auto px-5 py-8 relative z-10">
        
        {/* HEADER TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 pt-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a1bb90] font-semibold block mb-2">
            Studio Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4f0e6]">
            The Botanical Archive
          </h1>
          <p className="text-xs text-[#b8ad96] mt-2 max-w-sm mx-auto leading-relaxed">
            Every build is handcrafted with living mosses and ancient stones. Tap WhatsApp to commission or customize any setup.
          </p>
        </motion.div>

        {/* 1. TERRARIUMS SECTION */}
        <section id="terrariums" className="mb-20 scroll-mt-28">
          <div className="border-b border-[#283824] pb-3 mb-8 flex items-baseline justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1bb90] font-bold">01 / Primary Collection</span>
              <h2 className="font-serif text-2xl font-bold text-[#f4f0e6]">Terrariums</h2>
            </div>
            <span className="text-xs font-mono text-[#8a8170]">17 Designs</span>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {terrariumList.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                {/* CARD CONTAINER WITH MODIFIED BASE-COLOR ACCENT BORDER */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-[#0c120a] rounded-2xl border-2 border-[#3d5134] ring-1 ring-[#ded6c4]/25 p-3.5 flex items-center justify-center shadow-[inset_0_0_0_3px_#141c12,0_16px_36px_rgba(0,0,0,0.55)] group">
                  <img
                    src={`/terrarium/${item.file}.png`}
                    alt={item.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.endsWith(".jpg")) {
                        target.src = `/terrarium/${item.file}.jpg`;
                      } else {
                        target.src = "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80";
                      }
                    }}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-0.5 rounded-md bg-[#121a11]/90 border border-[#ded6c4]/30 text-[10px] font-mono text-[#e5ddce] shadow-sm">
                    {item.id}
                  </span>
                </div>

                <div className="w-full mt-4 text-center">
                  <h3 className="font-serif font-bold text-xl text-[#f4f0e6] mb-1.5">{item.title}</h3>
                  <div className="flex flex-wrap justify-center gap-1.5 mb-3.5">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1b2618] text-[#b8ad96] border border-[#2b3a25]">{tag}</span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20am%20interested%20in%20commissioning%20the%20${encodeURIComponent(item.title)}%20(${item.id})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#24331c] hover:bg-[#344828] border border-[#ded6c4]/25 text-[#f4f0e6] text-xs font-mono font-bold transition-all active:scale-95 shadow-md"
                  >
                    <MessageCircle size={14} className="text-[#a1bb90]" /> Inquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2. PALUDARIUMS SECTION */}
        <section id="paludariums" className="mb-20 scroll-mt-28">
          <div className="border-b border-[#283824] pb-3 mb-8 flex items-baseline justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1bb90] font-bold">02 / Dual-Realm Biomes</span>
              <h2 className="font-serif text-2xl font-bold text-[#f4f0e6]">Paludariums</h2>
            </div>
            <span className="text-xs font-mono text-[#8a8170]">3 Designs</span>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {paludariumList.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-[#0c120a] rounded-2xl border-2 border-[#3d5134] ring-1 ring-[#ded6c4]/25 p-3.5 flex items-center justify-center shadow-[inset_0_0_0_3px_#141c12,0_16px_36px_rgba(0,0,0,0.55)] group">
                  <img
                    src={`/paludarium/${item.file}.png`}
                    alt={item.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.endsWith(".jpg")) {
                        target.src = `/paludarium/${item.file}.jpg`;
                      }
                    }}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-0.5 rounded-md bg-[#121a11]/90 border border-[#ded6c4]/30 text-[10px] font-mono text-[#e5ddce] shadow-sm">
                    {item.id}
                  </span>
                </div>

                <div className="w-full mt-4 text-center">
                  <h3 className="font-serif font-bold text-xl text-[#f4f0e6] mb-1.5">{item.title}</h3>
                  <div className="flex flex-wrap justify-center gap-1.5 mb-3.5">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1b2618] text-[#b8ad96] border border-[#2b3a25]">{tag}</span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20am%20interested%20in%20commissioning%20the%20${encodeURIComponent(item.title)}%20(${item.id})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#24331c] hover:bg-[#344828] border border-[#ded6c4]/25 text-[#f4f0e6] text-xs font-mono font-bold transition-all active:scale-95 shadow-md"
                  >
                    <MessageCircle size={14} className="text-[#a1bb90]" /> Inquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. AQUARIUMS SECTION */}
        <section id="aquariums" className="mb-16 scroll-mt-28">
          <div className="border-b border-[#283824] pb-3 mb-8 flex items-baseline justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1bb90] font-bold">03 / Submerged Scapes</span>
              <h2 className="font-serif text-2xl font-bold text-[#f4f0e6]">Aquascapes</h2>
            </div>
            <span className="text-xs font-mono text-[#8a8170]">2 Designs</span>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {aquariumList.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-[#0c120a] rounded-2xl border-2 border-[#3d5134] ring-1 ring-[#ded6c4]/25 p-3.5 flex items-center justify-center shadow-[inset_0_0_0_3px_#141c12,0_16px_36px_rgba(0,0,0,0.55)] group">
                  <img
                    src={`/aquarium/${item.file}.png`}
                    alt={item.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.endsWith(".jpg")) {
                        target.src = `/aquarium/${item.file}.jpg`;
                      }
                    }}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-0.5 rounded-md bg-[#121a11]/90 border border-[#ded6c4]/30 text-[10px] font-mono text-[#e5ddce] shadow-sm">
                    {item.id}
                  </span>
                </div>

                <div className="w-full mt-4 text-center">
                  <h3 className="font-serif font-bold text-xl text-[#f4f0e6] mb-1.5">{item.title}</h3>
                  <div className="flex flex-wrap justify-center gap-1.5 mb-3.5">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1b2618] text-[#b8ad96] border border-[#2b3a25]">{tag}</span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20am%20interested%20in%20commissioning%20the%20${encodeURIComponent(item.title)}%20(${item.id})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#24331c] hover:bg-[#344828] border border-[#ded6c4]/25 text-[#f4f0e6] text-xs font-mono font-bold transition-all active:scale-95 shadow-md"
                  >
                    <MessageCircle size={14} className="text-[#a1bb90]" /> Inquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
