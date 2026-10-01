import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlriya.in";

export const metadata: Metadata = {
  title: "About Us - Riya Escorts Hyderabad | #1 Premier VIP Escort Agency",
  description:
    "Learn about Riya Escorts Hyderabad, the leading 24/7 VIP escort and companion service in Hyderabad offering verified models, 100% discretion, and cash on meeting.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Us - Riya Escorts Hyderabad | #1 Premier VIP Escort Agency",
    description:
      "Learn about Riya Escorts Hyderabad, the leading 24/7 VIP escort and companion service in Hyderabad offering verified models, 100% discretion, and cash on meeting.",
    url: `${siteUrl}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
