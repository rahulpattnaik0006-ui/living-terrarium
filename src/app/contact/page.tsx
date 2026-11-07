"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "918340623262";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("Custom Commission");
  const [customNote, setCustomNote] = useState("");

  const handleWhatsAppSend = () => {
    const text = `Hi Living Terrarium! I would like to inquire about: ${inquiryType}.${
      customNote.trim() ? ` Details: ${customNote}` : ""
    }`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-[#121a11] text-[#f4f0e6] min-h-screen font-sans selection:bg-[#344828] selection:text-[#f4f0e6]">
      
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#121a11]/90 backdrop-blur-md border-b border-[#283824] px-5 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-mono font-bold text-[#b2c8a2] hover:text-[#f4f0e6] transition-colors"
        >
          <ArrowLeft size={15} /> Back to Studio
        </Link>
        <span className="font-serif tracking-wider text-xs uppercase font-bold text-[#f4f0e6]">
          Contact & Commissions
        </span>
      </header>

      <main className="max-w-xl mx-auto px-5 py-10">
        
        {/* TITLE */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a1bb90] font-bold block mb-2">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4f0e6]">
            Connect With The Artisan
          </h1>
          <p className="text-xs text-[#b8ad96] mt-2.5 max-w-sm mx-auto leading-relaxed">
            Every vessel is handcrafted in small batches. Reach out for custom miniature dimensions, corporate gifting, or setup advice.
          </p>
        </div>

        {/* DIRECT WHATSAPP BUILDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border-2 border-[#2c3d25] bg-[#162014] p-6 shadow-2xl mb-8"
        >
          <div className="flex items-center gap-2 text-[#a1bb90] font-mono text-xs uppercase tracking-wider mb-4 font-bold">
            <Sparkles size={16} /> Choose Inquiry Type
          </div>

          <div className="grid grid-cols-2 gap-2 mb-5">
            {[
              "Custom Commission",
              "Catalog Item Purchase",
              "Corporate Gifting",
              "Care & Maintenance Help",
            ].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setInquiryType(type)}
                className={`py-3 px-3 rounded-xl text-left font-mono text-[11px] font-semibold transition-all border ${
                  inquiryType === type
                    ? "bg-[#283922] border-[#a1bb90] text-[#f4f0e6] shadow-sm"
                    : "bg-[#0f150e] border-[#22301c] text-[#8a9682] hover:border-[#384c30]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <label className="block text-[11px] font-mono uppercase tracking-wider text-[#a1bb90] mb-2 font-bold">
            Add Specific Requirements (Optional)
          </label>
          <textarea
            rows={3}
            value={customNote}
            onChange={(e) => setCustomNote(e.target.value)}
            placeholder="e.g. Need a bowl with couple figurines for an anniversary gift..."
            className="w-full rounded-xl bg-[#0b1009] border border-[#273820] p-3 text-xs text-[#f4f0e6] placeholder-[#66725e] focus:outline-none focus:border-[#a1bb90] mb-4"
          />

          <button
            onClick={handleWhatsAppSend}
            className="w-full py-3.5 rounded-2xl bg-[#f4f0e6] hover:bg-[#e4ddcd] text-[#121a11] font-mono font-bold text-xs flex items-center justify-center gap-2 transition-transform active:scale-98 shadow-lg cursor-pointer"
          >
            <MessageCircle size={16} />
            Start Chat on WhatsApp →
          </button>
        </motion.div>

        {/* STUDIO DETAILS */}
        <div className="space-y-4 mb-8">
          <div className="p-4 rounded-2xl bg-[#162014] border border-[#273820] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#202e1c] text-[#a1bb90] flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#f4f0e6] mb-0.5">Studio Location</h3>
              <p className="text-xs text-[#a39a88] leading-relaxed">
                Handcrafted in Jamshedpur, Jharkhand. Packaged with zero-displacement transit engineering for safe pan-India delivery.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#162014] border border-[#273820] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#202e1c] text-[#a1bb90] flex items-center justify-center shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#f4f0e6] mb-0.5">Response Time</h3>
              <p className="text-xs text-[#a39a88] leading-relaxed">
                Daily from 9:00 AM – 9:00 PM IST. Direct replies usually within 1 hour on WhatsApp.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#162014] border border-[#273820] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#202e1c] text-[#a1bb90] flex items-center justify-center shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#f4f0e6] mb-0.5">Safe Delivery Guarantee</h3>
              <p className="text-xs text-[#a39a88] leading-relaxed">
                Multi-layer shock-absorbing packing ensures substrate and live moss arrive in pristine condition.
              </p>
            </div>
          </div>
        </div>

        {/* INSTAGRAM BANNER */}
        <a
          href="https://www.instagram.com/living_terrarium/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-4 rounded-2xl bg-[#1a2517] border border-[#304327] flex items-center justify-between hover:bg-[#22311f] transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#263720] text-[#a1bb90] flex items-center justify-center">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-sm text-[#f4f0e6] block">Follow Our Works</span>
              <span className="text-[10px] font-mono text-[#8a9682]">@living_terrarium</span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-[#a1bb90] group-hover:translate-x-1 transition-transform">
            Visit Profile →
          </span>
        </a>

      </main>
    </div>
  );
}