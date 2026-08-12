import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, CheckCircle2, Clock3, MapPin, MessageCircle, Phone,
  ShieldCheck, Sparkles, Truck, Wind
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingActions from "@/components/FloatingActions";
import PickupForm from "@/components/PickupForm";
import BeforeAfter from "@/components/BeforeAfter";
import PricingEstimator from "@/components/PricingEstimator";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { GOOGLE_BUSINESS_URL, SITE_URL, branches } from "@/lib/site";

const services = [
  {icon:Sparkles,title:"Dry Cleaning",text:"Professional cleaning for delicate, premium and special-occasion garments.",href:"/dry-cleaning-ranchi"},
  {icon:Wind,title:"Steam Press",text:"Crisp steam finishing for garments that are neat, fresh and ready to wear.",href:"/steam-press-ranchi"},
  {icon:ShieldCheck,title:"Garment Polish",text:"Finishing care to refresh selected garments and improve presentation.",href:"/garment-polish-ranchi"},
  {icon:Sparkles,title:"Darning & Repair",text:"Thoughtful mending for tears, snags and worn areas in clothes you value.",href:"/darning-ranchi"},
];

const steps = [
  ["01","Book","Request pickup through the website or WhatsApp."],
  ["02","Pickup","Our team confirms availability and pickup details."],
  ["03","Care","Garments are processed according to service and fabric needs."],
  ["04","Quality Check","Finished garments are reviewed before packing."],
  ["05","Return","Clean garments are returned or prepared for branch collection."],
];

const faqs = [
  ["Do you offer pickup and delivery?","Yes. Request home pickup through the booking form or WhatsApp. Availability and timing are confirmed by the NewLife team."],
  ["How long does dry cleaning usually take?","Turnaround depends on garment type and service. Time-sensitive or express requirements should be confirmed with the branch before booking."],
  ["Can you handle bridal and designer wear?","Yes. Bridal wear, lehengas, sarees and designer garments are part of NewLife's specialist garment-care offering."],
  ["Where are your branches?","NewLife Dryclean operates at Old H.B. Road, Kanke and Kadru in Ranchi."],
  ["How is pricing decided?","Pricing depends on garment type, service, fabric, embellishment and condition. The estimator gives only an approximate amount."],
];

