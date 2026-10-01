import type { Metadata } from "next";
import HelpSupportClient from "./HelpSupportClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlriya.in";

export const metadata: Metadata = {
  title: "Help & Support - Riya Escorts Hyderabad | 24/7 Customer Assistance",
  description:
    "Find answers to frequently asked questions and get 24/7 direct assistance for booking verified escorts in Hyderabad.",
  alternates: {
    canonical: `${siteUrl}/helpSupport`,
  },
  openGraph: {
    title: "Help & Support - Riya Escorts Hyderabad | 24/7 Customer Assistance",
    description:
      "Find answers to frequently asked questions and get 24/7 direct assistance for booking verified escorts in Hyderabad.",
    url: `${siteUrl}/helpSupport`,
    type: "website",
  },
};

export default function HelpSupportPage() {
  return <HelpSupportClient />;
}
