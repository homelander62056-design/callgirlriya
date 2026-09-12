"use client";

import React from "react";
import Link from "next/link";
import ProductClient from "./product/ProductClient";
import HomeBelow from "./components/homeBelow";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-zinc-800 overflow-x-hidden">

      {/* Main Content */}
      <main className="flex-1">

        {/* Top Hero Section matching design inside bg-gray-50 */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">

          {/* Light Hero Banner Card */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-zinc-200 overflow-hidden">

            {/* Background ambient glow effects */}
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

              {/* Left Column Text & Actions */}
              <div className="lg:col-span-7 space-y-6 text-left">

                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-700 bg-blue-50 border border-blue-200 uppercase">
                  <span className="w-4 h-0.5 bg-blue-600 rounded-full"></span>
                  <span>Hyderabad&apos;s Finest</span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-zinc-900">
                  <span className="block">
                    Make Every
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent block mt-1">
                    Night Special
                  </span>
                </h1>

                {/* Description Paragraph */}
                <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
                  Elevated experiences for unforgettable nights. Sophisticated, discreet, and designed exclusively for Hyderabad.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">

                  {/* View Collection -> Links to Models page (/product) */}
                  <Link
                    href="/product"
                    className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Collection</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>

                  {/* Private Inquiry -> Links to Contact page (/contact) */}
                  <Link
                    href="/contact"
                    className="border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-700 hover:text-zinc-900 font-semibold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-2xl transition-all flex items-center justify-center cursor-pointer shadow-sm"
                  >
                    <span>Private Inquiry</span>
                  </Link>

                </div>

                {/* Stats Counters Row */}
                <div className="pt-6 border-t border-zinc-200 flex items-center gap-8 sm:gap-14 text-left">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900">50+</div>
                    <div className="text-xs text-zinc-500 font-medium mt-0.5">Verified Models</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900">150+</div>
                    <div className="text-xs text-zinc-500 font-medium mt-0.5">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900">24/7</div>
                    <div className="text-xs text-zinc-500 font-medium mt-0.5">Availability</div>
                  </div>
                </div>

              </div>

              {/* Right Column Image Card */}
              <div className="lg:col-span-5 relative flex justify-center">

                <div className="relative w-full max-w-md h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl shadow-blue-900/10 bg-gray-100 group">
                  <img
                    src="/images/homepart.png"
                    alt="Featured Hyderabad Companion"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "/images/homepart.avif";
                    }}
                  />

                  {/* Image Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

                  {/* Featured Badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-md rounded-2xl border border-blue-500/30 flex items-center gap-2.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-bold text-amber-300 tracking-wider uppercase">Featured:</span>
                    <span className="text-sm font-extrabold text-cyan-300">Riya</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* TOP SEARCHES Section with Avatar Image Pills */}
          <div className="pt-10 space-y-4 max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              TOP SEARCHES
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { name: "Banjara Hills", img: "/images/image1.avif" },
                { name: "Jubilee Hills", img: "/images/image2.avif" },
                { name: "Hitec City", img: "/images/image3.avif" },
                { name: "Gachibowli", img: "/images/image4.avif" },
                { name: "Madhapur", img: "/images/image5.avif" },
                { name: "Russian Escorts", img: "/images/image6.avif" },
                { name: "Independent Escorts", img: "/images/image7.avif" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={`/product?city=${encodeURIComponent(item.name)}`}
                  className="inline-flex items-center gap-2.5 bg-white border border-zinc-200 hover:border-blue-400 rounded-full pl-1.5 pr-4 py-1 text-sm font-semibold text-zinc-800 shadow-2xs hover:shadow-xs transition-all hover:scale-105 cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "/images/image1.avif";
                    }}
                  />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* OUR COLLECTION Section Title */}
          <div className="pt-10 text-center space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              OUR COLLECTION
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-600">
              Featured Models
            </h2>
            <p className="text-sm text-zinc-500 pt-1">
              Handpicked companions in Hyderabad who define elegance and sophistication
            </p>
          </div>

        </section>

        {/* Models Listing Container */}
        <div className="py-4">
          <ProductClient />
        </div>

        {/* Category & Locations Section */}
        <section className="py-10 px-4 sm:px-8 max-w-6xl mx-auto space-y-5">

          {/* Card 1: Locations We Serve Header & Location Grid */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-zinc-200 text-center space-y-6">

            {/* Header Block */}
            <div className="space-y-1.5 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[#ff2d55]">
                SERVICE AREAS
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Locations We <span className="text-[#ff2d55]">Serve</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto pt-0.5 font-medium">
                Premium escort services across 30+ locations in Hyderabad
              </p>
            </div>

            {/* Location Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {[
                "Banjara Hills",
                "Jubilee Hills",
                "Hitec City",
                "Gachibowli",
                "Madhapur",
                "Kondapur",
                "Begumpet",
                "Somajiguda",
                "Kukatpally",
                "Financial District",
                "Manikonda",
                "Ameerpet",
                "Secunderabad",
                "Punjagutta",
                "Miyapur",
                "Film Nagar",
                "Dilsukhnagar",
                "LB Nagar",
                "Abids",
                "Himayatnagar",
                "Mehdipatnam",
                "Shamshabad",
                "Lingampally",
                "Tolichowki",
                "Hafeezpet",
              ].map((cityName) => (
                <Link
                  key={cityName}
                  href={`/product?city=${encodeURIComponent(cityName)}`}
                  className="bg-white border border-zinc-200/80 hover:border-rose-400 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-2xs hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group text-center"
                >
                  <svg className="w-5 h-5 text-rose-500 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800 group-hover:text-rose-500 transition-colors">
                    {cityName}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Category Quick Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Card 2: Call Girls Hyderabad */}
            <Link href="/product" className="block">
              <div className="bg-white rounded-2xl p-5 shadow-xs border border-zinc-200 text-center hover:border-rose-500 transition-all cursor-pointer">
                <h3 className="text-xl font-black text-rose-500 flex items-center justify-center gap-2">
                  <span className="text-xl">👄</span> Call Girls Hyderabad
                </h3>
              </div>
            </Link>

            {/* Card 3: Massages Hyderabad */}
            <Link href="/product" className="block">
              <div className="bg-white rounded-2xl p-5 shadow-xs border border-zinc-200 text-center hover:border-rose-500 transition-all cursor-pointer">
                <h3 className="text-xl font-black text-rose-500 flex items-center justify-center gap-2">
                  <span className="text-xl">🧘</span> Massages Hyderabad
                </h3>
              </div>
            </Link>

            {/* Card 4: Male Escorts Hyderabad */}
            <Link href="/product" className="block">
              <div className="bg-white rounded-2xl p-5 shadow-xs border border-zinc-200 text-center hover:border-rose-500 transition-all cursor-pointer">
                <h3 className="text-rose-500 font-black text-xl flex items-center justify-center gap-2">
                  <span className="text-xl">🥸</span> Male Escorts Hyderabad
                </h3>
              </div>
            </Link>

            {/* Card 5: Transsexual Hyderabad */}
            <Link href="/product" className="block">
              <div className="bg-white rounded-2xl p-5 shadow-xs border border-zinc-200 text-center hover:border-rose-500 transition-all cursor-pointer">
                <h3 className="text-rose-500 font-black text-xl flex items-center justify-center gap-2">
                  <span>Transsexual Hyderabad</span>
                </h3>
              </div>
            </Link>

          </div>

        </section>

        {/* Detailed Information Section (HomeBelow) */}
        <div className="bg-white text-zinc-800 border-t border-zinc-200">
          <HomeBelow />
        </div>

      </main>

    </div>
  );
}
