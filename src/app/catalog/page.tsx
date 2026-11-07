"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ExternalLink, Sparkles } from "lucide-react";

interface Item {
  id: string;
  title: string;
  category: "terrarium" | "paludarium" | "aquarium";
  vessel: string;
  dimensions: string;
  price: string;
  status: "Available" | "Commission Only";
  image: string;
  flora: string[];
}

const items: Item[] = [
  {
    id: "LT-01",
    title: "Zen Buddha Sanctuary",
    category: "terrarium",
    vessel: "Round Glass Orb",
    dimensions: '8" x 8" Bowl',
    price: "₹3,499",
    status: "Available",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80",
    flora: ["Cushion Moss", "Fittonia", "Porous Slate"],
  },
  {
    id: "LT-02",
    title: "Living Luminary Table Lamp",
    category: "terrarium",
    vessel: "Cylindrical Lamp Vessel",
    dimensions: '14" x 6" Column',
    price: "₹5,999",
    status: "Commission Only",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&auto=format&fit=crop&q=80",
    flora: ["Java Moss", "Micro Ferns", "LED Habitat Light"],
  },
  {
    id: "LT-03",
    title: "Misty Valley Paludarium",
    category: "paludarium",
    vessel: "Cube Glass Terrarium",
    dimensions: '10" x 10" x 12"',
    price: "₹6,800",
    status: "Commission Only",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=80",
    flora: ["Anubias Nana", "Live Waterfall", "Lava Rocks"],
  },
  {
    id: "LT-04",
    title: "Iwagumi Nature Scape",
    category: "aquarium",
    vessel: "Ultra-Clear Rimless Tank",
    dimensions: '12" x 8" x 10"',
    price: "₹4,200",
    status: "Available",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&auto=format&fit=crop&q=80",
    flora: ["Monte Carlo Carpet", "Seiryu Stones", "Aquatic Moss"],
  },
];

export default function CatalogPage() {
  const [filter, setFilter] = useState<"all" | "terrarium" | "paludarium" | "aquarium">("all");

  const filteredItems = filter === "all" ? items : items.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen bg-[#070b08] text-[#f2f7f3] px-4 py-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/"
          className="w-9 h-9 rounded-full bg-[#101712] border border-[#233526] flex items-center justify-center text-slate-300"
        >
          <ArrowLeft size={16} />
        </Link>
        <span className="font-serif text-sm tracking-wide lowercase text-slate-300">
          build catalog
        </span>
        <div className="w-9" />
      </div>

      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-white mb-1">Ecosystem Builds</h1>
        <p className="text-xs text-slate-400">Handcrafted living biomes & custom commissions.</p>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {(["all", "terrarium", "paludarium", "aquarium"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
              filter === tab
                ? "bg-[#22c55e] text-black font-bold"
                : "bg-[#101712] border border-[#1e2a20] text-slate-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="space-y-4 pb-12">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#1b261d] bg-[#0c130e] p-4 flex flex-col gap-3"
          >
            <div className="relative w-full h-52 rounded-xl overflow-hidden border border-[#233526]">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <span
                className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold ${
                  item.status === "Available"
                    ? "bg-emerald-950/90 text-emerald-300 border border-emerald-700/50"
                    : "bg-amber-950/90 text-amber-300 border border-amber-700/50"
                }`}
              >
                {item.status}
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-base text-white">{item.title}</h3>
                <span className="font-mono text-sm font-semibold text-[#86efac]">{item.price}</span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                {item.vessel} • {item.dimensions}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {item.flora.map((f, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded bg-[#131d16] border border-[#223326] text-[10px] text-slate-300 font-mono"
                >
                  {f}
                </span>
              ))}
            </div>

            <a
              href={`https://wa.me/?text=Hi!%20I%20am%20interested%20in%20commissioning%20the%20${encodeURIComponent(
                item.title
              )}%20(${item.id})`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-full py-2.5 rounded-xl bg-[#1b2b20] hover:bg-[#23382a] border border-[#2d4634] text-white text-xs font-mono font-medium flex items-center justify-center gap-2 active:scale-98 transition-transform"
            >
              <MessageCircle size={14} className="text-[#86efac]" />
              Inquire on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}