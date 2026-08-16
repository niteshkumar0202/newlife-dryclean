import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Truck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingActions from "@/components/FloatingActions";
import { DISPLAY_PHONE, branches } from "@/lib/site";

export const metadata: Metadata = {
  title: "NewLife Dryclean Locations in Ranchi",
  description:
    "Find NewLife Dryclean branches at Old H.B. Road, Kanke and Kadru in Ranchi, or request convenient home pickup.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-gradient-to-b from-[#E8FBF5] via-[#f8fbff] to-white px-6 py-24 text-center md:px-12 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C99A2E]">Our Locations</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-[#172033] md:text-7xl">
            Garment Care Across
            <span className="block text-[#0B8F71]">Ranchi.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#53657A] md:text-xl">
            Visit the branch that is most convenient for you or request home pickup from your location.
          </p>
        </section>

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            {branches.map((branch) => (
              <article key={branch.slug} className="flex flex-col rounded-[2rem] border border-[#dbe5f4] bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8FBF5] text-[#0B8F71]"><MapPin size={26} /></div>
                <h2 className="mt-6 text-2xl font-semibold text-[#172033]">{branch.name}</h2>
                <div className="mt-4 leading-7 text-[#53657A]">
                  {branch.address.map((line) => <p key={line}>{line}</p>)}
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <Link href={`/locations/${branch.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B8F71] px-5 py-3 font-semibold text-white">
                    Branch Details <ArrowRight size={16} />
                  </Link>
                  <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-[#dbe5f4] px-5 py-3 font-semibold text-[#0B8F71]">Get Directions</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#0B8F71] px-6 py-20 text-white md:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
            <div>
              <Truck size={30} className="text-[#C99A2E]" />
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em]">Prefer home pickup?</h2>
              <p className="mt-4 max-w-xl leading-8 text-white/65">Request pickup from your home in Ranchi. Availability is confirmed based on location and schedule.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
              <Link href="/#pickup" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f8fbff] px-7 py-4 font-semibold text-[#0B8F71]">Book Pickup <ArrowRight size={17} /></Link>
              <a href={`tel:+91${DISPLAY_PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold"><Phone size={17} />Call Us</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
