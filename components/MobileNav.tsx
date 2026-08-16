"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  ["Services", "/services"],
  ["About", "/about"],
  ["Before & After", "/#results"],
  ["Reviews", "/#reviews"],
  ["Locations", "/locations"],
  ["FAQ", "/#faq"],
] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dbe5f4] bg-white text-[#16835F]"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full w-full border-t border-[#dbe5f4] bg-[#f8fbff] shadow-xl">
          <div className="flex flex-col px-6 py-6">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-[#dbe5f4] py-4 font-medium text-[#172033]"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/#pickup"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#16835F] px-6 py-4 font-semibold text-white"
            >
              Book a Pickup <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
