import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Sparkles, Truck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingActions from "@/components/FloatingActions";
import { branches } from "@/lib/site";

export const metadata: Metadata = {
  title: "About NewLife Dryclean Ranchi",
  description:
    "Learn about NewLife Dryclean, our garment-care approach, home pickup service and three convenient Ranchi locations.",
  alternates: { canonical: "/about" },
};

const strengths = [
  { title: "Careful Garment Handling", text: "Garment care starts with fabric, finish and cleaning requirements.", icon: ShieldCheck },
  { title: "Professional Finishing", text: "Attention to cleaning and finishing for everyday and occasion wear.", icon: Sparkles },
  { title: "Convenient Home Pickup", text: "Request pickup from your location in Ranchi and confirm through WhatsApp.", icon: Truck },
  { title: "Local Presence", text: "Three Ranchi branches provide convenient in-person access.", icon: MapPin },
];

const process = [
  { title: "Garment inspection", image: "/about-process/garment-inspection.jpg" },
  { title: "Fabric and care assessment", image: "/about-process/fabric-care-assessment.jpg" },
  { title: "Appropriate cleaning process", image: "/about-process/cleaning-process.jpg" },
  { title: "Finishing and steam pressing", image: "/about-process/steam-pressing.jpg" },
  { title: "Quality check", image: "/about-process/quality-check.jpg" },
  { title: "Pickup or delivery", image: "/about-process/pickup-delivery.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-[#E8FBF5] via-[#f8fbff] to-white px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C99A2E]">About NewLife</p>
            <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.045em] text-[#172033] md:text-7xl">
              Garment Care Built Around
              <span className="block text-[#0B8F71]">Quality & Convenience.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#53657A] md:text-xl">
              NewLife Dryclean provides professional dry cleaning, garment finishing and convenient pickup services for customers across Ranchi.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C99A2E]">Our Approach</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#172033] md:text-5xl">Every Garment Deserves the Right Care.</h2>
              <p className="mt-7 leading-8 text-[#53657A]">
                Clothing can carry everyday utility, personal style and important memories. A bridal outfit, formal suit or favourite daily garment may each need a different approach to cleaning and finishing.
              </p>
              <p className="mt-5 leading-8 text-[#53657A]">
                Our goal is simple: provide reliable garment care with attention to the item in front of us and make the service convenient through local branches and home pickup.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-[#dbe5f4] bg-[#f8fbff] p-7">
                    <Icon size={25} className="text-[#0B8F71]" />
                    <h3 className="mt-5 text-lg font-semibold text-[#172033]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#53657A]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#0B8F71] px-6 py-24 text-white md:px-12">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C99A2E]">Garment Care Process</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">Care From Inspection to Finish.</h2>
              <p className="mt-6 max-w-xl leading-8 text-white/65">A structured workflow helps us give each garment appropriate attention before it returns to you.</p>
            </div>
            <div className="grid gap-4">
              {process.map((step, index) => (
                <div
                  key={step.title}
                  className="overflow-hidden rounded-3xl border border-white/15 bg-white/5"
                >
                  <div className="grid items-stretch md:grid-cols-[190px_1fr]">
                    <div className="relative min-h-[150px] md:min-h-full">
                      <Image
                        src={step.image}
                        alt={`${step.title} at NewLife Dryclean`}
                        fill
                        sizes="(max-width: 768px) 100vw, 190px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-5 px-6 py-5">
                      <div className="flex items-center gap-5">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C99A2E] font-semibold text-[#0B8F71]">
                          {index + 1}
                        </span>
                        <span className="font-semibold">{step.title}</span>
                      </div>
                      <CheckCircle2 size={20} className="shrink-0 text-[#C99A2E]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C99A2E]">Local Presence</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#172033] md:text-5xl">Serving Ranchi Through Three Locations.</h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {branches.map((branch) => (
                <Link key={branch.slug} href={`/locations/${branch.slug}`} className="rounded-3xl border border-[#dbe5f4] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <MapPin size={27} className="text-[#0B8F71]" />
                  <h3 className="mt-5 text-2xl font-semibold text-[#172033]">{branch.name}</h3>
                  <p className="mt-3 leading-7 text-[#53657A]">{branch.shortAddress}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B8F71]">View branch <ArrowRight size={16} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#E8FBF5] px-6 py-20 text-center md:px-12">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#172033] md:text-5xl">Give Your Clothes the Care They Deserve.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#53657A]">Visit a branch or request a convenient home pickup in Ranchi.</p>
          <Link href="/#pickup" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B8F71] px-8 py-4 font-semibold text-white">Book a Pickup <ArrowRight size={18} /></Link>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
