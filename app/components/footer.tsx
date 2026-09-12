"use client";

import Link from "next/link";
import { trackWhatsAppClick } from "../utils/trackWhatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Summary */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center font-bold text-white shadow-md">
                R
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Riya Escorts Hyderabad
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Premium 24x7 Escort & Call Girl agency in Hyderabad. Offering elite
              Russian, Model, College, and Independent companions with 100% privacy
              and discretion.
            </p>
            <div className="flex items-center gap-2 pt-1 text-emerald-400 font-semibold text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              24/7 Active Bookings Across Hyderabad
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase font-bold tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-rose-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="hover:text-rose-400 transition-colors"
                >
                  Models
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-rose-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-rose-400 transition-colors"
                >
                  Contact & Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-rose-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="hover:text-rose-400 transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <a
                  href="https://sexygirlriya.freeescortsite.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors"
                >
                  Main Website ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Partner & VIP Directories */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase font-bold tracking-wider text-white">
              VIP Directories
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.eurogirlsescort.com/?utm_source=fes&utm_campaign=vip_escorts&utm_medium=ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-medium"
                >
                  👑 VIP Escorts
                </a>
              </li>
              <li>
                <a
                  href="https://www.worldescortindex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Escort Listing Index
                </a>
              </li>
              <li>
                <a
                  href="https://hyderabad-escorts.colgiral.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Hyderabad Escorts Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy Policy & Discreet Assistance */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase font-bold tracking-wider text-white">
              Privacy Policy & Discretion
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We ensure 100% privacy and zero data retention for all our clients across Hyderabad.
            </p>
            <div className="space-y-1.5 pb-1">
              <Link
                href="/privacy-policy"
                className="text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1.5 font-semibold text-sm"
              >
                <span>Privacy Policy →</span>
              </Link>
              <Link
                href="/security"
                className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-1.5 text-sm"
              >
                <span>Security & Trust →</span>
              </Link>
              <Link
                href="/terms-condition"
                className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-1.5 text-sm"
              >
                <span>Terms & Conditions →</span>
              </Link>
            </div>

          </div>
        </div>

        {/* Disclaimer & Bottom Copyright */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-zinc-500">
          <div className="max-w-xl">
            <span className="font-semibold text-zinc-400">18+ Disclaimer:</span> This
            website is strictly for consenting adults aged 18 years or older. All
            services provided are between consenting adults in compliance with
            applicable laws.
          </div>
          <div>
            © {new Date().getFullYear()} Riya Escorts Hyderabad. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}