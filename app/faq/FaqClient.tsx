"use client";

import Link from "next/link";
import { useState } from "react";
import { trackWhatsAppClick } from "../utils/trackWhatsapp";
import WhatsAppIcon from "../components/WhatsAppIcon";

const faqs = [
  {
    category: "Booking & Availability",
    question: "How do I book an escort in Hyderabad?",
    answer:
      "You can book directly via WhatsApp, direct phone call (+91 8294107610), or through our Contact page. Simply let us know your preferred companion category, meeting date/time, and hotel or residential location in Hyderabad. We confirm all bookings discreetly within minutes.",
  },
  {
    category: "Booking & Availability",
    question: "What areas in Hyderabad do you provide service to?",
    answer:
      "We provide prompt doorstep outcall and premium incall services across all major areas in Hyderabad including Banjara Hills, Jubilee Hills, Gachibowli, HITEC City, Madhapur, Kondapur, Begumpet, Somajiguda, Kukatpally, Secunderabad, and Financial District.",
  },
  {
    category: "Privacy & Discretion",
    question: "Is client privacy 100% guaranteed?",
    answer:
      "Yes, absolute privacy is our highest priority. We operate under a strict zero-data-retention policy. We never store personal information, chat transcripts, or phone numbers. All interactions are confidential and end-to-end encrypted.",
  },
  {
    category: "Pricing & Payments",
    question: "What payment methods do you accept? Is advance payment required?",
    answer:
      "No advance payment is required for regular bookings! We follow 100% Cash on Delivery (COD) / Direct payment upon arrival. You only pay when you meet your companion.",
  },
  {
    category: "Authenticity & Safety",
    question: "Are the companion photos 100% real and verified?",
    answer:
      "Yes, 100% of our photos and profiles are verified and up-to-date. What you see is who arrives. We maintain genuine profiles to guarantee complete customer satisfaction.",
  },
  {
    category: "Service Types",
    question: "Do you offer both In-call and Out-call escort services?",
    answer:
      "Yes! We offer 5-star hotel outcall services directly to your room or private residence, as well as luxury, discreet incall arrangements across top spots in Hyderabad.",
  },
  {
    category: "Booking & Availability",
    question: "Can I reschedule or cancel my booking?",
    answer:
      "Yes, you can reschedule or cancel anytime prior to the confirmed meeting slot by messaging us on WhatsApp or calling us directly. There are no cancellation penalties.",
  },
  {
    category: "Service Types",
    question: "What types of companion categories are available?",
    answer:
      "We offer a premier selection including VIP Models, Russian & Foreign Escorts, College Girls, High-Profile Independent Companions, Air Hostesses, and Corporate Companions available 24/7.",
  },
];

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Booking & Availability", "Privacy & Discretion", "Pricing & Payments", "Authenticity & Safety", "Service Types"];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-zinc-800/60">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-zinc-950 to-amber-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-600/15 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-widest border border-rose-500/20 shadow-sm">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 bg-clip-text text-transparent">
              FAQ & Client Guide
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Get clear, upfront answers regarding booking procedures, discretion, payment terms, and our premium escort services in Hyderabad.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions (e.g. payment, privacy, booking, areas)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all shadow-inner"
              />
              <span className="absolute left-4 top-3.5 text-zinc-400 text-lg">🔍</span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-3.5 text-xs text-zinc-400 hover:text-white bg-zinc-800 px-2 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-600/30 font-semibold"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <p className="text-zinc-400 text-base">No questions match your search.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-3 text-rose-400 text-sm hover:underline font-semibold"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-rose-500/50 bg-zinc-900/90 shadow-xl shadow-rose-950/20 ring-1 ring-rose-500/20"
                      : "border-zinc-800/90 bg-zinc-900/50 hover:border-zinc-700/90 hover:bg-zinc-900/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex items-center justify-between px-6 py-5 gap-4 focus:outline-none"
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400/90 block">
                        {faq.category}
                      </span>
                      <span className="text-base sm:text-lg font-semibold text-zinc-100 block">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? "bg-rose-600 text-white border-rose-500 rotate-180 shadow-md shadow-rose-600/30"
                          : "bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-white"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-zinc-800/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 24x7 Instant Assistance Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-3xl border border-rose-500/30 bg-gradient-to-br from-rose-950/40 via-zinc-900 to-zinc-950 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Have a Specific Question?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Our concierge manager is active right now to assist you with quick bookings, special requirements, and verified photos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918294107610"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  name: "FAQ Page Inquiry",
                  city: "Hyderabad",
                  whatsappNumber: "+918294107610",
                })
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all shadow-xl shadow-emerald-600/30 hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" size={20} />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href="tel:+918294107610"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-sm transition-all shadow-xl shadow-rose-600/30 hover:scale-105"
            >
              📞 Call: +91 8294107610
            </a>
            <Link
              href="/product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-semibold text-sm transition-all border border-zinc-700"
            >
              ✨ View All Models
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
