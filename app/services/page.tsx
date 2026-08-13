import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Droplets,
  Hotel,
  PackageCheck,
  Shirt,
  Sparkles,
  Truck,
  Wind,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingActions from "@/components/FloatingActions";
import PricingEstimator from "@/components/PricingEstimator";
import BeforeAfter from "@/components/BeforeAfter";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { GOOGLE_BUSINESS_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Laundry & Dry Cleaning Services in Ranchi | NewLife Dryclean",
  description:
    "Explore NewLife Dryclean services in Ranchi including wash & fold, dry cleaning, steam pressing, garment polish, darning, bridal wear care, free pickup & delivery, commercial laundry and fast turnaround options.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Laundry & Dry Cleaning Services in Ranchi | NewLife Dryclean",
    description:
      "Professional laundry, dry cleaning, pressing and commercial garment-care services with free pickup and delivery in Ranchi.",
    url: `${SITE_URL}/services`,
    type: "website",
  },
};

const services = [
  { icon: Shirt, image: "/services/wash-fold.jpg", title: "Wash & Fold", text: "Perfect for everyday clothes, towels and bed linens. We separate colors from lights, wash according to fabric-care labels, dry appropriately and fold every item neatly." },
  { icon: Sparkles, image: "/services/dry-cleaning.jpg", title: "Dry Cleaning", text: "Expert dry cleaning for delicate garments, tailored suits, dresses, outerwear, bridal wear and specialty fabrics, with stain treatment designed to preserve fabric integrity and color." },
  { icon: Wind, image: "/services/steam-pressing.jpg", title: "Ironing & Steam Pressing", text: "Professional pressing for shirts, trousers, uniforms and formal wear, delivering crisp lines and a smooth, wrinkle-free finish." },
  { icon: Hotel, image: "/services/commercial-laundry.jpg", title: "Commercial Laundry Services", text: "Tailored laundry solutions for hotels, gyms, spas, Airbnb hosts and medical clinics, including high-volume linen, towel and uniform care with strict hygiene standards and quick turnaround." },
  { icon: PackageCheck, image: "/services/garment-polish.jpg", title: "Garment Polish", text: "Finishing care for selected garments to refresh appearance, improve presentation and keep special pieces looking their best." },
  { icon: Shirt, image: "/services/darning-repair.jpg", title: "Darning & Repair", text: "Thoughtful repair for tears, snags and worn areas in garments you want to keep wearing." },
];

const benefits = [
  { icon: Truck, title: "Free Pickup & Delivery", text: "We pick up your laundry at a time that works for you and return it fresh, clean and neatly finished." },
  { icon: Droplets, title: "Fabric-Specific Care", text: "From delicate silks to heavy denim, garments receive customized care using premium eco-friendly detergents and appropriate treatment methods." },
  { icon: Clock3, title: "Fast Turnaround", text: "Standard 24-to-48-hour delivery options are available, with same-day rush service for eligible orders." },
  { icon: CheckCircle2, title: "Transparent Pricing", text: "Simple per-item or service-based pricing with no hidden fees, supported by an online pricing estimator for planning." },
];

