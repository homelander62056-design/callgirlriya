"use client";

import React from "react";
import Link from "next/link";

export default function SecurityClient() {
  const securityPillars = [
    {
      icon: "🛡️",
      title: "100% Client Discretion & Anonymity",
      desc: "We strictly respect your privacy. No personal records, real names, or communication histories are ever logged or retained after booking fulfillment.",
      badge: "Zero Retention",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    },
    {
      icon: "🔒",
      title: "End-to-End Encrypted Communications",
      desc: "All inquiries and bookings handled via verified WhatsApp or direct calls benefit from end-to-end encryption protocols to secure your conversations.",
      badge: "Encrypted",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      icon: "💳",
      title: "Safe & Direct Payment Methods",
      desc: "We prioritize financial safety. Direct payment on arrival or meeting ensures zero financial risk, fraudulent charges, or compromising bank statements.",
      badge: "Direct Payment",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
    {
      icon: "📸",
      title: "100% Verified Companion Profiles",
      desc: "Every profile featured on our platform is authentic and identity-checked to ensure genuine representation and peace of mind.",
      badge: "Verified Profiles",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      icon: "🏨",
      title: "Discreet & Safe Hotel Out-Calls",
      desc: "Prompt out-call dispatch to all luxury 5-star & 4-star hotels, guest houses, and private residences across Hyderabad with complete confidentiality.",
      badge: "Out-Call Safe",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      icon: "⚡",
      title: "24/7 Booking & Rapid Assistance",
      desc: "Dedicated administrators available around the clock to assist you with inquiries, scheduling, and discreet support.",
      badge: "24/7 Available",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
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
            <span className="text-rose-400 font-bold">Security & Trust</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
              🛡️ Complete Discretion & Safety Standards
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Client <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 bg-clip-text text-transparent">Security & Trust</span> Guarantee
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              At Riya Escorts Hyderabad, your safety, confidentiality, and comfort are our highest priorities. Learn how we protect your personal identity and deliver a seamless, worry-free experience.
            </p>
          </div>
        </div>
      </section>

      {/* Security Pillars Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2 inline-block">
            Our Security Protocols
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            How We Guarantee Your Complete Privacy
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Every booking is handled with meticulous attention to secrecy, verified safety measures, and transparent communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-xl bg-zinc-800/80 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Verification Protocol Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Discretion Guidelines
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Zero Data Retention & Safe Meeting Standards
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              We never store your personal phone numbers, chat logs, or meeting addresses on permanent databases. All appointment coordination occurs directly with our verified administrator, ensuring that your identity remains completely anonymous at all stages.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <span className="text-xl">✅</span>
                <div>
                  <h4 className="font-semibold text-white text-sm">No Unsolicited Messages</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">We will never call, message, or send marketing material to your contact number post-booking.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <span className="text-xl">✅</span>
                <div>
                  <h4 className="font-semibold text-white text-sm">Discreet Hotel Coordination</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Companions arrive smoothly at major 5-star / 4-star hotels with polite demeanor and elegance.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <span className="text-xl">✅</span>
                <div>
                  <h4 className="font-semibold text-white text-sm">18+ Strict Verification</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">All participants and clients must be 18 years of age or older in full compliance with local policies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Help Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="h-12 w-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl font-bold">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-white">Need Discreet Assistance?</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              If you have any questions about our privacy policies, verification steps, or want to schedule a discreet session, contact our administrator.
            </p>

            <div className="space-y-3 pt-2">
              <Link
                href="/contact"
                className="block w-full py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 shadow-md shadow-rose-600/30 transition-all"
              >
                Go to Contact & Booking →
              </Link>
              <a
                href="https://wa.me/918294107610"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 hover:bg-emerald-900/40 transition-colors"
              >
                <span>💬</span> WhatsApp Direct Support
              </a>
              <a
                href="tel:+918294107610"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 hover:text-white transition-colors"
              >
                <span>📞</span> Call +91 82941 07610
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
