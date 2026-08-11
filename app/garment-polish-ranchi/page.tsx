import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Garment Polish Service in Ranchi",
  description:
    "Garment polish and professional garment finishing services in Ranchi from NewLife Dryclean.",
  alternates: {
    canonical: "/garment-polish-ranchi",
  },
};

export default function GarmentPolishRanchiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Garment Polish"
      title="Garment Polish & Finishing"
      highlight="in Ranchi"
      description="Professional garment finishing designed to help maintain the appearance and presentation of your clothing."
      introTitle="Refresh the Appearance of Your Garments"
      introText="Garment finishing and polish can help improve the presentation of selected clothing while complementing professional cleaning and pressing."
      suitableFor={[
        "Formal Wear",
        "Traditional Wear",
        "Designer Clothing",
        "Occasion Wear",
        "Sarees",
        "Premium Garments",
      ]}
    />
  );
}