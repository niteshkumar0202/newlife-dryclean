import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Steam Press Service in Ranchi",
  description:
    "Professional steam press service in Ranchi by NewLife Dryclean for crisp, carefully finished garments with convenient home pickup.",
  alternates: {
    canonical: "/steam-press-ranchi",
  },
};

export default function SteamPressRanchiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Steam Press"
      title="Professional Steam Press"
      highlight="in Ranchi"
      description="Give your garments a crisp and polished appearance with professional steam pressing from NewLife Dryclean."
      introTitle="A Clean, Crisp Finish for Your Clothes"
      introText="Professional steam pressing helps improve garment presentation while giving attention to fabric, shape and finish."
      suitableFor={[
        "Formal Shirts",
        "Trousers",
        "Sarees",
        "Suits",
        "Kurtas",
        "Daily Wear",
      ]}
    />
  );
}