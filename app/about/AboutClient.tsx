"use client";

import React from "react";
import Link from "next/link";


export default function AboutClient() {
  const categories = [
    {
      title: "Russian & Foreign Escorts",
      tag: "Top Luxury",
      tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      icon: "👑",
      desc: "Super hot, fair-complexioned international models with unmatched sensuality and glamorous companionship for private high-profile events.",
      link: "https://www.colgiral.com/",
    },
    {
      title: "High Profile VIP Models",
      tag: "Celebrity Class",
      tagColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      icon: "💎",
      desc: "Tall, slender, exquisite fashion models with elite social etiquette. Ideal for luxury 5-star hotel dates, clubbing, and nightlife.",
      link: "https://hyderabad-escorts.colgiral.com/",
    },
    {
      title: "Young College Call Girls",
      tag: "Fresh & Energetic",
      tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      icon: "🌸",
      desc: "Charming, open-minded, modern college girls offering sweet girlfriend experience (GFE) with enthusiastic romance and pure fun.",
      link: "https://www.escortdirectory.in/",
    },
    {
      title: "Sensual Housewife Escorts",
      tag: "Passionate & Curvy",
      tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      icon: "🔥",
      desc: "Mature, voluptuous, and experienced women who know exactly how to fulfill your desires with deep intimacy and warmth.",
      link: "https://www.colgiral.com/hyderabad-escort.html",
    },
    {
      title: "Independent Call Girls",
      tag: "Discreet Direct",
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      icon: "⭐",
      desc: "Self-governed, non-agency independent companions offering personalized attention and flexible timings with complete secrecy.",
      link: "https://www.independentcallgirl.com/",
    },
    {
      title: "Erotic B2B & Nuru Massage",
      tag: "Deep Relaxation",
      tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      icon: "✨",
      desc: "Full body-to-body oil massage by sultry masseuses designed to relieve work stress, elevate mood, and boost vitality.",
      link: "https://www.massageparlor.in/",
    },
  ];

  const highlights = [
    {
      icon: "🔒",
      title: "100% Discretion & Secrecy",
      desc: "Your privacy is our utmost priority. No personal logs, zero third-party data retention.",
    },
    {
      icon: "📸",
      title: "100% Genuine Real Photos",
      desc: "What you see is who you meet. Verified profiles with genuine photos shared via WhatsApp.",
    },
    {
      icon: "⚡",
      title: "Fast 20-30 Min Delivery",
      desc: "Prompt out-call dispatch to all luxury 5-star & 4-star hotels, guest houses, and apartments in Hyderabad.",
    },
  ];

  return (
    <div className="w-full font-sans text-zinc-100 selection:bg-rose-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-14 bg-gradient-to-b from-rose-950/25 via-zinc-900/40 to-[#0c0a09] border-b border-zinc-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,29,72,0.15),rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-zinc-400 flex items-center gap-2 font-medium mb-6">
            <Link href="/" className="hover:text-rose-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-rose-400 font-bold">About Us</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
              ✨ Hyderabad&apos;s #1 Elite VIP Escort Service
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              About <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 bg-clip-text text-transparent">Riya Escorts</span> Hyderabad
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              We are Hyderabad&apos;s premier high-class escort and companion agency, providing discerning gentlemen with unmatched luxury, authentic companionship, and absolute privacy for over 7 years.
            </p>
          </div>
        </div>
      </section>



      {/* Escort Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2 inline-block">
            Choose Your Companion
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Types of Escorts in Hyderabad
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Whether you desire a classy dinner date companion, a high-fashion model for
            nightlife, or a passionate girlfriend experience, we have the ideal match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-xl bg-zinc-800/80 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${cat.tagColor}`}
                  >
                    {cat.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <a
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-medium underline decoration-amber-400/40"
                >
                  View Details ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us & Instant Booking Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Highlights & Why Choose Us */}
          <div className="lg:col-span-12 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2 inline-block">
                Guaranteed Satisfaction
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Why Gentlemen Choose Hyderabad Escorts Agency
              </h2>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                We have maintained an impeccable reputation in Telangana for over
                7 years. Our priority is delivering unmatched luxury, genuine
                profiles, and complete peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-3"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h4 className="text-base sm:text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* Locations Covered Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Prompt Out-Call Dispatch
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Available at all Major Luxury Hotels & Localities in Hyderabad
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto">
            Our models arrive swiftly and elegantly dressed to your hotel or private
            residence within 20 to 30 minutes in the following locations:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 text-xs">
            {[
              "Banjara Hills",
              "Jubilee Hills",
              "Hitech City",
              "Gachibowli",
              "Madhapur",
              "Secunderabad",
              "Begumpet",
              "Kondapur",
              "Kukatpally",
              "Somajiguda",
              "Manikonda",
              "Shamshabad Airport Area",
              "Financial District",
              "Panjagutta",
              "Ameerpet",
            ].map((loc) => (
              <span
                key={loc}
                className="px-3.5 py-1.5 rounded-full bg-zinc-800 border border-zinc-700/80 text-zinc-200 hover:border-rose-500/40 transition-colors"
              >
                📍 {loc}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
