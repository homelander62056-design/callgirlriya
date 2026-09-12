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

  const title = product.metaTitle || `${product.name} – ${product.city} Escort | VIP Call Girl Hyderabad`;
  const description =
    product.metaDescription ||
    `Book ${product.name}, a verified ${product.age}-year-old VIP escort in ${product.city}, Hyderabad. Available 24/7 for hotel & home outcalls. 100% genuine photos & privacy.`;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlriya.in";
  const canonicalUrl = `${siteUrl}/product/${product.id}`;

  return {
    title,
    description,
    keywords: [
      product.name,
      `${product.city} call girls`,
      `${product.city} escorts`,
      `escorts in ${product.city}`,
      "Hyderabad call girls",
      "Hyderabad VIP escorts",
      "independent call girls Hyderabad",
      "genuine escort service Hyderabad",
      "cash on meeting escort Hyderabad",
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
          alt: `${product.name} - Escort in ${product.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
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

  // Structured Data (JSON-LD) for Rich Results & Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: product.name,
    headline: product.title,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    url: `${siteUrl}/product/${product.id}`,
    mainEntity: {
      "@type": "Person",
      name: product.name,
      jobTitle: "VIP Companion / Escort Model",
      address: {
        "@type": "PostalAddress",
        addressLocality: product.city.replace("Hyderabad / ", ""),
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      telephone: product.phone,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
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
          name: product.name,
          item: `${siteUrl}/product/${product.id}`,
        },
      ],
    },
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
