"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918340623262";

// 4 alternating groovy border-radius shapes for the organic frame effect
const groovyFrames = [
  "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
  "rounded-[60%_40%_30%_70%/50%_60%_50%_40%]",
  "rounded-[50%_50%_60%_40%/40%_40%_60%_60%]",
  "rounded-[30%_70%_50%_50%/50%_30%_70%_50%]",
];

const fullCatalog = [
  {
    id: "LT-01",
    title: "Zen Buddha Sanctuary",
    type: "Enclosed Glass Bowl",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80",
    flora: ["Cushion Moss", "Fittonia", "River Slate"],
  },
  {
    id: "LT-02",
    title: "The Living Luminary",
    type: "Terrarium Table Lamp",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&auto=format&fit=crop&q=80",
    flora: ["Java Moss", "Micro Ferns", "LED Habitat Light"],
  },
  {
    id: "LT-03",
    title: "Misty Falls Paludarium",
    type: "Dual Biome Waterfall",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=80",
    flora: ["Anubias Nana", "Lava Rocks", "Water Feature"],
  },
  {
    id: "LT-04",
    title: "Miniature Path Jar",
    type: "Apothecary Vessel",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=80",
    flora: ["Pillow Moss", "Couple Figurines", "Fine Sand Path"],
  },
];

export default function CatalogPage() {
  return (
    <div className="bg-[#0c120c] text-[#e8e5d9] min-h-screen font-sans selection:bg-[#3a4b30] selection:text-[#f5f2e9]">
      
      <header className="sticky top-0 z-40 bg-[#0c120c]/90 backdrop-blur-md border-b border-[#233120] px-5 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-mono font-bold text-[#a6bc98] hover:text-[#c4d6b8] transition-colors"
        >
          <ArrowLeft size={15} /> Back to Studio
        </Link>
        <span className="font-serif tracking-wider text-xs uppercase font-bold text-[#e8e5d9]">
          Catalog
        </span>
      </header>

      <main className="max-w-xl mx-auto px-5 py-12">
        <div className="mb-12 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#7a8f6d] font-semibold block mb-2">
            The Collection
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#e8e5d9]">
            Living Art Gallery
          </h1>
          <p className="text-xs text-[#8c9485] mt-3 leading-relaxed max-w-sm mx-auto">
            Ready to be commissioned. When you find a build that speaks to you, message us to customize the hardscape and figurines.
          </p>
        </div>

        <div className="space-y-16">
          {fullCatalog.map((item, idx) => {
            const frameClass = groovyFrames[idx % groovyFrames.length];
            return (
              <div key={item.id} className="flex flex-col items-center text-center">
                
                {/* Organic Groovy Image Frame */}
                <div className={`relative w-64 h-72 sm:w-80 sm:h-96 overflow-hidden border-[3px] border-[#2c3d25] mb-6 shadow-[0_0_40px_rgba(44,61,37,0.2)] ${frameClass} bg-[#141c12]`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-[#0c120c]/80 backdrop-blur-md text-[9px] font-mono text-[#a6bc98] border border-[#2c3d25] rounded-full">
                    {item.type}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl text-[#e8e5d9] mb-3">
                  {item.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-1.5 mb-5 max-w-[250px]">
                  {item.flora.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1a2417] text-[#a6bc98] border border-[#233120]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20am%20interested%20in%20commissioning%20the%20${encodeURIComponent(
                    item.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#e8e5d9] hover:bg-[#c4d6b8] text-[#0c120c] text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <MessageCircle size={15} />
                  Inquire on WhatsApp
                </a>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}