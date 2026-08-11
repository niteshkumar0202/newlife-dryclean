import ServiceCard from "@/components/ServiceCard";
import BranchCard from "@/components/BranchCard";
import PickupForm from "@/components/PickupForm";
import GarmentCard from "@/components/GarmentCard";
import MobileNav from "@/components/MobileNav";
import FloatingActions from "@/components/FloatingActions";
import { SITE_URL } from "@/lib/site";
import Image from "next/image";

import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

const services = [
  {
    name: "Dry Cleaning",
    icon: "👔",
    description:
      "Professional cleaning and garment care for your everyday and special clothing.",
    href: "/dry-cleaning-ranchi",
  },
  {
    name: "Steam Press",
    icon: "♨️",
    description:
      "Give your garments a crisp, polished and premium finish.",
    href: "/steam-press-ranchi",
  },
  {
    name: "Garment Polish",
    icon: "✨",
    description:
      "Special care to help maintain the appearance of your garments.",
    href: "/garment-polish-ranchi",
  },
  {
    name: "Darning",
    icon: "🧵",
    description:
      "Garment repair and darning services to help extend the life of your clothes.",
    href: "/darning-ranchi",
  },
];
const garments = [
  {
    name: "Bridal Wear",
    icon: "👰",
  },
  {
    name: "Party Dresses",
    icon: "👗",
  },
  {
    name: "Formal Suits",
    icon: "🕴️",
  },
  {
    name: "Designer Wear",
    icon: "✨",
  },
  {
    name: "Daily Wear",
    icon: "👕",
  },
];

