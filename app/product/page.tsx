import type { Metadata } from "next";
import ProductClient from "./ProductClient";

export const metadata: Metadata = {
  title: "Our Verified Models - VIP Escorts & Call Girls in Hyderabad",
  description:
    "Browse our exclusive list of verified VIP call girls and escort models in Hyderabad. Available 24/7 across Banjara Hills, Jubilee Hills, Hitech City, Gachibowli, and more.",
};

export default function ProductPage() {
  return <ProductClient />;
}