const steps = [
  { no: "01", title: "Schedule a Pickup", text: "Book your preferred date and time online or through WhatsApp in under a minute." },
  { no: "02", title: "We Collect Your Clothes", text: "Leave your laundry bag ready for collection or hand it directly to the NewLife pickup team." },
  { no: "03", title: "We Wash & Inspect", text: "Garment specialists sort, treat, wash, dry, press, fold or hang items according to your service preferences." },
  { no: "04", title: "Fresh Delivery", text: "Your clean, ready-to-wear garments are returned straight to your doorstep." },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#2A2C24]">
        <section className="bg-[#F7F8F2] px-6 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_.98fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">
                NewLife Dryclean Services
              </p>
              <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] text-[#29461F] sm:text-6xl lg:text-7xl">
                Fresh, Clean Laundry—
                <br />
                Delivered to Your Door
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#42483B]">
                Take laundry off your to-do list. We handle your clothes with professional care using eco-friendly detergents, precise fabric treatments, and reliable pickup and delivery across Ranchi.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#book-pickup"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#45651F] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#29461F]"
                >
                  <Truck size={17} />
                  Schedule a Free Pickup
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#45651F] bg-white px-7 py-4 text-sm font-bold text-[#29461F] transition hover:bg-[#45651F] hover:text-white"
                >
                  View Pricing
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 text-xs font-semibold text-[#3F4A2B] sm:grid-cols-4">
                <span>✓ Free Pickup & Delivery</span>
                <span>✓ Fabric-Specific Care</span>
                <span>✓ Fast Turnaround</span>
                <span>✓ Transparent Pricing</span>
              </div>
            </div>

            <div className="relative h-[340px] overflow-hidden rounded-3xl shadow-[0_18px_45px_rgba(42,44,36,.14)] sm:h-[470px] lg:h-[560px]">
              <Image
                src="/newlife-hero-photo-clean.jpg"
                alt="Freshly cleaned and folded clothes ready for NewLife Dryclean pickup and delivery service"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 48vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/92 p-4 backdrop-blur-md">
                <p className="text-sm font-bold text-[#3F4A2B]">Freshly cleaned. Ready to wear.</p>
                <p className="mt-1 text-xs leading-5 text-[#5B5E51]">
                  Professional garment care with convenient pickup and delivery across Ranchi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Why Choose Us</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">Convenient service. Professional care.</h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-3xl border border-[#3F4A2B]/10 bg-white p-7 shadow-sm">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#E7EBDC] text-[#6B7C4A]"><Icon size={22} /></div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-[#3F4A2B]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5B5E51]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#3F4A2B]/10 bg-white shadow-sm">
            <div className="relative h-[280px] sm:h-[380px]">
              <Image src="/services/pickup-delivery.jpg" alt="NewLife Dryclean pickup and delivery service" fill sizes="100vw" className="object-contain bg-[#F7F8F2]" />
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8F2] px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Our Services</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">Everything your clothes need.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, image, title, text }) => (
                <div key={title} className="overflow-hidden rounded-3xl border border-[#3F4A2B]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-52 w-full">
                    <Image src={image} alt={`${title} service at NewLife Dryclean`} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-7">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#E7EBDC] text-[#6B7C4A]"><Icon size={20} /></div>
                    <h3 className="mt-5 font-serif text-xl font-semibold text-[#3F4A2B]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5B5E51]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">How It Works</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">Four simple steps to fresh laundry.</h2>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.no}>
                  <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#6B7C4A] font-serif text-xs text-white">{step.no}</div>
                  <h3 className="mt-4 font-semibold text-[#3F4A2B]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5B5E51]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8F2] px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Before & After</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">See the NewLife difference.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5B5E51]">Compare a visibly soiled shirt with a clean, professionally finished result.</p>
            <div className="mt-10"><BeforeAfter /></div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Transparent Pricing</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">Estimate your order before booking.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5B5E51]">Use the estimator for a quick approximate price. Final pricing is confirmed after garment assessment.</p>
            <PricingEstimator />
          </div>
        </section>

        <section className="bg-[#F7F8F2] px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Customer Feedback</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">What our customers say.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5B5E51]">See genuine customer feedback and ratings directly on Google.</p>
            <ReviewsCarousel googleUrl={GOOGLE_BUSINESS_URL} />
          </div>
        </section>

        <section className="bg-[#6B7C4A] px-6 py-16 text-center text-white sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#E7EBDC]">Ready for Effortless Laundry?</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold">Get 15% off your first online order.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#F7F8F2]">Schedule your first pickup online today, or call us for custom and commercial laundry enquiries.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/#book-pickup" className="rounded-md bg-white px-7 py-3.5 text-sm font-bold text-[#3F4A2B]">Book Your Pickup Now</Link>
            <a href="tel:+919507111333" className="rounded-md border border-white/60 px-7 py-3.5 text-sm font-bold text-white">Call 9507111333</a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
