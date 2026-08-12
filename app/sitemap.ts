import type { MetadataRoute } from "next";
import { SITE_URL, branches, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((service) => ({
      url: `${SITE_URL}${service.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: service.name === "Dry Cleaning" || service.name === "Bridal Wear Care" ? 0.9 : 0.8,
    })),
    ...branches.map((branch) => ({
      url: `${SITE_URL}/locations/${branch.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
