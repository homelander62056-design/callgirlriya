import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions - Riya Escorts Hyderabad",
  description:
    "Read the terms, conditions, booking policies, privacy rules, and disclaimer for Riya Escorts Hyderabad VIP companionship services.",
};

export default function TermsConditionPage() {
  return (
    <div className="min-h-screen bg-[#0c0a09] font-sans text-zinc-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-zinc-400 flex items-center gap-2 font-medium">
          <Link href="/" className="hover:text-rose-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-rose-400 font-semibold">Terms & Conditions</span>
        </nav>

        {/* Header */}
        <div className="border-b border-zinc-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Terms & <span className="text-rose-400">Conditions</span>
          </h1>
          <p className="text-zinc-400 text-sm mt-2">
            Last updated: September 2026. Please read these terms carefully before utilizing our services.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <section className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-xl font-bold text-white">1. Age Requirement (18+)</h2>
            <p>
              All clients and users of this website must be at least 18 years of age (or the legal age of majority in your jurisdiction). By accessing or using this website, you explicitly confirm that you meet the minimum age requirement.
            </p>
          </section>

          <section className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-xl font-bold text-white">2. Mutual Consent & Respect</h2>
            <p>
              All interactions, meetings, and companion services are strictly based on mutual adult consent and respect. Any form of harassment, disrespectful conduct, or illegal behavior will result in immediate termination of service without refund.
            </p>
          </section>

          <section className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-xl font-bold text-white">3. Payment & Booking Policy</h2>
            <p>
              We operate strictly under a <strong>Cash on Meeting</strong> policy. No advance transfers or online deposits are required for standard bookings. Payment is made directly in person upon meeting your selected companion.
            </p>
          </section>

          <section className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-xl font-bold text-white">4. Privacy & Confidentiality</h2>
            <p>
              We guarantee 100% discretion and confidentiality for all our clients. We do not store, disclose, or sell any personal information, booking records, or contact data to third parties under any circumstances.
            </p>
          </section>

          <section className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-xl font-bold text-white">5. Cancellation Policy</h2>
            <p>
              If you need to reschedule or cancel a booking, we kindly request at least 1 hour advance notice so our companions can adjust their schedule accordingly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
