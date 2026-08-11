import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  introTitle: string;
  introText: string;
  suitableFor: string[];
};

export default function ServicePageTemplate({
  eyebrow,
  title,
  highlight,
  description,
  introTitle,
  introText,
  suitableFor,
}: ServicePageProps) {
  return (
    <>
      <main>
        {/* HERO */}
        <section className="bg-gradient-to-b from-blue-50 via-white to-white px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-5xl text-center">

            <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
              {eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
              {title}

              <span className="block text-blue-600">
                {highlight}
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600">
              {description}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/#pickup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Book Home Pickup
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919507111333"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-800 transition hover:bg-gray-50"
              >
                WhatsApp Us
              </a>

            </div>

          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
                Professional Garment Care
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                {introTitle}
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                {introText}
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Customers can visit our Ranchi branches or request convenient
                home pickup.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
                <ShieldCheck size={27} className="text-blue-600" />

                <h3 className="mt-4 font-bold text-gray-950">
                  Fabric Care
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Care based on garment type, fabric and cleaning requirements.
                </p>
              </div>

              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
                <Sparkles size={27} className="text-blue-600" />

                <h3 className="mt-4 font-bold text-gray-950">
                  Professional Finish
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Attention to garment appearance and finishing.
                </p>
              </div>

              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
                <Truck size={27} className="text-blue-600" />

                <h3 className="mt-4 font-bold text-gray-950">
                  Home Pickup
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Convenient pickup service for customers across Ranchi.
                </p>
              </div>

              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
                <MapPin size={27} className="text-blue-600" />

                <h3 className="mt-4 font-bold text-gray-950">
                  Three Locations
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Old H.B. Road, Kanke and Kadru.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SUITABLE FOR */}
        <section className="bg-gray-950 px-6 py-24 text-white md:px-12">
          <div className="mx-auto max-w-5xl">

            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-400">
                Suitable For
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Garments We Can Care For
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">

              {suitableFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-blue-400"
                  />

                  <span className="font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 px-6 py-20 text-center text-white md:px-12">

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Ready to Give Your Garments Professional Care?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Request home pickup or visit your nearest NewLife Dryclean branch.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/#pickup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-600"
            >
              Book a Pickup
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white"
            >
              Back to Home
            </Link>

          </div>

        </section>
      </main>
    </>
  );
}