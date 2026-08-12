import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingActions from "@/components/FloatingActions";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Garment Care Services in Ranchi",
  description:
    "Explore NewLife Dryclean services in Ranchi including dry cleaning, steam press, garment polish, darning and bridal wear care.",
  alternates: { canonical: "/services" },
};

const promises = [
  "Garment-specific care assessment",
  "Professional finishing",
  "Home pickup request across Ranchi",
  "Three convenient Ranchi locations",
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-gradient-to-b from-[#ECFDF5] via-[#f8fbff] to-white px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c79a2b]">Our Services</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-[#172033] md:text-7xl">
              Professional Garment Care
              <span className="block text-[#176B4D]">for Ranchi.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#5D6B62] md:text-xl">
              Choose the service your garment needs, then visit a branch or request a convenient home pickup.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-[2rem] border border-[#dbe5f4] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5] text-3xl">{service.icon}</div>
                  <h2 className="mt-6 text-2xl font-semibold text-[#172033]">{service.name}</h2>
                  <p className="mt-4 leading-7 text-[#5D6B62]">{service.short}</p>
                  <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#176B4D]">
                    Explore service <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#176B4D] px-6 py-24 text-white md:px-12">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <Sparkles className="text-[#c79a2b]" size={30} />
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">Care That Starts With the Garment.</h2>
              <p className="mt-6 max-w-xl leading-8 text-white/65">
                Cleaning requirements vary by fabric, construction, finish, stain and previous treatment. Inspection helps determine the appropriate service before work begins.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {promises.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#c79a2b]" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F1E8] px-6 py-20 text-center md:px-12">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#172033]">Not sure which service you need?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#5D6B62]">Send us the garment details on WhatsApp or book a pickup for assessment.</p>
          <Link href="/#pickup" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#176B4D] px-8 py-4 font-semibold text-white">
            Book a Pickup <ArrowRight size={18} />
          </Link>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
