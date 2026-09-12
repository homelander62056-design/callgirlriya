import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Riya Escorts Hyderabad | 100% Confidentiality Assured",
  description:
    "Learn about our strict privacy policy, 100% client discretion, data security, zero-retention policy, and confidentiality guarantee at Riya Escorts Hyderabad.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-14 bg-gradient-to-b from-rose-950/20 via-zinc-900/40 to-[#0c0a09] border-b border-zinc-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,29,72,0.12),rgba(255,255,255,0))]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-rose-400 font-semibold">Privacy Policy</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium mb-3">
            🔒 100% Discretion & Zero Data Sharing
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Privacy Policy &{" "}
            <span className="bg-gradient-to-r from-rose-400 to-amber-300 bg-clip-text text-transparent">
              Client Confidentiality
            </span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            At Riya Escorts Hyderabad, we consider your personal privacy and discretion
            to be of paramount importance. This document outlines our data handling
            practices, zero-retention policies, and commitments to protecting your identity.
          </p>
          <div className="mt-4 text-xs text-zinc-500">
            Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Main Policy Details */}
          <div className="lg:col-span-2 space-y-10 text-sm sm:text-base leading-relaxed text-zinc-300">
            {/* Section 1 */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-lg bg-rose-500/10 text-rose-400 font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Our Commitment to 100% Privacy
                </h2>
              </div>
              <p>
                We understand the sensitive nature of escort companionship services.
                From the moment you contact our agency to the completion of your booking,
                your personal identity, communication records, and location details remain
                entirely confidential. We do not maintain public client registers, nor do we
                ever publish, sell, or trade your personal data.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-lg bg-rose-500/10 text-rose-400 font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Strict Age Restriction (18+ Policy)
                </h2>
              </div>
              <p>
                Our services, promotional materials, and directory listings are exclusively
                intended for individuals aged <strong>18 years or older</strong> (or the
                legal age of majority in your jurisdiction). We do not knowingly collect,
                store, or process information from minors. Anyone under the age of 18 is
                strictly prohibited from submitting details or utilizing this platform.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-lg bg-rose-500/10 text-rose-400 font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Information We May Collect
                </h2>
              </div>
              <p>
                We collect only the bare minimum details required to facilitate and verify
                your appointment:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-300">
                <li>
                  <strong>Contact Details:</strong> Your first name or nickname, and your
                  preferred telephone or WhatsApp number.
                </li>
                <li>
                  <strong>Booking Preferences:</strong> Preferred companion category (e.g.,
                  Russian, VIP Model, College girl, Housewife), appointment time, and duration.
                </li>
                <li>
                  <strong>Location Details:</strong> Selected hotel, resort, or residential
                  locality within Hyderabad for dispatch coordination.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-lg bg-rose-500/10 text-rose-400 font-bold flex items-center justify-center text-sm">
                  4
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Zero-Retention & Auto-Purge Protocol
                </h2>
              </div>
              <p>
                Unlike standard corporate services, we enforce an active
                <strong> Zero Data Retention Policy</strong>:
              </p>
              <p>
                Once your appointment is confirmed and successfully fulfilled, temporary
                booking logs, chat messages, and location coordinates are deleted from our
                active communication channels. We do not build marketing mailing lists, and we
                will never send unsolicited SMS, marketing broadcasts, or follow-up calls.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-lg bg-rose-500/10 text-rose-400 font-bold flex items-center justify-center text-sm">
                  5
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  No Third-Party Data Sharing
                </h2>
              </div>
              <p>
                Under no circumstances do we sell, rent, lease, or distribute client contact
                information to advertisers, data brokers, or external agencies. All booking
                communication remains strictly between you and our verified booking
                administrator.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-lg bg-rose-500/10 text-rose-400 font-bold flex items-center justify-center text-sm">
                  6
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Cookies and Anonymous Browsing
                </h2>
              </div>
              <p>
                Our website may use basic technical session cookies to ensure fast loading
                times and proper layout responsiveness across mobile and desktop devices.
                These technical cookies do not store personally identifiable data and can be
                cleared through your web browser settings at any time.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-lg bg-rose-500/10 text-rose-400 font-bold flex items-center justify-center text-sm">
                  7
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Your Rights & Data Removal Requests
                </h2>
              </div>
              <p>
                You hold full authority over your data. You may request immediate deletion of
                any existing inquiry messages, call logs, or WhatsApp interaction history at
                any time by contacting our administrator.
              </p>
            </div>
          </div>

          {/* Right Sidebar - Quick Security Badges & Support */}
          <div className="lg:col-span-1 space-y-6 sticky top-24">
            {/* Trust Badge Card */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-rose-900/30 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="h-10 w-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-xl font-bold">
                🛡️
              </div>
              <h3 className="text-base font-bold text-white">Privacy Guarantee</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We guarantee total anonymity. No bills with revealing titles, no unwanted
                calls, and no saved profile tracking.
              </p>
              <div className="pt-2 border-t border-zinc-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">✓</span> 256-bit SSL Encrypted
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">✓</span> 100% Cash or Safe Pay
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">✓</span> Direct Admin Communication
                </div>
              </div>
            </div>

            {/* Direct Privacy Desk Card */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white">Privacy & Booking Help</h3>
              <p className="text-xs text-zinc-400">
                Have questions regarding your discretion or wish to book a session immediately?
              </p>

              <div className="space-y-2.5">
                <Link
                  href="/contact"
                  className="block w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 shadow-md shadow-rose-600/30 transition-all"
                >
                  Go to Contact & Booking →
                </Link>
                <a
                  href="tel:+918294107610"
                  className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-750 hover:text-white transition-colors"
                >
                  <span>📞</span> Call +91 82941 07610
                </a>
                <a
                  href="https://wa.me/918294107610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 hover:bg-emerald-900/40 transition-colors"
                >
                  <span>💬</span> WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}