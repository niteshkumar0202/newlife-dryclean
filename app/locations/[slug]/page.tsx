import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin, Navigation, Phone, Truck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingActions from "@/components/FloatingActions";
import { DISPLAY_PHONE, SITE_URL, branches, services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return branches.map((branch) => ({ slug: branch.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const branch = branches.find((item) => item.slug === slug);
  if (!branch) return {};

  return {
    title: `Dry Cleaning in ${branch.name}, Ranchi`,
    description: `Visit NewLife Dryclean at ${branch.shortAddress}, Ranchi for dry cleaning, steam press, garment care and pickup support.`,
    alternates: { canonical: `/locations/${branch.slug}` },
  };
}

export default async function BranchPage({ params }: Props) {
  const { slug } = await params;
  const branch = branches.find((item) => item.slug === slug);
  if (!branch) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    name: `NewLife Dryclean - ${branch.name}`,
    url: `${SITE_URL}/locations/${branch.slug}`,
    telephone: `+91-${DISPLAY_PHONE}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address.slice(0, -1).join(", "),
      addressLocality: "Ranchi",
      addressRegion: "Jharkhand",
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: "Ranchi" },
    hasMap: branch.mapsUrl,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <main>
        <section className="bg-gradient-to-b from-[#ECFDF5] via-[#f8fbff] to-white px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Link href="/locations" className="inline-flex items-center gap-2 text-sm font-semibold text-[#176B4D]">← All locations</Link>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c79a2b]">NewLife Dryclean • Ranchi</p>
                <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-[#172033] md:text-7xl">
                  Dry Cleaning in
                  <span className="block text-[#176B4D]">{branch.name}.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5D6B62]">
                  Professional garment care, steam press, finishing and convenient service from our {branch.name} location in Ranchi.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#176B4D] px-7 py-4 font-semibold text-white">
                    <Navigation size={18} /> Get Directions
                  </a>
                  <Link href="/#pickup" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dbe5f4] bg-white px-7 py-4 font-semibold text-[#176B4D]">
                    Book Home Pickup <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              <aside className="rounded-[2rem] border border-[#dbe5f4] bg-white p-8 shadow-[0_24px_60px_rgba(30,40,35,0.08)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#176B4D]"><MapPin size={26} /></div>
                <h2 className="mt-6 text-2xl font-semibold text-[#172033]">{branch.name} Branch</h2>
                <div className="mt-4 leading-7 text-[#5D6B62]">
                  {branch.address.map((line) => <p key={line}>{line}</p>)}
                </div>
                <a href={`tel:+91${DISPLAY_PHONE}`} className="mt-7 inline-flex items-center gap-2 font-semibold text-[#176B4D]"><Phone size={17} /> {DISPLAY_PHONE}</a>
              </aside>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c79a2b]">Available Services</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#172033] md:text-5xl">Garment Care Near {branch.name}</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group flex gap-4 rounded-2xl border border-[#dbe5f4] bg-[#f8fbff] p-5 transition hover:border-[#9fc1e7]">
                  <CheckCircle2 size={20} className="mt-1 shrink-0 text-[#c79a2b]" />
                  <div>
                    <h3 className="font-semibold text-[#172033]">{service.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#5D6B62]">{service.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#176B4D] px-6 py-20 text-white md:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
            <div>
              <Truck size={30} className="text-[#c79a2b]" />
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em]">Can’t visit the branch?</h2>
              <p className="mt-4 max-w-xl leading-8 text-white/65">Request a home pickup and we’ll confirm availability for your Ranchi location.</p>
            </div>
            <Link href="/#pickup" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f8fbff] px-8 py-4 font-semibold text-[#176B4D] md:justify-self-end">Book Pickup <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
