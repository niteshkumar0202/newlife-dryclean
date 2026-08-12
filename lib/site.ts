export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://newlife-dryclean-etrw8hs6d-nitesh-kumar1.vercel.app";

export const BUSINESS_NAME = "NewLife Dryclean";
export const BUSINESS_PHONE = "+919507111333";
export const DISPLAY_PHONE = "9507111333";
export const WHATSAPP_URL = `https://wa.me/${BUSINESS_PHONE.replace("+", "")}`;
export const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/search/?api=1&query=NewLife+Dryclean+Shrilok+Complex+Ranchi";

export const services = [
  {
    name: "Dry Cleaning",
    short: "Professional care for everyday, premium and special-occasion garments.",
    href: "/dry-cleaning-ranchi",
    icon: "👔",
  },
  {
    name: "Steam Press",
    short: "Crisp finishing that helps garments look polished and presentation-ready.",
    href: "/steam-press-ranchi",
    icon: "♨️",
  },
  {
    name: "Garment Polish",
    short: "Finishing care designed to refresh the appearance of selected garments.",
    href: "/garment-polish-ranchi",
    icon: "✨",
  },
  {
    name: "Darning",
    short: "Thoughtful repair to help extend the usable life of your clothes.",
    href: "/darning-ranchi",
    icon: "🧵",
  },
  {
    name: "Bridal Wear Care",
    short: "Special attention for bridal, designer and occasion garments.",
    href: "/bridal-wear-dry-cleaning-ranchi",
    icon: "👰",
  },
];

export const branches = [
  {
    slug: "old-hb-road",
    name: "Old H.B. Road",
    address: [
      "Shrilok Complex",
      "Near Santevita Hospital",
      "Below Seventh Heaven Hotel",
      "Ranchi, Jharkhand",
    ],
    shortAddress: "Shrilok Complex, near Santevita Hospital",
    mapsUrl: "https://maps.app.goo.gl/ngf2ixtojwwf96wo9",
  },
  {
    slug: "kanke",
    name: "Kanke",
    address: [
      "Amiya Apartment, Ground Floor",
      "Opp. Kanke Petrol Pump",
      "Near Premsons Maruti",
      "Ranchi, Jharkhand",
    ],
    shortAddress: "Amiya Apartment, opposite Kanke Petrol Pump",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=23.436986358665116,85.31445587645102",
  },
  {
    slug: "kadru",
    name: "Kadru",
    address: [
      "Skyline Complex",
      "Beside J.P. Hyundai",
      "Below Soros",
      "Ranchi, Jharkhand",
    ],
    shortAddress: "Skyline Complex, beside J.P. Hyundai",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=23.35393386655715,85.32143389602744",
  },
];
