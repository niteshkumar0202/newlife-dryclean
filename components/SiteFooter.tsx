import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { DISPLAY_PHONE, WHATSAPP_URL, branches, services } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#FFFCF5] px-6 py-16 text-[#172033] md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl font-semibold">NewLife <span className="text-[#16835F]">Dryclean</span></p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#172033]/45">
              Professional garment care, convenient home pickup and three accessible branches across Ranchi.
            </p>
            <a href={`tel:+91${DISPLAY_PHONE}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#16835F]">
              <Phone size={15} /> {DISPLAY_PHONE}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#16835F]">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#172033]/45">
              {services.map((service) => <li key={service.href}><Link href={service.href} className="hover:text-[#16835F]">{service.name}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#16835F]">Ranchi Locations</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#172033]/45">
              {branches.map((branch) => <li key={branch.slug}><Link href={`/locations/${branch.slug}`} className="hover:text-[#16835F]">{branch.name}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#16835F]">Quick Links</h3>
            <div className="mt-5 space-y-3 text-sm text-[#172033]/45">
              <Link href="/about" className="block hover:text-[#16835F]">About NewLife</Link>
              <Link href="/#faq" className="block hover:text-[#16835F]">FAQs</Link>
              <Link href="/#pickup" className="block hover:text-[#16835F]">Book Home Pickup</Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 pt-3 font-semibold text-[#16835F] hover:text-[#16835F]">
                WhatsApp <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-7 text-xs text-[#172033]/30 md:flex-row md:items-center md:justify-between">
          <p>© 2026 NewLife Dryclean. All rights reserved.</p>
          <p className="flex items-center gap-1"><MapPin size={12}/> Ranchi, Jharkhand</p>
        </div>
      </div>
    
        <div className="mt-6 flex items-center gap-3">
          <a href="https://www.facebook.com/p/Newlife-Dryclean-61592584269176/" target="_blank" rel="noopener noreferrer"
             aria-label="NewLife Dryclean on Facebook"
             className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0B8F71]/20 text-[#0B8F71] transition hover:bg-[#0B8F71] hover:text-white">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M13.5 22v-9h3l.45-3.5H13.5V7.26c0-1.01.28-1.7 1.74-1.7H17.1V2.43c-.32-.04-1.42-.13-2.7-.13-2.67 0-4.5 1.63-4.5 4.63V9.5H7v3.5h2.9v9h3.6Z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/newlifedrycleanranchi/" target="_blank" rel="noopener noreferrer"
             aria-label="NewLife Dryclean on Instagram"
             className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0B8F71]/20 text-[#0B8F71] transition hover:bg-[#0B8F71] hover:text-white">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.instagram.com/newlifedrycleanranchi/" target="_blank" rel="noopener noreferrer"
             className="text-sm font-semibold text-[#0B8F71] hover:underline">
            @newlifedrycleanranchi
          </a>
        </div>
</footer>
  );
}
