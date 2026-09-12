"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { trackWhatsAppClick } from "../utils/trackWhatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Models", href: "/product" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },

  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans shadow-lg">
      {/* Top Banner / VIP Partner Links & Status */}
      <div className="border-b border-zinc-800/80 bg-zinc-950/95 text-xs py-2 px-4 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Status & VIP Links */}
          <div className="flex items-center gap-3 sm:gap-4 text-zinc-400">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden xs:inline">24/7 Available</span> in Hyderabad
            </span>
            <span className="text-zinc-700">|</span>
            <a
              href="https://www.eurogirlsescort.com/?utm_source=fes&utm_campaign=vip_escorts&utm_medium=ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold tracking-wide transition-colors flex items-center gap-1"
            >
              👑 VIP Escorts
            </a>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <a
              href="https://www.worldescortindex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-zinc-300 hover:text-white transition-colors"
            >
              Escort listing
            </a>
          </div>

          {/* Quick Action Contact Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+918294107610"
              className="px-2.5 py-1 rounded bg-rose-600/20 text-rose-300 border border-rose-500/30 hover:bg-rose-600 hover:text-white transition-all text-xs font-semibold flex items-center gap-1"
            >
              <span>📞</span>
              <span className="hidden xs:inline">Call 24/7</span>
            </a>
            <a
              href="https://wa.me/918294107610"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  name: "Header Inquiry",
                  city: "Hyderabad",
                  whatsappNumber: "+918294107610",
                })
              }
              className="px-2.5 py-1 rounded bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-zinc-800/80 bg-zinc-900/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center font-bold text-white shadow-lg shadow-rose-600/30 group-hover:scale-105 transition-transform">
              R
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 bg-clip-text text-transparent group-hover:brightness-110 transition-all">
                Riya Escorts Hyderabad
              </span>
              <p className="text-[10px] text-zinc-400 tracking-wider uppercase font-semibold">
                Premium 24x7 Escort Service
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1.5 px-3 rounded-lg ${isActive
                    ? "text-rose-400 font-semibold bg-rose-500/10 border border-rose-500/20"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}




          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-800/80 text-zinc-300 hover:text-white border border-zinc-700/80 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95 px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium ${isActive
                    ? "bg-rose-500/10 text-rose-400 font-semibold border border-rose-500/20"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-pink-600 shadow-md shadow-rose-600/30"
              >
                🚀 Book Now & Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
