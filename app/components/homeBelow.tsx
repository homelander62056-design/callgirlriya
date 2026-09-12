"use client";

import React from "react";
import Link from "next/link";

export default function HomeBelow() {
  const features = [
    {
      icon: "💎",
      title: "100% Verified Profiles",
      desc: "All models are physically verified with real photos and verified ages.",
    },
    {
      icon: "🔒",
      title: "Total Discretion & Privacy",
      desc: "Zero records retained. Your identity is 100% safeguarded at all times.",
    },
    {
      icon: "⚡",
      title: "Fast 20-30 Min Doorstep Delivery",
      desc: "Quick arrival to your hotel room or private residence across Hyderabad.",
    },
    {
      icon: "💵",
      title: "Cash on Meeting",
      desc: "No hidden charges or mandatory pre-payments. Transparent pricing.",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
      {/* Why Choose Us Section */}
      <section className="space-y-6 text-center">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Premium VIP Escort Services in Hyderabad
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base">
            Riya Escorts Hyderabad is the city&apos;s leading companion agency, delivering elite experiences with elegance, charm, and complete privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 text-left">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all space-y-3"
            >
              <div className="text-3xl">{feat.icon}</div>
              <h3 className="text-base font-bold text-zinc-900">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Steps Section */}
      <section className="bg-gradient-to-br from-blue-900 via-zinc-900 to-black text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            EASY 3-STEP PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            How to Book in Hyderabad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mx-auto text-lg">
              1
            </div>
            <h4 className="text-lg font-bold text-white">Select Companion</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Browse our verified gallery and pick the model matching your desire.
            </p>
          </div>

          <div className="space-y-3 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center mx-auto text-lg">
              2
            </div>
            <h4 className="text-lg font-bold text-white">Contact via WhatsApp</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Click the WhatsApp button or call +91 82941 07610 with your location details.
            </p>
          </div>

          <div className="space-y-3 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mx-auto text-lg">
              3
            </div>
            <h4 className="text-lg font-bold text-white">Enjoy Quality Time</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Your escort arrives at your hotel or home in 20-30 minutes. Pay cash on arrival.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
