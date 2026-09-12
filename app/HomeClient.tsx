"use client";

import React from "react";
import AboutClient from "./about/AboutClient";

export default function HomeClient() {
  const faqs = [
    {
      q: "How can I book an escort in Hyderabad?",
      a: "Simply fill out our fast booking form on the contact page or directly call/WhatsApp our booking administrator at +91 82941 07610. We will share live available profiles with photos and confirm your preferred time and hotel.",
    },
    {
      q: "Are the photos genuine and profiles verified?",
      a: "Yes, 100%. We verify every companion in person. You receive recent, authentic photos over WhatsApp before confirming your appointment.",
    },
    {
      q: "What payment methods are supported?",
      a: "We recommend Cash on Meeting for maximum privacy. Digital payments (UPI/Cards) can also be accommodated upon request.",
    },
    {
      q: "Are out-call services available across Hyderabad?",
      a: "Yes, our models provide out-call services to all major Hyderabad areas including Banjara Hills, Jubilee Hills, Hitech City, Gachibowli, Madhapur, Secunderabad, and Begumpet within 20-30 minutes.",
    },
  ];

  return (
    <div className="w-full font-sans text-zinc-100">
      {/* About Section imported from AboutClient */}
      <AboutClient />

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-zinc-800/80">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2 inline-block">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2"
            >
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-rose-400 font-extrabold">Q:</span> {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
