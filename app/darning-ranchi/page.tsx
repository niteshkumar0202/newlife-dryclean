import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Darning & Garment Repair in Ranchi",
  description:
    "Professional darning and garment repair services in Ranchi from NewLife Dryclean.",
  alternates: {
    canonical: "/darning-ranchi",
  },
};

export default function DarningRanchiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Darning"
      title="Darning & Garment Repair"
      highlight="in Ranchi"
      description="Professional darning and garment repair services designed to help extend the usable life of selected garments."
      introTitle="Give Damaged Garments Another Life"
      introText="Minor garment damage does not always mean the garment has reached the end of its life. Appropriate repair and darning can help restore selected pieces."
      suitableFor={[
        "Trousers",
        "Shirts",
        "Sarees",
        "Traditional Wear",
        "Formal Clothing",
        "Selected Damaged Garments",
      ]}
    />
  );
}