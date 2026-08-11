"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white"
        aria-label="Toggle navigation"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white shadow-xl">
          <div className="flex flex-col px-6 py-6">

            <Link
              href="/#services"
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-4 font-medium text-gray-800"
            >
              Services
            </Link>

            <Link
              href="/#garments"
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-4 font-medium text-gray-800"
            >
              Garments
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-4 font-medium text-gray-800"
            >
              About
            </Link>

            <Link
              href="/#how-it-works"
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-4 font-medium text-gray-800"
            >
              How It Works
            </Link>

            <Link
              href="/#reviews"
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-4 font-medium text-gray-800"
            >
              Reviews
            </Link>

            <Link
              href="/#locations"
              onClick={() => setOpen(false)}
              className="py-4 font-medium text-gray-800"
            >
              Locations
            </Link>

            <Link
              href="/#pickup"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-semibold text-white"
            >
              Book Pickup
              <ArrowRight size={17} />
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}