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

// 1. TERRARIUMS (17 Builds with Custom Titles & Subtitles)
const terrariumList = [
  {
    id: "T-01",
    title: "Secret Garden Gate",
    subtitle: "A hidden wooden door invites you into a secret world of moss and stone.",
    file: "03",
  },
  {
    id: "T-02",
    title: "Mossy Woodland Path",
    subtitle: "A winding pebble trail bordered by rich cushion moss and miniature ferns.",
    file: "05",
  },
  {
    id: "T-03",
    title: "Forest Canopy Dome",
    subtitle: "Dense tropical foliage enclosed within a crystal-clear curved glass cloche.",
    file: "06",
  },
  {
    id: "T-04",
    title: "Mountain Mist Valley",
    subtitle: "Rugged miniature stone cliffs draped in delicate greenery and trailing vines.",
    file: "07",
  },
  {
    id: "T-05",
    title: "Enchanted Hollow",
    subtitle: "An ancient gnarled root cradling a lush understory of vibrant living moss.",
    file: "08",
  },
  {
    id: "T-06",
    title: "Riverbed Oasis",
    subtitle: "Smooth river stones flowing through a dense bed of miniature botanical life.",
    file: "09",
  },
  {
    id: "T-07",
    title: "Emerald Highlands",
    subtitle: "Steep mossy slopes capturing the serene essence of a tranquil alpine forest.",
    file: "10",
  },
  {
    id: "T-08",
    title: "Whispering Fern Glen",
    subtitle: "Delicate fern fronds unfurling amidst weathered stone and rich forest loam.",
    file: "11",
  },
  {
    id: "T-09",
    title: "Ancient Bonsai Shire",
    subtitle: "A weathered miniature trunk standing guard over a carpet of lush greenery.",
    file: "12",
  },
  {
    id: "T-10",
    title: "Twilight Glade",
    subtitle: "A shadowed woodland nook accented with deep green textures and earthy elements.",
    file: "13",
  },
  {
    id: "T-11",
    title: "White Sand Waterfall",
    subtitle: "A tropical oasis featuring a cascade of pure white sand beneath a miniature wooden bridge.",
    file: "14",
  },
  {
    id: "T-12",
    title: "Layered Soil Spire",
    subtitle: "A tall cylindrical vessel showcasing geological earth strata supporting vibrant greenery.",
    file: "15",
  },
  {
    id: "T-13",
    title: "Spiderwood Forest Bowl",
    subtitle: "Twisted spiderwood branches arching gracefully across a lush mossy floor.",
    file: "16",
  },
  {
    id: "T-14",
    title: "Forest Fawn Haven",
    subtitle: "A delicate woodland fawn resting peacefully in a carpet of miniature forest flora.",
    file: "17",
  },
  {
    id: "T-15",
    title: "Terraced Bridge Sanctum",
    subtitle: "A serene miniature landscape featuring a hand-crafted bridge over a pebble riverbed.",
    file: "T04",
  },
  {
    id: "T-16",
    title: "Emerald Sanctuary",
    subtitle: "A thriving slice of primeval jungle housed in an expansive display cabinet.",
    file: "TERRARIUM01",
  },
  {
    id: "T-17",
    title: "Ganesha's Sacred Grove",
    subtitle: "A harmonious display where lush greenery frames a peaceful deity.",
    file: "TERRARIUM02",
  },
];

// 2. PALUDARIUMS (3 Builds with Custom Titles & Subtitles)
const paludariumList = [
  {
    id: "P-01",
    title: "Mist & Margin",
    subtitle: "An evocative display bridging aquatic life and emergent shoreline vegetation.",
    file: "03",
  },
  {
    id: "P-02",
    title: "Luminous Bromeliad Haven",
    subtitle: "A radiant miniature ecosystem centered around a glowing tropical centerpiece.",
    file: "PAULADIUR02",
  },
  {
    id: "P-03",
    title: "Neon Flora Fusion",
    subtitle: "A vibrant underwater landscape illuminated by striking colored light.",
    file: "PAULDARIUM01",
  },
];

// 3. AQUARIUMS (2 Builds with Custom Titles & Subtitles)
const aquariumList = [
  {
    id: "A-01",
    title: "Verdant Microcosm",
    subtitle: "A flourishing underwater scene captured in a compact glass vessel.",
    file: "02",
  },
  {
    id: "A-02",
    title: "Serene Basin Garden",
    subtitle: "A meditative arrangement combining natural stone and harmonious foliage.",
    file: "A01",
  },
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
                {/* IMAGE CONTAINER WITH BASE ACCENT BORDER */}
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

                {/* TITLE & SUBTITLE */}
                <div className="w-full mt-4 text-center">
                  <h3 className="font-serif font-bold text-xl text-[#f4f0e6] mb-1.5">{item.title}</h3>
                  <p className="font-serif italic text-xs sm:text-sm text-[#b8ad96] max-w-sm mx-auto leading-relaxed mb-3.5">
                    "{item.subtitle}"
                  </p>

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
                  <p className="font-serif italic text-xs sm:text-sm text-[#b8ad96] max-w-sm mx-auto leading-relaxed mb-3.5">
                    "{item.subtitle}"
                  </p>

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
                  <p className="font-serif italic text-xs sm:text-sm text-[#b8ad96] max-w-sm mx-auto leading-relaxed mb-3.5">
                    "{item.subtitle}"
                  </p>

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