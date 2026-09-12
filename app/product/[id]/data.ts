/**
 * Helper functions for generating model specs, details, and display data
 * used by ProductDetailClient.tsx
 */

import { ProductItem, initialProductsData } from "../productsData";

export interface ModelDetails {
  displayImage: string;
  badge: string;
  timing: string;
  locationDetail: string;
  height: string;
  weight: string;
  figure: string;
  hair: string;
  eyes: string;
  languages: string;
  highlights: string[];
  bioParagraphs: string[];
  availableFor: string[];
  faqs: { question: string; answer: string }[];
}

/**
 * Gets the index of a product in the initialProductsData array.
 */
export function getProductIndex(product: ProductItem): number {
  const idx = initialProductsData.findIndex((p) => p.id === product.id);
  return idx >= 0 ? idx : 0;
}

/**
 * Generates detailed specs and content for a model's detail page.
 * Uses deterministic values based on product data for consistency.
 */
export function getModelSpecsAndDetails(product: ProductItem): ModelDetails {
  const idx = getProductIndex(product);

  // Deterministic display image
  const displayImage = product.image || `/images/image${(idx % 16) + 1}.avif`;

  // Deterministic physical specs based on index
  const heights = ["5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\""];
  const weights = ["48 kg", "50 kg", "52 kg", "54 kg", "55 kg", "56 kg", "58 kg", "53 kg"];
  const figures = ["32-26-34", "34-28-36", "34-26-34", "36-28-38", "32-24-34", "34-26-36", "36-30-38", "34-28-36"];
  const hairTypes = ["Black", "Dark Brown", "Brown", "Auburn", "Black Silky", "Dark Brown", "Brunette", "Black Long"];
  const eyeTypes = ["Brown", "Dark Brown", "Hazel", "Black", "Light Brown", "Brown", "Dark", "Amber"];
  const badges = ["VIP Model", "Premium", "Exclusive", "Top Rated", "Featured", "Elite", "Luxury", "Verified"];

  const height = heights[idx % heights.length];
  const weight = weights[idx % weights.length];
  const figure = figures[idx % figures.length];
  const hair = hairTypes[idx % hairTypes.length];
  const eyes = eyeTypes[idx % eyeTypes.length];
  const badge = badges[idx % badges.length];

  const locationDetail = `${product.city}, Hyderabad`;
  const timing = "Available 24/7";
  const languages = "Hindi, English, Telugu";

  const highlights = [
    "100% Real & Verified Photos",
    "Complete Privacy Guaranteed",
    "Cash on Meeting / No Advance",
    "5-Star Hotel & Residence Out-Call",
    "Hygienic & Safe Environment",
    `In-Call & Out-Call in ${product.city}`,
    "Girlfriend Experience (GFE)",
    "Professional & Discreet Service",
  ];

  const bioParagraphs = [
    `Meet ${product.name}, a stunning ${product.age}-year-old companion based in ${product.city}, Hyderabad. With her captivating charm and graceful personality, she offers an unforgettable experience that blends elegance with warmth.`,
    `${product.name} is well-educated, sophisticated, and known for her ability to make every encounter feel special and personalized. Whether it's a romantic dinner date, a weekend getaway, or a private rendezvous, she brings passion and genuine connection to every moment.`,
    `Available 24/7 for both in-call and out-call services across ${product.city} and surrounding areas. ${product.name} ensures complete privacy, discretion, and a premium experience that exceeds all expectations.`,
  ];

  const availableFor = [
    "Dinner Dates",
    "Hotel Visits",
    "Private Parties",
    "Weekend Getaways",
    "Companionship",
    "Girlfriend Experience",
    "Social Events",
    "Travel Companion",
  ];

  const faqs = [
    {
      question: `How can I book ${product.name} in ${product.city}?`,
      answer: `You can book ${product.name} instantly via WhatsApp or direct call. Click the WhatsApp button above to send a message, or use the Call Now button. Our response time is within 5 minutes, and ${product.name} can arrive at your location in ${product.city} within 20-30 minutes.`,
    },
    {
      question: `Are ${product.name}'s photos real and verified?`,
      answer: `Yes, 100%. All photos of ${product.name} are genuine and recently taken. We verify every profile in person. You will also receive live photos via WhatsApp before confirming your appointment for complete transparency.`,
    },
    {
      question: `What services does ${product.name} offer?`,
      answer: `${product.name} offers premium companionship services including dinner dates, hotel visits, private parties, weekend getaways, girlfriend experience (GFE), and social event accompaniment. All services are provided with complete discretion and professionalism.`,
    },
    {
      question: `What is the payment method for booking ${product.name}?`,
      answer: `We follow a Cash on Meeting policy — you pay only when you meet ${product.name} in person. No advance payment is required. This ensures complete trust and transparency in every booking.`,
    },
    {
      question: `Is my privacy guaranteed when booking ${product.name}?`,
      answer: `Absolutely. We maintain 100% confidentiality. No personal data is stored or shared with third parties. All communications are encrypted and all bookings are handled with utmost discretion.`,
    },
  ];

  return {
    displayImage,
    badge,
    timing,
    locationDetail,
    height,
    weight,
    figure,
    hair,
    eyes,
    languages,
    highlights,
    bioParagraphs,
    availableFor,
    faqs,
  };
}
