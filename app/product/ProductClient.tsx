"use client";

import React from "react";
import Link from "next/link";
import { initialProductsData } from "./productsData";
import { trackWhatsAppClick, createWhatsAppLink } from "../utils/trackWhatsapp";
import WhatsAppIcon from "../components/WhatsAppIcon";

export default function ProductClient() {
  return (
    <div className="min-h-screen bg-[#0c0a09] font-sans text-zinc-100 selection:bg-rose-500 selection:text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-zinc-400 flex items-center gap-2 font-medium">
          <Link href="/" className="hover:text-rose-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-rose-400 font-bold">Models</span>
        </nav>

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
            ✨ 100% Verified Profiles & Active Companions
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="bg-gradient-to-r from-rose-400 to-amber-300 bg-clip-text text-transparent">Verified</span> Models
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Browse our exclusive collection of verified VIP escorts and companions available 24/7 for in-call & out-call services.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialProductsData.map((item) => {
            const cleanPhone = item.phone.replace(/[^+\d]/g, "");
            const waLink = createWhatsAppLink(item.name, item.city, item.whatsappNumber);

            return (
              <div
                key={item.id}
                className="bg-zinc-900/70 border border-zinc-800 rounded-3xl overflow-hidden shadow-lg hover:border-zinc-700 hover:shadow-2xl transition-all flex flex-col group"
              >
                <Link href={`/product/${item.id}`} className="block relative aspect-[3/4] bg-zinc-950 overflow-hidden cursor-pointer">
                  <img
                    src={item.image || `/images/image1.avif`}
                    alt={`${item.name} – Escort & Call Girl in ${item.city}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `/images/image1.avif`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
                  <span className="absolute top-3 left-3 bg-rose-600/90 text-white text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {item.status || "Available Now"}
                  </span>
                </Link>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <Link href={`/product/${item.id}`}>
                      <h3 className="text-lg font-extrabold text-white group-hover:text-rose-400 transition-colors cursor-pointer">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-zinc-400 font-semibold mt-0.5">
                      {item.age} years &bull; <span className="text-emerald-400">Verified</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackWhatsAppClick({
                          name: item.name,
                          city: item.city,
                          whatsappNumber: item.whatsappNumber,
                        })
                      }
                      className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${cleanPhone}`}
                      className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all shadow-md active:scale-95"
                    >
                      <span>📞</span> Call Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}
