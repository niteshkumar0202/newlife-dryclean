import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Bridal Wear Dry Cleaning in Ranchi",
  description:
    "Professional bridal wear dry cleaning in Ranchi for lehengas, sarees and special-occasion garments at NewLife Dryclean.",
  alternates: {
    canonical: "/bridal-wear-dry-cleaning-ranchi",
  },
};

export default function BridalWearDryCleaningPage() {
  return (
    <ServicePageTemplate
      eyebrow="Bridal Wear"
      title="Bridal Wear Dry Cleaning"
      highlight="in Ranchi"
      description="Special garment care for bridal lehengas, sarees, designer outfits and other valuable occasion wear."
      introTitle="Special Attention for Special Garments"
      introText="Bridal and occasion garments can include delicate fabrics, embroidery and decorative details. Professional handling helps give these garments the attention they require."
      suitableFor={[
        "Bridal Lehengas",
        "Wedding Sarees",
        "Designer Sarees",
        "Embroidered Outfits",
        "Sherwanis",
        "Reception & Party Wear",
      ]}
    />
  );
}