export default function Home(){
  const jsonLd = {
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"DryCleaningOrLaundry","@id":`${SITE_URL}/#business`,name:"NewLife Dryclean",url:SITE_URL,telephone:"+91-9507111333",areaServed:{ "@type":"City", name:"Ranchi" }},
      {"@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}
    ]
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}}/>
    <SiteHeader/>
    <main className="bg-white text-[#2A2C24]">
      <section className="relative overflow-hidden bg-[#F7F8F2] px-6 py-20 sm:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(107,124,74,.12),transparent_35%),radial-gradient(circle_at_12%_90%,rgba(201,168,104,.12),transparent_30%)]"/>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Ranchi&apos;s Garment-Care Specialists</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] tracking-[-.02em] text-[#3F4A2B] sm:text-6xl lg:text-7xl">We Clean,<br/>You Relax.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5B5E51]">Professional dry cleaning and garment care for the clothes you value most — from everyday wear to sarees, suits, bridal lehengas and designer outfits.</p>
            <p className="mt-5 text-sm font-semibold text-[#4F5B36]">Sarees • Lehengas • Suits • Blazers • Bridal Wear • Designer Outfits</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#book-pickup" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#6B7C4A] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#4F5B36]"><Truck size={17}/>Book a Pickup</Link>
              <a href="https://wa.me/919507111333" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#6B7C4A] px-7 py-4 text-sm font-bold text-[#4F5B36] transition hover:bg-[#6B7C4A] hover:text-white"><MessageCircle size={17}/>WhatsApp Us</a>
            </div>
            <div className="mt-10 flex gap-8 border-t border-[#3F4A2B]/10 pt-7">
              <div><strong className="block font-serif text-3xl text-[#3F4A2B]">3</strong><span className="text-xs text-[#5B5E51]">Ranchi Branches</span></div>
              <div><strong className="block font-serif text-3xl text-[#3F4A2B]">4</strong><span className="text-xs text-[#5B5E51]">Core Services</span></div>
              <div><strong className="block font-serif text-3xl text-[#3F4A2B]">7</strong><span className="text-xs text-[#5B5E51]">Days a Week*</span></div>
            </div>
            <p className="mt-3 text-[11px] text-[#5B5E51]">*Confirm current branch hours before visiting.</p>
          </div>
          <div className="relative h-[330px] overflow-hidden rounded-3xl shadow-[0_18px_45px_rgba(42,44,36,.14)] sm:h-[480px]">
            <Image src="/clean-garments-covered.jpg" alt="Freshly cleaned garments protected in transparent garment covers" fill priority sizes="(max-width:1024px) 100vw, 45vw" className="object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2C24]/35 via-transparent to-transparent"/>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/92 p-4 backdrop-blur-md">
              <p className="text-sm font-bold text-[#3F4A2B]">Cleaned. Finished. Protected.</p>
              <p className="mt-1 text-xs leading-5 text-[#5B5E51]">Garments are carefully finished and packed in transparent protective covers before return.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Our Services</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">Care designed around your garments.</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({icon:Icon,title,text,href})=>
              <Link href={href} key={title} className="group rounded-3xl border border-[#3F4A2B]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#E7EBDC] text-[#6B7C4A]"><Icon size={22}/></div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#3F4A2B]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5B5E51]">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[#6B7C4A]">Know more <ArrowRight size={14}/></span>
              </Link>
            )}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["Sarees","Lehengas","Suits","Blazers","Jackets","Bridal Wear","Designer Wear","Curtains","Blankets"].map(x=><span key={x} className="rounded-full bg-[#E7EBDC] px-4 py-2 text-xs font-semibold text-[#3F4A2B]">{x}</span>)}
          </div>
        </div>
      </section>

      <section id="results" className="bg-[#F7F8F2] px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Before & After</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">See the difference.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5B5E51]">Drag the slider to compare a visibly soiled shirt with a clean, finished result.</p>
          <div className="mt-10"><BeforeAfter/></div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Pricing Preview</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">Get a quick estimate.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5B5E51]">Use this as a planning estimate; final pricing is confirmed by NewLife after garment assessment.</p>
          <PricingEstimator/>
        </div>
      </section>

      <section id="process" className="bg-[#F7F8F2] px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">How It Works</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">From pickup to fresh return.</h2>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(([no,title,text])=><div key={no}>
              <div className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-[#6B7C4A] font-serif text-xs text-white">{no}</div>
              <h3 className="mt-4 font-semibold text-[#3F4A2B]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5B5E51]">{text}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Garment Gallery</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">Freshly cared for. Ready to wear.</h2>
          </div>
          <div className="mt-10 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["/clean-garments-covered.jpg","Freshly cleaned garments in transparent protective covers"],
              ["/garment-protective-cover.jpg","Clean garment protected after finishing"],
              ["/shirt-after-clean.png","Clean white shirt after garment care"],
              ["/newdrycleaner.jpg","Professional dry cleaning presentation"],
              ["/drycleaner.png","Garment care service"],
              ["/team-garment-care.webp","Professional garment finishing"],
            ].map(([src,alt],idx)=><div key={src} className={`relative overflow-hidden rounded-2xl shadow-sm ${idx===0?"sm:col-span-2":""}`}>
              <Image src={src} alt={alt} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover transition duration-500 hover:scale-105"/>
            </div>)}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#F7F8F2] px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Google Reviews</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">Trust real customer feedback.</h2>
          <ReviewsCarousel googleUrl={GOOGLE_BUSINESS_URL}/>
        </div>
      </section>

      <section id="branches" className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">Our Branches</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">Three convenient Ranchi locations.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {branches.map(b=><div key={b.slug} className="rounded-3xl border border-[#3F4A2B]/10 bg-white p-7 shadow-sm">
              <MapPin className="text-[#6B7C4A]" size={24}/>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#3F4A2B]">{b.name}</h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#5B5E51]">{b.address.join(", ")}</p>
              <Link href={`/locations/${b.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#6B7C4A]">View location <ArrowRight size={14}/></Link>
            </div>)}
          </div>
        </div>
      </section>

      <section id="book-pickup" className="bg-[#3F4A2B] px-6 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#A8B583]">Book Home Pickup</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-white">Your clothes. Our care.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#E7EBDC]">Share the essentials now and continue the booking with our team on WhatsApp.</p>
            <ul className="mt-7 space-y-3 text-sm text-[#E7EBDC]">
              <li>— Doorstep pickup coordination</li><li>— Service confirmation on WhatsApp</li><li>— Minimum home-pickup order ₹1,000</li>
            </ul>
          </div>
          <PickupForm/>
        </div>
      </section>

      <section id="faq" className="bg-[#F7F8F2] px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6B7C4A]">FAQs</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3F4A2B]">Good to know.</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map(([q,a])=><details key={q} className="group rounded-2xl border border-[#3F4A2B]/10 bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#3F4A2B]">{q}</summary>
              <p className="mt-3 text-sm leading-7 text-[#5B5E51]">{a}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="bg-[#6B7C4A] px-6 py-16 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#E7EBDC]">Ready When You Are</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold">Let&apos;s give your garments a fresh start.</h2>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="#book-pickup" className="rounded-md bg-white px-7 py-3.5 text-sm font-bold text-[#3F4A2B]">Book a Pickup</Link>
          <a href="https://wa.me/919507111333" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/60 px-7 py-3.5 text-sm font-bold">WhatsApp Us</a>
        </div>
      </section>
    </main>
    <SiteFooter/>
    <FloatingActions/>
  </>
}
