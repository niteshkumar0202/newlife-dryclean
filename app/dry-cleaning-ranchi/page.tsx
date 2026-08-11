import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Dry Cleaning in Ranchi",
  description:
    "Professional dry cleaning in Ranchi by NewLife Dryclean with expert garment care and convenient home pickup.",
  alternates: {
    canonical: "/dry-cleaning-ranchi",
  },
};

export default function DryCleaningRanchiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Dry Cleaning"
      title="Professional Dry Cleaning"
      highlight="in Ranchi"
      description="Professional dry cleaning and garment care for formal wear, designer clothing, bridal wear and everyday garments with convenient home pickup across Ranchi."
      introTitle="Care Designed for Different Fabrics and Garments"
      introText="Different garments require different levels of attention. NewLife Dryclean provides professional dry cleaning for garments requiring careful cleaning, handling and finishing."
      suitableFor={[
        "Formal Suits",
        "Bridal Wear",
        "Designer Outfits",
        "Party Wear",
        "Jackets",
        "Delicate Garments",
      ]}
    />
  );
}