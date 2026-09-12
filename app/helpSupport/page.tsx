import type { Metadata } from "next";
import HelpSupportClient from "./HelpSupportClient";

export const metadata: Metadata = {
  title: "Help & Support - Riya Escorts Hyderabad | 24/7 Customer Assistance",
  description:
    "Find answers to frequently asked questions and get 24/7 direct assistance for booking verified escorts in Hyderabad.",
};

export default function HelpSupportPage() {
  return <HelpSupportClient />;
}
