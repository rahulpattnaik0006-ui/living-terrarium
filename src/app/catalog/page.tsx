"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918340623262";

const fullCatalog = [
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

export default function CatalogPage() {
  return (
    <div className="bg-[#f4f0e6] text-[#1c2517] min-h-screen font-sans">
      <header className="sticky top-0 z-40 bg-[#f4f0e6]/95 backdrop-blur-md border-b border-[#ded6c4] px-5 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-mono font-bold text-[#232f1e] hover:text-[#4d613e]"
        >
          <ArrowLeft size={15} /> Back to Studio
        </Link>
        <span className="font-serif tracking-wider text-xs uppercase font-bold text-[#172014]">
          Living Terrarium
        </span>
      </header>

      <main className="max-w-xl mx-auto px-5 py-10">
        <div className="mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#4d613e] font-semibold block mb-1">
            Complete Collection
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#172014]">
            All Flagship Vessels
          </h1>
          <p className="text-xs text-[#5c5445] mt-2 leading-relaxed">
            Each creation is an autonomous living ecosystem handcrafted in small batches. Custom stone carvings and plant varieties available on commission.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {fullCatalog.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#ded6c4] bg-[#faf7f2] p-4 shadow-sm"
            >
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-[#ded6c4] mb-4 bg-[#eae3d2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#172014]/80 backdrop-blur-md text-[10px] font-mono text-[#f4f0e6] border border-[#3b4b32]">
                  {item.type}
                </span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif font-bold text-lg text-[#172014]">
                  {item.title}
                </h3>
                <span className="font-mono text-base font-bold text-[#2d3d24]">
                  {item.price}
                </span>
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
                <MessageCircle size={14} /> Commission on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}