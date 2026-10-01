import type { Metadata } from "next";
import SecurityClient from "./SecurityClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlriya.in";

export const metadata: Metadata = {
  title: "Security & Trust - Riya Escorts Hyderabad | 100% Confidentiality Assured",
  description:
    "Learn about our client security, confidentiality guarantee, end-to-end encrypted booking, and zero-retention privacy protocols at Riya Escorts Hyderabad.",
  alternates: {
    canonical: `${siteUrl}/security`,
  },
  openGraph: {
    title: "Security & Trust - Riya Escorts Hyderabad | 100% Confidentiality Assured",
    description:
      "Learn about our client security, confidentiality guarantee, end-to-end encrypted booking, and zero-retention privacy protocols at Riya Escorts Hyderabad.",
    url: `${siteUrl}/security`,
    type: "website",
  },
};

export default function SecurityPage() {
  return <SecurityClient />;
}
