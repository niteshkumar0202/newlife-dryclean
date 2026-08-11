import ServiceCard from "@/components/ServiceCard";
import BranchCard from "@/components/BranchCard";
import PickupForm from "@/components/PickupForm";
import GarmentCard from "@/components/GarmentCard";
import MobileNav from "@/components/MobileNav";
import FloatingActions from "@/components/FloatingActions";

import Image from "next/image";

import { SITE_URL } from "@/lib/site";

import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    name: "Dry Cleaning",
    icon: "👔",
    description:
      "Professional garment care for everyday clothing, premium wear and special-occasion outfits.",
    href: "/dry-cleaning-ranchi",
  },
  {
    name: "Steam Press",
    icon: "♨️",
    description:
      "A crisp, polished finish designed to keep garments looking refined and well presented.",
    href: "/steam-press-ranchi",
  },
  {
    name: "Garment Polish",
    icon: "✨",
    description:
      "Special finishing care to refresh and maintain the appearance of selected garments.",
    href: "/garment-polish-ranchi",
  },
  {
    name: "Darning",
    icon: "🧵",
    description:
      "Thoughtful garment repair and darning to help extend the usable life of your clothes.",
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

const processSteps = [
  {
    step: "01",
    title: "Book",
    text: "Choose your preferred service and request a convenient home pickup.",
  },
  {
    step: "02",
    title: "Pickup",
    text: "Your garments are collected from your preferred location in Ranchi.",
  },
  {
    step: "03",
    title: "Expert Care",
    text: "Your garments receive appropriate professional cleaning and finishing.",
  },
  {
    step: "04",
    title: "Delivery",
    text: "Your garments are carefully returned after the service is completed.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",

    name: "NewLife Dryclean",

    description:
      "Professional dry cleaning, steam press, garment care and home pickup services in Ranchi, Jharkhand.",

    url: SITE_URL,

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
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#E8E2D6] bg-[#F8F5EE]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          {/* BRAND */}

          <a href="/" className="group">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#163A32] text-lg font-semibold text-white shadow-sm transition group-hover:bg-[#102A25]">
                N
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight text-[#171C1A]">
                  NewLife Dryclean
                </p>

                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#88785B]">
                  Premium Garment Care • Ranchi
                </p>
              </div>
            </div>
          </a>

          {/* DESKTOP MENU */}

          <div className="hidden items-center gap-8 text-sm font-medium text-[#4F5954] lg:flex">
            <a
              href="#services"
              className="transition hover:text-[#163A32]"
            >
              Services
            </a>

            <a
              href="#garments"
              className="transition hover:text-[#163A32]"
            >
              Garments
            </a>

            <a
              href="/about"
              className="transition hover:text-[#163A32]"
            >
              About
            </a>

            <a
              href="#how-it-works"
              className="transition hover:text-[#163A32]"
            >
              How It Works
            </a>

            <a
              href="#reviews"
              className="transition hover:text-[#163A32]"
            >
              Reviews
            </a>

            <a
              href="#locations"
              className="transition hover:text-[#163A32]"
            >
              Locations
            </a>
          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-3">
            <a
              href="#pickup"
              className="hidden items-center gap-2 rounded-full bg-[#163A32] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#102A25] sm:inline-flex"
            >
              Book Pickup
              <ArrowRight size={16} />
            </a>

            <MobileNav />
          </div>
        </nav>
      </header>

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-gradient-to-b from-[#F2ECDD] via-[#F8F5EE] to-white px-6 pb-28 pt-16 md:px-12 md:pb-36 md:pt-24">
          {/* BACKGROUND DECORATION */}

          <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#DCE6DD]/60 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-52 -left-40 h-[420px] w-[420px] rounded-full bg-[#E9DDC3]/50 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DED4C0] bg-white/70 px-4 py-2 text-sm font-semibold text-[#163A32] shadow-sm backdrop-blur">
                <Sparkles
                  size={16}
                  className="text-[#A98645]"
                />
                Premium Garment Care in Ranchi
              </div>

              <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#171C1A] md:text-6xl lg:text-7xl">
                Premium Care
                <br />
                for Clothes You
                <span className="block text-[#163A32]">
                  Truly Value.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#66706B]">
                Thoughtful garment care for bridal wear, formal suits,
                designer outfits and everyday clothing — with convenient
                home pickup across Ranchi.
              </p>

              {/* CTA */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#pickup"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#163A32] px-8 py-4 font-semibold text-white shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:bg-[#102A25]"
                >
                  Schedule Home Pickup
                  <ArrowRight size={18} />
                </a>

                <a
                  href="https://wa.me/919507111333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#D8D0C1] bg-white/75 px-8 py-4 font-semibold text-[#171C1A] transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* TRUST */}

              <div className="mt-11 grid max-w-xl gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm font-medium text-[#58635E]">
                  <Truck
                    size={18}
                    className="text-[#A98645]"
                  />
                  Home Pickup
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-[#58635E]">
                  <ShieldCheck
                    size={18}
                    className="text-[#A98645]"
                  />
                  Expert Handling
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-[#58635E]">
                  <MapPin
                    size={18}
                    className="text-[#A98645]"
                  />
                  3 Ranchi Branches
                </div>
              </div>

              {/* REVIEWS */}

              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#DED7CB] pt-8">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="fill-[#B89A5A] text-[#B89A5A]"
                    />
                  ))}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#171C1A]">
                    Trusted by customers in Ranchi
                  </p>

                  <p className="text-sm text-[#77807C]">
                    Read genuine customer feedback on Google
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2.75rem] border border-white/80 bg-white p-2 shadow-[0_35px_90px_rgba(30,45,38,0.16)]">
                <Image
                  src="/drycleaner.png"
                  alt="Premium garment care at NewLife Dryclean Ranchi"
                  width={1200}
                  height={900}
                  priority
                  className="h-[480px] w-full rounded-[2.3rem] object-cover md:h-[610px]"
                />
              </div>

              {/* FLOATING CARD */}

              <div className="absolute -bottom-7 left-5 rounded-2xl border border-[#E9E2D7] bg-[#FFFEFB]/95 px-5 py-4 shadow-[0_20px_50px_rgba(30,45,38,0.14)] backdrop-blur md:left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8EEE9]">
                    <ShieldCheck
                      size={22}
                      className="text-[#163A32]"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-[#171C1A]">
                      Expert Garment Care
                    </p>

                    <p className="text-sm text-[#737C77]">
                      Professional handling & finishing
                    </p>
                  </div>
                </div>
              </div>

              {/* SECOND CARD */}

              <div className="absolute right-5 top-8 hidden rounded-2xl border border-[#E9E2D7] bg-[#FFFEFB]/95 px-5 py-4 shadow-xl backdrop-blur md:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A98645]">
                  Home Pickup
                </p>

                <p className="mt-1 text-lg font-semibold text-[#171C1A]">
                  Across Ranchi
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="services"
          className="bg-white px-6 py-28 md:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A98645]">
                What We Do
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#171C1A] md:text-5xl">
                Professional Care for
                <span className="block text-[#163A32]">
                  Every Garment.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6A746F]">
                Thoughtful garment-care services designed around cleaning,
                finishing, presentation and convenience.
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

        {/* =====================================================
            GARMENTS
        ===================================================== */}

        <section
          id="garments"
          className="bg-[#F8F5EE] px-6 py-28 md:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A98645]">
                Specialized Care
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#171C1A] md:text-5xl">
                Garments Worth
                <span className="text-[#163A32]">
                  {" "}
                  Caring For.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6A746F]">
                From everyday essentials to your most valuable
                occasion wear, every garment deserves appropriate care.
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

        {/* =====================================================
            WHY NEWLIFE
        ===================================================== */}

        <section
          id="about"
          className="bg-white px-6 py-28 md:px-12"
        >
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A98645]">
                Why NewLife
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#171C1A] md:text-5xl">
                Care That Respects
                <span className="block text-[#163A32]">
                  Every Detail.
                </span>
              </h2>

              <p className="mt-7 max-w-xl leading-8 text-[#66706B]">
                Every garment is different. Delicate bridal wear,
                formal suits, designer clothing and everyday garments
                can each require different levels of attention.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#66706B]">
                NewLife Dryclean combines professional garment care
                with convenient local service across Ranchi.
              </p>

              <a
                href="/about"
                className="mt-8 inline-flex items-center gap-2 border-b border-[#B89A5A] pb-1 font-semibold text-[#163A32] transition hover:gap-3"
              >
                Discover Our Story
                <ArrowRight size={17} />
              </a>
            </div>

            {/* FEATURES */}

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Advanced Cleaning",
                  text: "Professional cleaning processes selected according to garment-care requirements.",
                  icon: Sparkles,
                },
                {
                  title: "Stain Attention",
                  text: "Special attention to garment appearance and visible areas requiring extra care.",
                  icon: CheckCircle2,
                },
                {
                  title: "Fabric Care",
                  text: "Care designed around fabric, finish and overall garment presentation.",
                  icon: ShieldCheck,
                },
                {
                  title: "Home Pickup",
                  text: "Convenient pickup service designed around your schedule and location.",
                  icon: Truck,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-[#E9E2D7] bg-[#FCFAF6] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C9B589] hover:shadow-[0_24px_60px_rgba(28,40,35,0.08)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EEE9]">
                      <Icon
                        size={23}
                        className="text-[#163A32]"
                      />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[#171C1A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#69736E]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section
          id="how-it-works"
          className="bg-[#102A25] px-6 py-28 text-white md:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D5BC82]">
                Simple Process
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                From Your Doorstep
                <span className="block text-[#D5BC82]">
                  Back to Your Wardrobe.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/60">
                Professional garment care made straightforward from
                booking through delivery.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D5BC82]/40 bg-[#B89A5A] text-sm font-semibold text-white">
                    {item.step}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            REVIEWS
        ===================================================== */}

        <section
          id="reviews"
          className="bg-[#F8F5EE] px-6 py-28 md:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A98645]">
                Customer Reviews
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#171C1A] md:text-5xl">
                Trusted by Customers
                <span className="block text-[#163A32]">
                  Across Ranchi.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#69736E]">
                See genuine customer feedback and experiences on Google.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-3xl rounded-[2.5rem] border border-[#E7DFD1] bg-white p-8 text-center shadow-[0_24px_60px_rgba(30,40,35,0.07)] md:p-12">
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={24}
                    className="fill-[#B89A5A] text-[#B89A5A]"
                  />
                ))}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#171C1A]">
                NewLife Dryclean on Google
              </h3>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-[#69736E]">
                Customer experiences help others choose the right
                garment-care service. Read genuine feedback on our
                Google Business listing.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=NewLife+Dryclean+Shrilok+Complex+Ranchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#163A32] px-7 py-4 font-semibold text-white transition hover:bg-[#102A25]"
                >
                  Read Google Reviews
                  <ArrowRight size={17} />
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=NewLife+Dryclean+Shrilok+Complex+Ranchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#D8D0C1] bg-white px-7 py-4 font-semibold text-[#171C1A] transition hover:bg-[#F8F5EE]"
                >
                  Leave a Review
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LOCATIONS
        ===================================================== */}

        <section
          id="locations"
          className="bg-white px-6 py-28 md:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A98645]">
                Find Us
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#171C1A] md:text-5xl">
                Three Convenient
                <span className="text-[#163A32]">
                  {" "}
                  Ranchi Locations.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#69736E]">
                Visit the NewLife Dryclean branch most convenient
                for you or schedule a home pickup.
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

        {/* =====================================================
            PICKUP FORM
        ===================================================== */}

        <section
          id="pickup"
          className="bg-[#F5F1E8] px-6 py-28 md:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A98645]">
                Home Pickup
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#171C1A] md:text-5xl">
                Garment Care,
                <span className="block text-[#163A32]">
                  From Your Doorstep.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#69736E]">
                Schedule a convenient garment pickup from your home
                in Ranchi and continue the booking through WhatsApp.
              </p>
            </div>

            <PickupForm />
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section
          id="contact"
          className="relative overflow-hidden bg-[#163A32] px-6 py-24 text-center text-white md:px-12"
        >
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#B89A5A]/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D5BC82]">
              Premium Garment Care
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Your Clothes.
              <span className="block text-[#D5BC82]">
                Our Expert Care.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Home pickup is available with a minimum order of ₹1,000.
              Contact NewLife Dryclean to schedule your service.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:+919507111333"
                className="rounded-full bg-[#F8F5EE] px-8 py-4 font-semibold text-[#163A32] transition hover:bg-white"
              >
                Call 9507111333
              </a>

              <a
                href="https://wa.me/919507111333"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:border-[#D5BC82] hover:text-[#D5BC82]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#102A25] px-6 py-16 text-white md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4">
            {/* BRAND */}

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F5EE] font-semibold text-[#163A32]">
                  N
                </div>

                <h2 className="text-xl font-semibold">
                  NewLife Dryclean
                </h2>
              </div>

              <p className="mt-5 leading-7 text-white/55">
                Premium Dry Cleaning & Garment Care
                <br />
                Ranchi, Jharkhand
              </p>
            </div>

            {/* SERVICES */}

            <div>
              <h3 className="font-semibold text-[#D5BC82]">
                Services
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-white/55">
                <li>
                  <a
                    href="/dry-cleaning-ranchi"
                    className="transition hover:text-white"
                  >
                    Dry Cleaning
                  </a>
                </li>

                <li>
                  <a
                    href="/steam-press-ranchi"
                    className="transition hover:text-white"
                  >
                    Steam Press
                  </a>
                </li>

                <li>
                  <a
                    href="/garment-polish-ranchi"
                    className="transition hover:text-white"
                  >
                    Garment Polish
                  </a>
                </li>

                <li>
                  <a
                    href="/darning-ranchi"
                    className="transition hover:text-white"
                  >
                    Darning
                  </a>
                </li>
              </ul>
            </div>

            {/* EXPLORE */}

            <div>
              <h3 className="font-semibold text-[#D5BC82]">
                Explore
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-white/55">
                <li>
                  <a
                    href="/about"
                    className="transition hover:text-white"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="#reviews"
                    className="transition hover:text-white"
                  >
                    Reviews
                  </a>
                </li>

                <li>
                  <a
                    href="#locations"
                    className="transition hover:text-white"
                  >
                    Locations
                  </a>
                </li>

                <li>
                  <a
                    href="#pickup"
                    className="transition hover:text-white"
                  >
                    Book Pickup
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}

            <div>
              <h3 className="font-semibold text-[#D5BC82]">
                Contact
              </h3>

              <p className="mt-5 text-sm text-white/55">
                9507111333
              </p>

              <p className="mt-3 text-sm text-white/55">
                Ranchi, Jharkhand
              </p>

              <a
                href="https://wa.me/919507111333"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D5BC82] hover:text-white"
              >
                WhatsApp
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-white/35 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 NewLife Dryclean. All rights reserved.
            </p>

            <p>
              Premium Garment Care • Ranchi
            </p>
          </div>
        </div>
      </footer>

      <FloatingActions />
    </>
  );
}