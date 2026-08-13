import Link from "next/link";
import { Phone } from "lucide-react";
import MobileNav from "@/components/MobileNav";
import { DISPLAY_PHONE } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#ffffff]/95 text-[#2A2C24] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-serif text-xl font-semibold tracking-wide">
          NewLife <span className="text-[#6B7C4A]">Dryclean</span>
        </Link>
        <div className="flex items-center gap-2">
          <a
            href="https://www.facebook.com/p/Newlife-Dryclean-61592584269176/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NewLife Dryclean on Facebook"
            title="Facebook"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#176B4D]/20 bg-white text-[#176B4D] transition hover:bg-[#176B4D] hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M13.5 22v-9h3l.45-3.5H13.5V7.26c0-1.01.28-1.7 1.74-1.7H17.1V2.43c-.32-.04-1.42-.13-2.7-.13-2.67 0-4.5 1.63-4.5 4.63V9.5H7v3.5h2.9v9h3.6Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/newlifedrycleanranchi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NewLife Dryclean on Instagram"
            title="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#176B4D]/20 bg-white text-[#176B4D] transition hover:bg-[#176B4D] hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>


        <div className="hidden items-center gap-7 text-sm text-[#2A2C24]/65 lg:flex">
          <Link href="/services" className="transition hover:text-[#6B7C4A]">Services</Link>
          <Link href="/#process" className="transition hover:text-[#6B7C4A]">How It Works</Link>
          <Link href="/#results" className="transition hover:text-[#6B7C4A]">Results</Link>
          <Link href="/about" className="transition hover:text-[#6B7C4A]">About</Link>
          <Link href="/locations" className="transition hover:text-[#6B7C4A]">Locations</Link>
          <Link href="/#reviews" className="transition hover:text-[#6B7C4A]">Reviews</Link>
          <Link href="/#faq" className="transition hover:text-[#6B7C4A]">FAQ</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#pickup"
            className="hidden items-center gap-2 rounded-md bg-[#6B7C4A] px-5 py-2.5 text-sm font-semibold text-[#ffffff] transition hover:opacity-90 sm:inline-flex"
          >
            <Phone size={15} /> Book Pickup
          </Link>
          <MobileNav />
        </div>
      </nav>
</header>
  );
}
