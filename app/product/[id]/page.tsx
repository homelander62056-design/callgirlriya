import type { Metadata } from "next";
import { initialProductsData } from "../productsData";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return initialProductsData.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = initialProductsData.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Model Not Found | Riya Escorts Hyderabad",
      description: "The requested model profile was not found on Riya Escorts Hyderabad.",
    };
  }

  const areaName = product.area || product.city.replace("Hyderabad / ", "");
  const title =
    product.metaTitle || `${product.name} – Call Girl in ${areaName} Hyderabad | VIP Escorts`;
  const description =
    product.metaDescription ||
    `Book ${product.name}, a verified ${product.age}-year-old VIP escort in ${areaName}, Hyderabad (PIN: ${product.postalCode || "500034"}). Available 24/7 for 5-star hotel & home outcalls with 100% genuine photos & privacy.`;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlriya.in";
  const canonicalUrl = `${siteUrl}/product/${product.id}`;
  const lat = product.latitude || 17.385;
  const lng = product.longitude || 78.4867;
  const geoPos = product.geoPosition || `${lat};${lng}`;
  const icbm = `${lat}, ${lng}`;
  const placename = product.geoPlacename || `${areaName}, Hyderabad, Telangana, India`;

  return {
    title,
    description,
    keywords: [
      product.name,
      `${areaName} call girls`,
      `${areaName} escorts`,
      `escorts in ${areaName}`,
      `call girls in ${areaName}`,
      `call girl near ${areaName}`,
      `call girls in ${product.city}`,
      `${product.city} escorts`,
      "Hyderabad call girls",
      "Hyderabad VIP escorts",
      "independent call girls Hyderabad",
      "genuine escort service Hyderabad",
      "cash on meeting escort Hyderabad",
      "hotel outcall escorts Hyderabad",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Riya Escorts Hyderabad",
      type: "profile",
      locale: "en_IN",
      images: [
        {
          url: product.image,
          width: 800,
          height: 1067,
          alt: `${product.name} - Escort in ${areaName} Hyderabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
    other: {
      "geo.region": product.geoRegion || "IN-TG",
      "geo.placename": placename,
      "geo.position": geoPos,
      ICBM: icbm,
      "geo.country": "IN",
      "DC.title": title,
      "DC.description": description,
      "DC.coverage": "Hyderabad, Telangana, India",
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
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = initialProductsData.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlriya.in";
  const canonicalUrl = `${siteUrl}/product/${product.id}`;
  const areaName = product.area || product.city.replace("Hyderabad / ", "");
  const lat = product.latitude || 17.385;
  const lng = product.longitude || 78.4867;
  const postalCode = product.postalCode || "500034";
  const title =
    product.metaTitle || `${product.name} – Call Girl in ${areaName} Hyderabad | VIP Escorts`;
  const description =
    product.metaDescription ||
    `Book ${product.name}, a verified ${product.age}-year-old VIP escort in ${areaName}, Hyderabad. Available 24/7 for luxury hotel & home outcalls with complete privacy guaranteed.`;

  // Structured Data (JSON-LD) with Rich Geo & LocalBusiness Schema for Top Google Indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description: description,
        inLanguage: "en-IN",
        mainEntity: {
          "@id": `${canonicalUrl}#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${canonicalUrl}#person`,
        name: product.name,
        jobTitle: "VIP Companion / Escort Model",
        description: product.description,
        image: `${siteUrl}${product.image}`,
        url: canonicalUrl,
        telephone: product.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: areaName,
          addressLocality: areaName,
          addressRegion: "Telangana",
          postalCode: postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: lat,
          longitude: lng,
        },
        areaServed: [
          areaName,
          "Hyderabad",
          "Telangana",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#localbusiness`,
        name: `${product.name} – Escort Service in ${areaName} Hyderabad`,
        image: `${siteUrl}${product.image}`,
        url: canonicalUrl,
        telephone: product.phone,
        priceRange: "₹₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Online",
        address: {
          "@type": "PostalAddress",
          streetAddress: areaName,
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: lat,
          longitude: lng,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.rating.toString(),
          reviewCount: "140",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Models",
            item: `${siteUrl}/product`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${product.name} (${areaName})`,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
