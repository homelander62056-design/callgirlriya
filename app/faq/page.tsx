import type { Metadata } from "next";
import FaqClient from "./FaqClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlriya.in";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Riya Escorts Hyderabad",
  description:
    "Frequently Asked Questions (FAQ) about booking escorts, pricing, Cash on Delivery, privacy, outcall/incall services in Hyderabad. Instant 24/7 answers.",
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | Riya Escorts Hyderabad",
    description:
      "Find answers to all frequently asked questions regarding escort services, hotel delivery, privacy, and booking in Hyderabad.",
    url: `${siteUrl}/faq`,
    type: "website",
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book an escort in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book directly via WhatsApp or direct phone call (+91 8294107610). Share your companion preference, time, and location for immediate confirmation.",
        },
      },
      {
        "@type": "Question",
        "name": "What areas in Hyderabad do you provide service to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide services across Banjara Hills, Jubilee Hills, Gachibowli, HITEC City, Madhapur, Kondapur, Begumpet, Somajiguda, Kukatpally, Secunderabad, and Financial District.",
        },
      },
      {
        "@type": "Question",
        "name": "Is client privacy guaranteed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we maintain 100% discretion and zero data retention. All chats and booking details are strictly confidential.",
        },
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept Cash on Delivery (COD) / Direct payment upon arrival. No advance payment required for regular bookings.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient />
    </>
  );
}
