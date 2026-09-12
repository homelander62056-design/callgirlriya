"use client";

import Link from "next/link";
import { useState } from "react";
import { trackWhatsAppClick } from "../utils/trackWhatsapp";
import WhatsAppIcon from "../components/WhatsAppIcon";

const faqs = [
  {
    question: "How do I book an escort?",
    answer:
      "You can book directly via WhatsApp, phone call, or through our Contact page. Simply share your preferred date, time, location, and companion preference, and we'll confirm your booking within minutes.",
  },
  {
    question: "Is my privacy guaranteed?",
    answer:
      "Absolutely. We follow a strict zero-data-retention policy. All conversations are encrypted, and no personal information is stored or shared. Your privacy and discretion are our top priorities.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept Cash on Delivery (COD) at the time of meeting. Payment is made directly to the companion upon arrival — no advance payment is required.",
  },
  {
    question: "Are the photos of models real?",
    answer:
      "Yes. All photos on our website are 100% verified and recent. We conduct regular photo verification to ensure authenticity and prevent any discrepancies.",
  },
  {
    question: "What areas in Hyderabad do you serve?",
    answer:
      "We provide doorstep and hotel delivery services across all major areas of Hyderabad including Banjara Hills, Jubilee Hills, Gachibowli, HITEC City, Madhapur, Secunderabad, and more.",
  },
  {
    question: "Can I cancel or reschedule a booking?",
    answer:
      "Yes. You can cancel or reschedule your booking at any time before the confirmed meeting time by contacting us via WhatsApp or phone. There are no cancellation charges.",
  },
  {
    question: "Do you offer outcall and incall services?",
    answer:
      "Yes, we offer both outcall (we come to your hotel/location) and incall (you visit our premium location) services. Share your preference during booking.",
  },
  {
    question: "Is there a minimum booking duration?",
    answer:
      "The minimum booking duration is 1 hour. Extended bookings for full night or multiple hours are also available at special rates.",
  },
];

const supportCategories = [
  {
    icon: "📋",
    title: "Booking Assistance",
    description: "Help with new bookings, modifications, or cancellations.",
  },
  {
    icon: "🔒",
    title: "Privacy & Security",
    description: "Questions about our data policies and confidentiality measures.",
  },
  {
    icon: "💳",
    title: "Payment Issues",
    description: "Support for payment-related queries and billing concerns.",
  },
  {
    icon: "⭐",
    title: "Feedback & Complaints",
    description: "Share your experience or report an issue for immediate resolution.",
  },
];

export default function HelpSupportClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/40 via-zinc-950 to-amber-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-600/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-widest border border-rose-500/20">
            Help & Support
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 bg-clip-text text-transparent">
              How Can We Help You?
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions or reach out to our 24/7 support
            team for personalized assistance. We&apos;re here for you anytime.
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportCategories.map((cat, i) => (
            <div
              key={i}
              className="group bg-zinc-900/80 border border-zinc-800/80 rounded-2xl p-6 hover:border-rose-500/40 hover:bg-zinc-900 transition-all duration-300 cursor-default"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-1">
                {cat.title}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-zinc-500 text-sm">
            Quick answers to common queries about our services.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${openFaq === index
                  ? "border-rose-500/40 bg-zinc-900/90 shadow-lg shadow-rose-500/5"
                  : "border-zinc-800/80 bg-zinc-900/50 hover:border-zinc-700"
                }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full text-left flex items-center justify-between px-5 py-4 gap-4"
              >
                <span className="text-sm font-semibold text-zinc-100">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-rose-400" : ""
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
        <div className="rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Still Need Help?
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto mb-8">
            Our dedicated support team is available 24/7. Reach out via
            WhatsApp or call us directly — we typically respond within minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918294107610"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  name: "Help Support Page",
                  city: "Hyderabad",
                  whatsappNumber: "+918294107610",
                })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/30"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" size={20} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+918294107610"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm transition-all shadow-lg shadow-rose-600/30"
            >
              📞 Call Now — 24/7
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm transition-all border border-zinc-700"
            >
              📩 Contact Form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
