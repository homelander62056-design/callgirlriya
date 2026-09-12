"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProductItem, initialProductsData } from "../productsData";
import { getModelSpecsAndDetails } from "./data";
import { trackWhatsAppClick, createWhatsAppLink } from "../../utils/trackWhatsapp";
import WhatsAppIcon from "../../components/WhatsAppIcon";

interface ProductDetailClientProps {
  product: ProductItem;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const details = getModelSpecsAndDetails(product);
  const cleanPhone = product.phone.replace(/[^+\d]/g, "");
  const waLink = createWhatsAppLink(product.name, product.city, product.whatsappNumber);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Other related models from the same or nearby locations
  const relatedProducts = initialProductsData
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] font-sans text-zinc-100 selection:bg-rose-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-zinc-400 flex items-center gap-2 font-medium">
          <Link href="/" className="hover:text-rose-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/product" className="hover:text-rose-400 transition-colors">
            Models
          </Link>
          <span>/</span>
          <span className="text-rose-400 font-bold">{product.name}</span>
        </nav>

        {/* Profile Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group">
              <img
                src={details.displayImage}
                alt={`${product.name} - Escort in ${product.city}`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/images/image1.avif";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Status Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
                  {product.status || "Available Now"}
                </span>
                <span className="bg-rose-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {details.badge}
                </span>
              </div>

              {/* Overlay Bottom Info on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-2xl sm:text-3xl font-black">{product.name}</div>
                <div className="text-xs sm:text-sm text-zinc-300 flex items-center gap-2 mt-1">
                  <span>📍 {details.locationDetail}</span>
                  <span>•</span>
                  <span>🕒 {details.timing}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Model Info & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-3">
                ✨ 100% Verified Profile & Discretion Guaranteed
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {product.name} &ndash;{" "}
                <span className="bg-gradient-to-r from-rose-400 to-amber-300 bg-clip-text text-transparent">
                  {product.city}
                </span>
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base mt-2">
                Verified {product.age}-year-old VIP escort & companion in {product.city}, Hyderabad. Available 24/7 for 5-star hotel & private out-calls.
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      name: product.name,
                      city: product.city,
                      whatsappNumber: product.whatsappNumber,
                    })
                  }
                  className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-6 rounded-xl text-center text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" size={22} />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href={`tel:${cleanPhone}`}
                  className="flex-1 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold py-3.5 px-6 rounded-xl text-center text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-rose-500/20 active:scale-[0.98]"
                >
                  <span className="text-xl">📞</span> Call Directly
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-zinc-400 pt-1">
                <span className="flex items-center gap-1">🔒 100% Private</span>
                <span>•</span>
                <span className="flex items-center gap-1">💵 Cash on Meeting</span>
                <span>•</span>
                <span className="flex items-center gap-1">⚡ 20-30 Min Arrival</span>
              </div>
            </div>

            {/* Specifications Matrix */}
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-5">
              <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <span>📋</span> Model Profile & Specifications
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-850">
                  <div className="text-[11px] text-zinc-400">Age</div>
                  <div className="font-bold text-white">{product.age} Years</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-850">
                  <div className="text-[11px] text-zinc-400">Height</div>
                  <div className="font-bold text-white">{details.height}</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-850">
                  <div className="text-[11px] text-zinc-400">Weight</div>
                  <div className="font-bold text-white">{details.weight}</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-850">
                  <div className="text-[11px] text-zinc-400">Figure</div>
                  <div className="font-bold text-white">{details.figure}</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-850">
                  <div className="text-[11px] text-zinc-400">Hair</div>
                  <div className="font-bold text-white">{details.hair}</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-850">
                  <div className="text-[11px] text-zinc-400">Eyes</div>
                  <div className="font-bold text-white">{details.eyes}</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-850">
                  <div className="text-[11px] text-zinc-400">Languages</div>
                  <div className="font-bold text-white text-xs sm:text-sm">{details.languages}</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-850">
                  <div className="text-[11px] text-zinc-400">City</div>
                  <div className="font-bold text-rose-400">{product.city}</div>
                </div>
              </div>
            </div>

            {/* Services & Available For */}
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-5">
              <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <span>⭐</span> Available Services & Occasions
              </h2>
              <div className="flex flex-wrap gap-2">
                {details.availableFor.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bio / About Section */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>✨</span> About {product.name}
          </h2>
          <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
            {details.bioParagraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </section>

        {/* Highlights & Guarantees */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>💎</span> Why Choose {product.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {details.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3"
              >
                <span className="text-rose-400 text-lg">✓</span>
                <span className="text-sm font-medium text-zinc-200">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              Common questions about booking {product.name} in {product.city}
            </p>
          </div>

          <div className="space-y-3">
            {details.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-zinc-950/60 border border-zinc-800/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 sm:p-5 font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 hover:text-rose-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-rose-400 text-lg shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-900 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Similar / Other Available Models */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Other Available VIP Models
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                Explore more verified companions ready for booking in Hyderabad
              </p>
            </div>
            <Link
              href="/product"
              className="text-xs sm:text-sm text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => {
              const relatedCleanPhone = item.phone.replace(/[^+\d]/g, "");
              const relatedWaLink = createWhatsAppLink(item.name, item.city, item.whatsappNumber);

              return (
                <div
                  key={item.id}
                  className="bg-zinc-900/70 border border-zinc-800 rounded-3xl overflow-hidden shadow-lg hover:border-zinc-700 transition-all flex flex-col group"
                >
                  <Link
                    href={`/product/${item.id}`}
                    className="block relative aspect-[3/4] bg-zinc-950 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image || "/images/image1.avif"}
                      alt={`${item.name} in ${item.city}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/images/image1.avif";
                      }}
                    />
                    <span className="absolute top-3 left-3 bg-rose-600/90 text-white text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      {item.status || "Available"}
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
                        href={relatedWaLink}
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
                        <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" size={16} />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href={`tel:${relatedCleanPhone}`}
                        className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
