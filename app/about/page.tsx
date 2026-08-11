import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const strengths = [
  {
    title: "Careful Garment Handling",
    description:
      "Every garment is treated according to its fabric, finish and cleaning requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Cleaning",
    description:
      "A garment-care process designed for everyday clothing as well as premium and special-occasion wear.",
    icon: Sparkles,
  },
  {
    title: "Convenient Home Pickup",
    description:
      "Customers across Ranchi can request convenient home pickup and delivery.",
    icon: Truck,
  },
  {
    title: "Three Ranchi Locations",
    description:
      "Visit us at Old H.B. Road, Kanke or Kadru for convenient local service.",
    icon: MapPin,
  },
];

const process = [
  "Garment inspection",
  "Fabric and care assessment",
  "Appropriate cleaning process",
  "Finishing and steam pressing",
  "Quality check",
  "Pickup or delivery",
];

export default function AboutPage() {
  return (
    <>
      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
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
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium text-gray-700 md:flex">
            <Link href="/#services" className="hover:text-blue-600">
              Services
            </Link>

            <Link href="/about" className="text-blue-600">
              About
            </Link>

            <Link href="/#reviews" className="hover:text-blue-600">
              Reviews
            </Link>

            <Link href="/#locations" className="hover:text-blue-600">
              Locations
            </Link>
          </div>

          <Link
            href="/#pickup"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Book Pickup
            <ArrowRight size={16} />
          </Link>
        </nav>
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white px-6 py-24 md:px-12 md:py-32">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100 blur-3xl" />

          <div className="relative mx-auto max-w-5xl text-center">

            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
              About NewLife
            </p>

            <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-gray-950 md:text-7xl">
              Garment Care Built Around
              <span className="block text-blue-600">
                Quality & Convenience.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
              NewLife Dryclean provides professional dry cleaning,
              garment finishing and convenient pickup services for customers
              across Ranchi.
            </p>

          </div>
        </section>

        {/* ================= STORY ================= */}

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
                Our Approach
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                Every Garment Deserves the Right Care.
              </h2>

              <p className="mt-7 leading-8 text-gray-600">
                Clothing is more than fabric. A bridal outfit may preserve an
                important memory, a formal suit may be part of an important
                occasion, and everyday clothes deserve to remain fresh and
                well maintained.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Our goal at NewLife Dryclean is to provide reliable garment
                care with attention to cleaning, finishing and convenience.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                We serve customers through our Ranchi locations at Old H.B.
                Road, Kanke and Kadru, along with convenient home pickup.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon size={24} className="text-blue-600" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-gray-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= PROCESS ================= */}

        <section className="bg-gray-950 px-6 py-24 text-white md:px-12">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-400">
                Garment Care Process
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Care From Inspection to Finish.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-gray-400">
                A professional garment-care workflow helps ensure that clothes
                receive appropriate attention throughout the cleaning and
                finishing process.
              </p>
            </div>

            <div className="grid gap-4">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold">
                    {index + 1}
                  </div>

                  <div className="flex flex-1 items-center justify-between">
                    <p className="font-semibold">
                      {step}
                    </p>

                    <CheckCircle2
                      size={20}
                      className="text-blue-400"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= LOCATIONS ================= */}

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
                Local Presence
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                Serving Ranchi Through Three Locations
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {[
                {
                  name: "Old H.B. Road",
                  description:
                    "Shrilok Complex, near Santevita Hospital.",
                },
                {
                  name: "Kanke",
                  description:
                    "Amiya Apartment, opposite Kanke Petrol Pump.",
                },
                {
                  name: "Kadru",
                  description:
                    "Skyline Complex, beside J.P. Hyundai.",
                },
              ].map((branch) => (
                <div
                  key={branch.name}
                  className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
                >
                  <MapPin size={28} className="text-blue-600" />

                  <h3 className="mt-5 text-2xl font-bold text-gray-950">
                    {branch.name}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {branch.description}
                  </p>

                  <Link
                    href="/#locations"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
                  >
                    View location
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= CTA ================= */}

        <section className="bg-blue-600 px-6 py-24 text-center text-white md:px-12">
          <div className="mx-auto max-w-4xl">

            <p className="font-semibold uppercase tracking-[0.2em] text-blue-200">
              NewLife Dryclean
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Give Your Clothes the Care They Deserve.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Schedule a convenient home pickup or visit one of our Ranchi
              locations.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/#pickup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Book Home Pickup
                <ArrowRight size={18} />
              </Link>

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

      <footer className="border-t bg-white px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">

          <div>
            <p className="font-bold text-gray-950">
              NewLife Dryclean
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Premium Dry Cleaning & Garment Care • Ranchi
            </p>
          </div>

          <p className="text-sm text-gray-400">
            © 2026 NewLife Dryclean. All rights reserved.
          </p>

        </div>
      </footer>
    </>
  );
}