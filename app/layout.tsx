import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderPage from "./components/header";
import FooterPage from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#d62860",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlriya.in";

export const metadata: Metadata = {
  title: {
    default: "Riya Escorts Hyderabad | #1 VIP Call Girls & Escorts Service",
    template: "%s | Riya Escorts Hyderabad",
  },
  description:
    "Riya Escorts Hyderabad provides professional, elegant, and discreet escort services in Hyderabad. Explore verified call girls, VIP models, and contact us 24/7.",
  authors: [{ name: "Riya Escorts Hyderabad" }],
  keywords: [
    "call girl",
    "cal girl",
    "call girl Hyderabad",
    "call girls in Hyderabad",
    "Hyderabad call girl service",
    "escort service",
    "escort service in Hyderabad",
    "Hyderabad escort services",
    "Riya escort service",
    "calgirlriya",
    "call girl Riya",
    "independent escorts Hyderabad",
    "VIP escorts Hyderabad",
    "Russian escorts in Hyderabad",
    "college girl escorts Hyderabad",
    "housewife escorts Hyderabad",
    "celebrity escorts Hyderabad",
    "air hostess escorts Hyderabad",
    "model escorts Hyderabad",
    "Banjara Hills call girl",
    "Banjara Hills escorts",
    "Jubilee Hills call girls",
    "Jubilee Hills escorts",
    "Hitec City call girl",
    "Hitec City escorts",
    "Gachibowli call girl",
    "Gachibowli escort service",
    "Madhapur call girl",
    "Madhapur IT park escorts",
    "Kondapur call girl",
    "Kondapur escort service",
    "Begumpet call girl",
    "Begumpet escorts",
    "Somajiguda call girls",
    "Somajiguda escorts",
    "Kukatpally call girl",
    "Kukatpally escorts",
    "Financial District escorts",
    "Manikonda call girl",
    "Secunderabad call girl service",
    "Secunderabad escorts",
    "Ameerpet call girl",
    "Ameerpet escorts",
    "Punjagutta escorts",
    "Miyapur call girl",
    "hotel outcall escorts Hyderabad",
    "incall escort service Hyderabad",
    "24/7 call girl service Hyderabad",
    "genuine call girl in Hyderabad",
    "verified Hyderabad escorts",
    "luxury escorts in Hyderabad",
    "high profile escorts Hyderabad",
    "cash on delivery call girl Hyderabad",
    "WhatsApp call girl number Hyderabad",
    "Hyderabad companion service",
    "best escort service Hyderabad",
  ],
  creator: "Riya Escorts Hyderabad",
  publisher: "Riya Escorts Hyderabad",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Riya Escorts Hyderabad | #1 VIP Call Girls & Escorts Service",
    description:
      "Riya Escorts Hyderabad provides professional, elegant, and discreet escort services in Hyderabad. Explore verified profiles and contact us 24/7.",
    url: siteUrl,
    siteName: "Riya Escorts Hyderabad",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riya Escorts Hyderabad | #1 VIP Call Girls & Escorts Service",
    description:
      "Riya Escorts Hyderabad provides professional, elegant, and discreet escort services in Hyderabad. Explore verified profiles and contact us 24/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Riya Escorts Hyderabad",
      "alternateName": ["CalGirl Riya", "Riya Hyderabad Escorts", "Call Girl Hyderabad"],
      "description":
        "Premier Escort Service and Call Girls in Hyderabad. 100% verified independent companions available 24/7.",
      "publisher": {
        "@id": `${siteUrl}/#organization`,
      },
      "inLanguage": "en-IN",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteUrl}/product?city={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#organization`,
      "name": "Riya Escorts Hyderabad",
      "alternateName": "CalGirl Riya",
      "url": siteUrl,
      "logo": `${siteUrl}/icon.png`,
      "image": `${siteUrl}/images/homepart.png`,
      "description":
        "Verified VIP Call Girls & Escort Service in Hyderabad with direct WhatsApp and phone booking.",
      "telephone": "+91-8294107610",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Online",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Banjara Hills / Jubilee Hills / Hitec City",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500034",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.3850,
        "longitude": 78.4867,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "00:00",
          "closes": "23:59",
        },
      ],
      "areaServed": [
        "Hyderabad",
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
        "Secunderabad",
        "Ameerpet",
        "Punjagutta",
        "Miyapur",
        "Dilsukhnagar",
        "LB Nagar",
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1480",
        "bestRating": "5",
        "worstRating": "1",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8294107610",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Telugu"],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I book a verified call girl in Hyderabad via Riya Escorts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Booking is instant and 100% confidential. Browse our verified models gallery on calgirlriya, select your preferred companion, and click the WhatsApp or Call button (+91 82941 07610) to confirm your booking within minutes.",
          },
        },
        {
          "@type": "Question",
          "name": "Which areas in Hyderabad do you provide escort services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We provide 24/7 in-call and out-call escort services across all prime locations in Hyderabad including Banjara Hills, Jubilee Hills, Hitec City, Gachibowli, Madhapur, Kondapur, Begumpet, Somajiguda, Kukatpally, Financial District, Secunderabad, and Ameerpet.",
          },
        },
        {
          "@type": "Question",
          "name": "Are the escort photos and profiles 100% genuine and verified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, every companion profile on Riya Escorts Hyderabad is verified with genuine recent photos, accurate specifications, and real direct contact information.",
          },
        },
        {
          "@type": "Question",
          "name": "Is my privacy and confidentiality guaranteed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Absolutely. We maintain strict discretion and client privacy. No personal data is shared or retained.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between bg-white text-zinc-800 font-sans">
        <HeaderPage />
        <main className="flex-1">{children}</main>
        <FooterPage />
      </body>
    </html>
  );
}
