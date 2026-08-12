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
