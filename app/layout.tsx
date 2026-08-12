import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NewLife Dryclean | Premium Dry Cleaning in Ranchi",
    template: "%s | NewLife Dryclean",
  },
  description:
    "NewLife Dryclean provides professional dry cleaning, steam press, garment care and home pickup services in Ranchi, Jharkhand.",
  keywords: [
    "dry cleaning in Ranchi",
    "dry cleaner Ranchi",
    "home pickup dry cleaning Ranchi",
    "steam press Ranchi",
    "bridal wear dry cleaning Ranchi",
    "suit dry cleaning Ranchi",
    "dry cleaner Kanke",
    "dry cleaner Kadru",
  ],
  creator: "NewLife Dryclean",
  publisher: "NewLife Dryclean",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "NewLife Dryclean",
    title: "NewLife Dryclean | Premium Dry Cleaning in Ranchi",
    description: "Professional dry cleaning, steam press, garment care and convenient home pickup across Ranchi.",
    images: [{ url: "/drycleaner.png", width: 1200, height: 630, alt: "NewLife Dryclean premium garment care in Ranchi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NewLife Dryclean | Premium Dry Cleaning in Ranchi",
    description: "Professional dry cleaning, garment care and home pickup services in Ranchi.",
    images: ["/drycleaner.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
