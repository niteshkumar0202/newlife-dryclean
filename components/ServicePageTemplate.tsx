import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Sparkles, Truck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingActions from "@/components/FloatingActions";
import { branches, WHATSAPP_URL } from "@/lib/site";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  introTitle: string;
  introText: string;
  suitableFor: string[];
};

export default function ServicePageTemplate({ eyebrow, title, highlight, description, introTitle, introText, suitableFor }: ServicePageProps) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-gradient-to-b from-[#ECFDF5] via-[#f8fbff] to-white px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c79a2b]">{eyebrow}</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-[#172033] md:text-7xl">
              {title}<span className="block text-[#176B4D]">{highlight}</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#5D6B62] md:text-xl">{description}</p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/#pickup" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#176B4D] px-8 py-4 font-semibold text-white">Book Home Pickup <ArrowRight size={18} /></Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#dbe5f4] bg-white px-8 py-4 font-semibold text-[#172033]">WhatsApp Us</a>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c79a2b]">Professional Garment Care</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#172033] md:text-5xl">{introTitle}</h2>
              <p className="mt-6 leading-8 text-[#5D6B62]">{introText}</p>
              <p className="mt-5 leading-8 text-[#5D6B62]">Visit one of our Ranchi branches or request convenient home pickup.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#dbe5f4] bg-[#f8fbff] p-7">
                <ShieldCheck size={27} className="text-[#176B4D]" />
                <h3 className="mt-4 font-semibold text-[#172033]">Fabric Care</h3>
                <p className="mt-2 text-sm leading-6 text-[#5D6B62]">Care based on garment type, fabric and cleaning requirements.</p>
              </div>
              <div className="rounded-3xl border border-[#dbe5f4] bg-[#f8fbff] p-7">
                <Sparkles size={27} className="text-[#176B4D]" />
                <h3 className="mt-4 font-semibold text-[#172033]">Professional Finish</h3>
                <p className="mt-2 text-sm leading-6 text-[#5D6B62]">Attention to garment appearance and finishing.</p>
              </div>
              <div className="rounded-3xl border border-[#dbe5f4] bg-[#f8fbff] p-7">
                <Truck size={27} className="text-[#176B4D]" />
                <h3 className="mt-4 font-semibold text-[#172033]">Home Pickup</h3>
                <p className="mt-2 text-sm leading-6 text-[#5D6B62]">Convenient pickup request for customers across Ranchi.</p>
              </div>
              <div className="rounded-3xl border border-[#dbe5f4] bg-[#f8fbff] p-7">
                <MapPin size={27} className="text-[#176B4D]" />
                <h3 className="mt-4 font-semibold text-[#172033]">Three Locations</h3>
                <p className="mt-2 text-sm leading-6 text-[#5D6B62]">Old H.B. Road, Kanke and Kadru.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#176B4D] px-6 py-24 text-white md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c79a2b]">Suitable For</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">Garments We Can Care For</h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {suitableFor.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <CheckCircle2 size={20} className="shrink-0 text-[#c79a2b]" /><span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c79a2b]">Where to Find Us</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#172033] md:text-5xl">Available Across Three Ranchi Locations.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {branches.map((branch) => (
                <Link key={branch.slug} href={`/locations/${branch.slug}`} className="rounded-2xl border border-[#dbe5f4] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <MapPin className="text-[#176B4D]" size={22} />
                  <h3 className="mt-4 text-xl font-semibold text-[#172033]">{branch.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5D6B62]">{branch.shortAddress}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ECFDF5] px-6 py-20 text-center md:px-12">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#172033] md:text-5xl">Ready to Give Your Garments Professional Care?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5D6B62]">Request home pickup or visit your nearest NewLife Dryclean branch.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/#pickup" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#176B4D] px-8 py-4 font-semibold text-white">Book a Pickup <ArrowRight size={18} /></Link>
            <Link href="/services" className="rounded-full border border-[#dbe5f4] bg-white px-8 py-4 font-semibold text-[#176B4D]">All Services</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
