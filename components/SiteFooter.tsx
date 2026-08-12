import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { DISPLAY_PHONE, WHATSAPP_URL, branches, services } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#F7F8F2] px-6 py-16 text-[#2A2C24] md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl font-semibold">NewLife <span className="text-[#6B7C4A]">Dryclean</span></p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#2A2C24]/45">
              Professional garment care, convenient home pickup and three accessible branches across Ranchi.
            </p>
            <a href={`tel:+91${DISPLAY_PHONE}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6B7C4A]">
              <Phone size={15} /> {DISPLAY_PHONE}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7C4A]">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#2A2C24]/45">
              {services.map((service) => <li key={service.href}><Link href={service.href} className="hover:text-[#6B7C4A]">{service.name}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7C4A]">Ranchi Locations</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#2A2C24]/45">
              {branches.map((branch) => <li key={branch.slug}><Link href={`/locations/${branch.slug}`} className="hover:text-[#6B7C4A]">{branch.name}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7C4A]">Quick Links</h3>
            <div className="mt-5 space-y-3 text-sm text-[#2A2C24]/45">
              <Link href="/about" className="block hover:text-[#6B7C4A]">About NewLife</Link>
              <Link href="/#faq" className="block hover:text-[#6B7C4A]">FAQs</Link>
              <Link href="/#pickup" className="block hover:text-[#6B7C4A]">Book Home Pickup</Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 pt-3 font-semibold text-[#6B7C4A] hover:text-[#6B7C4A]">
                WhatsApp <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-7 text-xs text-[#2A2C24]/30 md:flex-row md:items-center md:justify-between">
          <p>© 2026 NewLife Dryclean. All rights reserved.</p>
          <p className="flex items-center gap-1"><MapPin size={12}/> Ranchi, Jharkhand</p>
        </div>
      </div>
    </footer>
  );
}