const branches = [
  {
    name: "Old H.B. Road",
    address: [
      "Shrilok Complex",
      "Near Santevita Hospital",
      "Below Seventh Heaven Hotel",
    ],
    mapsUrl: "https://maps.app.goo.gl/ngf2ixtojwwf96wo9",
  },
  {
    name: "Kanke",
    address: [
      "Amiya Apartment, Ground Floor",
      "Opp. Kanke Petrol Pump",
      "Near Premsons Maruti",
    ],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=23.436986358665116,85.31445587645102",
  },
  {
    name: "Kadru",
    address: [
      "Skyline Complex",
      "Beside J.P. Hyundai",
      "Below Soros",
    ],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=23.35393386655715,85.32143389602744",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",

    name: "NewLife Dryclean",

    description:
      "Professional dry cleaning, steam press, garment care and home pickup services in Ranchi, Jharkhand.",

    url: "SITE_URL",

    telephone: "+91-9507111333",

    areaServed: {
      "@type": "City",
      name: "Ranchi",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Ranchi",
      addressRegion: "Jharkhand",
      addressCountry: "IN",
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Garment Care Services",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dry Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Steam Press",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Garment Polish",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Darning",
          },
        },
      ],
    },
  };

  return (
    <>
      {/* ================= STRUCTURED DATA ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ================= NAVIGATION ================= */}

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">

          {/* Brand */}

          <a href="/" className="group">
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-sm">
                N
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight text-gray-950">
                  NewLife Dryclean
                </p>

                <p className="text-xs font-medium tracking-wide text-gray-500">
                  Premium Garment Care • Ranchi
                </p>
              </div>

            </div>
          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-7 text-sm font-medium text-gray-700 lg:flex">

            <a
              href="#services"
              className="transition hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="#garments"
              className="transition hover:text-blue-600"
            >
              Garments
            </a>

            <a
              href="/about"
              className="transition hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#how-it-works"
              className="transition hover:text-blue-600"
            >
              How It Works
            </a>

            <a
              href="#reviews"
              className="transition hover:text-blue-600"
            >
              Reviews
            </a>

            <a
              href="#locations"
              className="transition hover:text-blue-600"
            >
              Locations
            </a>

          </div>

          {/* Navigation Actions */}

          <div className="flex items-center gap-3">

            <a
              href="#pickup"
              className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:inline-flex"
            >
              Book Pickup
              <ArrowRight size={16} />
            </a>

            <MobileNav />

          </div>

        </nav>
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24">

          <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <Sparkles size={16} />
                Premium Dry Cleaning in Ranchi
              </div>

              <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-gray-950 md:text-6xl lg:text-7xl">
                Premium Care
                <br />
                for Clothes You
                <span className="block text-blue-600">
                  Truly Value.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
                Professional dry cleaning, steam pressing, garment care and
                convenient home pickup for bridal wear, suits, designer outfits
                and everyday clothing across Ranchi.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#pickup"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Book Home Pickup
                  <ArrowRight size={18} />
                </a>

                <a
                  href="https://wa.me/919507111333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-800 shadow-sm transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
                >
                  WhatsApp Us
                </a>

              </div>

              {/* Trust Points */}

              <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">

                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <Truck size={18} className="text-blue-600" />
                  Home Pickup
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <ShieldCheck size={18} className="text-blue-600" />
                  Expert Handling
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <MapPin size={18} className="text-blue-600" />
                  3 Ranchi Branches
                </div>

              </div>

              {/* Google Trust */}

              <div className="mt-10 flex flex-wrap items-center gap-4">

                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Trusted by customers in Ranchi
                  </p>

                  <p className="text-sm text-gray-500">
                    Read genuine customer feedback on Google
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-2 shadow-2xl shadow-blue-900/10">

                <Image
                  src="/drycleaner.png"
                  alt="Professional dry cleaning and premium garment care at NewLife Dryclean Ranchi"
                  width={1200}
                  height={900}
                  priority
                  className="h-[470px] w-full rounded-[2rem] object-cover md:h-[590px]"
                />

              </div>

              <div className="absolute -bottom-6 left-5 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl md:left-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <ShieldCheck
                      size={22}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <p className="font-bold text-gray-950">
                      Expert Garment Care
                    </p>

                    <p className="text-sm text-gray-500">
                      Professional cleaning process
                    </p>
                  </div>

                </div>

              </div>

              <div className="absolute right-4 top-8 hidden rounded-2xl border border-gray-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur md:block">

                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Home Pickup
                </p>

                <p className="mt-1 text-lg font-bold text-gray-950">
                  Across Ranchi
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SERVICES ================= */}

        <section
          id="services"
          className="bg-white px-6 py-28 md:px-12"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mb-14 text-center">

              <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
                What We Do
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                Professional Care for Every Garment
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                Professional garment care designed to keep your clothes
                looking fresh, clean and well maintained.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {services.map((service) => (
                <ServiceCard
                  key={service.name}
                  service={service}
                />
              ))}

            </div>

          </div>

        </section>

        {/* ================= GARMENTS ================= */}

        <section
          id="garments"
          className="bg-gray-50 px-6 py-28 md:px-12"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mb-14 text-center">

              <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
                Specialized Care
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                Garments We Care For
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                From everyday clothing to special occasion outfits,
                every garment deserves the right care.
              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

              {garments.map((garment) => (
                <GarmentCard
                  key={garment.name}
                  garment={garment}
                />
              ))}

            </div>

          </div>

        </section>

        {/* ================= WHY NEWLIFE ================= */}

        <section
          id="about"
          className="px-6 py-28 md:px-12"
        >

          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">

            {/* LEFT */}

            <div>

              <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why NewLife Dryclean
              </p>

              <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-5xl">
                Expert Care for Every Garment
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Every garment is different. From delicate bridal wear
                to formal suits and everyday clothing, professional
                garment care helps maintain the look and feel of your clothes.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                NewLife Dryclean provides dry cleaning, steam press,
                garment polish and darning services in Ranchi.
              </p>

              <a
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3 hover:text-blue-700"
              >
                Discover Our Story
                <ArrowRight size={17} />
              </a>

            </div>

            {/* RIGHT */}

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <Sparkles size={24} className="text-blue-600" />
                </div>

                <h3 className="mt-5 font-bold text-gray-950">
                  Advanced Cleaning
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Professional cleaning technology for garment care.
                </p>

              </div>

              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <Sparkles size={24} className="text-blue-600" />
                </div>

                <h3 className="mt-5 font-bold text-gray-950">
                  Stain Care
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Special attention to stains and garment appearance.
                </p>

              </div>

              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <ShieldCheck size={24} className="text-blue-600" />
                </div>

                <h3 className="mt-5 font-bold text-gray-950">
                  Fabric Care
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Care designed to protect the appearance of your garments.
                </p>

              </div>

              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <Truck size={24} className="text-blue-600" />
                </div>

                <h3 className="mt-5 font-bold text-gray-950">
                  Home Pickup
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Convenient pickup service from your location.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ================= HOW IT WORKS ================= */}

        <section
          id="how-it-works"
          className="bg-gray-950 px-6 py-28 text-white md:px-12"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mb-16 text-center">

              <p className="font-semibold uppercase tracking-[0.2em] text-blue-400">
                Simple Process
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                How It Works
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                Professional garment care made simple from pickup
                to delivery.
              </p>

            </div>

            <div className="grid gap-10 md:grid-cols-4">

              {[
                {
                  step: "1",
                  title: "Book",
                  text: "Request a pickup from your home or contact us directly.",
                },
                {
                  step: "2",
                  title: "Pickup",
                  text: "Your garments are collected from your preferred location.",
                },
                {
                  step: "3",
                  title: "Expert Care",
                  text: "Your garments receive professional cleaning and care.",
                },
                {
                  step: "4",
                  title: "Delivery",
                  text: "Your garments are carefully returned to you.",
                },
              ].map((item) => (

                <div
                  key={item.step}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                    {item.step}
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= GOOGLE REVIEWS ================= */}

        <section
          id="reviews"
          className="bg-blue-50/60 px-6 py-28 md:px-12"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
                Customer Reviews
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                See What Our Customers Say
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Read genuine customer feedback about NewLife Dryclean on Google.
              </p>

            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-gray-100 bg-white p-8 text-center shadow-sm md:p-12">

              <div className="flex justify-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={25}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-950">
                NewLife Dryclean on Google
              </h3>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
                Customer experiences help others choose the right garment-care
                service. Visit our Google Business Profile to read genuine reviews.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <a
                  href="https://www.google.com/maps/search/?api=1&query=NewLife+Dryclean+Shrilok+Complex+Ranchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Read Google Reviews
                  <ArrowRight size={17} />
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=NewLife+Dryclean+Shrilok+Complex+Ranchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  Review NewLife Dryclean
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ================= LOCATIONS ================= */}

        <section
          id="locations"
          className="px-6 py-28 md:px-12"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mb-14 text-center">

              <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
                Find Us
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                Our Ranchi Branches
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
                Visit the NewLife Dryclean branch most convenient for you.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-3">

              {branches.map((branch) => (
                <BranchCard
                  key={branch.name}
                  branch={branch}
                />
              ))}

            </div>

          </div>

        </section>

        {/* ================= PICKUP ================= */}

        <section
          id="pickup"
          className="bg-gray-50 px-6 py-28 md:px-12"
        >

          <div className="mx-auto max-w-4xl">

            <div className="mb-14 text-center">

              <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
                Home Pickup
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                Book a Pickup
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
                Request a convenient garment pickup from your home in Ranchi.
              </p>

            </div>

            <PickupForm />

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section
          id="contact"
          className="bg-blue-600 px-6 py-24 text-center text-white md:px-12"
        >

          <div className="mx-auto max-w-4xl">

            <p className="font-semibold uppercase tracking-[0.2em] text-blue-200">
              Premium Garment Care
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Your Clothes. Our Expert Care.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Home pickup is available with a minimum order of ₹1,000.
              Contact NewLife Dryclean today.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="tel:+919507111333"
                className="rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Call 9507111333
              </a>

              <a
                href="https://wa.me/919507111333"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-blue-700"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="border-t bg-white px-6 py-14 md:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-4">

            <div>

              <h2 className="text-xl font-bold text-gray-950">
                NewLife Dryclean
              </h2>

              <p className="mt-3 leading-7 text-gray-500">
                Premium Dry Cleaning & Garment Care
                <br />
                Ranchi, Jharkhand
              </p>

            </div>

            <div>

              <h3 className="font-bold text-gray-950">
                Services
              </h3>

              <ul className="mt-4 space-y-2 text-gray-500">
                <li>Dry Cleaning</li>
                <li>Steam Press</li>
                <li>Garment Polish</li>
                <li>Darning</li>
              </ul>

            </div>

            <div>

              <h3 className="font-bold text-gray-950">
                Explore
              </h3>

              <ul className="mt-4 space-y-2 text-gray-500">

                <li>
                  <a
                    href="/about"
                    className="hover:text-blue-600"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="#reviews"
                    className="hover:text-blue-600"
                  >
                    Reviews
                  </a>
                </li>

                <li>
                  <a
                    href="#locations"
                    className="hover:text-blue-600"
                  >
                    Locations
                  </a>
                </li>

                <li>
                  <a
                    href="#pickup"
                    className="hover:text-blue-600"
                  >
                    Book Pickup
                  </a>
                </li>

              </ul>

            </div>

            <div>

              <h3 className="font-bold text-gray-950">
                Contact
              </h3>

              <p className="mt-4 text-gray-500">
                📞 9507111333
              </p>

              <p className="mt-2 text-gray-500">
                📍 Ranchi, Jharkhand
              </p>

            </div>

          </div>

          <div className="mt-12 border-t pt-6 text-center text-sm text-gray-400">
            © 2026 NewLife Dryclean. All rights reserved.
          </div>

        </div>

      </footer>

      <FloatingActions />
    </>
  );
}