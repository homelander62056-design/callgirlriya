import type { Metadata } from "next";
import ProductClient from "./ProductClient";
import { initialProductsData } from "./productsData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlriya.in";

export const metadata: Metadata = {
  title: "Verified Escorts & VIP Call Girls in Hyderabad | 24/7 Outcall Models Gallery",
  description:
    "Browse our verified VIP call girls and independent escort models in Hyderabad. 100% genuine photos, cash on meeting, 24/7 5-star hotel & home outcalls across Banjara Hills, Jubilee Hills, Hitec City, Gachibowli, Madhapur & all areas.",
  keywords: [
    "call girl Hyderabad",
    "call girls in Hyderabad",
    "Hyderabad VIP escorts",
    "independent escorts Hyderabad",
    "Banjara Hills call girl",
    "Jubilee Hills escorts",
    "Hitec City call girl",
    "Gachibowli escort service",
    "Madhapur escorts",
    "verified call girls Hyderabad",
    "hotel outcall escorts Hyderabad",
    "cash on meeting escorts Hyderabad",
  ],
  alternates: {
    canonical: `${siteUrl}/product`,
  },
  openGraph: {
    title: "Verified Escorts & VIP Call Girls in Hyderabad | Models Gallery",
    description:
      "Explore 100% verified VIP escort models and call girls in Hyderabad. Available 24/7 for 5-star hotel and home outcalls across all locations.",
    url: `${siteUrl}/product`,
    siteName: "Riya Escorts Hyderabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/homepart.png",
        width: 1200,
        height: 630,
        alt: "Verified Call Girls and VIP Escorts in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verified Escorts & VIP Call Girls in Hyderabad | Models Gallery",
    description:
      "Explore 100% verified VIP escort models and call girls in Hyderabad. 24/7 hotel outcalls available.",
    images: ["/images/homepart.png"],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad, Telangana, India",
    "geo.position": "17.3850;78.4867",
    ICBM: "17.3850, 78.4867",
    "geo.country": "IN",
    "DC.title": "Verified Escorts & VIP Call Girls in Hyderabad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function ProductPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: initialProductsData.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
      url: `${siteUrl}/product/${item.id}`,
      image: `${siteUrl}${item.image}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ProductClient />
    </>
  );
}

