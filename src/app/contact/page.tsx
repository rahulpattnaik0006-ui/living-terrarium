"use client";

import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";

const PHONE_NUMBER = "+91 83406 23262";
const WHATSAPP_NUMBER = "918340623262";

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#121a11] text-[#f4f0e6] min-h-screen font-sans selection:bg-[#344828] selection:text-[#f4f0e6] flex flex-col justify-between">
      
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#121a11]/90 backdrop-blur-md border-b border-[#283824] px-5 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-mono font-bold text-[#b2c8a2] hover:text-[#f4f0e6] transition-colors"
        >
          <ArrowLeft size={15} /> Back to Studio
        </Link>
        <span className="font-serif tracking-wider text-xs uppercase font-bold text-[#f4f0e6]">
          Contact
        </span>
      </header>

      {/* ONLY 2 DETAILS: CONTACT NUMBER & INSTAGRAM */}
      <main className="max-w-md mx-auto w-full px-5 py-12 my-auto">
        
        <div className="text-center mb-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a1bb90] font-bold block mb-2">
            Direct Reach
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4f0e6]">
            Get In Touch
          </h1>
        </div>

        <div className="space-y-4">
          
          {/* 1. CONTACT NUMBER / WHATSAPP */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20would%20like%20to%20connect%20regarding%20Living%20Terrarium.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-5 rounded-2xl bg-[#162014] border border-[#2c3d25] hover:border-[#a1bb90] transition-all flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#202e1c] text-[#a1bb90] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone size={22} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8574] block">
                  Phone / WhatsApp
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-[#f4f0e6]">
                  {PHONE_NUMBER}
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-[#a1bb90] group-hover:translate-x-1 transition-transform">
              Connect →
            </span>
          </a>

          {/* 2. INSTAGRAM PAGE */}
          <a
            href="https://www.instagram.com/living_terrarium/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-5 rounded-2xl bg-[#162014] border border-[#2c3d25] hover:border-[#a1bb90] transition-all flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#202e1c] text-[#a1bb90] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8574] block">
                  Instagram
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-[#f4f0e6]">
                  @living_terrarium
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-[#a1bb90] group-hover:translate-x-1 transition-transform">
              Visit →
            </span>
          </a>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#202c1c] py-4 text-center text-[10px] font-mono text-[#786e5e]">
        Living Terrarium Studio • Find peace in a jar
      </footer>

    </div>
  );
}