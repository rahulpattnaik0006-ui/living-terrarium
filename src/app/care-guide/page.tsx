"use client";

import Link from "next/link";
import { ArrowLeft, Droplets, Sun, Wind, AlertCircle } from "lucide-react";

const careTips = [
  {
    icon: Droplets,
    title: "Moisture & Watering",
    description: "Closed terrariums self-recycle water. Only mist lightly once every 3 to 6 months if condensation on the glass completely disappears.",
  },
  {
    icon: Sun,
    title: "Indirect Lighting",
    description: "Place in bright, filtered ambient light. Never place in direct blazing sun, which will turn the glass bowl into a hot greenhouse.",
  },
  {
    icon: Wind,
    title: "Ventilation Cycle",
    description: "If heavy droplets cloud the glass for more than 2 days in a row, open the cork or lid for 2 hours to let excess humidity escape.",
  },
  {
    icon: AlertCircle,
    title: "Moss Maintenance",
    description: "Trim brown tips or overgrowth with long aquascaping scissors once a year. Live pillow moss will naturally adjust to container humidity.",
  },
];

export default function CareGuidePage() {
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
            Lifespan & Maintenance
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#172014]">
            Terrarium Care Protocol
          </h1>
          <p className="text-xs text-[#5c5445] mt-2 leading-relaxed">
            A balanced enclosed biome requires under 5 minutes of care per month. Follow these rules to keep your moss and fittonias thriving for years.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {careTips.map((tip, i) => {
            const Icon = tip.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl border border-[#ded6c4] bg-[#faf7f2] shadow-sm flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eae3d2] text-[#2c3a25] flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#172014] mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[#453e32] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-6 rounded-3xl bg-[#232f1e] text-[#f4f0e6] shadow-md text-center space-y-2">
          <h3 className="font-serif text-xl font-bold">Need Personal Assistance?</h3>
          <p className="text-xs text-[#d8cfbe] leading-relaxed max-w-sm mx-auto">
            Send a quick photo of your jar on WhatsApp and we will diagnose the humidity balance for you.
          </p>
          <a
            href="https://wa.me/918340623262?text=Hi!%20I%20have%20a%20question%20about%20my%20terrarium%20care."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-5 py-2.5 rounded-xl bg-[#f4f0e6] text-[#172014] font-mono text-xs font-bold hover:bg-[#eae3d2]"
          >
            Ask Artisan on WhatsApp →
          </a>
        </div>
      </main>
    </div>
  );
}