"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Layers, Star, BookOpen, MessageCircle, Home } from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface NavbarProps {
  currentPage?: "home" | "catalog" | "reviews" | "care" | "contact";
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home, subtitle: "Botanical Atelier" },
    { name: "Catalog", href: "/catalog", icon: Layers, subtitle: "Explore 22 Builds" },
    { name: "Reviews", href: "/reviews", icon: Star, subtitle: "Collector Proof" },
    { name: "Care Guide", href: "/care-guide", icon: BookOpen, subtitle: "Maintenance" },
    { name: "Contact", href: "/contact", icon: MessageCircle, subtitle: "Direct Inquiries" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3.5 flex items-center justify-between pointer-events-none">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5 pointer-events-auto group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#c8bea9] bg-[#eae3d2] overflow-hidden flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Living Terrarium"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1545241047-6083a3684587?w=120&auto=format&fit=crop&q=80";
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-serif tracking-widest text-xs sm:text-sm uppercase font-bold text-[#172014] bg-[#f4f0e6]/95 px-3 py-1 rounded-full backdrop-blur-md border border-[#ded6c4] shadow-sm">
            Living Terrarium
          </span>
        </Link>

        {/* UNIVERSAL 3-LINE HAMBURGER BUTTON (Right side par har jagah identical) */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Navigation Menu"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#172014] text-[#f4f0e6] flex items-center justify-center pointer-events-auto shadow-xl hover:bg-[#2b3a25] transition-all hover:scale-105 active:scale-95 border border-[#384c30]"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* FULL-SCREEN OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#121910]/95 backdrop-blur-2xl flex flex-col justify-center items-center px-6 py-10"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Navigation Menu"
              className="absolute top-5 right-5 w-11 h-11 rounded-full border border-[#354c29] bg-[#1a2517] text-[#a4b893] flex items-center justify-center hover:bg-[#2d3e23] transition-colors"
            >
              <X size={22} />
            </button>

            {/* LINKS */}
            <nav className="flex flex-col items-center gap-5 sm:gap-6 text-center max-w-sm w-full">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.name.toLowerCase().replace(" ", "");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center gap-3 w-full p-2.5 rounded-2xl hover:bg-[#1c2719] transition-colors"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isActive ? "bg-[#354c29] text-[#f4f0e6]" : "bg-[#1a2517] border border-[#354c29] text-[#a4b893]"
                    }`}>
                      <Icon size={20} />
                    </div>
                    <div className="text-left flex-1">
                      <span className="font-serif text-2xl font-bold text-[#f4f0e6] block leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#8a9980] tracking-widest uppercase">
                        {item.subtitle}
                      </span>
                    </div>
                  </Link>
                );
              })}

              <a
                href="https://www.instagram.com/living_terrarium/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 rounded-full bg-[#eae4d5] text-[#172014] font-mono font-bold text-xs flex items-center gap-2 hover:bg-[#d6cdbc] transition-colors shadow-lg"
              >
                <InstagramIcon /> Follow on Instagram
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}